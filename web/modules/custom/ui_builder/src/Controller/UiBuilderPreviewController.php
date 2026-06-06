<?php

namespace Drupal\ui_builder\Controller;

use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Drupal\Core\Render\RendererInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

class UiBuilderPreviewController extends ControllerBase {

  /**
   * @var \Drupal\Core\Render\RendererInterface
   */
  protected $renderer;

  /**
   * Constructs a new UiBuilderPreviewController.
   *
   * @param \Drupal\Core\Render\RendererInterface $renderer
   *   The renderer service.
   */
  public function __construct(RendererInterface $renderer) {
    $this->renderer = $renderer;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('renderer')
    );
  }

  /**
   * Handles the preview API request.
   */
  public function preview(Request $request) {
    $content = $request->getContent();
    if (empty($content)) {
      return new JsonResponse(['error' => 'No content provided.'], 400);
    }

    $json_data = json_decode($content, TRUE);
    if (json_last_error() !== JSON_ERROR_NONE || !is_array($json_data)) {
      return new JsonResponse(['error' => 'Invalid JSON data.'], 400);
    }

    /** @var \Drupal\ui_builder\UiBuilderRenderer $uib_renderer */
    $uib_renderer = \Drupal::service('ui_builder.renderer');
    
    // Generate the CSS using the CssCompiler
    $css = \Drupal::service('ui_builder.css_compiler')->compileInstanceStyles($json_data);

    // Build the render array
    $render_array = $uib_renderer->buildRenderArray($json_data);
    
    // Create the full element mimicking the formatter
    $element = [
      '#type' => 'container',
      '#attributes' => [
        'class' => ['ui-builder-content'],
      ],
      'content' => $render_array,
    ];

    // Render it to HTML
    $html = (string) $this->renderer->renderRoot($element);

    // Extract component CSS and JS from attachments
    $component_styles = '';
    $component_scripts = '';
    if (!empty($element['#attached']['html_head'])) {
      foreach ($element['#attached']['html_head'] as $attachment) {
        $tag_data = $attachment[0] ?? [];
        if (!empty($tag_data['#tag']) && !empty($tag_data['#value'])) {
          if ($tag_data['#tag'] === 'style') {
            $component_styles .= $tag_data['#value'] . "\n";
          } elseif ($tag_data['#tag'] === 'script') {
            $component_scripts .= "<script>" . $tag_data['#value'] . "</script>\n";
          }
        }
      }
    }

    $module_path = '/' . \Drupal::service('extension.list.module')->getPath('ui_builder');
    
    $assets_html = '';
    
    // CSS Assets
    $assets_html .= '<link rel="stylesheet" href="' . $module_path . '/css/ui-builder-layout.css">' . "\n";
    $assets_html .= '<link rel="stylesheet" href="' . $module_path . '/css/ui-builder-base.css">' . "\n";
    $assets_html .= '<link rel="stylesheet" href="' . $module_path . '/css/fontawesome/all.min.css">' . "\n";
    $assets_html .= '<link rel="stylesheet" href="' . $module_path . '/css/swiper/swiper-bundle.min.css">' . "\n";
    $assets_html .= '<link rel="stylesheet" href="' . $module_path . '/css/ui_builder_accordion.css">' . "\n";

    // Global custom styles
    $uri = 'public://ui_builder/uib-styles.css';
    if (file_exists($uri)) {
      $url = \Drupal::service('file_url_generator')->generateString($uri);
      $assets_html .= '<link rel="stylesheet" href="' . $url . '?v=' . filemtime($uri) . '">' . "\n";
    }

    // JS Assets
    $assets_html .= '<script src="' . $module_path . '/js/swiper/swiper-bundle.min.js"></script>' . "\n";
    $assets_html .= '<script src="' . $module_path . '/js/ui_builder_slider.js"></script>' . "\n";
    $assets_html .= '<script src="' . $module_path . '/js/ui_builder_accordion.js"></script>' . "\n";
    $assets_html .= '<script src="' . $module_path . '/js/aside-toggle.js"></script>' . "\n";

    $html = $assets_html . $html;

    if ($component_styles) {
      $css .= "\n/* Component Styles */\n" . $component_styles;
    }
    if ($component_scripts) {
      $html .= "\n<!-- Component Scripts -->\n" . $component_scripts;
    }

    return new JsonResponse([
      'html' => $html,
      'css' => $css,
    ]);
  }

}
