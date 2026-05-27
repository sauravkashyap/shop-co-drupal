<?php
$config = \Drupal::configFactory()->getEditable('ui_builder.style.hero_banner');
$data = $config->get('data') ?: [];

$data['custom_properties'] = [
    'background-color' => '#E7DCFF',
    'overflow' => 'hidden',
    'position' => 'relative',
    'font-family' => 'sans-serif',
    'padding' => '4rem 0'
];

$data['children'] = [
    [
        'selector' => '& .uib-container',
        'custom_properties' => [
            'display' => 'flex',
            'flex-direction' => 'column',
            'align-items' => 'center',
            'justify-content' => 'center',
            'width' => '100%'
        ]
    ],
    [
        'selector' => '& .uib-text-wrapper',
        'custom_properties' => [
            'display' => 'flex',
            'flex-direction' => 'column',
            'align-items' => 'center',
            'line-height' => '1',
            'text-transform' => 'uppercase',
            'margin-bottom' => '6rem',
        ]
    ],
    [
        'selector' => '& .uib-text-wrapper h1',
        'custom_properties' => [
            'font-size' => 'clamp(4rem, 10vw, 8rem)',
            'margin' => '0',
            'font-weight' => '900',
            'color' => '#E7DCFF',
            '-webkit-text-stroke' => '2px #8A63DF',
            'letter-spacing' => '0.05em'
        ]
    ],
    [
        'selector' => '& .uib-text-wrapper h1:nth-child(2)',
        'custom_properties' => [
            'color' => '#8A63DF',
            '-webkit-text-stroke' => '0',
        ]
    ],
    [
        'selector' => '& .uib-floating-text',
        'custom_properties' => [
            'position' => 'absolute',
            'bottom' => '20px',
            'left' => '0',
            'white-space' => 'nowrap',
            'font-size' => '1.25rem',
            'color' => '#8A63DF',
            'font-weight' => 'bold',
            'text-transform' => 'uppercase',
            // Instead of keyframes, we can just style it and we will add keyframes to global CSS if needed.
            // Let's try inline keyframes in standard way if possible. If not, we just give it basic styling for now.
        ]
    ]
];

$config->set('data', $data)->save();
echo "Updated style!\n";
