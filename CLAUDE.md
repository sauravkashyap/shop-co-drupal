

## Auto-generated signatures
<!-- Updated by gen-context.js -->
# Code signatures

## deps
```
web/modules/custom/ui_builder/app/src/App.jsx ← constants/elements, utils/treeUtils, components/NodeCard, components/SortableNode, components/CanvasRoot
web/modules/custom/ui_builder/app/src/components/PropertiesPanel.jsx ← FieldEditor, ImageEditor, utils/styleUtils
web/modules/custom/ui_builder/app/src/components/NodeCard.jsx ← NodeChildren
web/modules/custom/ui_builder/app/src/components/NodeChildren.jsx ← SortableNode
web/modules/custom/ui_builder/app/src/components/Sidebar.jsx ← constants/elements, constants/typeColors
web/modules/custom/ui_builder/app/src/components/SortableNode.jsx ← NodeCard
web/modules/custom/ui_builder/app/src/utils/styleUtils.js ← constants/elements
```

## todos
```
web/modules/contrib/webform/.gitlab-ci.yml:54  # TODO: Remove this workaround once all our dependencies are D11 compatible.
```

## changes (last 5 commits — 30 hours ago)
```
web/modules/custom/ui_builder/app/src/App.css +via
web/modules/custom/ui_builder/app/src/App.jsx +App
web/modules/custom/ui_builder/app/src/components/ActionBar.jsx +ActionBar
web/modules/custom/ui_builder/app/src/components/FieldEditor.jsx +FieldEditor
web/modules/custom/ui_builder/app/src/components/CanvasRoot.jsx +CanvasRoot
web/modules/custom/ui_builder/app/src/components/PropertiesPanel.jsx +PropertiesPanel  +name
web/modules/custom/ui_builder/app/src/components/ImageEditor.jsx +ImageEditor
web/modules/custom/ui_builder/app/src/components/NodeCard.jsx +getElementBranding  +NodeCard
web/modules/custom/ui_builder/app/src/components/NodeChildren.jsx +NodeChildren
web/modules/custom/ui_builder/app/src/components/Sidebar.jsx +Sidebar
web/modules/custom/ui_builder/app/src/constants/typeColors.js +getTypeColor
web/modules/custom/ui_builder/app/src/components/SortableNode.jsx +SortableNode
web/modules/custom/ui_builder/app/src/utils/styleUtils.js +string
web/modules/custom/ui_builder/app/src/utils/treeUtils.js +deepClone  +findNodeById  +findNodeLocation  +hydrateTree
web/modules/custom/ui_builder/src/Controller/UiBuilderController.php +UiBuilderController  +saveComponent  +listComponents  +listStyles
web/modules/custom/ui_builder/src/Controller/UploadController.php +UploadController  +upload
web/modules/custom/ui_builder/src/Form/UiBuilderComponentForm.php +UiBuilderComponentForm  +form  +save  +generateAssets
web/modules/custom/ui_builder/src/Entity/UiBuilderStyle.php +UiBuilderStyle  +getCssContent
web/modules/custom/ui_builder/src/Entity/UiBuilderComponent.php +UiBuilderComponent  +getLayoutTree  +getCss  +getJavascript
web/modules/custom/ui_builder/src/Form/UiBuilderStyleForm.php +UiBuilderStyleForm  +form  +save
web/modules/custom/ui_builder/src/UiBuilderComponentListBuilder.php +UiBuilderComponentListBuilder  +buildHeader  +buildRow
web/modules/custom/ui_builder/src/UiBuilderStyleListBuilder.php +UiBuilderStyleListBuilder  +buildHeader  +buildRow
web/modules/custom/ui_builder/ui_builder.module +ui_builder_theme  +ui_builder_theme_suggestions_field_alter  +ui_builder_theme_suggestions_block_alter  +for
web/themes/custom/custom_theme/custom_theme.theme ~custom_theme_preprocess_block
```

## web

### web/modules/contrib/webform/includes/webform.install.update.inc
```
function webform_update_dependencies() {
function webform_update_8001() {
function webform_update_8002() {
function webform_update_8003() {
function webform_update_8004() {
function webform_update_8005() {
function webform_update_8006() {
function webform_update_8007() {
function webform_update_8008() {
function webform_update_8009() {
function webform_update_8010() {
function webform_update_8011() {
function _webform_update_8011(array &$element) {
function webform_update_8012() {
function webform_update_8013() {
```

### web/modules/contrib/webform/includes/webform.theme.inc
```
function webform_theme() {
function webform_theme_registry_alter(&$theme_registry) {
function webform_preprocess_menu_local_action(&$variables) {
function webform_preprocess_checkboxes(&$variables) {
function webform_preprocess_radios(&$variables) {
function webform_preprocess_select(&$variables) {
function webform_preprocess_status_messages(&$variables) {
function webform_preprocess_table(&$variables) {
function webform_preprocess_datetime_form(&$variables) {
function webform_preprocess_details(&$variables) {
function webform_preprocess_fieldset(&$variables) {
function webform_preprocess_form_element(&$variables) {
function webform_preprocess_form_element_label(&$variables) {
function webform_preprocess_file_managed_file(&$variables) {
function webform_preprocess_file_upload_help(&$variables) {
```

### web/modules/contrib/webform/includes/webform.theme.template.inc
```
function template_preprocess_webform_help(array &$variables) {
function template_preprocess_webform(array &$variables) {
function template_preprocess_webform_actions(array &$variables) {
function template_preprocess_webform_confirmation(array &$variables) {
function template_preprocess_webform_submission_navigation(array &$variables) {
function template_preprocess_webform_submission(array &$variables) {
function template_preprocess_webform_submission_data(array &$variables) {
function template_preprocess_webform_submission_information(array &$variables) {
function template_preprocess_webform_codemirror(array &$variables) {
function template_preprocess_webform_element_base_html(array &$variables) {
function template_preprocess_webform_element_base_text(array &$variables) {
function _template_progress_webform_set_title(array &$variables, $strip_tags = FALSE) {
function template_preprocess_webform_progress(array &$variables) {
function template_preprocess_webform_progress_bar(array &$variables) {
function template_preprocess_webform_progress_tracker(array &$variables) {
```

### web/modules/contrib/webform/includes/webform.install.requirements.inc
```
function webform_requirements($phase) {
```

### web/modules/contrib/webform/includes/webform.options.inc
```
function webform_webform_options_range_alter(array &$options, array $element = []) {
function webform_webform_options_time_zones_alter(array &$options, array $element = []) {
function webform_webform_options_country_codes_alter(array &$options, array $element = []) {
function webform_webform_options_country_names_alter(array &$options, array $element = []) {
function webform_webform_options_languages_alter(array &$options, array $element = []) {
function webform_webform_options_translations_alter(array &$options, array $element = []) {
```

### web/modules/contrib/webform/includes/webform.query.inc
```
function webform_query_webform_submission_list_builder_alter(AlterableInterface $query) {
function webform_query_entity_reference_alter(AlterableInterface $query) {
function webform_query_webform_submission_access_alter(AlterableInterface $query) {
```

### web/modules/contrib/webform/webform.post_update.php
```
function webform_post_update_deprecate_jquery_ui_datepicker()
function webform_post_update_deprecate_location_places()
function webform_post_update_ckeditor()
function webform_post_update_ckeditor01()
function webform_post_update_confirmation_page_noindex()
function webform_post_update_multiple_categories()
function webform_post_update_authenticated_user_permission()
```

### web/modules/contrib/webform/third_party_settings/webform.captcha.inc
```
function captcha_webform_admin_third_party_settings_form_alter(&$form, FormStateInterface $form_state) {
function captcha_webform_submission_form_alter(&$form, FormStateInterface $form_state, $form_id) {
function _captcha_webform_submission_form_after_build(array $form, FormStateInterface $form_state) {
```

### web/modules/contrib/webform/third_party_settings/webform.honeypot.inc
```
function _webform_honeypot_form(array &$form, FormStateInterface $form_state, $honeypot, $honeypot_state, $time_restrict
function _webform_honeypot_form_validate(&$form, FormStateInterface $form_state) {
function honeypot_webform_admin_third_party_settings_form_alter(&$form, FormStateInterface $form_state) {
function honeypot_webform_third_party_settings_form_alter(&$form, FormStateInterface $form_state) {
function honeypot_webform_submission_form_alter(&$form, FormStateInterface $form_state, $form_id) {
```

### web/modules/contrib/webform/third_party_settings/webform.maillog.inc
```
function maillog_webform_submission_form_alter(array &$form, FormStateInterface $form_state, $form_id) {
```

### web/modules/contrib/webform/third_party_settings/webform.antibot.inc
```
function _webform_antibot_enabled() {
function _webform_antibot_form(array &$form, FormStateInterface $form_state, $antibot, $antibot_state, $label) {
function _webform_antibot_form_validate(&$form, FormStateInterface $form_state) {
function antibot_webform_admin_third_party_settings_form_alter(&$form, FormStateInterface $form_state) {
function antibot_webform_third_party_settings_form_alter(&$form, FormStateInterface $form_state) {
function antibot_webform_submission_form_alter(&$form, FormStateInterface $form_state, $form_id) {
```

### web/modules/contrib/webform/docs/DEVELOPMENT-CHEATSHEET.md
```
h3 GitFlow
h1 Create branch
h1 Create patch
h1 Apply remote patch
h1 Apply remote patch with 3 way merge
h1 Force apply patch
h1 Remove patch and untracked files
h1 Create interdiff
h1 Commit remove patch
h1 Merge branch with all commits
h1 Merge branch as a single new commit
h1 Delete local and remote branch
h1 Delete remote branch
h1 Generate *.features.yml for the webform.module and sub-modules.
h1 These files will be ignored. @see .gitignore.
h1 Make sure all modules that are going to be exported are enabled
h1 Show the difference between the active config and the default config.
h1 Export webform configuration from your site.
h1 Revert all feature update to *.info.yml files.
h1 Tidy webform configuration from your site.
h1 Re-import all webform configuration into your site.
code-fence bash
code-fence plain
```

### web/modules/contrib/webform/docs/DEVELOPMENT-COMMIT-MESSAGES.md
```
code-fence plain
```

### web/modules/contrib/webform/docs/DEVELOPMENT-NOTES.md
```
h3 Patching
h1 Create and checkout issue branch
h1 Push issue branch to D.O. (optional)
h1 Create patch by comparing (current) issue branch with 6.x branch
h3 Branching
h1 Merge branch with all commits
h1 Merge branch as a single new commit
h1 Create a zip archive for a branch
h1 Remove anything staged but not committed:
h1 Adding changes to the last commit
h1 Unstage a file about to be committed
h1 Revert (in SVN terms) an uncommitted file to the copy in your latest commit
h1 Update the local list of remote branches
h1 Delete local issue branch.
h1 Delete remote issue branch.
h3 [Interdiff](https://www.drupal.org/documentation/git/interdiff)
h3 Drush
h1 Optional.
h1 developer
h1 admin
h1 manager
h1 viewer
h1 user
h1 any
h1 own
```

### web/modules/contrib/webform/docs/DRUSH-COMMANDS.md
```
h1 Drush 8.x and below
h1 Version.
h1 Help.
h1 Submissions.
h1 Option.
h1 Libraries.
h1 Tidy.
h1 Repair.
h1 Docs.
h1 Composer.
h1 Commands.
h1 Drush 9.x and above
h1 Options.
code-fence bash
code-fence plain
```

### web/modules/contrib/webform/docs/FEATURES.md
```
h2 Form manager
h2 Form builder
h2 Configuration settings
h3 General settings
h3 Form settings
h3 Submissions settings
h3 Confirmation settings
h3 Emails / Handlers
h3 CSS/JS assets
h3 Access settings
h2 Elements
h3 Element settings
h3 States/Conditional logic
h3 Viewing source
h2 Forms
h3 Accessibility
h3 Multistep form
h3 Drupal integration​
h2 Results management
h2 Access controls
h2 Reusable templates
h2 Reusable options
h2 Internationalization
h2 Development tools
h2 Drush & Composer integration
```

### web/modules/contrib/webform/.tugboat/config.yml
```
keys: [services]
service: php
service: mysql
```

### web/modules/contrib/webform/phpcs.xml
```
root ruleset
ruleset[name=webform]
arg[name=extensions]
exclude[name=Drupal.Arrays.Array.LongLineDeclaration]
tag properties
tag property
property[name=lineLimit]
property[name=absoluteLineLimit]
exclude[name=Drupal.Arrays.Array.ArrayIndentation]
exclude[name=Drupal.Commenting.DocComment.ShortNotCapital]
exclude[name=Drupal.Commenting.FunctionComment.TypeHintMissing]
exclude[name=Drupal.Commenting.InlineComment.NotCapital]
exclude[name=Drupal.Files.LineLength.TooLong]
exclude[name=Drupal.NamingConventions.ValidVariableName.LowerCamelName]
exclude[name=Drupal.Semantics.FunctionT.NotLiteralString]
exclude[name=Drupal.Semantics.FunctionT.ConcatString]
exclude[name=Drupal.Strings.UnnecessaryStringConcat.Found]
exclude[name=DrupalPractice.Objects.GlobalFunction.GlobalFunction]
exclude[name=DrupalPractice.Objects.GlobalDrupal.GlobalDrupal]
exclude[name=DrupalPractice.Objects.GlobalClass.GlobalClass]
exclude[name=Generic.CodeAnalysis.UselessOverridingMethod.Found]
```

### web/modules/contrib/webform/tests/files/sample.html
```
title: Title of the document
```

### web/modules/contrib/webform/tests/files/sample.xml
```
root catalog
book#bk101
book#bk102
book#bk103
book#bk104
book#bk105
book#bk106
book#bk107
book#bk108
book#bk109
book#bk110
book#bk111
book#bk112
```

### web/modules/contrib/webform/tests/modules/webform_test_paragraphs/webform_test_paragraphs.info.yml
```
keys: [name, type, description, package, dependencies]
```

### web/modules/contrib/webform/tests/modules/webform_test_paragraphs/webform_test_paragraphs.install
```
function webform_test_paragraphs_install() {
function webform_test_paragraphs_uninstall() {
```

### web/modules/contrib/webform/tests/modules/webform_test_options/webform_test_options.info.yml
```
keys: [name, type, description, package, dependencies]
```

### web/modules/contrib/webform/tests/modules/webform_test_options/webform_test_options.module
```
function webform_test_options_webform_options_test_alter(array &$options, array &$element) {
function webform_test_options_webform_options_alter(array &$options, array &$element, $id) {
```

### web/modules/contrib/webform/tests/modules/webform_test_options/webform_test_options.services.yml
```
keys: [services]
```

### web/modules/contrib/webform/tests/modules/webform_test_ajax/webform_test_ajax.info.yml
```
keys: [name, type, description, package, dependencies]
```

### web/modules/contrib/webform/tests/modules/webform_test_block_context/webform_test_block_context.info.yml
```
keys: [name, type, description, package, dependencies]
```

### web/modules/contrib/webform/tests/modules/webform_test_translation/webform_test_translation.info.yml
```
keys: [name, type, description, package, dependencies]
```

### web/modules/contrib/webform/tests/modules/webform_test_translation/webform_test_translation.install
```
function webform_test_translation_install() {
function _webform_test_translation_install_config($table_name) {
```

### web/modules/contrib/webform/tests/modules/webform_test_rest/webform_test_rest.info.yml
```
keys: [name, type, description, package, dependencies]
```

### web/modules/contrib/webform/tests/modules/webform_test_element/webform_test_element.info.yml
```
keys: [name, type, description, package, dependencies]
```

### web/modules/contrib/webform/tests/modules/webform_test_element/webform_test_element.module
```
function webform_test_element_handler_theme() {
```

### web/modules/contrib/webform/tests/modules/webform_test_element/webform_test_element.routing.yml
```
keys: [webform_test_element]
```

### web/modules/contrib/webform/tests/modules/webform_test_element/webform_test_element.services.yml
```
keys: [services]
```

### web/modules/contrib/webform/tests/modules/webform_test_states/webform_test_states.info.yml
```
keys: [name, type, description, package, dependencies]
```

### web/modules/contrib/webform/tests/modules/webform_test_states/webform_test_states.module
```
function webform_test_states_preprocess_webform_confirmation(array &$variables) {
```

### web/modules/contrib/webform/tests/modules/webform_test_variant/webform_test_variant.info.yml
```
keys: [name, type, description, package, dependencies]
```

### web/modules/contrib/webform/tests/modules/webform_test_variant/webform_test_variant.module
```
function webform_test_variant_theme() {
```

### web/modules/contrib/webform/tests/modules/webform_test_variant/webform_test_variant.services.yml
```
keys: [services]
```

### web/modules/contrib/webform/tests/modules/webform_test_exporter/webform_test_exporter.info.yml
```
keys: [name, type, description, package, dependencies]
```

### web/modules/contrib/webform/tests/modules/webform_test_block_submission_limit/webform_test_block_submission_limit.info.yml
```
keys: [name, type, description, package, dependencies]
```

### web/modules/contrib/webform/tests/modules/webform_test_markup/webform_test_markup.info.yml
```
keys: [name, type, description, package, dependencies]
```

### web/modules/contrib/webform/tests/modules/webform_test_markup/webform_test_markup.module
```
function webform_test_markup_preprocess_webform_html_editor_markup(array &$variables) {
```

### web/modules/contrib/webform/tests/modules/webform_test_third_party_settings/webform_test_third_party_settings.info.yml
```
keys: [name, type, description, package, dependencies]
```

### web/modules/contrib/webform/tests/modules/webform_test_third_party_settings/webform_test_third_party_settings.services.yml
```
keys: [services]
```

### web/modules/contrib/webform/tests/modules/webform_test_third_party_settings/webform_test_third_party_settings.webform.inc
```
function webform_test_third_party_settings_webform_admin_third_party_settings_form_alter(&$form, FormStateInterface $for
function webform_test_third_party_settings_webform_third_party_settings_form_alter(&$form, FormStateInterface $form_stat
function _webform_test_third_party_settings_form_validate(&$form, FormStateInterface $form_state) {
function webform_test_third_party_settings_webform_submission_form_alter(&$form, FormStateInterface $form_state, $form_i
```

### web/modules/contrib/webform/tests/modules/webform_test_translation_lingotek/webform_test_translation_lingotek.info.yml
```
keys: [name, type, description, package, dependencies]
```

### web/modules/contrib/webform/tests/modules/webform_test_entity_reference_views/webform_test_entity_reference_views.info.yml
```
keys: [name, type, description, package, dependencies]
```

### web/modules/contrib/webform/tests/modules/webform_test_message_custom/webform_test_message_custom.install
```
function webform_test_message_custom_install() {
function webform_test_message_custom_uninstall() {
```

### web/modules/contrib/webform/tests/modules/webform_test_message_custom/webform_test_message_custom.module
```
function webform_test_message_custom_webform_message_custom($operation, $id) {
```

### web/modules/contrib/webform/tests/modules/webform_test_message_custom/webform_test_message_custom.services.yml
```
keys: [services]
```

### web/modules/contrib/webform/tests/modules/webform_test_message_custom/webform_test_message_custom.info.yml
```
keys: [name, type, description, package, dependencies]
```

### web/modules/contrib/webform/tests/modules/webform_test_element_input_masks/webform_test_element_input_masks.info.yml
```
keys: [name, type, description, package, dependencies]
```

### web/modules/contrib/webform/tests/modules/webform_test_element_input_masks/webform_test_element_input_masks.module
```
function webform_test_element_input_masks_webform_element_input_masks() {
function webform_test_element_input_masks_webform_element_input_masks_alter(array &$input_masks) {
```

### web/modules/contrib/webform/tests/modules/webform_test_element_input_masks/webform_test_element_input_masks.services.yml
```
keys: [services]
```

### web/modules/contrib/webform/tests/modules/webform_test_block_custom/webform_test_block_custom.info.yml
```
keys: [name, type, description, package, dependencies]
```

### web/modules/contrib/webform/tests/modules/webform_test_handler_remote_post/webform_test_handler_remote_post.info.yml
```
keys: [name, type, description, package, dependencies]
```

### web/modules/contrib/webform/tests/modules/webform_test_wizard_custom/webform_test_wizard_custom.info.yml
```
keys: [name, type, description, package, dependencies]
```

### web/modules/contrib/webform/tests/modules/webform_test_wizard_custom/webform_test_wizard_custom.module
```
function webform_test_wizard_custom_form_webform_submission_test_form_wizard_custom_form_alter(array &$form, FormStateIn
function _webform_test_wizard_custom_form_webform_submission_test_form_wizard_custom_form_validate(array &$form, FormSta
```

### web/modules/contrib/webform/tests/modules/webform_test_validate/webform_test_validate.services.yml
```
keys: [services]
```

### web/modules/contrib/webform/tests/modules/webform_test_validate/webform_test_validate.info.yml
```
keys: [name, type, description, package, dependencies]
```

### web/modules/contrib/webform/tests/modules/webform_test_validate/webform_test_validate.module
```
function webform_test_validate_form_webform_submission_test_form_validate_form_alter(array &$form, FormStateInterface $f
function webform_test_validate_form_webform_submission_test_form_validate_form_validate($form, FormStateInterface $form_
```

### web/modules/contrib/webform/tests/modules/webform_test_handler/webform_test_handler.module
```
function webform_test_handler_theme() {
function webform_test_handler_webform_submissions_pre_purge(array &$webform_submissions) {
function webform_test_handler_webform_submissions_post_purge(array $webform_submissions) {
```

### web/modules/contrib/webform/tests/modules/webform_test_handler/webform_test_handler.services.yml
```
keys: [services]
```

### web/modules/contrib/webform/tests/modules/webform_test_handler/webform_test_handler.info.yml
```
keys: [name, type, description, package, dependencies]
```

### web/modules/contrib/webform/tests/modules/webform_test/webform_test.services.yml
```
keys: [services]
```

### web/modules/contrib/webform/tests/modules/webform_test/webform_test.info.yml
```
keys: [name, type, description, package, dependencies]
```

### web/modules/contrib/webform/tests/modules/webform_test_alter_hooks/webform_test_alter_hooks.info.yml
```
keys: [name, type, description, package, dependencies]
```

### web/modules/contrib/webform/tests/modules/webform_test_alter_hooks/webform_test_alter_hooks.module
```
function webform_test_alter_hooks_form_alter(&$form, FormStateInterface $form_state, $form_id) {
function webform_test_alter_hooks_form_webform_submission_form_alter(array $form, FormStateInterface $form_state, $form_
function webform_test_alter_hooks_form_webform_submission_contact_form_alter(array $form, FormStateInterface $form_state
function webform_test_alter_hooks_form_webform_submission_contact_add_form_alter(array $form, FormStateInterface $form_s
function webform_test_alter_hooks_form_webform_submission_contact_node_1_add_form_alter(array $form, FormStateInterface 
function webform_test_alter_hooks_webform_submission_form_alter(array &$form, FormStateInterface $form_state, $form_id) 
function webform_test_alter_hooks_webform_element_alter(array &$element, FormStateInterface $form_state, array $context)
function webform_test_alter_hooks_webform_element_email_alter(array &$element, FormStateInterface $form_state, array $co
```

### web/modules/contrib/webform/tests/modules/webform_test_alter_hooks/webform_test_alter_hooks.services.yml
```
keys: [services]
```

### web/modules/contrib/webform/tests/modules/webform_test_handler_invoke_alter/webform_test_handler_invoke_alter.info.yml
```
keys: [name, type, description, package, dependencies]
```

### web/modules/contrib/webform/tests/modules/webform_test_handler_invoke_alter/webform_test_handler_invoke_alter.module
```
function webform_test_handler_invoke_alter_webform_handler_invoke_alter(WebformHandlerInterface $handler, $method_name, 
function webform_test_handler_invoke_alter_webform_handler_invoke_pre_create_alter(WebformHandlerInterface $handler, arr
```

### web/modules/contrib/webform/tests/modules/webform_test_handler_invoke_alter/webform_test_handler_invoke_alter.services.yml
```
keys: [services]
```

### web/modules/contrib/webform/tests/modules/webform_test_submissions/webform_test_submissions.info.yml
```
keys: [name, type, description, package, dependencies]
```

### web/modules/contrib/webform/tests/modules/webform_test_submissions/webform_test_submissions.install
```
function webform_test_submissions_install() {
function webform_test_submissions_uninstall() {
```

### web/modules/contrib/webform/tests/modules/webform_test_config_performance/webform_test_config_performance.info.yml
```
keys: [name, type, description, package, dependencies]
```

### web/modules/contrib/webform/tests/modules/webform_test_config_performance/webform_test_config_performance.install
```
function webform_test_config_performance_install() {
```

### web/modules/contrib/webform/tests/modules/webform_test_views/webform_test_views.info.yml
```
keys: [name, type, description, package, dependencies]
```

### web/modules/contrib/webform/tests/modules/webform_test_editorial/webform_test_editorial.info.yml
```
keys: [name, type, description, package, configure, dependencies]
```

### web/modules/contrib/webform/tests/src/Kernel/WebformConditionTest.php
```
class WebformConditionTest
  function testConditions()
```

### web/modules/contrib/webform/tests/src/Kernel/WebformEntityElementsValidationTest.php
```
class WebformEntityElementsValidationTest
  function setUp() → void
  function testValidate()
```

### web/modules/contrib/webform/tests/src/Kernel/WebformSubmissionBatchExportTest.php
```
class WebformSubmissionBatchExportTest
  function setUp() → void
  function testBatchExportClearsCaches() → void
```

### web/modules/contrib/webform/tests/src/Kernel/WebformSubmissionPurgeApiTest.php
```
class WebformSubmissionPurgeApiTest
  function setUp() → void
  function testPurgeApis()
```

### web/modules/contrib/webform/tests/src/Kernel/WebformSubmissionStorageTest.php
```
class WebformSubmissionStorageTest
  function setUp() → void
  function testStorage()
  function testPurge($webform_purging, $webform_submissions_definition, $purged)
  static function providerPurge()
```

### web/modules/contrib/webform/tests/src/Traits/WebformBrowserTestTrait.php
```
trait WebformBrowserTestTrait
  function placeBlocks()
  function placeWebformBlocks($module_name)
  function createFilters()
  function createTags()
  function loadWebforms(array $ids)
  function loadWebform($id)
  function createWebform($values = [], array $elements = [], array $settings = [])
  function reloadWebform($id)
```

### web/modules/contrib/webform/tests/src/Traits/WebformSubmissionViewAccessTrait.php
```
trait WebformSubmissionViewAccessTrait
  function checkUserSubmissionAccess(WebformInterface $webform, array $accounts)
```

### web/modules/contrib/webform/tests/src/Traits/WebformWebDriverTestTrait.php
```
trait WebformWebDriverTestTrait
  function executeJqueryEvent($selector, $event_type, array $event_options = [])
```

### web/modules/contrib/webform/tests/src/Unit/WebformMessageManagerTest.php
```
class WebformMessageManagerTest
  function testMessageManager()
```

### web/modules/contrib/webform/tests/src/Unit/WebformEntityAccessControlHandlerTest.php
```
class WebformEntityAccessControlHandlerTest
  function setUp() → void
  function testCheckAccess($operation, array $options, array $expected, $assert_message = '')
```

### web/modules/contrib/webform/tests/src/Functional/WebformRenderingTest.php
```
class WebformRenderingTest
  function setUp() → void
  function testRendering()
```

### web/modules/contrib/webform/tests/src/Functional/WebformSubmissionTest.php
```
class WebformSubmissionTest
  function testWebformSubmission()
  function testDuplicate()
```

### web/modules/contrib/webform/tests/src/Functional/WebformMailTest.php
```
class WebformMailTest
  function testFromAndReplyToHeader()
```

### web/modules/contrib/webform/tests/src/Functional/WebformSubmissionViewsAccessTest.php
```
class WebformSubmissionViewsAccessTest
  function testEntityAccess()
  function testPermissionAccess()
  function createSubmissions(WebformInterface $webform, array $accounts)
```

### web/modules/contrib/webform/tests/src/Functional/WebformSubmissionStorageTest.php
```
class WebformSubmissionStorageTest
  function testSubmissionStorage()
```

### web/modules/contrib/webform/tests/src/Functional/WebformHelpTest.php
```
class WebformHelpTest
  function setUp() → void
  function testHelp()
```

### web/modules/contrib/webform/tests/src/Functional/WebformBlockCacheTest.php
```
class WebformBlockCacheTest
  function setUp() → void
  function testAnonymousVisitIsCacheable()
  function testAuthenticatedVisitIsCacheable()
  function testAuthenticatedAndRestrictedVisitIsCacheable()
```

### web/modules/contrib/webform/tests/src/Functional/WebformEntityReferenceItemNormalizerTest.php
```
class WebformEntityReferenceItemNormalizerTest
  function testWebformEntityReferenceItemNormalization()
```

### web/modules/contrib/webform/tests/src/Functional/WebformEntityTranslationTest.php
```
class WebformEntityTranslationTest
  function setUp() → void
  function testSettingsTranslate()
  function testWebformTranslate()
```

### web/modules/contrib/webform/tests/src/Functional/WebformSubmissionUserLimitTest.php
```
class WebformSubmissionUserLimitTest
  function testSubmissionUserLimitAuthenticatedUser() → void
  function testSubmissionUserLimitAnonymousUser() → void
```

### web/modules/contrib/webform/tests/src/Functional/WebformSubmissionTokenOperationsTest.php
```
class WebformSubmissionTokenOperationsTest
  function testTokenOperationsTest()
```

### web/modules/contrib/webform/tests/src/Functional/WebformEmailProviderTest.php
```
class WebformEmailProviderTest
  function testEmailProvider()
```

### web/modules/contrib/webform/tests/src/Functional/WebformEntityStorageTest.php
```
class WebformEntityStorageTest
  function testWebformEntityStorage()
```

### web/modules/contrib/webform/tests/src/Functional/WebformSubmissionListBuilderBulkOperationsTest.php
```
class WebformSubmissionListBuilderBulkOperationsTest
  function testResults()
```

### web/modules/contrib/webform/tests/src/Functional/WebformSubmissionViewsTest.php
```
class WebformSubmissionViewsTest
  function testSubmissionViewsAccess()
  function testSubmissionViews()
```

### web/modules/contrib/webform/tests/src/Functional/WebformSubmissionGenerateTest.php
```
class WebformSubmissionGenerateTest
  function testWebformSubmissionGenerate()
```

### web/modules/contrib/webform/tests/src/Functional/WebformSubmissionListBuilderTest.php
```
class WebformSubmissionListBuilderTest
  function testResults()
```

### web/modules/contrib/webform/tests/src/Functional/WebformThirdPartySettingsTest.php
```
class WebformThirdPartySettingsTest
  function testThirdPartySettings()
```

### web/modules/contrib/webform/tests/src/Functional/WebformResultsDisabledTest.php
```
class WebformResultsDisabledTest
  function testSettings()
```

### web/modules/contrib/webform/tests/src/Functional/WebformResultsExportDownloadTest.php
```
class WebformResultsExportDownloadTest
  function testDownloadFiles()
  function getArchiveContents($filepath)
```

### web/modules/contrib/webform/tests/src/Functional/WebformEditorTest.php
```
class WebformEditorTest
  function setUp() → void
  function testWebformSettingsFiles()
```

### web/modules/contrib/webform/tests/src/Functional/WebformAlterHooksTest.php
```
class WebformAlterHooksTest
  function testWebformAlterHooks()
```

### web/modules/contrib/webform/tests/src/Functional/WebformSubmissionListBuilderCustomizeTest.php
```
class WebformSubmissionListBuilderCustomizeTest
  function testCustomize()
```

### web/modules/contrib/webform/tests/src/Functional/WebformEntityTest.php
```
class WebformEntityTest
  function setUp() → void
  function testWebform()
```

### web/modules/contrib/webform/tests/src/Functional/WebformListBuilderTest.php
```
class WebformListBuilderTest
  function testFilterAndLimit()
  function testBulkOperations()
```

### web/modules/contrib/webform/tests/src/Functional/WebformBrowserTestBase.php
```
class WebformBrowserTestBase
  function setUp() → void
  function tearDown() → void
```

### web/modules/contrib/webform/tests/src/Functional/WebformSubmissionApiTest.php
```
class WebformSubmissionApiTest
  function testApi()
```

### web/modules/contrib/webform/tests/src/Functional/WebformSubmissionViewTest.php
```
class WebformSubmissionViewTest
  function setUp() → void
  function testView()
```

### web/modules/contrib/webform/tests/src/Functional/WebformBrowserTestBaseTest.php
```
class WebformBrowserTestBaseTest
  function setUp() → void
  function testWebformBase()
```

### web/modules/contrib/webform/tests/src/Functional/WebformEntityTranslationApiTest.php
```
class WebformEntityTranslationApiTest
  function testTranslationApu()
```

### web/modules/contrib/webform/tests/src/Functional/WebformLibrariesTest.php
```
class WebformLibrariesTest
  function testLibraries()
```

### web/modules/contrib/webform/tests/src/Functional/WebformResultsExportOptionsTest.php
```
class WebformResultsExportOptionsTest
  function testExportOptions()
```

### web/modules/contrib/webform/tests/src/Functional/WebformExampleFunctionalTest.php
```
class WebformExampleFunctionalTest
  function testGet()
```

### web/modules/contrib/webform/tests/src/Functional/WebformEntityElementsValidationTest.php
```
class WebformEntityElementsValidationTest
  function testValidate() → void
```

### web/modules/contrib/webform/tests/src/Functional/WebformOptionsTest.php
```
class WebformOptionsTest
  function testWebformOptions()
```

### web/modules/contrib/webform/tests/src/FunctionalJavascript/WebformFilterJavaScriptTest.php
```
class WebformFilterJavaScriptTest
  function testFilter()
```

### web/modules/contrib/webform/tests/src/FunctionalJavascript/WebformSubmissionListBuilderJavaScriptTest.php
```
class WebformSubmissionListBuilderJavaScriptTest
  function testToggleLinks()
```

### web/modules/contrib/webform/tests/src/FunctionalJavascript/WebformWebDriverTestBase.php
```
class WebformWebDriverTestBase
  function setUp() → void
  function tearDown() → void
```

### web/modules/contrib/webform/tests/themes/webform_test_olivero/webform_test_olivero.info.yml
```
keys: [type, name, description, package]
```

### web/modules/contrib/webform/config/install/webform.webform_options.phone_types.yml
```
keys: [langcode, status, dependencies, id, label, category, likert, options]
```

### web/modules/contrib/webform/config/install/webform.webform_options.sex_icao.yml
```
keys: [langcode, status, dependencies, id, label, category, likert, options]
```

### web/modules/contrib/webform/config/install/webform.webform_options.yes_no.yml
```
keys: [langcode, status, dependencies, id, label, category, likert, options]
```

### web/modules/contrib/webform/config/install/webform.webform_options.marital_status.yml
```
keys: [langcode, status, dependencies, id, label, category, likert, options]
```

### web/modules/contrib/webform/config/install/webform.webform_options.likert_importance.yml
```
keys: [langcode, status, dependencies, id, label, category, likert, options]
```

### web/modules/contrib/webform/config/install/webform.webform.contact.yml
```
keys: [uuid, langcode, status, dependencies, open, close, weight, uid, template, archive, id, title]
```

### web/modules/contrib/webform/config/install/webform.webform_options.likert_quality.yml
```
keys: [langcode, status, dependencies, id, label, category, likert, options]
```

### web/modules/contrib/webform/config/install/webform.webform_options.likert_satisfaction.yml
```
keys: [langcode, status, dependencies, id, label, category, likert, options]
```

### web/modules/contrib/webform/config/install/webform.webform_options.likert_would_you.yml
```
keys: [langcode, status, dependencies, id, label, category, likert, options]
```

### web/modules/contrib/webform/config/install/webform.webform_options.time_zones.yml
```
keys: [langcode, status, dependencies, id, label, category, likert, options]
```

### web/modules/contrib/webform/config/install/webform.webform_options.languages.yml
```
keys: [langcode, status, dependencies, id, label, category, likert, options]
```

### web/modules/contrib/webform/config/install/webform.webform_options.ethnicity.yml
```
keys: [langcode, status, dependencies, id, label, category, likert, options]
```

### web/modules/contrib/webform/config/install/system.action.webform_unarchive_action.yml
```
keys: [langcode, status, dependencies, id, label, type, plugin, configuration]
```

### web/modules/contrib/webform/config/install/webform.webform_options.likert_ten_scale.yml
```
keys: [langcode, status, dependencies, id, label, category, likert, options]
```

### web/modules/contrib/webform/config/install/webform.webform_options.country_codes.yml
```
keys: [langcode, status, dependencies, id, label, category, likert, options]
```

### web/modules/contrib/webform/config/install/system.action.webform_submission_delete_action.yml
```
keys: [langcode, status, dependencies, id, label, type, plugin, configuration]
```

### web/modules/contrib/webform/config/install/webform.webform_options.province_codes.yml
```
keys: [langcode, status, dependencies, id, label, category, likert, options]
```

### web/modules/contrib/webform/config/install/system.action.webform_submission_make_unsticky_action.yml
```
keys: [langcode, status, dependencies, id, label, type, plugin, configuration]
```

### web/modules/contrib/webform/config/install/webform.webform_options.state_codes.yml
```
keys: [langcode, status, dependencies, id, label, category, likert, options]
```

### web/modules/contrib/webform/config/install/webform.webform_options.titles.yml
```
keys: [langcode, status, dependencies, id, label, category, likert, options]
```

### web/modules/contrib/webform/config/install/webform.webform_options.relationship.yml
```
keys: [langcode, status, dependencies, id, label, category, likert, options]
```

### web/modules/contrib/webform/config/install/webform.settings.yml
```
keys: [settings, assets, handler, variant, export, batch, purge, form, element, html_editor, file, format]
```

### web/modules/contrib/webform/config/install/webform.webform_options.gender.yml
```
keys: [langcode, status, dependencies, id, label, category, likert, options]
```

### web/modules/contrib/webform/config/install/system.action.webform_close_action.yml
```
keys: [langcode, status, dependencies, id, label, type, plugin, configuration]
```

### web/modules/contrib/webform/config/install/webform.webform_options.likert_comparison.yml
```
keys: [langcode, status, dependencies, id, label, category, likert, options]
```

### web/modules/contrib/webform/config/install/webform.webform_options.likert_agreement.yml
```
keys: [langcode, status, dependencies, id, label, category, likert, options]
```

### web/modules/contrib/webform/config/install/webform.webform_options.size.yml
```
keys: [langcode, status, dependencies, id, label, category, likert, options]
```

### web/modules/contrib/webform/config/install/system.action.webform_submission_make_lock_action.yml
```
keys: [langcode, status, dependencies, id, label, type, plugin, configuration]
```

### web/modules/contrib/webform/config/install/system.action.webform_submission_make_sticky_action.yml
```
keys: [langcode, status, dependencies, id, label, type, plugin, configuration]
```

### web/modules/contrib/webform/config/install/webform.webform_options.employment_status.yml
```
keys: [langcode, status, dependencies, id, label, category, likert, options]
```

### web/modules/contrib/webform/config/install/webform.webform_options.country_names.yml
```
keys: [langcode, status, dependencies, id, label, category, likert, options]
```

### web/modules/contrib/webform/config/install/webform.webform_options.sex.yml
```
keys: [langcode, status, dependencies, id, label, category, likert, options]
```

### web/modules/contrib/webform/config/install/webform.webform_options.state_province_names.yml
```
keys: [langcode, status, dependencies, id, label, category, likert, options]
```

### web/modules/contrib/webform/config/install/webform.webform_options.education.yml
```
keys: [langcode, status, dependencies, id, label, category, likert, options]
```

### web/modules/contrib/webform/config/install/webform.webform_options.state_province_codes.yml
```
keys: [langcode, status, dependencies, id, label, category, likert, options]
```

### web/modules/contrib/webform/config/install/system.action.webform_archive_action.yml
```
keys: [langcode, status, dependencies, id, label, type, plugin, configuration]
```

### web/modules/contrib/webform/config/install/system.action.webform_delete_action.yml
```
keys: [langcode, status, dependencies, id, label, type, plugin, configuration]
```

### web/modules/contrib/webform/config/install/webform.webform_options.industry.yml
```
keys: [langcode, status, dependencies, id, label, category, likert, options]
```

### web/modules/contrib/webform/config/install/webform.webform_options.state_names.yml
```
keys: [langcode, status, dependencies, id, label, category, likert, options]
```

### web/modules/contrib/webform/config/install/webform.webform_options.days.yml
```
keys: [langcode, status, dependencies, id, label, category, likert, options]
```

### web/modules/contrib/webform/config/install/webform.webform_options.months.yml
```
keys: [langcode, status, dependencies, id, label, category, likert, options]
```

### web/modules/contrib/webform/config/install/webform.webform_options.province_names.yml
```
keys: [langcode, status, dependencies, id, label, category, likert, options]
```

### web/modules/contrib/webform/config/install/system.action.webform_open_action.yml
```
keys: [langcode, status, dependencies, id, label, type, plugin, configuration]
```

### web/modules/contrib/webform/config/install/webform.webform_options.translations.yml
```
keys: [langcode, status, dependencies, id, label, category, likert, options]
```

### web/modules/contrib/webform/config/install/system.action.webform_submission_make_unlock_action.yml
```
keys: [langcode, status, dependencies, id, label, type, plugin, configuration]
```

### web/modules/contrib/webform/config/optional/ckeditor5/editor.editor.webform_default.yml
```
keys: [uuid, langcode, status, dependencies, format, editor, settings, image_upload]
```

### web/modules/contrib/webform/config/optional/filter.format.webform_default.yml
```
keys: [uuid, langcode, status, dependencies, name, format, weight, roles, filters]
```

### web/modules/contrib/webform/config/optional/views.view.webform_submissions.yml
```
keys: [langcode, status, dependencies, id, label, module, description, tag, base_table, base_field, display]
```

### web/modules/contrib/webform/.gitlab-ci.yml
```
keys: [include, variables, phpcs, phpunit]
```

### web/modules/contrib/webform/webform.module
```
function webform_help($route_name, RouteMatchInterface $route_match) {
function webform_webform_message_custom($operation, $id) {
function webform_modules_installed($modules) {
function webform_modules_uninstalled($modules) {
function webform_config_schema_info_alter(&$definitions) {
function _webform_config_schema_info_alter_settings_recursive(array $settings) {
function webform_user_login($account) {
function webform_cron() {
function webform_rebuild() {
function webform_local_tasks_alter(&$local_tasks) {
function webform_menu_local_tasks_alter(&$data, $route_name, RefinableCacheableDependencyInterface $cacheability) {
function webform_module_implements_alter(&$implementations, $hook) {
function webform_token_info_alter(&$data) {
function webform_entity_update(EntityInterface $entity) {
function webform_entity_delete(EntityInterface $entity) {
```

### web/modules/contrib/webform/webform.info.yml
```
keys: [name, type, description, package, core_version_requirement, configure, dependencies]
```

### web/modules/contrib/webform/webform.api.php
```
function hook_webform_element_info_alter(array &$definitions)
function hook_webform_handler_info_alter(array &$handlers)
function hook_webform_variant_info_alter(array &$variants)
function hook_webform_source_entity_info_alter(array &$definitions)
function hook_webform_element_default_properties_alter(array &$properties, array &$definition)
function hook_webform_element_translatable_properties_alter(array &$properties, array &$definition)
function hook_webform_element_configuration_form_alter(array &$form, FormStateInterface $form_state)
function hook_webform_element_alter(array &$element, FormStateInterface $form_state, array $context)
function hook_webform_element_ELEMENT_TYPE_alter(array &$element, FormStateInterface $form_state, array $context)
function hook_webform_element_access($operation, array &$element, ?AccountInterface $account = NULL, array $context = [])
function hook_webform_element_input_masks()
function hook_webform_element_input_masks_alter(array &$input_masks)
function hook_webform_options_alter(array &$options, array &$element, $options_id = NULL)
function hook_webform_options_WEBFORM_OPTIONS_ID_alter(array &$options, array &$element)
function hook_webform_submissions_pre_purge(array &$webform_submissions)
function hook_webform_submissions_post_purge(array $webform_submissions)
function hook_webform_submission_form_alter(array &$form, FormStateInterface $form_state, $form_id)
function hook_webform_admin_third_party_settings_form_alter(array &$form, FormStateInterface $form_state)
function hook_webform_third_party_settings_form_alter(array &$form, FormStateInterface $form_state)
function hook_webform_handler_invoke_alter(WebformHandlerInterface $handler, $method_name, array &$args)
function hook_webform_handler_invoke_METHOD_NAME_alter(WebformHandlerInterface $handler, array &$args)
function hook_webform_libraries_info()
function hook_webform_libraries_info_alter(&$libraries)
function hook_webform_help_info()
function hook_webform_help_info_alter(array &$help)
```

### web/modules/contrib/webform/modules/webform_cards/webform_cards.libraries.yml
```
keys: [webform_cards]
```

### web/modules/contrib/webform/modules/webform_cards/webform_cards.info.yml
```
keys: [name, type, description, package, core_version_requirement, dependencies]
```

### web/modules/contrib/webform/modules/webform_cards/src/WebformCardsManagerInterface.php
```
interface WebformCardsManagerInterface
  function hasCards(WebformInterface $webform)
  function getNumberOfCards(WebformInterface $webform)
  function buildPages(WebformInterface $webform, $operation = 'default')
  function applyConditions(array $pages, ?WebformSubmissionInterface $webform_submission = NULL)
```

### web/modules/contrib/webform/modules/webform_cards/src/WebformCardsManager.php
```
class WebformCardsManager
  function hasCards(WebformInterface $webform)
  function getNumberOfCards(WebformInterface $webform)
  function buildPages(WebformInterface $webform, $operation = 'default')
```

### web/modules/contrib/webform/modules/webform_cards/webform_cards.services.yml
```
keys: [services]
```

### web/modules/contrib/webform/modules/webform_cards/css/webform_cards.css
```
.webform-card
.webform-preview
.webform-wizard-pages-links
.webform-cards-toggle-wrapper
.webform-cards-toggle
.webform-cards-toggle
.webform-cards-togglelink
```

### web/modules/contrib/webform/modules/webform_cards/webform_cards.module
```
function webform_cards_entity_base_field_info(EntityTypeInterface $entity_type) {
function webform_cards_menu_local_actions_alter(&$local_actions) {
function webform_cards_preprocess_menu_local_action(&$variables) {
function webform_cards_webform_submission_presave(WebformSubmissionInterface $webform_submission) {
function webform_cards_webform_submission_form_alter(array &$form, FormStateInterface $form_state, $form_id) {
function webform_cards_webform_submission_builder($entity_type, WebformSubmissionInterface $entity, &$form, FormStateInt
function webform_cards_form_webform_edit_form_alter(array &$form, FormStateInterface $form_state) {
function webform_cards_form_webform_admin_config_forms_form_alter(array &$form, FormStateInterface $form_state) {
function webform_cards_form_webform_admin_config_elements_form_alter(array &$form, FormStateInterface $form_state) {
function webform_cards_form_webform_settings_form_alter(array &$form, FormStateInterface $form_state) {
function webform_cards_form_webform_settings_form_form_alter(array &$form, FormStateInterface $form_state) {
function webform_cards_form_webform_settings_submissions_form_alter(array &$form, FormStateInterface $form_state) {
function _webform_cards_form_state_has_cards(FormStateInterface $form_state) {
function _webform_cards_form_alter_elements(array &$form, array $elements) {
function webform_cards_theme() {
```

### web/modules/contrib/webform/modules/webform_clientside_validation/webform_clientside_validation.install
```
function webform_clientside_validation_install() {
```

### web/modules/contrib/webform/modules/webform_clientside_validation/webform_clientside_validation.info.yml
```
keys: [name, type, description, package, core_version_requirement, dependencies]
```

### web/modules/contrib/webform/modules/webform_clientside_validation/webform_clientside_validation.module
```
function webform_clientside_validation_webform_submission_form_alter(array &$form, FormStateInterface $form_state, $form
function webform_clientside_validation_element_info_alter(array &$info) {
function _webform_clientside_validation_webform_email_confirm_process(&$element, FormStateInterface $form_state, &$compl
```

### web/modules/contrib/webform/modules/webform_clientside_validation/webform_clientside_validation.services.yml
```
keys: [services]
```

### web/modules/contrib/webform/modules/webform_clientside_validation/css/webform_clientside_validation.ife.css
```
.form-item
.form-item
.chosen-container
.chosen-container
.select2
```

### web/modules/contrib/webform/modules/webform_examples_accessibility/webform_examples_accessibility.services.yml
```
keys: [services]
```

### web/modules/contrib/webform/modules/webform_examples_accessibility/webform_examples_accessibility.info.yml
```
keys: [name, type, description, package, core_version_requirement, dependencies]
```

### web/modules/contrib/webform/modules/webform_examples_accessibility/webform_examples_accessibility.libraries.yml
```
keys: [webform_examples_accessibility]
```

### web/modules/contrib/webform/modules/webform_examples_accessibility/webform_examples_accessibility.module
```
function webform_examples_accessibility_page_attachments(array &$attachments) {
function webform_examples_accessibility_webform_submission_form_alter(array &$form, FormStateInterface $form_state, $for
```

### web/modules/contrib/webform/modules/webform_options_custom/src/WebformOptionsCustomListBuilder.php
```
class WebformOptionsCustomListBuilder
  static function createInstance(ContainerInterface $container, EntityTypeInterface $entity_type)
  function initialize()
  function render()
```

### web/modules/contrib/webform/modules/webform_options_custom/src/WebformOptionsCustomDeleteForm.php
```
class WebformOptionsCustomDeleteForm
  function getDescription()
  function getDetails()
```

### web/modules/contrib/webform/modules/webform_options_custom/src/WebformOptionsCustomStorage.php
```
class WebformOptionsCustomStorage
  function getCategories()
  function getOptionsCustom()
  function getUsedByWebforms(WebformOptionsCustomInterface $webform_options_custom)
```

### web/modules/contrib/webform/modules/webform_options_custom/src/WebformOptionsCustomForm.php
```
class WebformOptionsCustomForm
  static function create(ContainerInterface $container)
  function prepareEntity()
  function buildForm(array $form, FormStateInterface $form_state)
  function form(array $form, FormStateInterface $form_state)
```

### web/modules/contrib/webform/modules/webform_options_custom/src/WebformOptionsCustomInterface.php
```
interface WebformOptionsCustomInterface
  function setOptions(array $options)
  function getOptions()
  function getTemplate()
  function getUrl()
  function getElement()
  function getPreview()
  function getTemplateOptions()
```

### web/modules/contrib/webform/modules/webform_options_custom/src/WebformOptionsCustomAccessControlHandler.php
```
class WebformOptionsCustomAccessControlHandler
  function checkAccess(EntityInterface $entity, $operation, AccountInterface $account)
```

### web/modules/contrib/webform/modules/webform_options_custom/css/webform_options_custom.element.css
```
.webform-options-custom-template
.webform-options-custom-tooltip--text
```

### web/modules/contrib/webform/modules/webform_options_custom/webform_options_custom.module
```
function webform_options_custom_webform_help_info() {
function webform_options_custom_menu_local_tasks_alter(&$data, $route_name) {
function webform_options_custom_webform_libraries_info() {
```

### web/modules/contrib/webform/modules/webform_options_custom/webform_options_custom.info.yml
```
keys: [name, type, description, package, core_version_requirement, dependencies]
```

### web/modules/contrib/webform/modules/webform_options_custom/webform_options_custom.services.yml
```
keys: [services]
```

### web/modules/contrib/webform/modules/webform_example_handler/webform_example_handler.info.yml
```
keys: [name, type, description, package, core_version_requirement, dependencies]
```

### web/modules/contrib/webform/modules/webform_example_handler/webform_example_handler.module
```
function webform_example_handler_theme() {
```

### web/modules/contrib/webform/modules/webform_example_handler/webform_example_handler.services.yml
```
keys: [services]
```

### web/modules/contrib/webform/modules/webform_submission_log/webform_submission_log.services.yml
```
keys: [services]
```

### web/modules/contrib/webform/modules/webform_submission_log/src/WebformSubmissionLogLogger.php
```
class WebformSubmissionLogLogger
  function log($level, $message, array $context = []) → void
```

### web/modules/contrib/webform/modules/webform_submission_log/src/WebformSubmissionLogManager.php
```
class WebformSubmissionLogManager
  function insert(array $fields)
  function getQuery(?EntityInterface $webform_entity = NULL, ?EntityInterface $source_entity = NULL, ?AccountInterface $account = NULL, array $options = []) → SelectInterface
  function loadByEntities(?EntityInterface $webform_entity = NULL, ?EntityInterface $source_entity = NULL, ?AccountInterface $account = NULL, array $options = [])
```

### web/modules/contrib/webform/modules/webform_submission_log/src/WebformSubmissionLogManagerInterface.php
```
interface WebformSubmissionLogManagerInterface
  function insert(array $fields)
  function getQuery(?EntityInterface $webform_entity = NULL, ?EntityInterface $source_entity = NULL, ?AccountInterface $account = NULL, array $options = [])
  function loadByEntities(?EntityInterface $webform_entity = NULL, ?EntityInterface $source_entity = NULL, ?AccountInterface $account = NULL, array $options = [])
```

### web/modules/contrib/webform/modules/webform_submission_log/webform_submission_log.info.yml
```
keys: [name, type, description, package, core_version_requirement, dependencies]
```

### web/modules/contrib/webform/modules/webform_submission_log/webform_submission_log.module
```
function webform_submission_log_webform_help_info() {
function webform_submission_log_local_tasks_alter(&$local_tasks) {
function webform_submission_log_webform_delete(WebformInterface $webform) {
function webform_submission_log_webform_submission_delete(WebformSubmissionInterface $webform_submission) {
```

### web/modules/contrib/webform/modules/webform_submission_log/webform_submission_log.install
```
function webform_submission_log_update_8001() {
function webform_submission_log_schema() {
```

### web/modules/contrib/webform/modules/webform_share/webform_share.info.yml
```
keys: [name, type, description, package, core_version_requirement, dependencies]
```

### web/modules/contrib/webform/modules/webform_share/css/webform_share.admin.css
```
.webform-share-iframe-container
.webform-share-admin-copy-message
.webform-share-admin-copy-message
```

### web/modules/contrib/webform/modules/webform_share/src/WebformShareHelper.php
```
class WebformShareHelper
  static function isPage(?RouteMatchInterface $route_match = NULL)
```

### web/modules/contrib/webform/modules/webform_share/src/WebformSharePreRender.php
```
class WebformSharePreRender
  static function page($element)
  static function trustedCallbacks()
```

### web/modules/contrib/webform/modules/webform_share/webform_share.module
```
function webform_share_webform_help_info() {
function webform_share_local_tasks_alter(&$local_tasks) {
function webform_share_menu_local_tasks_alter(&$data, $route_name, RefinableCacheableDependencyInterface $cacheability) 
function webform_share_element_info_alter(&$type) {
function webform_share_entity_type_alter(array &$entity_types) {
function webform_share_entity_operation(EntityInterface $entity) {
function webform_share_page_top(array &$page_top) {
function webform_share_theme($existing, $type, $theme, $path) {
function webform_share_theme_suggestions_html(array $variables) {
function webform_share_theme_suggestions_page(array $variables) {
function template_preprocess_html__webform_share(&$variables) {
function template_preprocess_page__webform_share(&$variables) {
function webform_share_preprocess_page_title(&$variables) {
function template_preprocess_webform_share_iframe(array &$variables) {
function template_preprocess_webform_share_script(array &$variables) {
```

### web/modules/contrib/webform/modules/webform_share/webform_share.services.yml
```
keys: [services]
```

### web/modules/contrib/webform/modules/webform_bootstrap/webform_bootstrap.install
```
function webform_bootstrap_requirements() {
function webform_bootstrap_install() {
```

### web/modules/contrib/webform/modules/webform_bootstrap/webform_bootstrap.services.yml
```
keys: [services]
```

### web/modules/contrib/webform/modules/webform_bootstrap/src/WebformBootstrapRenderCallbacks.php
```
class WebformBootstrapRenderCallbacks
  static function webformLikertPreRender(array $element)
```

### web/modules/contrib/webform/modules/webform_bootstrap/webform_bootstrap.info.yml
```
keys: [name, type, description, package, core_version_requirement, dependencies, lifecycle, lifecycle_link]
```

### web/modules/contrib/webform/modules/webform_bootstrap/css/webform_bootstrap.css
```
.webform-flex--container
.form-composite
.webform-element--title-inline
.webform-element--title-inline
.webform-element--title-inline
.form-composite
.ui-widget-content
.alert
```

### web/modules/contrib/webform/modules/webform_bootstrap/webform_bootstrap.libraries.yml
```
keys: [webform_bootstrap]
```

### web/modules/contrib/webform/modules/webform_bootstrap/webform_bootstrap.module
```
function webform_bootstrap_page_attachments(array &$attachments) {
function webform_bootstrap_webform_element_webform_terms_of_service_alter(array &$element, FormStateInterface $form_stat
function webform_bootstrap_webform_element_webform_likert_alter(array &$element, FormStateInterface $form_state, array $
function webform_bootstrap_webform_element_alter(array &$element, FormStateInterface $form_state, array $context) {
function webform_bootstrap_link_alter(&$variables) {
function webform_bootstrap_preprocess_input(&$variables) {
function webform_bootstrap_preprocess_form_element(&$variables) {
function webform_bootstrap_preprocess_fieldset(&$variables) {
function webform_bootstrap_preprocess_file_managed_file(&$variables) {
function _webform_bootstrap_convert_button_classes(array &$classes) {
function _webform_bootstrap_is_active_theme() {
```

### web/modules/contrib/webform/modules/webform_bootstrap/README.md
```
h3 About this Module
h3 Code Snippets
h3 Known Issues
code-fence plain
code-fence btn
```

### web/modules/contrib/webform/modules/webform_jqueryui_buttons/webform_jqueryui_buttons.info.yml
```
keys: [name, type, description, package, core_version_requirement, lifecycle, lifecycle_link, dependencies]
```

### web/modules/contrib/webform/modules/webform_image_select/webform_image_select.module
```
function webform_image_select_webform_help_info() {
function webform_image_select_webform_libraries_info() {
function webform_image_select_menu_local_tasks_alter(&$data, $route_name) {
```

### web/modules/contrib/webform/modules/webform_image_select/webform_image_select.api.php
```
function hook_webform_image_select_images_alter(array &$images, array &$element, $images_id = NULL)
function hook_webform_image_select_images_WEBFORM_IMAGE_SELECT_IMAGES_ID_alter(array &$images, array &$element)
```

### web/modules/contrib/webform/modules/webform_image_select/webform_image_select.info.yml
```
keys: [name, type, description, package, core_version_requirement, dependencies]
```

### web/modules/contrib/webform/modules/webform_image_select/css/webform_image_select.element.css
```
.webform-image-select-filter
.thumbnails
.thumbnails
.thumbnails
```

### web/modules/contrib/webform/modules/webform_image_select/webform_image_select.services.yml
```
keys: [services]
```

### web/modules/contrib/webform/modules/webform_image_select/src/WebformImageSelectImagesStorage.php
```
class WebformImageSelectImagesStorage
  function getCategories()
  function getImages()
  function getUsedByWebforms(WebformImageSelectImagesInterface $webform_images)
```

### web/modules/contrib/webform/modules/webform_image_select/src/WebformImageSelectImagesListBuilder.php
```
class WebformImageSelectImagesListBuilder
  static function createInstance(ContainerInterface $container, EntityTypeInterface $entity_type)
  function initialize()
  function render()
```

### web/modules/contrib/webform/modules/webform_image_select/src/WebformImageSelectImagesDeleteForm.php
```
class WebformImageSelectImagesDeleteForm
  function getDescription()
  function getDetails()
```

### web/modules/contrib/webform/modules/webform_image_select/src/WebformImageSelectImagesAccessControlHandler.php
```
class WebformImageSelectImagesAccessControlHandler
  function checkAccess(EntityInterface $entity, $operation, AccountInterface $account)
```

### web/modules/contrib/webform/modules/webform_image_select/src/WebformImageSelectImagesForm.php
```
class WebformImageSelectImagesForm
  static function create(ContainerInterface $container)
  function prepareEntity()
  function buildForm(array $form, FormStateInterface $form_state)
  function form(array $form, FormStateInterface $form_state)
  function actions(array $form, FormStateInterface $form_state)
  function getImages()
  function save(array $form, FormStateInterface $form_state)
  function afterBuild(array $element, FormStateInterface $form_state)
```

### web/modules/contrib/webform/modules/webform_image_select/src/WebformImageSelectImagesInterface.php
```
interface WebformImageSelectImagesInterface
  function setImages(array $images)
  function getImages()
  static function getElementImages(array &$element)
```

### web/modules/contrib/webform/modules/webform_templates/webform_templates.info.yml
```
keys: [name, type, description, package, core_version_requirement, dependencies]
```

### web/modules/contrib/webform/modules/webform_templates/webform_templates.module
```
function webform_templates_entity_type_alter(array &$entity_types) {
function webform_templates_webform_help_info() {
```

### web/modules/contrib/webform/modules/webform_templates/src/WebformTemplatesSubmissionPreviewForm.php
```
class WebformTemplatesSubmissionPreviewForm
  function buildForm(array $form, FormStateInterface $form_state, $mode = NULL)
  function validateForm(array &$form, FormStateInterface $form_state)
```

### web/modules/contrib/webform/modules/webform_templates/webform_templates.services.yml
```
keys: [services]
```

### web/modules/contrib/webform/modules/webform_demo/webform_demo_application_evaluation/webform_demo_application_evaluation.info.yml
```
keys: [name, type, description, package, core_version_requirement, dependencies]
```

### web/modules/contrib/webform/modules/webform_demo/webform_demo_application_evaluation/webform_demo_application_evaluation.install
```
function webform_demo_application_evaluation_install() {
function webform_demo_application_evaluation_uninstall() {
```

### web/modules/contrib/webform/modules/webform_demo/webform_demo_application_evaluation/webform_demo_application_evaluation.module
```
function webform_demo_application_evaluation_webform_submission_presave(WebformSubmissionInterface $webform_submission) 
function webform_demo_application_evaluation_webform_submission_insert(WebformSubmissionInterface $webform_submission) {
function webform_demo_application_evaluation_webform_submission_update(WebformSubmissionInterface $webform_submission) {
function webform_demo_application_evaluation_webform_submission_delete(WebformSubmissionInterface $webform_submission) {
function _webform_demo_application_evaluation_calculate_evaluation_rating(WebformSubmissionInterface $webform_submission
```

### web/modules/contrib/webform/modules/webform_demo/webform_demo_event_registration/webform_demo_event_registration.info.yml
```
keys: [name, type, description, package, core_version_requirement, dependencies]
```

### web/modules/contrib/webform/modules/webform_demo/webform_demo_event_registration/webform_demo_event_registration.install
```
function webform_demo_event_registration_install() {
function webform_demo_event_registration_uninstall() {
```

### web/modules/contrib/webform/modules/webform_demo/webform_demo_region_contact/webform_demo_region_contact.install
```
function webform_demo_region_contact_install() {
function webform_demo_region_contact_uninstall() {
```

### web/modules/contrib/webform/modules/webform_demo/webform_demo_region_contact/webform_demo_region_contact.info.yml
```
keys: [name, type, description, package, core_version_requirement, dependencies]
```

### web/modules/contrib/webform/modules/webform_node/webform_node.module
```
function webform_node_token_info() {
function webform_node_tokens($type, $tokens, array $data, array $options, BubbleableMetadata $bubbleable_metadata) {
function webform_node_entity_type_alter(array &$entity_types) {
function webform_node_entity_operation(EntityInterface $entity) {
function webform_node_node_access(NodeInterface $node, $operation, AccountInterface $account) {
function webform_node_webform_submission_query_access_alter(AlterableInterface $query, array $webform_submission_tables)
function webform_node_node_prepare_form(NodeInterface $node, $operation, FormStateInterface $form_state) {
function webform_node_node_delete(NodeInterface $node) {
function webform_node_field_widget_single_element_webform_entity_reference_autocomplete_form_alter(&$element, FormStateI
function webform_node_field_widget_single_element_webform_entity_reference_select_form_alter(&$element, FormStateInterfa
function webform_node_preprocess_page_title(&$variables) {
```

### web/modules/contrib/webform/modules/webform_node/webform_node.info.yml
```
keys: [name, type, description, package, core_version_requirement, dependencies]
```

### web/modules/contrib/webform/modules/webform_node/src/WebformNodeUninstallValidator.php
```
class WebformNodeUninstallValidator
  function validate($module)
  function hasWebformNodes()
```

### web/modules/contrib/webform/modules/webform_node/webform_node.install
```
function webform_node_requirements($phase) {
```

### web/modules/contrib/webform/modules/webform_node/webform_node.services.yml
```
keys: [services]
```

### web/modules/contrib/webform/modules/webform_node/css/webform_node.entity_references.css
```
.js
.js
.js
```

### web/modules/contrib/webform/modules/webform_node/css/webform_node.references.css
```
.webform-node-references-local-actions
.webform-node-references-local-actions
.webform-node-references-local-actions
```

### web/modules/contrib/webform/modules/webform_devel/webform_devel.module
```
function webform_devel_webform_help_info() {
function webform_devel_entity_type_alter(array &$entity_types) {
function webform_devel_form_config_single_export_form_alter(&$form, FormStateInterface $form_state) {
function _webform_devel_form_config_single_export_form_update_export($form, FormStateInterface $form_state) {
```

### web/modules/contrib/webform/modules/webform_devel/webform_devel.libraries.yml
```
keys: [webform_devel]
```

### web/modules/contrib/webform/modules/webform_devel/drush.services.yml
```
keys: [services]
```

### web/modules/contrib/webform/modules/webform_devel/webform_devel.services.yml
```
keys: [services]
```

### web/modules/contrib/webform/modules/webform_devel/webform_devel.drush.inc
```
function webform_devel_drush_command() {
function webform_devel_drush_help($section) {
function drush_webform_devel_reset() {
```

### web/modules/contrib/webform/modules/webform_devel/webform_devel.info.yml
```
keys: [name, type, description, package, core_version_requirement, dependencies]
```

### web/modules/contrib/webform/modules/webform_examples/webform_examples.info.yml
```
keys: [name, type, description, package, core_version_requirement, dependencies]
```

### web/modules/contrib/webform/modules/webform_schema/webform_schema.module
```
function webform_schema_webform_help_info() {
function webform_schema_entity_type_alter(array &$entity_types) {
```

### web/modules/contrib/webform/modules/webform_schema/webform_schema.services.yml
```
keys: [services]
```

### web/modules/contrib/webform/modules/webform_schema/webform_schema.info.yml
```
keys: [name, type, description, package, core_version_requirement, dependencies]
```

### web/modules/contrib/webform/modules/webform_schema/src/WebformSchemaManager.php
```
class WebformSchemaManager
  function getColumns()
  function getElements(WebformInterface $webform)
  function getDefinition(BaseFieldDefinition $definition)
  function getElement($element_key, array $element)
```

### web/modules/contrib/webform/modules/webform_schema/src/WebformSchemaManagerInterface.php
```
interface WebformSchemaManagerInterface
  function getColumns()
  function getElements(WebformInterface $webform)
```

### web/modules/contrib/webform/modules/webform_schema/webform_schema.libraries.yml
```
keys: [webform_schema]
```

### web/modules/contrib/webform/modules/webform_schema/css/webform_schema.module.css
```
.webform-schema-table
```

### web/modules/contrib/webform/modules/webform_example_variant/webform_example_variant.info.yml
```
keys: [name, type, description, package, core_version_requirement, dependencies]
```

### web/modules/contrib/webform/modules/webform_example_variant/webform_example_variant.module
```
function webform_example_variant_theme() {
```

### web/modules/contrib/webform/modules/webform_example_variant/webform_example_variant.services.yml
```
keys: [services]
```

### web/modules/contrib/webform/modules/webform_entity_print/webform_entity_print.libraries.yml
```
keys: [webform_entity_print]
```

### web/modules/contrib/webform/modules/webform_entity_print/css/webform_entity_print.css
```
.details-wrapper
.form-item
.webform-submission-table
.webform-submission-table
.webform-submission-table
.webform-submission-table
.webform-submission-table
```

### web/modules/contrib/webform/modules/webform_entity_print/webform_entity_print.info.yml
```
keys: [name, type, description, package, core_version_requirement, dependencies]
```

### web/modules/contrib/webform/modules/webform_entity_print/webform_entity_print.services.yml
```
keys: [services]
```

### web/modules/contrib/webform/modules/webform_entity_print/includes/webform_entity_print.install.inc
```
function _webform_entity_print_update_add_new_download_pdf_submission_action() {
```

### web/modules/contrib/webform/modules/webform_entity_print/webform_entity_print.module
```
function webform_entity_print_webform_submission_access(WebformSubmissionInterface $webform_submission, $operation, Acco
function webform_entity_print_file_download($uri) {
function webform_entity_print_webform_submission_view_alter(array &$build, EntityInterface $entity, EntityViewDisplayInt
function _webform_entity_print_webform_submission_template(array &$build, EntityInterface $entity, EntityViewDisplayInte
function _webform_entity_print_webform_submission_links(array &$build, EntityInterface $entity, EntityViewDisplayInterfa
function webform_entity_print_preprocess_entity_print(array &$variables) {
function _webform_entity_print_preprocess_entity_print_get_webform_submission(array $variables) {
function _webform_entity_print_token_generate($uri) {
```

### web/modules/contrib/webform/modules/webform_entity_print/webform_entity_print.webform.inc
```
function _webform_entity_print_form(array &$element, array $template_settings, array $export_type_settings, array $defau
function webform_entity_print_webform_admin_third_party_settings_form_alter(&$form, FormStateInterface $form_state) {
function webform_entity_print_webform_third_party_settings_form_alter(&$form, FormStateInterface $form_state) {
function _webform_entity_print_form_submit(array &$form, FormStateInterface $form_state) {
function _webform_entity_print_get_export_types() {
```

### web/modules/contrib/webform/modules/webform_entity_print/webform_entity_print.install
```
function webform_entity_print_install() {
function webform_entity_print_update_8001() {
```

### web/modules/contrib/webform/modules/webform_access/webform_access.module
```
function webform_access_webform_help_info() {
function webform_access_token_info() {
function webform_access_tokens($type, $tokens, array $data, array $options, BubbleableMetadata $bubbleable_metadata) {
function webform_access_user_delete(EntityInterface $entity) {
function webform_access_node_delete(EntityInterface $entity) {
function webform_access_field_config_delete(EntityInterface $entity) {
function webform_access_field_storage_config_delete(EntityInterface $entity) {
function webform_access_menu_local_tasks_alter(&$data, $route_name) {
function webform_access_webform_access(WebformInterface $webform, $operation, AccountInterface $account) {
function webform_access_webform_submission_access(WebformSubmissionInterface $webform_submission, $operation, AccountInt
function webform_access_webform_submission_query_access_alter(AlterableInterface $query, array $webform_submission_table
function webform_access_field_widget_single_element_form_alter(&$element, FormStateInterface $form_state, $context) {
function webform_access_form_node_form_alter(&$form, FormStateInterface $form_state, $form_id) {
function _webform_access_form_node_form_submit(&$form, FormStateInterface $form_state) {
function webform_access_form_user_form_alter(&$form, FormStateInterface $form_state) {
```

### web/modules/contrib/webform/modules/webform_access/webform_access.services.yml
```
keys: [services]
```

### web/modules/contrib/webform/modules/webform_access/webform_access.install
```
function webform_access_schema() {
function webform_access_update_8001() {
function webform_access_update_8002() {
function webform_access_update_8003() {
```

### web/modules/contrib/webform/modules/webform_access/webform_access.info.yml
```
keys: [name, description, core_version_requirement, package, type, dependencies]
```

### web/modules/contrib/webform/modules/webform_access/src/WebformAccessGroupInterface.php
```
interface WebformAccessGroupInterface
  function getType()
  function getTypeLabel()
  function setAdminIds(array $uids)
  function getAdminIds()
  function setUserIds(array $uids)
  function getUserIds()
  function setEntityIds(array $entity_ids)
  function getEntityIds()
```

### web/modules/contrib/webform/modules/webform_access/src/WebformAccessTypeDeleteForm.php
```
class WebformAccessTypeDeleteForm
  function getDescription()
```

### web/modules/contrib/webform/modules/webform_access/src/WebformAccessTypeForm.php
```
class WebformAccessTypeForm
  function form(array $form, FormStateInterface $form_state)
  function actions(array $form, FormStateInterface $form_state)
  function save(array $form, FormStateInterface $form_state)
```

### web/modules/contrib/webform/modules/webform_access/src/WebformAccessGroupListBuilder.php
```
class WebformAccessGroupListBuilder
  static function createInstance(ContainerInterface $container, EntityTypeInterface $entity_type)
  function render()
  function buildFilterForm()
  function buildInfo()
  function buildHeader()
  function buildRow(EntityInterface $entity)
  function getDefaultOperations(EntityInterface $entity, $type = 'edit')
```

### web/modules/contrib/webform/modules/webform_access/src/WebformAccessGroupAccessControlHandler.php
```
class WebformAccessGroupAccessControlHandler
  function checkAccess(EntityInterface $entity, $operation, AccountInterface $account)
```

### web/modules/contrib/webform/modules/webform_access/src/WebformAccessGroupDeleteForm.php
```
class WebformAccessGroupDeleteForm
  function getDescription()
```

### web/modules/contrib/webform/modules/webform_access/src/WebformAccessTypeStorage.php
```
class WebformAccessTypeStorage
```

### web/modules/contrib/webform/modules/webform_access/src/WebformAccessTypeInterface.php
```
interface WebformAccessTypeInterface
```

### web/modules/contrib/webform/modules/webform_access/src/WebformAccessTypeListBuilder.php
```
class WebformAccessTypeListBuilder
  static function createInstance(ContainerInterface $container, EntityTypeInterface $entity_type)
  function render()
  function buildInfo()
  function buildHeader()
  function buildRow(EntityInterface $entity)
  function getDefaultOperations(EntityInterface $entity, $type = 'edit')
  function buildOperations(EntityInterface $entity)
```

### web/modules/contrib/webform/modules/webform_access/src/WebformAccessTypeAccessControlHandler.php
```
class WebformAccessTypeAccessControlHandler
  function checkAccess(EntityInterface $entity, $operation, AccountInterface $account)
```

### web/modules/contrib/webform/modules/webform_access/src/WebformAccessGroupForm.php
```
class WebformAccessGroupForm
  static function create(ContainerInterface $container)
  function prepareEntity()
  function buildForm(array $form, FormStateInterface $form_state)
  function form(array $form, FormStateInterface $form_state)
```

### web/modules/contrib/webform/modules/webform_access/src/WebformAccessGroupStorage.php
```
class WebformAccessGroupStorage
  static function createInstance(ContainerInterface $container, EntityTypeInterface $entity_type)
  function doLoadMultiple(?array $ids = NULL)
  function doSave($id, EntityInterface $entity)
  function delete(array $entities)
```

### web/modules/contrib/webform/modules/webform_entity_print_attachment/webform_entity_print_attachment.info.yml
```
keys: [name, type, description, package, core_version_requirement, dependencies]
```

### web/modules/contrib/webform/modules/webform_scheduled_email/webform_scheduled_email.module
```
function webform_scheduled_email_config_schema_info_alter(&$definitions) {
function webform_scheduled_email_entity_update(EntityInterface $entity) {
function webform_scheduled_email_entity_predelete(EntityInterface $entity) {
function webform_scheduled_email_webform_delete(WebformInterface $webform) {
function webform_scheduled_email_webform_submission_delete(WebformSubmissionInterface $webform_submission) {
function webform_scheduled_email_cron() {
function webform_scheduled_email_theme() {
function webform_scheduled_email_form_webform_admin_config_handlers_form_alter(&$form, FormStateInterface $form_state) {
function _webform_scheduled_email_form_webform_admin_config_handlers_form_submit(&$form, FormStateInterface $form_state)
```

### web/modules/contrib/webform/modules/webform_scheduled_email/webform_scheduled_email.services.yml
```
keys: [services]
```

### web/modules/contrib/webform/modules/webform_scheduled_email/drush/webform_scheduled_email.drush.inc
```
function webform_scheduled_email_drush_command() {
function webform_scheduled_email_help($section) {
function webform_scheduled_email_cron_process($webform_id = NULL, $handler_id = NULL) {
```

### web/modules/contrib/webform/modules/webform_scheduled_email/drush.services.yml
```
keys: [services]
```

### web/modules/contrib/webform/modules/webform_scheduled_email/src/WebformScheduledEmailManager.php
```
class WebformScheduledEmailManager
  function getDateType()
  function getDateTypeLabel()
  function getDateFormat()
  function getDateFormatLabel()
  function hasScheduledEmail(WebformSubmissionInterface $webform_submission, $handler_id)
  function load(WebformSubmissionInterface $webform_submission, $handler_id)
  function getSendDate(WebformSubmissionInterface $webform_submission, $handler_id)
  function schedule(EntityInterface $entity, $handler_id)
```

### web/modules/contrib/webform/modules/webform_scheduled_email/src/WebformScheduledEmailManagerInterface.php
```
interface WebformScheduledEmailManagerInterface
  function getDateType()
  function getDateTypeLabel()
  function getDateFormat()
  function getDateFormatLabel()
  function hasScheduledEmail(WebformSubmissionInterface $webform_submission, $handler_id)
  function load(WebformSubmissionInterface $webform_submission, $handler_id)
  function getSendDate(WebformSubmissionInterface $webform_submission, $handler_id)
  function schedule(EntityInterface $entity, $handler_id)
```

### web/modules/contrib/webform/modules/webform_scheduled_email/webform_scheduled_email.install
```
function webform_scheduled_email_schema() {
function webform_scheduled_email_update_8001() {
function webform_scheduled_email_update_8002() {
function webform_scheduled_email_update_8003() {
function webform_scheduled_email_update_8004() {
```

### web/modules/contrib/webform/modules/webform_scheduled_email/webform_scheduled_email.info.yml
```
keys: [name, type, description, package, core_version_requirement, dependencies]
```

### web/modules/contrib/webform/modules/webform_submission_export_import/webform_submission_export_import.module
```
function webform_submission_export_import_webform_help_info() {
function webform_submission_export_import_local_tasks_alter(&$local_tasks) {
function _webform_submission_export_import_file_save_upload_single(\SplFileInfo $file_info, $form_field_name, array $val
```

### web/modules/contrib/webform/modules/webform_submission_export_import/webform_submission_export_import.services.yml
```
keys: [services]
```

### web/modules/contrib/webform/modules/webform_submission_export_import/src/WebformSubmissionExportImportImporter.php
```
class WebformSubmissionExportImportImporter
  function setWebform(?WebformInterface $webform = NULL)
  function getWebform()
  function setSourceEntity(?EntityInterface $entity = NULL)
  function getSourceEntity()
  function getImportUri()
  function setImportUri($uri)
  function deleteImportUri()
  function getImportOptions()
```

### web/modules/contrib/webform/modules/webform_submission_export_import/src/WebformSubmissionExportImportImporterInterface.php
```
interface WebformSubmissionExportImportImporterInterface
  function setWebform(?WebformInterface $webform = NULL)
  function getWebform()
  function setSourceEntity(?EntityInterface $entity = NULL)
  function getSourceEntity()
  function getImportUri()
  function setImportUri($uri)
  function deleteImportUri()
  function getImportOptions()
```

### web/modules/contrib/webform/modules/webform_submission_export_import/webform_submission_export_import.info.yml
```
keys: [name, type, description, package, core_version_requirement, dependencies]
```

### web/modules/contrib/webform/modules/webform_example_composite/css/webform_example_composite.css
```
.webform_example_composite_multiple-table--sex
```

### web/modules/contrib/webform/modules/webform_example_composite/webform_example_composite.libraries.yml
```
keys: [webform_example_composite]
```

### web/modules/contrib/webform/modules/webform_example_composite/webform_example_composite.info.yml
```
keys: [name, type, description, package, core_version_requirement, dependencies]
```

### web/modules/contrib/webform/modules/webform_example_composite/webform_example_composite.module
```
function webform_example_composite_theme() {
function template_preprocess_webform_example_composite(array &$variables) {
```

### web/modules/contrib/webform/modules/webform_example_composite/webform_example_composite.services.yml
```
keys: [services]
```

### web/modules/contrib/webform/modules/webform_example_custom_form/webform_example_custom_form.info.yml
```
keys: [name, type, description, package, core_version_requirement, configure, dependencies]
```

### web/modules/contrib/webform/modules/webform_ui/webform_ui.services.yml
```
keys: [services]
```

### web/modules/contrib/webform/modules/webform_ui/css/webform_ui.module.css
```
.action-links
.webform-ui-elements-table
.webform-ui-elements-table
.webform-ui-elements-table
.webform-ui-elements-table
.webform-ui-elements-table
.webform-ui-elements-table
.webform-ui-elements-table
```

### web/modules/contrib/webform/modules/webform_ui/webform_ui.info.yml
```
keys: [name, type, description, package, core_version_requirement, dependencies]
```

### web/modules/contrib/webform/modules/webform_ui/webform_ui.libraries.yml
```
keys: [webform_ui]
```

### web/modules/contrib/webform/modules/webform_ui/src/WebformUiEntityElementsForm.php
```
class WebformUiEntityElementsForm
  static function create(ContainerInterface $container)
  function buildForm(array $form, FormStateInterface $form_state)
  function validateForm(array &$form, FormStateInterface $form_state)
```

### web/modules/contrib/webform/modules/webform_ui/src/WebformUiOptionsForm.php
```
class WebformUiOptionsForm
  function editForm(array $form, FormStateInterface $form_state)
  function afterBuild(array $element, FormStateInterface $form_state)
  function copyFormValuesToEntity(EntityInterface $entity, array $form, FormStateInterface $form_state)
```

### web/modules/contrib/webform/modules/webform_ui/webform_ui.module
```
function webform_ui_entity_type_alter(array &$entity_types) {
function webform_ui_preprocess_menu_local_action(&$variables) {
```

### web/modules/contrib/webform/modules/webform_jqueryui_datepicker/webform_jqueryui_datepicker.services.yml
```
keys: [services]
```

### web/modules/contrib/webform/modules/webform_jqueryui_datepicker/webform_jqueryui_datepicker.info.yml
```
keys: [name, type, description, package, core_version_requirement, lifecycle, lifecycle_link, dependencies]
```

### web/modules/contrib/webform/modules/webform_jqueryui_datepicker/webform_jqueryui_datepicker.module
```
function webform_jqueryui_datepicker_webform_element_default_properties_alter(array &$properties, array &$definition) {
function webform_jqueryui_datepicker_webform_element_configuration_form_alter(&$form, FormStateInterface $form_state) {
function webform_jqueryui_datepicker_webform_element_alter(array &$element, FormStateInterface $form_state, array $conte
function _webform_jqueryui_datepicker_set_default_value(array &$element) {
function _webform_jqueryui_datepicker_format_date($custom_format, $timestamp = NULL) {
```

### web/modules/contrib/webform/modules/webform_jqueryui_datepicker/css/webform_jqueryui_datepicker.element.css
```
.ui-datepicker-trigger
```

### web/modules/contrib/webform/modules/webform_options_limit/webform_options_limit.services.yml
```
keys: [services]
```

### web/modules/contrib/webform/modules/webform_options_limit/webform_options_limit.module
```
function webform_options_limit_webform_help_info() {
function webform_options_limit_theme() {
function webform_options_limit_local_tasks_alter(&$local_tasks) {
```

### web/modules/contrib/webform/modules/webform_options_limit/webform_options_limit.info.yml
```
keys: [name, type, description, package, core_version_requirement, dependencies]
```

### web/modules/contrib/webform/modules/webform_options_limit/webform_options_limit.install
```
function webform_options_limit_update_8001() {
function webform_options_limit_update_8002() {
```

### web/modules/contrib/webform/modules/webform_example_element/webform_example_element.info.yml
```
keys: [name, type, description, package, core_version_requirement, dependencies]
```

### web/modules/contrib/webform/modules/webform_example_element_properties/webform_example_element_properties.info.yml
```
keys: [name, type, description, package, core_version_requirement, dependencies]
```

### web/modules/contrib/webform/modules/webform_example_element_properties/webform_example_element_properties.module
```
function webform_example_element_properties_webform_element_default_properties_alter(array &$properties, array &$definit
function webform_example_element_properties_webform_element_translatable_properties_alter(array &$properties, array &$de
function webform_example_element_properties_webform_element_configuration_form_alter(&$form, FormStateInterface $form_st
function webform_example_element_properties_webform_element_alter(array &$element, FormStateInterface $form_state, array
```

### web/modules/contrib/webform/modules/webform_example_element_properties/webform_example_element_properties.services.yml
```
keys: [services]
```

### web/modules/contrib/webform/modules/webform_attachment/webform_attachment.info.yml
```
keys: [name, type, description, package, core_version_requirement, dependencies]
```

### web/modules/contrib/webform/modules/webform_example_remote_post/webform_example_remote_post.info.yml
```
keys: [name, type, description, package, core_version_requirement, dependencies]
```

### web/modules/contrib/webform/css/webform.element.video_file.css
```
.webform-video-file
```

### web/modules/contrib/webform/css/webform.element.states.css
```
.webform-states-table
.webform-states-table--state
.webform-states-table--condition
.webform-states-table--condition
.webform-states-table--condition
.webform-states-table
.webform-states-table
.webform-states-table
```

### web/modules/contrib/webform/css/webform.form.tabs.css
```
.webform-tabs
.webform-tabs
```

### web/modules/contrib/webform/css/webform.progress.tracker.css
```
.webform-progress-tracker
.webform-progress-tracker
.webform-progress-tracker
.webform-progress-tracker
.webform-progress-tracker
.webform-progress-tracker
.webform-progress-tracker
.webform-progress-tracker
```

### web/modules/contrib/webform/css/webform.theme.seven.css
```
.ui-accordion-icons
.webform-ui-dialog
.webform-ui-dialog
.webform-ui-dialog
.ui-dialog
.ui-dialog
.ui-dialog
.ui-dialog
```

### web/modules/contrib/webform/css/webform.element.signature.css
```
.webform-signature-pad
.webform-signature-pad
.webform-signature-pad
.webform-signature-pad
.webform-signature-pad-image
```

### web/modules/contrib/webform/css/webform.admin.toolbar.css
```
.toolbar-bar
.toolbar-bar
.toolbar-bar
```

### web/modules/contrib/webform/css/webform.admin.composite.css
```
.webform-admin-composite-elements
.webform-admin-composite-elements
.webform-admin-composite-elements
.webform-admin-composite-elements
.webform-admin-composite-elements
```

### web/modules/contrib/webform/css/webform.theme.claro.css
```
.webform-tabs
.webform-tabs
.webform-message
.tableselect-sort
.tableselect-sort
.webform-results-table
.webform-multiple-table
.webform-states-table
```

### web/modules/contrib/webform/css/webform.element.term_checkboxes.css
```
.webform-term-checkboxes-scroll
```

### web/modules/contrib/webform/css/webform.token.css
```
.token-tree
```

### web/modules/contrib/webform/css/webform.composite.telephone.css
```
.webform-type-webform-telephone
.webform-type-webform-telephone
.webform-type-webform-telephone
```

### web/modules/contrib/webform/css/webform.wizard.pages.css
```
.webform-wizard-pages-links
.webform-wizard-page-edit
.webform-wizard-page-edit
```

### web/modules/contrib/webform/css/webform.element.tableselect.css
```
.tableselect
.tableselect
```

### web/modules/contrib/webform/css/webform.element.likert.css
```
.webform-likert-table-wrapper
.webform-likert-table-wrapper
.webform-likert-table-wrapper
.webform-likert-table-wrapper
.webform-likert-table-wrapper
```

### web/modules/contrib/webform/css/webform.theme.bartik.css
```
.webform-form
.webform-form
.webform-submission-form
.webform-submission-form
.webform-submission-form
.webform-submission-form
.webform-states-table
.webform-states-table
```

### web/modules/contrib/webform/css/webform.element.tableselect_sort.css
```
.tableselect-sort
.tableselect-sort
```

### web/modules/contrib/webform/css/webform.element.color.css
```
.webform-submission-form
.webform-submission-form
.webform-submission-form
```

### web/modules/contrib/webform/css/webform.element.file.button.css
```
.webform-file-button-input
```

### web/modules/contrib/webform/css/webform.admin.settings.css
```
.webform-settings-form
```

### web/modules/contrib/webform/css/webform.element.help.css
```
.webform-element-help
.webform-element-help
.webform-element-help
.webform-element-help
.webform-element-help--title
.webform-element-help--content
.webform-element-help--content
.webform-element-help--content
```

### web/modules/contrib/webform/css/webform.element.choices.css
```
.webform-element--title-inline
.choices
.choices
```

### web/modules/contrib/webform/css/webform.confirmation.css
```
.webform-confirmation__message
.webform-confirmation__back
```

### web/modules/contrib/webform/css/webform.theme.olivero.css
```
.tableselect-sort
.webform-message__link
.webform-message
```

### web/modules/contrib/webform/css/webform.admin.translation.css
```
.webform-translation-source
```

### web/modules/contrib/webform/css/webform.element.computed.css
```
.webform-computed-loading
```

### web/modules/contrib/webform/css/webform.admin.css
```
.webform-form
.webform-bulk-form
.webform-submission-information
.webform-results-table
.webform-results-table
.webform-results-table
.webform-results-table__icon
.webform-results-table
```

### web/modules/contrib/webform/css/webform.element.datelist.css
```
.form-type-datelist
```

### web/modules/contrib/webform/css/webform.element.message.info.css
```
.messages
```

### web/modules/contrib/webform/css/webform.element.checkbox_value.css
```
.form-item
```

### web/modules/contrib/webform/css/webform.theme.classy.css
```
.ui-datepicker
.webform-ajax-form-wrapper
```

### web/modules/contrib/webform/css/webform.element.options.css
```
.webform-options-display-side-by-side
.webform-options-display-buttons
.form-composite
.webform-options-display-buttons
.webform-options-display-buttons
.webform-options-display-buttons
.webform-options-display-buttons
.webform-options-display-buttons
```

### web/modules/contrib/webform/css/webform.help.css
```
.block-help
.webform-help
.webform-help
.webform-help
.webform-help-video-youtube
.webform-help-video-youtube--container
.webform-help-video-youtube
.webform-help-links
```

### web/modules/contrib/webform/css/webform.progress.css
```
.webform-progress__status
```

### web/modules/contrib/webform/css/webform.element.managed_file.css
```
.webform-managed-file-preview-wrapper
.webform-managed-file-preview-wrapper
.webform-managed-file-preview
.webform-managed-file-preview
.webform-managed-file-preview-wrapper
.webform-managed-file-preview-wrapper
.webform-managed-file-preview
.webform-managed-file-placeholder
```

### web/modules/contrib/webform/css/webform.help.support.css
```
.webform-help-support
.webform-help-support__header
.webform-help-support__header-more
.webform-help-support__item
.webform-help-support__item-icon
.webform-help-support__item-icon
.webform-help-support__item-icon--contribute
.webform-help-support__item-icon--join
```

### web/modules/contrib/webform/css/webform.element.select2.css
```
.select2-container--open
```

### web/modules/contrib/webform/css/webform.element.details.toggle.css
```
.webform-details-toggle-state-wrapper
.webform-details-toggle-state-wrapper
.webform-details-toggle-state
.webform-details-toggle-state
.webform-details-toggle-statelink
.webform-tabs
```

### web/modules/contrib/webform/css/webform.element.more.css
```
.webform-element-more--link
.webform-element-more--link
.webform-element-more
.webform-element-more--content
.webform-element-more--content
```

### web/modules/contrib/webform/css/webform.element.text_format.css
```
.webform-text-format-help-dialog
```

### web/modules/contrib/webform/css/webform.admin.tabledrag.css
```
.tabledrag-toggle-weight-wrapper
.tabledrag-toggle-weight-wrapper
.webform-tabledrag-hide
```

### web/modules/contrib/webform/css/webform.ajax.css
```
.ajax-progress
.webform-ajax-messages
.webform-ajax-messages
.webform-ajax-messages
.webform-ui-dialog
.toolbar-tray-open
```

### web/modules/contrib/webform/css/webform.element.image_file.css
```
.webform-image-file-modal
```

### web/modules/contrib/webform/css/webform.element.excluded_elements.css
```
.webform-excluded-elements--child
```

### web/modules/contrib/webform/css/webform.element.table.css
```
.webform-table
.webform-table
.webform-table
.webform-table
.webform-table
.webform-table
.webform-table
.webform-table
```

### web/modules/contrib/webform/css/webform.element.multiple.css
```
.form-type-webform-multiple
.webform-multiple-table
.webform-multiple-table
.webform-multiple-table
.webform-multiple-table
.webform-multiple-table
.webform-multiple-table
.webform-multiple-table
```

### web/modules/contrib/webform/css/webform.block.submission_limit.css
```
.block-webform-submission-limit-block
```

### web/modules/contrib/webform/css/webform.promotions.css
```
.webform-message
```

### web/modules/contrib/webform/css/webform.element.message.css
```
.webform-message--close
.webform-message--close
.webform-message__link
.webform-message__link
.webform-message__link
.webform-message__link
.webform-message__link
.js-webform-message--close
```

### web/modules/contrib/webform/css/webform.element.scale.css
```
.webform-scale
.webform-scale-options
.webform-scale-options
.webform-scale-option
.webform-scale-options
.webform-scale-options
.webform-scale-options
.webform-scale-text
```

### web/modules/contrib/webform/css/webform.element.counter.css
```
.text-count-wrapper
```

### web/modules/contrib/webform/css/webform.filter.css
```
.webform-filter-form
.webform-filter-form
.webform-filter-form
.webform-filter-form
.webform-form-filter
.webform-form-filter
.webform-form-filter
.webform-form-filter
```

### web/modules/contrib/webform/css/webform.element.mapping.css
```
.webform-mapping-table
.webform-mapping-table
.webform-mapping-table
```

### web/modules/contrib/webform/css/webform.element.range.css
```
.form-type-range
.form-type-range
.form-type-range
.form-type-range
.form-type-range
.form-type-range
```

### web/modules/contrib/webform/css/webform.navigation.css
```
.webform-submission-navigation
.webform-submission-pager
.webform-submission-pager__item
.webform-submission-pager__item--previous
.webform-submission-pager__item--next
```

### web/modules/contrib/webform/css/webform.element.terms_of_service.css
```
.webform-terms-of-service-details
.webform-terms-of-service-details--title
```

### web/modules/contrib/webform/css/webform.element.date.css
```
.form-item
.form-item
```

### web/modules/contrib/webform/css/webform.theme.gin.css
```
.webform-submission-bulk-form
.webform-message
.webform-message
.webform-element-help-container--title
```

### web/modules/contrib/webform/css/webform.form.css
```
.js-form-item
.js-form-submit
.js-form-wrapper
.js-webform-text-format-hidden
.form--inline
.webform-element-description
.webform-element-description
.form-item
```

### web/modules/contrib/webform/css/webform.admin.dropbutton.css
```
.webform-dropbutton
.webform-dropbutton
.js
.js
```

### web/modules/contrib/webform/css/webform.progress.bar.css
```
.webform-progress-bar
.webform-progress-bar
.webform-progress-bar
.webform-progress-bar
.webform-progress-bar
.webform-progress-bar
.webform-progress-bar
.webform-progress-bar
```

### web/modules/contrib/webform/css/webform.choices.base.css
```
.choices
.choices
.choices
```

### web/modules/contrib/webform/css/webform.element.composite.css
```
.form-type-webform-element-composite
.form-type-webform-element-composite
.form-type-webform-element-composite
.form-type-webform-element-composite
.form-type-webform-element-composite
.form-type-webform-element-composite
```

### web/modules/contrib/webform/README.md
```
h2 CONTENTS OF THIS FILE
h2 INTRODUCTION
h2 REQUIREMENTS
h2 INSTALLATION
h2 RECOMMENDED MODULES
h2 CONFIGURATION
h2 UPGRADING
h2 MAINTAINERS
```

### web/modules/contrib/admin_toolbar/admin_toolbar.info.yml
```
keys: [name, description, package, type, configure, core_version_requirement, dependencies, version, project, datestamp]
```

### web/modules/contrib/admin_toolbar/css/admin.toolbar.css
```
.toolbar-tray-horizontal
.toolbar-tray-horizontal
.toolbar-tray-horizontal
.toolbar-tray-horizontal
.toolbar-tray-horizontal
.toolbar-tray-horizontal
.toolbar-tray-horizontal
.toolbar-tray-horizontal
```

### web/modules/contrib/admin_toolbar/css/admin_toolbar.disable_sticky.css
```
.toolbar-fixed
```

### web/modules/contrib/admin_toolbar/css/admin_toolbar.sticky_behavior.css
```
.toolbar-horizontal
```

### web/modules/contrib/admin_toolbar/css/admin_toolbar.toggle_shortcut.css
```
.toolbar-oriented
.toolbar-icon-collapse
.toolbar-expand-floating-button
.toolbar-expand-floating-button__icon
```

### web/modules/contrib/admin_toolbar/admin_toolbar_tools/config/install/admin_toolbar_tools.settings.yml
```
keys: [max_bundle_number, show_local_tasks]
```

### web/modules/contrib/admin_toolbar/admin_toolbar_tools/admin_toolbar_tools.post_update.php
```
function admin_toolbar_tools_post_update_helper_added_config_factory()
```

### web/modules/contrib/admin_toolbar/admin_toolbar_tools/admin_toolbar_tools.services.yml
```
keys: [services]
```

### web/modules/contrib/admin_toolbar/admin_toolbar_tools/admin_toolbar_tools.install
```
function admin_toolbar_tools_update_8001() {
function admin_toolbar_tools_update_8201() {
function admin_toolbar_tools_update_8202() {
function admin_toolbar_tools_update_8203() {
```

### web/modules/contrib/admin_toolbar/admin_toolbar_tools/README.md
```
h1 Admin Toolbar Tools
h2 Table of contents
h2 Requirements
h2 Installation
h2 Configuration
h2 Maintainers
```

### web/modules/contrib/admin_toolbar/admin_toolbar_tools/admin_toolbar_tools.module
```
function admin_toolbar_tools_toolbar() {
function admin_toolbar_tools_help($route_name, RouteMatchInterface $route_match) {
function admin_toolbar_tools_entity_insert(EntityInterface $entity) {
function admin_toolbar_tools_entity_update(EntityInterface $entity) {
function admin_toolbar_tools_entity_delete(EntityInterface $entity) {
function admin_toolbar_tools_form_project_browser_settings_alter(&$form) {
function admin_toolbar_tools_project_browser_settings_submit(&$form) {
```

### web/modules/contrib/admin_toolbar/admin_toolbar_tools/css/admin_toolbar_tools.css
```
.toolbar-icon-admin-toolbar-tools-help
.local-tasks-toolbar-tab
```

### web/modules/contrib/admin_toolbar/admin_toolbar_tools/admin_toolbar_tools.info.yml
```
keys: [name, description, package, configure, type, core_version_requirement, version, project, datestamp]
```

### web/modules/contrib/admin_toolbar/admin_toolbar_tools/src/Form/AdminToolbarToolsSettingsForm.php
```
class AdminToolbarToolsSettingsForm
  static function create(ContainerInterface $container)
  function getEditableConfigNames()
  function getFormId()
  function buildForm(array $form, FormStateInterface $form_state)
  function submitForm(array &$form, FormStateInterface $form_state)
```

### web/modules/contrib/admin_toolbar/admin_toolbar_tools/src/AdminToolbarToolsHelper.php
```
class AdminToolbarToolsHelper
  function buildLocalTasksToolbar()
```

### web/modules/contrib/admin_toolbar/admin_toolbar_tools/src/Controller/ToolbarController.php
```
class ToolbarController
  static function create(ContainerInterface $container)
  function reloadPage()
  function flushAll()
  function flushJsCss()
  function flushPlugins()
  function flushStatic()
  function flushMenu()
  function flushViews()
```

### web/modules/contrib/admin_toolbar/admin_toolbar.install
```
function admin_toolbar_update_8001() {
function admin_toolbar_update_8002() {
function admin_toolbar_update_8003() {
function admin_toolbar_update_8004() {
function admin_toolbar_update_8005() {
```

### web/modules/contrib/admin_toolbar/src/Form/AdminToolbarSettingsForm.php
```
class AdminToolbarSettingsForm
  static function create(ContainerInterface $container)
  function getEditableConfigNames()
  function getFormId()
  function buildForm(array $form, FormStateInterface $form_state)
  function submitForm(array &$form, FormStateInterface $form_state)
```

### web/modules/contrib/admin_toolbar/src/Render/Element/AdminToolbar.php
```
class AdminToolbar
  static function trustedCallbacks()
  static function preRenderTray(array $build)
```

### web/modules/contrib/admin_toolbar/admin_toolbar.module
```
function admin_toolbar_help($route_name) {
function admin_toolbar_toolbar_alter(&$items) {
function toolbar_tools_menu_navigation_links(array $tree) {
```

### web/modules/contrib/admin_toolbar/README.md
```
h1 Admin Toolbar
h2 Table of contents
h2 Requirements
h2 Recommended modules
h2 Installation
h2 Configuration
h2 Maintainers
```

### web/modules/contrib/admin_toolbar/config/install/admin_toolbar.settings.yml
```
keys: [enable_toggle_shortcut, menu_depth, sticky_behavior, hoverintent_behavior]
```

### web/modules/contrib/admin_toolbar/.gitlab-ci.yml
```
keys: [include, variables, composer, phpcs, stylelint]
```

### web/modules/contrib/admin_toolbar/tests/src/Traits/AdminToolbarHelperTestTrait.php
```
trait AdminToolbarHelperTestTrait
  function assertAdminToolbarMenuLinkExists(string $link_url = '', string $link_text = '', int $link_position = 0, string $link_css_class = '')
  function assertAdminToolbarMenuLinkNotExists(string $link_url)
```

### web/modules/contrib/admin_toolbar/tests/src/Functional/AdminToolbarAdminMenuTest.php
```
class AdminToolbarAdminMenuTest
  function testSubtreesJsonRequest() → void
```

### web/modules/contrib/admin_toolbar/tests/src/Functional/AdminToolbarSettingsFormTest.php
```
class AdminToolbarSettingsFormTest
  function setUp() → void
  function testAdminToolbarSettingsForm() → void
```

### web/modules/contrib/admin_toolbar/admin_toolbar_links_access_filter/admin_toolbar_links_access_filter.module
```
function admin_toolbar_links_access_filter_help($route_name, RouteMatchInterface $route_match) {
function admin_toolbar_links_access_filter_preprocess_menu(&$variables) {
function admin_toolbar_links_access_filter_filter_non_accessible_links(array &$items) {
function admin_toolbar_links_access_filter_is_overview_page($route_name) {
function admin_toolbar_links_access_filter_user_has_admin_role(AccountInterface $account) {
```

### web/modules/contrib/admin_toolbar/admin_toolbar_links_access_filter/admin_toolbar_links_access_filter.info.yml
```
keys: [name, description, package, type, core_version_requirement, dependencies, lifecycle, lifecycle_link, version, project, datestamp]
```

### web/modules/contrib/admin_toolbar/admin_toolbar_links_access_filter/admin_toolbar_links_access_filter.install
```
function admin_toolbar_links_access_filter_requirements($phase) {
```

### web/modules/contrib/admin_toolbar/admin_toolbar_search/README.md
```
h1 Admin Toolbar Search
h2 Table of contents
h2 Requirements
h2 Installation
h2 Configuration
h3 Display the search input in the tray of a toolbar item tab:
h3 Search focus keyboard shortcut: Alt + a
```

### web/modules/contrib/admin_toolbar/admin_toolbar_search/css/admin_toolbar_search.css
```
.admin-toolbar-search-autocomplete-list
```

### web/modules/contrib/admin_toolbar/admin_toolbar_search/admin_toolbar_search.libraries.yml
```
keys: [admin_toolbar_search]
```

### web/modules/contrib/admin_toolbar/admin_toolbar_search/admin_toolbar_search.info.yml
```
keys: [name, description, package, type, core_version_requirement, configure, dependencies, version, project, datestamp]
```

### web/modules/contrib/admin_toolbar/admin_toolbar_search/src/Form/AdminToolbarSearchSettingsForm.php
```
class AdminToolbarSearchSettingsForm
  function getFormId()
  function getEditableConfigNames()
  function buildForm(array $form, FormStateInterface $form_state)
  function submitForm(array &$form, FormStateInterface $form_state)
```

### web/modules/contrib/admin_toolbar/admin_toolbar_search/src/SearchLinks.php
```
class SearchLinks
  function getLinks()
```

### web/modules/contrib/admin_toolbar/admin_toolbar_search/src/Controller/AdminToolbarSearchController.php
```
class AdminToolbarSearchController
  static function create(ContainerInterface $container)
  function search()
```

### web/modules/contrib/admin_toolbar/admin_toolbar_search/admin_toolbar_search.module
```
function admin_toolbar_search_help($route_name) {
function admin_toolbar_search_toolbar() {
```

### web/modules/contrib/admin_toolbar/admin_toolbar_search/admin_toolbar_search.services.yml
```
keys: [services]
```

### web/modules/contrib/admin_toolbar/admin_toolbar_search/admin_toolbar_search.install
```
function admin_toolbar_search_update_8001() {
function admin_toolbar_search_update_8002() {
```

### web/modules/contrib/admin_toolbar/admin_toolbar_search/config/install/admin_toolbar_search.settings.yml
```
keys: [display_menu_item, enable_keyboard_shortcut]
```

### web/modules/custom/ui_builder/src/Form/BaseStylesForm.php
```
class BaseStylesForm
  function getFormId()
  function getEditableConfigNames()
  function buildForm(array $form, FormStateInterface $form_state)
  function submitForm(array &$form, FormStateInterface $form_state)
```

### web/sites/default/files/php/twig/69ff666937984_field--node--title.html.t_MJrLw75yY5EgtVUWAisEkTHIY/38o0hh14y7PEeC_201pMdKAvGFyOOohcEEVBxGBUgCo.php
```
class __TwigTemplate_af94c72acee5322d0fd8ab3a2777916a
  function doDisplay(array $context, array $blocks = []) → iterable
  function getTemplateName() → string
  function isTraitable() → bool
  function getDebugInfo() → array
  function getSourceContext() → Source
  function checkSecurity()
```

### web/sites/default/files/php/twig/69ff666937984___string_template__15e4c2_PCNrzK-pcj1SmJic1v9qe8A5I/fRaDHMYywlm_dqs2andIXik07_9SjaC5XU8u-K0ZTFs.php
```
class __TwigTemplate_8773e8ec2da1cec9ef4f1ce330c48f07
  function doDisplay(array $context, array $blocks = []) → iterable
  function getTemplateName() → string
  function isTraitable() → bool
  function getDebugInfo() → array
  function getSourceContext() → Source
  function checkSecurity()
```

### web/sites/default/files/php/twig/69ff666937984_field--node--created.html_kB3RS6IL8GMKMOoC8OA7AWCdi/1LQWkCmw00R-DDuQRRmuG7eaTAComhWK07qUN9zxVGI.php
```
class __TwigTemplate_5c3518e04cbb4a0cae858802d3b5dafa
  function doDisplay(array $context, array $blocks = []) → iterable
  function getTemplateName() → string
  function isTraitable() → bool
  function getDebugInfo() → array
  function getSourceContext() → Source
  function checkSecurity()
```

### web/sites/default/files/php/twig/69ff666937984_time.html.twig_17YLN9qi3EzC9LnW0o3wX7FBy/H32KWhJXxPHUKuVkk3h02Iq1Sgt0m2sxzxszPD3c8tc.php
```
class __TwigTemplate_73ccc53fa13ca192e20c0a137f946c8a
  function doDisplay(array $context, array $blocks = []) → iterable
  function getTemplateName() → string
  function isTraitable() → bool
  function getDebugInfo() → array
  function getSourceContext() → Source
  function checkSecurity()
```

### web/sites/default/files/php/twig/69ff666937984_field--node--uid.html.twi_6kFi-BkV7YIzuGhMUcEIWRlDe/ZUgO_4I7avR6VHCMbqJGsPihw3Lyu5lU4Qof0SO9O0k.php
```
class __TwigTemplate_7e588215daf2f0b4e77f31765afc45ed
  function doDisplay(array $context, array $blocks = []) → iterable
  function getTemplateName() → string
  function isTraitable() → bool
  function getDebugInfo() → array
  function getSourceContext() → Source
  function checkSecurity()
```

### web/sites/default/files/php/twig/69ff666937984_username.html.twig_97Zvg7-Uj4d0WBIeIi5KHu0NE/9vY0A-dpEtrQlArF3_kcyB32x9triZttpXM92D23MD4.php
```
class __TwigTemplate_ba9060540a193c6cbfa662d20dc390bb
  function doDisplay(array $context, array $blocks = []) → iterable
  function getTemplateName() → string
  function isTraitable() → bool
  function getDebugInfo() → array
  function getSourceContext() → Source
  function checkSecurity()
```

### web/sites/default/files/php/twig/69ff666937984_node.html.twig_Z9A4U8mCuqVbnIZKXCrmZo37z/C7Hv3ANwRFviEnH8Som7YPfvuc8M0xtRCxIVTQ-mDu8.php
```
class __TwigTemplate_8b162450f1e3195db3bfc672ca19762c
  function doDisplay(array $context, array $blocks = []) → iterable
```

### web/sites/default/files/php/twig/69ff666937984_field--ui-builder-clean.h_93M6aNy68f00hxbZZrYRGgU94/VorxfqTDv0QaiR5fHruJiZm1yiIq-p-sKSpRCgyXs9I.php
```
class __TwigTemplate_84317e4ec0981c4621d30a1da9e74f1a
  function doDisplay(array $context, array $blocks = []) → iterable
  function getTemplateName() → string
  function isTraitable() → bool
  function getDebugInfo() → array
  function getSourceContext() → Source
  function checkSecurity()
```

### web/sites/default/files/php/twig/69ff666937984_container.html.twig_ZoFleHNtKcfUIkwNPo00D_3fL/KbwcJdczAXchgEhZPguElLA-fpYEz6Pl-CY2xR7YUPk.php
```
class __TwigTemplate_900fbeaf17aec733f6ca44253d4dce41
  function doDisplay(array $context, array $blocks = []) → iterable
  function getTemplateName() → string
  function isTraitable() → bool
  function getDebugInfo() → array
  function getSourceContext() → Source
  function checkSecurity()
```

### web/sites/default/files/php/twig/69ff666937984_html.html.twig_pXtHyhnFrjPsxyxCbGUT0uDEk/_YD8MjQ0l6T56u4_hq_jr2i8vpAhy3utXT0hijimRSg.php
```
class __TwigTemplate_a7640cd1d90604c85de64bcb29072c54
  function doDisplay(array $context, array $blocks = []) → iterable
```

### web/sites/default/files/php/twig/69ff666937984_menu--toolbar.html.twig_tNQBpxJGJwNRR6i7dcgq1OPPR/ZNEhux1k5WQpSqN5IYWYDN048EakqJIgSz0gp1tRZWs.php
```
class __TwigTemplate_2886a9b6ccb467dc21b6a545c9c2ceef
  function doDisplay(array $context, array $blocks = []) → iterable
  function macro_menu_links($items = null, $attributes = null, $menu_level = null, ...$varargs) → string|Markup
```

### web/sites/default/files/php/twig/69ff666937984_toolbar.html.twig_MLFrkVrKrI8umgSQfvnjcWqeQ/Q_4EndQqWTxPrpjM1lO7fnpa-S_By9OlpZaKrh8UA1I.php
```
class __TwigTemplate_a2ae324dd1da7c2d8acf160df8482085
  function doDisplay(array $context, array $blocks = []) → iterable
```

### web/sites/default/files/php/twig/69ff666937984_page.html.twig_mE78e7wrOWV-gtnnVQ6PlvtJk/mZooWEDIztxYEgTp_h2IgJBg7ig5rw5MYiuJ5fvY3us.php
```
class __TwigTemplate_b5dddc8f9239969a1df2a0b1bfaab8dd
  function doDisplay(array $context, array $blocks = []) → iterable
class __TwigTemplate_b5dddc8f9239969a1df2a0b1bfaab8dd___1999379330
  function doGetParent(array $context) → bool|string|Template|Temp
  function doDisplay(array $context, array $blocks = []) → iterable
  function block_navigation(array $context, array $blocks = []) → iterable
  function getTemplateName() → string
  function isTraitable() → bool
  function getDebugInfo() → array
  function getSourceContext() → Source
  function checkSecurity()
class __TwigTemplate_b5dddc8f9239969a1df2a0b1bfaab8dd___816353008
  function doGetParent(array $context) → bool|string|Template|Temp
  function doDisplay(array $context, array $blocks = []) → iterable
  function block_footer_company(array $context, array $blocks = []) → iterable
  function block_footer_help(array $context, array $blocks = []) → iterable
  function block_footer_faq(array $context, array $blocks = []) → iterable
  function block_footer_resources(array $context, array $blocks = []) → iterable
  function getTemplateName() → string
  function isTraitable() → bool
```

### web/sites/default/files/php/twig/69ff666937984_region.html.twig_ilv_WPJBl8HuY1P4svlayFcGH/OHrULVHzPP_sQ69dJCzVkTGGOPzh4kzqI0pZKVJf39k.php
```
class __TwigTemplate_cdcdafbd202badffb5afa049f20a35b9
  function doDisplay(array $context, array $blocks = []) → iterable
  function getTemplateName() → string
  function isTraitable() → bool
  function getDebugInfo() → array
  function getSourceContext() → Source
  function checkSecurity()
```

### web/sites/default/files/php/twig/69ff666937984_custom_theme_header_WRgfPBlmGD6Dkg7Ztx-L8m7tG/pEly5QEWXh63xkfQUEAwIyGkalPH-W8auHf-75H6vhE.php
```
class __TwigTemplate_26fa116a8f73504f22cef2861811101a
  function doDisplay(array $context, array $blocks = []) → iterable
```

### web/sites/default/files/php/twig/69ff666937984_block--system-messages-bl_gJGbxPkbf1iV7M9R1TG-54Ygw/jH5C495V0M0K9d9TRhsA3zjo9OnU6B7lIoDg4-lOvZc.php
```
class __TwigTemplate_b0270573adeab98cb0495e8b90b7b7db
  function doDisplay(array $context, array $blocks = []) → iterable
  function getTemplateName() → string
  function isTraitable() → bool
  function getDebugInfo() → array
  function getSourceContext() → Source
  function checkSecurity()
```

### web/sites/default/files/php/twig/69ff666937984_block.html.twig_I-ccajSBIG8KFapsG0G63iBV_/tmM7UAqP3hUoXiyCeOswLNiytotlVLtv-uXquJP8xVw.php
```
class __TwigTemplate_b8d1c7342e73ace73d12a47c432d5ba6
  function doDisplay(array $context, array $blocks = []) → iterable
  function block_content(array $context, array $blocks = []) → iterable
  function getTemplateName() → string
  function isTraitable() → bool
  function getDebugInfo() → array
  function getSourceContext() → Source
  function checkSecurity()
```

### web/sites/default/files/php/twig/69ff666937984_webform-html-editor-marku_-gPQdOkvMOZztBUwTxLkYMVc4/_EcNMF45EWkDRfiBw9xXubZBfUkaLm9bK1baK1zLEJg.php
```
class __TwigTemplate_7054269b0703e4697e623c80cf9fbeab
  function doDisplay(array $context, array $blocks = []) → iterable
  function getTemplateName() → string
  function isTraitable() → bool
  function getDebugInfo() → array
  function getSourceContext() → Source
  function checkSecurity()
```

### web/sites/default/files/php/twig/69ff666937984_webform-submission-form.h_JdwZi2MW3nOxpfGdUqIECEIL6/jlo9Yo3aSO3jAUWI8KCaHPwDcKCZa6-e6fxEI0q64XY.php
```
class __TwigTemplate_eb87bbc846cde23e6f0c9f4fc483a774
  function doDisplay(array $context, array $blocks = []) → iterable
  function getTemplateName() → string
  function isTraitable() → bool
  function getDebugInfo() → array
  function getSourceContext() → Source
  function checkSecurity()
```

### web/sites/default/files/php/twig/69ff666937984_input.html.twig_tcCMBBNdtrkS4P6NM74IJ7eh2/ZfADwjVZvWPs9y_psk52xOM7avUrtsuKRq_CrMcJzR8.php
```
class __TwigTemplate_09d7ca9e854045baac7b5ef2f9b0ce46
  function doDisplay(array $context, array $blocks = []) → iterable
  function getTemplateName() → string
  function isTraitable() → bool
  function getDebugInfo() → array
  function getSourceContext() → Source
  function checkSecurity()
```

### web/sites/default/files/php/twig/69ff666937984_form-element.html.twig_sHUuzcsX9Qj7aWybTQjd1SsNK/qklJ0qSwfXVK114wOVrme7ONu3UD1IH8nKF1EcfHo8I.php
```
class __TwigTemplate_f6ba5002d6c66ab50a9e185b66217001
  function doDisplay(array $context, array $blocks = []) → iterable
```

### web/sites/default/files/php/twig/69ff666937984_form-element-label.html.t_lyrBIKI8KrLbVdEZnQ7lTa5hl/D4AMj9VjLCGAw-p3ArSFDtqBz6c0jafRtcofzAU-W8k.php
```
class __TwigTemplate_312b83f9e2c82c71dd7e22785758655f
  function doDisplay(array $context, array $blocks = []) → iterable
  function getTemplateName() → string
  function isTraitable() → bool
  function getDebugInfo() → array
  function getSourceContext() → Source
  function checkSecurity()
```

### web/sites/default/files/php/twig/69ff666937984_webform-actions.html.twig_wXhZ88oPtPX8oxL1vYv183fNM/wTvcgolFgw_9lMZbXwZiZs2uG5wl7T3la06kxdlGs_A.php
```
class __TwigTemplate_e55cb8f20c10bfc8b6c4d0c8724143e3
  function doDisplay(array $context, array $blocks = []) → iterable
  function getTemplateName() → string
  function isTraitable() → bool
  function getDebugInfo() → array
  function getSourceContext() → Source
  function checkSecurity()
```

### web/sites/default/files/php/twig/69ff666937984_webform--newsletter-subsc_r4xKG1xdBWPRu9jK009IFgkJB/sTXvTSJzKAyz39XTe1cOZ26i-46H_EyTlgyhHd4IvlE.php
```
class __TwigTemplate_cf2445600ea4730aaaba8555ff5fb528
  function doDisplay(array $context, array $blocks = []) → iterable
  function getTemplateName() → string
  function isTraitable() → bool
  function getDebugInfo() → array
  function getSourceContext() → Source
  function checkSecurity()
```

### web/sites/default/files/php/twig/69ff666937984_custom_theme_newsletter_2cFfalHWA68hq_YNLuvxnSzX7/GmzLGNSU-6dEoXiKG_Cq5fx1MJ0Uah81G53Y686ho2A.php
```
class __TwigTemplate_896647163e9e9cd6f9f395800d2a791f
  function doDisplay(array $context, array $blocks = []) → iterable
  function block_form(array $context, array $blocks = []) → iterable
  function getTemplateName() → string
  function isTraitable() → bool
  function getDebugInfo() → array
  function getSourceContext() → Source
  function checkSecurity()
```

### web/sites/default/files/php/twig/69ff666937984_custom_theme_footer_q25laR92xNMKWVj2AgT5b6q9p/-Y3aNYucCm6NjQ1iacKuVfLNnFq1zKQ1YTYeISi8Wkk.php
```
class __TwigTemplate_cb825b2b465595a07448f22b9a43931e
  function doDisplay(array $context, array $blocks = []) → iterable
```

### web/sites/default/files/php/twig/69ff666937984_off-canvas-page-wrapper.h_CQUQYSSLKZ9Mom2aOU_mzVD5d/o0ShPbVXvxIN8IcM_esRV9B2XHZjL8jOXPSHSXrU9eo.php
```
class __TwigTemplate_df24814e67ed2bb3de3652cf0022892f
  function doDisplay(array $context, array $blocks = []) → iterable
  function getTemplateName() → string
  function isTraitable() → bool
  function getDebugInfo() → array
  function getSourceContext() → Source
  function checkSecurity()
```

### web/sites/default/files/php/twig/69ff666937984_big-pipe-interface-previe_7J-CV1cnprAYXetJPT_EMtCQA/sYsYsWYt5vu_HkxOR0M3b6MqpD2AhO5eJD_YSrYvhSY.php
```
class __TwigTemplate_337b319e87c4fac123058711ac12c833
  function doDisplay(array $context, array $blocks = []) → iterable
  function getTemplateName() → string
  function isTraitable() → bool
  function getDebugInfo() → array
  function getSourceContext() → Source
  function checkSecurity()
```

### web/sites/default/files/php/twig/69ff666937984_status-messages.html.twig_LNSDnP9CiMabCkz90kvK7omQt/lsOY--GZ6v1XdqYpeZeBJjZ7xxYXx30JvwYk_tG10Rg.php
```
class __TwigTemplate_b17a0bbba498e1aed4d97b46788ffda7
  function doDisplay(array $context, array $blocks = []) → iterable
  function block_messages(array $context, array $blocks = []) → iterable
```

### web/sites/default/files/php/twig/69ff666937984_links.html.twig_dKqjiMj2vGlqNqQT4uOeEO_-r/dpxQnF_XNyuIzNWxsN0QIpQkylpVT78RGN9bE8MfPV8.php
```
class __TwigTemplate_f6fdc9968ae46b0648b12d70f794e468
  function doDisplay(array $context, array $blocks = []) → iterable
```

### web/sites/default/files/php/twig/69ff666937984_block--block-content--typ_q21yBimhT7Cu8LN5Bxrd53mDI/2DQcSQMmgJzBHMgHJigxCJKd5Gb7NGsBpe1lXZyUFkY.php
```
class __TwigTemplate_cc96ee2ebcc71f41a3e9d5b8444ad3a8
  function doDisplay(array $context, array $blocks = []) → iterable
  function getTemplateName() → string
  function isTraitable() → bool
  function getDebugInfo() → array
  function getSourceContext() → Source
```

### web/sites/default/files/php/twig/69ff666937984_field.html.twig_Su2R_cBE-_ZTR3Iu3ph6goGwc/Lt1seIZZ11GvuNi0TSsZhW5mwo2cjDsRChs_O1TZd_k.php
```
class __TwigTemplate_65e190656a6016f68a46ca04c03f1ef0
  function doDisplay(array $context, array $blocks = []) → iterable
```

### web/sites/default/files/php/twig/69ff666937984_custom_theme_announcement_eZoy62qCkaEuE9hpvkwnu0eqy/LRR4imcnTAe2XmFQYnVJIXl394akj2msM7aZ3aAihms.php
```
class __TwigTemplate_ca99fc908d856096fad70301cbc11efc
  function doDisplay(array $context, array $blocks = []) → iterable
  function getTemplateName() → string
  function isTraitable() → bool
  function getDebugInfo() → array
  function getSourceContext() → Source
  function checkSecurity()
```

### web/sites/default/files/php/twig/69ff666937984_block--local-tasks-block._TMiUQJe_zto0am-fjAIG7VWVp/2x5vzFA3hHHLvfdYpMB2CJOLhqTIvP-TS1uY9DZDXMo.php
```
class __TwigTemplate_de5a7631e549e75631ea848cef7df129
  function doGetParent(array $context) → bool|string|Template|Temp
  function doDisplay(array $context, array $blocks = []) → iterable
  function block_content(array $context, array $blocks = []) → iterable
  function getTemplateName() → string
  function isTraitable() → bool
  function getDebugInfo() → array
  function getSourceContext() → Source
  function checkSecurity()
```

### web/sites/default/files/php/twig/69ff666937984_menu-local-tasks.html.twi_3_um9B5r_nG7iqfjFJw4lxAvs/lQ_KefWZDxyY99QXTTh3BUdoOmuD_XrhUQcB2vUe-lA.php
```
class __TwigTemplate_42c9ad105c4d1c34826c6ee9c1ed8c31
  function doDisplay(array $context, array $blocks = []) → iterable
  function getTemplateName() → string
  function isTraitable() → bool
  function getDebugInfo() → array
  function getSourceContext() → Source
  function checkSecurity()
```

### web/sites/default/files/php/twig/69ff666937984_menu-local-task.html.twig_gkwWHi3y-EqAX88VBy_GuJyT-/uCL-JntVcNx9pWiqtaE48CvDYKNnBW09URsIvi8k3P8.php
```
class __TwigTemplate_f11cb824cfca4f06cb0c93b66b007ba9
  function doDisplay(array $context, array $blocks = []) → iterable
  function getTemplateName() → string
  function isTraitable() → bool
  function getDebugInfo() → array
  function getSourceContext() → Source
  function checkSecurity()
```

### web/sites/default/files/php/twig/69ff666937984_block--system-menu-block.__EFDvx50yLTS31e8yuWQo_pT-/Xd6_DRsIvx0TxxV8T5-41HusF-Y4Z6Yqw868gNFWEdY.php
```
class __TwigTemplate_7b0e451ba05a0e72d8fdf7d33fe43493
  function doDisplay(array $context, array $blocks = []) → iterable
  function block_content(array $context, array $blocks = []) → iterable
  function getTemplateName() → string
```

### web/sites/default/files/php/twig/69ff666937984_menu.html.twig_J2kTg9jYOquNB0D1-dAl5zx6W/cpUqM0Imr-FGMH5qc-HsROOVqU0oLPRzBB0K77P8EuI.php
```
class __TwigTemplate_60e13ba8d037eaf737301a287df8a5c7
  function doDisplay(array $context, array $blocks = []) → iterable
  function macro_menu_links($items = null, $attributes = null, $menu_level = null, ...$varargs) → string|Markup
```

### web/sites/default/files/php/twig/69ff666937984_node-edit-form.html.twig_xv9eQH6net8J-_PWafhMmqaqm/ha977GKxZSXM7IxmgHCI6A12t28psVtHLKQTkM92SIQ.php
```
class __TwigTemplate_4ad0eb70b3c2269b93c9072b07ce3bd7
  function doGetParent(array $context) → bool|string|Template|Temp
  function doDisplay(array $context, array $blocks = []) → iterable
  function block_main(array $context, array $blocks = []) → iterable
  function block_secondary(array $context, array $blocks = []) → iterable
  function block_footer(array $context, array $blocks = []) → iterable
  function getTemplateName() → string
  function isTraitable() → bool
  function getDebugInfo() → array
```

### web/sites/default/files/php/twig/69ff666937984_form-two-columns.html.twi_cpKOFRmpZGLledqv-rH7-n9uw/vWCanJuXiWKU_ceq9uWE93C4_eMDPY93nk8CV0bzcEg.php
```
class __TwigTemplate_87977a36e225ffa5aa21b75a7190669c
  function doDisplay(array $context, array $blocks = []) → iterable
  function block_main(array $context, array $blocks = []) → iterable
  function block_secondary(array $context, array $blocks = []) → iterable
  function block_footer(array $context, array $blocks = []) → iterable
  function getTemplateName() → string
  function getDebugInfo() → array
  function getSourceContext() → Source
  function checkSecurity()
```

### web/sites/default/files/php/twig/69ff666937984_field-multiple-value-form_nbzYIKT42ZnibVRC2oB49tue7/hkeMVueI0UHxcz0hLcDZGdYrAL951dJkZKolds-rQ8I.php
```
class __TwigTemplate_55902effbf953a3cb5e4de44253d38ab
  function doDisplay(array $context, array $blocks = []) → iterable
```

### web/sites/default/files/php/twig/69ff666937984_input.html.twig_MUoW1aS5WzaL7Nvl4Tmp4faKb/tCL_CnrGDGkyvsroDvQOOWBaTIDDWcSwEAM7EQ8Yn6U.php
```
class __TwigTemplate_d3b861893146d06841efd3c3a9e456d0
  function doDisplay(array $context, array $blocks = []) → iterable
  function getTemplateName() → string
  function isTraitable() → bool
  function getDebugInfo() → array
  function getSourceContext() → Source
  function checkSecurity()
```

### web/sites/default/files/php/twig/69ff666937984_form-element.html.twig_-E-VcILz__O320cMVIDQhy3aj/8RuIZWWeBCMbz8FqwvWlTWLdMA80aaKohJSinFIq81U.php
```
class __TwigTemplate_f9613f690fc0a81a963f7334f2be45e8
  function doDisplay(array $context, array $blocks = []) → iterable
```

### web/sites/default/files/php/twig/69ff666937984_form-element-label.html.t_kJZfJ7xOJilEMRSJKfQt1bp4E/J6qAWAkjQvuu_-tLcvgg_Dn7dGmAHUYukKVLxrNNmoI.php
```
class __TwigTemplate_92c27e8219d6a5549265e3a790d6a74f
  function doDisplay(array $context, array $blocks = []) → iterable
  function getTemplateName() → string
  function isTraitable() → bool
  function getDebugInfo() → array
  function getSourceContext() → Source
  function checkSecurity()
```

### web/sites/default/files/php/twig/69ff666937984_container.html.twig_GLA2goq8rCnSQ1unCaZOlUiTy/WaTGYUiBnLDpCR4l_E9SzBxUB1Z1NxDyceYgLn2zUV0.php
```
class __TwigTemplate_8d303772024da9b453880e076a83e733
  function doDisplay(array $context, array $blocks = []) → iterable
  function getTemplateName() → string
  function isTraitable() → bool
  function getDebugInfo() → array
  function getSourceContext() → Source
  function checkSecurity()
```

### web/sites/default/files/php/twig/69ff666937984_textarea.html.twig_XTDMRx2ldYx3XujY6WgxLOD2K/eLKus55-0lte7ftsliTEiyHDIqTRjO_X0y1F8HZnfpg.php
```
class __TwigTemplate_56ffca4187061cdb59b47cd12aab47f8
  function doDisplay(array $context, array $blocks = []) → iterable
  function getTemplateName() → string
  function isTraitable() → bool
  function getDebugInfo() → array
  function getSourceContext() → Source
  function checkSecurity()
```

### web/sites/default/files/php/twig/69ff666937984_select.html.twig_pI5y6OZ-K_6JBSELRAnyIx6w2/b5yh0Y9uVDY06HES3rnJu2sRf8v1Hp94EjUdbJvIAhM.php
```
class __TwigTemplate_3ca2b95633eb9b9d882b98915bbc228f
  function doDisplay(array $context, array $blocks = []) → iterable
```

### web/sites/default/files/php/twig/69ff666937984_details.html.twig_bGLVudDmthgRWgAZTQsc0EV6f/xNhXCjJsLjcNsZr7YVXWU3thGrr9ya59J6pLmWRZcnw.php
```
class __TwigTemplate_6e629490e6665c51d8c7ba2ce8280e2f
  function doDisplay(array $context, array $blocks = []) → iterable
```

### web/sites/default/files/php/twig/69ff666937984_datetime-form.html.twig_bIVqg7q5OmaR_P-Hfec76CGGr/3mtoHhRNi3mcH3i1JicPyWq3_MtDbTtPPF4fHw7jTEI.php
```
class __TwigTemplate_a5140460d0412c4644fbd123a4a6db91
  function doDisplay(array $context, array $blocks = []) → iterable
  function getTemplateName() → string
  function isTraitable() → bool
  function getDebugInfo() → array
  function getSourceContext() → Source
  function checkSecurity()
```

### web/sites/default/files/php/twig/69ff666937984_datetime-wrapper.html.twi_dC334l6NIv2fOvPtm624kWVZ-/BjWTU0XaX45glqmbiHso-0AEp4cEQiB_w3bZIMiz-jM.php
```
class __TwigTemplate_5cb4747087b2a574543e6d47f53bf28e
  function doDisplay(array $context, array $blocks = []) → iterable
  function getTemplateName() → string
  function isTraitable() → bool
  function getDebugInfo() → array
  function getSourceContext() → Source
  function checkSecurity()
```

### web/sites/default/files/php/twig/69ff666937984_form.html.twig_WlIkwxttwgaelg7VKmCgNlnv5/EvnsYum-eeM3ZDQ36O9L4mKygdwOn69EejdaxrTMemk.php
```
class __TwigTemplate_a071e0da80661cc972ab29d8ee948b58
  function doDisplay(array $context, array $blocks = []) → iterable
  function getTemplateName() → string
  function isTraitable() → bool
  function getDebugInfo() → array
  function getSourceContext() → Source
  function checkSecurity()
```

### web/sites/default/files/php/twig/69ff666937984_html.html.twig_vwbSUkfa_aOsWVa7Y1WxFDgFX/s-bMleKOs5kfMTC8illTr4G4J7AvPhoYSKZ0W2GneGQ.php
```
class __TwigTemplate_6ee064f79a032324e156d054839c6b40
  function doDisplay(array $context, array $blocks = []) → iterable
```

### web/sites/default/files/php/twig/69ff666937984_page.html.twig_KRgamJj6oSlNg-EH9bvhtzdBC/O8iT0jptsQszzyyoj46SoZW-Wdn00Chbx_b5NpwT9ZY.php
```
class __TwigTemplate_dc4ebc5da0dccb76cc64b58e38ea1a8e
  function doDisplay(array $context, array $blocks = []) → iterable
  function getTemplateName() → string
  function isTraitable() → bool
  function getDebugInfo() → array
  function getSourceContext() → Source
```

### web/sites/default/files/php/twig/69ff666937984_region--breadcrumb.html.t_SKpydZggzIh1y44I1NVbk5RcI/6rqKNVl0pIXJqR45N4Mr6V1L9nRsr6IcKGqp2WhrsDo.php
```
class __TwigTemplate_1261b921390a3815306d31a8750c9612
  function doDisplay(array $context, array $blocks = []) → iterable
  function getTemplateName() → string
  function isTraitable() → bool
  function getDebugInfo() → array
  function getSourceContext() → Source
  function checkSecurity()
```

### web/sites/default/files/php/twig/69ff666937984_block.html.twig__rJbmRIlN_0RUaxYWFAI6dIo7/aeufeVHjQLPKOG7-WO6krdIWbDeQwC4UWEKVg7r3I7I.php
```
class __TwigTemplate_fd54b2a24f4b3cf917c1b10c48693070
  function doDisplay(array $context, array $blocks = []) → iterable
  function block_content(array $context, array $blocks = []) → iterable
  function getTemplateName() → string
  function isTraitable() → bool
  function getDebugInfo() → array
  function getSourceContext() → Source
  function checkSecurity()
```

### web/sites/default/files/php/twig/69ff666937984_page-title.html.twig__Ah65Xfnntc7izA80JNawTeYH/t2JUX6sCsygHBSk7c1Zz4F_2pUeDhyv7fkZQQAZ7Mvg.php
```
class __TwigTemplate_8968d9c3a7c262969eddb2cfae3e4f01
  function doDisplay(array $context, array $blocks = []) → iterable
  function getTemplateName() → string
  function isTraitable() → bool
  function getDebugInfo() → array
  function getSourceContext() → Source
  function checkSecurity()
```

### web/sites/default/files/php/twig/69ff666937984_region.html.twig_eN1FzvbRTXnHPm9JgAbF3fVPK/87OQpVybMCgCSSfbfXrfca_2zEopH9wfNXfNvbsJ6qE.php
```
class __TwigTemplate_40f71be6df51e48adca12ccd2348d1df
  function doDisplay(array $context, array $blocks = []) → iterable
  function getTemplateName() → string
  function isTraitable() → bool
  function getDebugInfo() → array
  function getSourceContext() → Source
  function checkSecurity()
```

### web/sites/default/files/php/twig/69ff666937984_block--system-messages-bl_NuWx67UBCJaqW1GA5ctmA5AEG/o-y-ZBo-u_Ibh6Mh9xv4GyGoja7llqHuFdFT2uXpuuo.php
```
class __TwigTemplate_f3747ee4ebc0c98b4f2ea54537432727
  function doDisplay(array $context, array $blocks = []) → iterable
  function getTemplateName() → string
  function isTraitable() → bool
  function getDebugInfo() → array
  function getSourceContext() → Source
  function checkSecurity()
```

### web/sites/default/files/php/twig/69ff666937984_off-canvas-page-wrapper.h_01Vo04AteVY60IR31-fABgCYy/86qxZXVZiPeq9FKUXENZ-SMdJT_u1pS_T_zk7DoxMa4.php
```
class __TwigTemplate_f527d510356703d5770755a69cfcaa66
  function doDisplay(array $context, array $blocks = []) → iterable
  function getTemplateName() → string
  function isTraitable() → bool
  function getDebugInfo() → array
  function getSourceContext() → Source
  function checkSecurity()
```

### web/sites/default/files/php/twig/69ff666937984_big-pipe-interface-previe_Wy3HtcObcI_SFUz7ERFcVAhWd/g-TQ4UEKBsHy0Dp3Cl2uEYp-9BZZgNiELVx89oy6VmA.php
```
class __TwigTemplate_e0ea39606366e56d5e29416d2ea0b102
  function doDisplay(array $context, array $blocks = []) → iterable
  function getTemplateName() → string
  function isTraitable() → bool
  function getDebugInfo() → array
  function getSourceContext() → Source
  function checkSecurity()
```

### web/sites/default/files/php/twig/69ff666937984_menu-local-action.html.tw_50gWWCNAZ19U-E2FNFsK8qyk0/Jao89ENhnUYO0u-L0-La4gZOcGOuROkRKuQujTifZJg.php
```
class __TwigTemplate_7024dc8be9e872085dc23907b992372a
  function doDisplay(array $context, array $blocks = []) → iterable
  function getTemplateName() → string
  function isTraitable() → bool
  function getDebugInfo() → array
  function getSourceContext() → Source
  function checkSecurity()
```

### web/sites/default/files/php/twig/69ff666937984_links.html.twig_g9DQrJhrXnjDDG2EchJjTimql/FYa99IQBKUq8KmXpllzPFtu7SOIotM4TNvo2-gul8B4.php
```
class __TwigTemplate_fbe64c6604008de046e11021d58e72c5
  function doDisplay(array $context, array $blocks = []) → iterable
```

### web/sites/default/files/php/twig/69ff666937984_breadcrumb.html.twig_prjFaPILaau0fjz1VgxnBvYjv/4yFeMcOTt-MjZSIbheK0IxjnBfyygKdj8hp9ccLccMY.php
```
class __TwigTemplate_906f5f65c71f7229b92e306f1e215866
  function doDisplay(array $context, array $blocks = []) → iterable
  function getTemplateName() → string
  function isTraitable() → bool
  function getDebugInfo() → array
  function getSourceContext() → Source
  function checkSecurity()
```

### web/sites/default/files/php/twig/69ff666937984_block--local-tasks-block._2l6rJS1ccrtw9g49Up9DO7AHf/e20pS5wNLFxL3ECAtTAztZhosQ4NKCCZw3Xl6s8N6dw.php
```
class __TwigTemplate_8108ddd7b8ecb3630f52a30e838dc61b
  function doGetParent(array $context) → bool|string|Template|Temp
  function doDisplay(array $context, array $blocks = []) → iterable
  function block_content(array $context, array $blocks = []) → iterable
  function getTemplateName() → string
  function isTraitable() → bool
  function getDebugInfo() → array
  function getSourceContext() → Source
  function checkSecurity()
```

### web/sites/default/files/php/twig/69ff666937984_menu-local-tasks.html.twi_XMXfpu-cmPWQx8dpKptfS4yUg/20wWE1eEvWuKpc3jNooy8KRdddZ_WL23OlJEOO7mWRU.php
```
class __TwigTemplate_78f5e64e983851db0c29c3777097d2f1
  function doDisplay(array $context, array $blocks = []) → iterable
  function getTemplateName() → string
  function isTraitable() → bool
  function getDebugInfo() → array
  function getSourceContext() → Source
  function checkSecurity()
```

### web/sites/default/files/php/twig/69ff666937984_menu-local-task.html.twig_B4Wt2pof8QPg7pQinz2W5Hwsz/t9t9n1zR1Ymno_0um0TQBiQgkw1b_6jKU1eBI4a_NT0.php
```
class __TwigTemplate_286b98ae8ace89770d82dbc323efb0b1
  function doDisplay(array $context, array $blocks = []) → iterable
  function getTemplateName() → string
  function isTraitable() → bool
  function getDebugInfo() → array
  function getSourceContext() → Source
  function checkSecurity()
```

### web/sites/default/files/php/twig/69ff666937984_hamburger-menu.svg_KnF-zn2lOSF4nOJ4rPL20LXHu/F3uByuTX-71RiUYXCsxQzrEhO4Ap6tAsWATo46gjddk.php
```
class __TwigTemplate_9b06e9b2e82eb23e9f392b7f0c0cad9d
  function doDisplay(array $context, array $blocks = []) → iterable
  function getTemplateName() → string
  function getDebugInfo() → array
  function getSourceContext() → Source
  function checkSecurity()
```

### web/sites/default/files/php/twig/69ff666937984_ex.svg_IsEOXHMkbI2SsKbB7fBar3kbc/I5FLXcppqSM1AY1a26Il06-jSnZkahnMPGjH9jRArE8.php
```
class __TwigTemplate_b1c3934c702526290dd682fa13caca70
  function doDisplay(array $context, array $blocks = []) → iterable
  function getTemplateName() → string
  function getDebugInfo() → array
  function getSourceContext() → Source
  function checkSecurity()
```

### web/sites/default/files/js/js_q3DsVSk1A-URuBWPGKwOHXF3I9rpGV2UTnQfOhWGH1s.js
```
class DrupalDialogEvent
```

### web/sites/default/files/php/twig/69ff666937984_table.html.twig_87pOzFE3snjSAi21YzRl8ogaz/EyDXG5ezlD7BtHLdud2lbUvubPqICLiMH6QMAPObyNc.php
```
class __TwigTemplate_d152146bbaea6582b69432aacea9cd01
  function doDisplay(array $context, array $blocks = []) → iterable
```

### web/sites/default/files/php/twig/69ff666937984_dropbutton-wrapper.html.t_Fdisp3IwMSxTJbA4rpLEl8nNP/DVbnRH-kuWHSoJje5wox_Yv6LsxMgG0kNYzLea37Nhg.php
```
class __TwigTemplate_7630526064b87ff34a1471edea568fbc
  function doDisplay(array $context, array $blocks = []) → iterable
  function getTemplateName() → string
  function isTraitable() → bool
  function getDebugInfo() → array
  function getSourceContext() → Source
  function checkSecurity()
```

### web/sites/default/files/php/twig/69ff666937984_pager.html.twig_vyqXfZI4X8JVpSE4ZhJXoPitA/m7LxO-MXkloyvi4qDHqMH0cLZIuxQXH7Oz5h8qS_UTA.php
```
class __TwigTemplate_9b2587c046ed02176507909bb490a60e
  function doDisplay(array $context, array $blocks = []) → iterable
```

### web/sites/default/files/php/twig/69ff666937984_status-messages.html.twig_1ULQFsu9I8q12yzwMAplCFODm/nEY3kneQ-R64mT_Pxmp3ERTxEX96-OtBFC96IJcsN3k.php
```
class __TwigTemplate_6e2640ceb25ca6d2f8b0ba9716bc5483
  function doDisplay(array $context, array $blocks = []) → iterable
```

### web/sites/default/files/php/twig/69ff666937984_block--local-actions-bloc_XD_1qYKkoI7UsCHzXQzTKe8jy/4rdnO0EoZvQ_960fJQ1MvltEYDNA4wOrsvEKA5RlFWw.php
```
class __TwigTemplate_0f16c2bca2ad2013a9a3367d7f153e4b
  function doGetParent(array $context) → bool|string|Template|Temp
  function doDisplay(array $context, array $blocks = []) → iterable
  function block_content(array $context, array $blocks = []) → iterable
  function getTemplateName() → string
  function isTraitable() → bool
  function getDebugInfo() → array
  function getSourceContext() → Source
  function checkSecurity()
```

### web/sites/default/files/php/twig/69ff666937984_block.html.twig_BOFF1jkiV-KR4KSub30BgS4Vf/lNS4PBuEOfHBV2VZDMnrGoXZvxRe9TJnBMoh2IDfYno.php
```
class __TwigTemplate_70053cb4c4c2647c28379ea972266aa3
  function doDisplay(array $context, array $blocks = []) → iterable
  function block_content(array $context, array $blocks = []) → iterable
  function getTemplateName() → string
  function isTraitable() → bool
  function getDebugInfo() → array
  function getSourceContext() → Source
  function checkSecurity()
```

### web/sites/default/files/js/js_2tpie_j6XHiYWnx5ZoPr0eWnePhy8ppUsXrJqEuJRy4.js
```
class DrupalDialogEvent
```

### web/sites/default/files/php/twig/69ff666937984_views-view-field.html.twi_H3HBRV7ss2v_a_IU6HXxvvQYn/wjJ7mlu445eAAZ3_VKdZ7oEeBj5692wdVRKoYwI5aCo.php
```
class __TwigTemplate_aba7f19076ec29d4aef664642ab9ea77
  function doDisplay(array $context, array $blocks = []) → iterable
  function getTemplateName() → string
  function isTraitable() → bool
  function getDebugInfo() → array
  function getSourceContext() → Source
  function checkSecurity()
```

### web/sites/default/files/php/twig/69ff666937984___string_template__d7d7f1_bOzCGtCVGEEo2pbJwYFwgUEdh/5h9Ad1I7IiwQJzHFndOfudH_kzpiYvdzbj4THi1emAA.php
```
class __TwigTemplate_101abf449208de93df42bd458c588471
  function doDisplay(array $context, array $blocks = []) → iterable
  function getTemplateName() → string
  function isTraitable() → bool
  function getDebugInfo() → array
  function getSourceContext() → Source
  function checkSecurity()
```

### web/sites/default/files/php/twig/69ff666937984_username.html.twig_4lQh5rYEvYHFMaBB3YgHSj9oN/AJgkyowl3GmJdPUBykDpAgAcjPpzqj95XIc0fucSWVc.php
```
class __TwigTemplate_95bc9201088928a73dab440dde98b620
  function doDisplay(array $context, array $blocks = []) → iterable
  function getTemplateName() → string
  function isTraitable() → bool
  function getDebugInfo() → array
  function getSourceContext() → Source
  function checkSecurity()
```

### web/sites/default/files/php/twig/69ff666937984_time.html.twig_v2leFwT9jcq2NnJRQZpOVKa_C/SvSFUKts_LBATvVOP-YDe0EPhjF3m2pfL7vjoJoYmhQ.php
```
class __TwigTemplate_2a5ea89c1e2ee7f4a8ff2b8e8e11f3cf
  function doDisplay(array $context, array $blocks = []) → iterable
  function getTemplateName() → string
  function isTraitable() → bool
  function getDebugInfo() → array
  function getSourceContext() → Source
  function checkSecurity()
```

### web/sites/default/files/php/twig/69ff666937984_views-view.html.twig_FscevbmIaSba0bohedac22dYj/TTBDQgRpjdIdMt2qHPT7vTiO04ZPwiPfMW56a1hGMZk.php
```
class __TwigTemplate_f3ff6df88b21470e776c78d07203527e
  function doDisplay(array $context, array $blocks = []) → iterable
```

### web/sites/default/files/php/twig/69ff666937984_views-exposed-form.html.t_UQDlF-uOlpalZVty1CKLe1Tos/zpdABCqmT6giYRB3HdYzPWjMQbcFYuzlmUvwHzPhUy0.php
```
class __TwigTemplate_51e07f3c815b2285fcdb35baa96d3889
  function doDisplay(array $context, array $blocks = []) → iterable
  function getTemplateName() → string
  function isTraitable() → bool
  function getDebugInfo() → array
  function getSourceContext() → Source
  function checkSecurity()
```

### web/sites/default/files/php/twig/69ff666937984_views-view-table.html.twi__fjOWgi22c-G-wTVtr_itYCZH/492WDuWk3d0KrYqEPauqCq2SXrxmr-UTq_Iazu2h2fU.php
```
class __TwigTemplate_36f8a3f597f3930a64f50f4cb88f3c51
  function doDisplay(array $context, array $blocks = []) → iterable
```

### web/sites/default/files/php/twig/69ff666937984_tablesort-indicator.html._S_H7kWUMzHrxzCnhVN-SjlDaP/nzRPYfnGz3XiH0sIDeLCxtMTWozm1VD2f02Ir7GbWNk.php
```
class __TwigTemplate_128b5ec95fba13bead562660e72f4431
  function doDisplay(array $context, array $blocks = []) → iterable
  function getTemplateName() → string
  function isTraitable() → bool
  function getDebugInfo() → array
  function getSourceContext() → Source
  function checkSecurity()
```

### web/sites/default/files/js/js_TiZ-rkySQ_rvAKtunLt6V9zluIW0P_fyc2o84J0Kf1w.js
```
class DrupalDialogEvent
```

### web/modules/custom/ui_builder/css/ui-builder-defaults.css
```
.ui-builder-content
.ui-builder-content
.ui-builder-content
.ui-builder-content
.ui-builder-content
.ui-builder-content
.ui-builder-content
.ui-builder-content
```

### web/modules/custom/ui_builder/app/README.md
```
h1 React + Vite
h2 React Compiler
h2 Expanding the ESLint configuration
```

### web/modules/custom/ui_builder/app/index.html
```
title: app
div#root
```

### web/modules/custom/ui_builder/app/src/App.css
```
var --primary
var --primary-hover
var --bg-app
var --bg-sidebar
var --bg-canvas
var --bg-panel
var --bg-input
var --bg-row-hover
var --bg-row-select
var --text-main
var --text-muted
var --text-label
var --border
var --border-light
var --border-mid
var --accent
var --error
var --shadow-sm
var --shadow
var --shadow-lg
var --radius
var --col-layout
var --col-text
var --col-media
var --col-interactive
```

### web/modules/custom/ui_builder/app/src/App.jsx
```
function App({ mode, initialLayout, initialSchema, availableComponents: initialComponents, onUpdate, onSavePage: externalSavePage })
```

### web/modules/custom/ui_builder/app/src/components/ActionBar.jsx
```
export function ActionBar({ mode, onSavePage, onSaveAsComponent, onToggleStyles, sidebarOpen, onToggleSidebar })
```

### web/modules/custom/ui_builder/app/src/components/FieldEditor.jsx
```
export function FieldEditor({ mode, value, onUpdate })
```

### web/modules/custom/ui_builder/app/src/components/CanvasRoot.jsx
```
export function CanvasRoot({ children, isDragging })
```

### web/modules/custom/ui_builder/app/src/components/PropertiesPanel.jsx
```
export function PropertiesPanel({ mode, selectedNode, selectedNodeId, selectedStyle, selectedComponent, updateNodeProperty, resetToDefaultProps, removeNode, updateNodeField, updateInstanceValue, onSaveStyle, onDeselect, customStyles = [] })
```

### web/modules/custom/ui_builder/app/src/components/ImageEditor.jsx
```
export function ImageEditor({ mode, value, onUpdate })
```

### web/modules/custom/ui_builder/app/src/components/NodeCard.jsx
```
export function NodeCard({ node, mode, selectedId, onSelect, onOpenProperties, onDuplicate, onDelete, availableComponents, isOverlay, isDragging, isOver, attributes, listeners, setNodeRef, style, depth = 0, isInherited = false })
function getElementBranding(tag, label, isInstance)
```

### web/modules/custom/ui_builder/app/src/components/NodeChildren.jsx
```
export function NodeChildren({ parentNode, mode, selectedId, onSelect, onOpenProperties, onDuplicate, onDelete, availableComponents, depth = 0, isInherited = false, isRow = false })
```

### web/modules/custom/ui_builder/app/src/components/Sidebar.jsx
```
export function Sidebar({ mode, availableComponents = [], customStyles = [], selectedNodeId, selectedStyleId, selectedNode, addElement, addComponentInstance, onSelectStyle, onDeselect, onClose })
```

### web/modules/custom/ui_builder/app/src/constants/typeColors.js
```
export function getTypeColor(tag, isInstance = false)
```

### web/modules/custom/ui_builder/app/src/components/SortableNode.jsx
```
export function SortableNode({ node, mode, selectedId, onSelect, onOpenProperties, onDuplicate, onDelete, availableComponents, depth = 0, isInherited = false })
```

### web/modules/custom/ui_builder/app/src/utils/styleUtils.js
```
export const getDefaultClasses = (tag, label) =>
export const splitClasses = (classString) =>
export const getCustomClassesOnly = (currentClasses, tag, label) =>
export const mergeClasses = (customClasses, tag, label) =>
```

### web/modules/custom/ui_builder/app/src/utils/treeUtils.js
```
export function deepClone(obj)
export function findNodeById(nodes, id)
export function findNodeLocation(nodes, id)
export function hydrateTree(nodes)
export function deleteNodeById(nodes, id)
export function canAcceptChild(parent, child)
```

### web/modules/custom/ui_builder/src/Controller/UiBuilderController.php
```
class UiBuilderController
  function saveComponent(Request $request)
  function listComponents()
  function listStyles()
  function saveStyle(Request $request)
```

### web/modules/custom/ui_builder/src/Controller/UploadController.php
```
class UploadController
  function upload(Request $request)
```

### web/modules/custom/ui_builder/src/Form/UiBuilderComponentForm.php
```
class UiBuilderComponentForm
  function form(array $form, FormStateInterface $form_state)
  function save(array $form, FormStateInterface $form_state)
  function generateAssets($component)
```

### web/modules/custom/ui_builder/src/Entity/UiBuilderStyle.php
```
class UiBuilderStyle
  function getCssContent()
```

### web/modules/custom/ui_builder/src/Entity/UiBuilderComponent.php
```
class UiBuilderComponent
  function getLayoutTree()
  function getCss()
  function getJavascript()
  function getFormSchema()
```

### web/modules/custom/ui_builder/src/Form/UiBuilderStyleForm.php
```
class UiBuilderStyleForm
  function form(array $form, FormStateInterface $form_state)
  function save(array $form, FormStateInterface $form_state)
```

### web/modules/custom/ui_builder/src/UiBuilderComponentListBuilder.php
```
class UiBuilderComponentListBuilder
  function buildHeader()
  function buildRow(EntityInterface $entity)
```

### web/modules/custom/ui_builder/src/UiBuilderStyleListBuilder.php
```
class UiBuilderStyleListBuilder
  function buildHeader()
  function buildRow(EntityInterface $entity)
```

### web/modules/custom/ui_builder/ui_builder.info.yml
```
keys: [name, type, description, core_version_requirement, package]
```

### web/modules/custom/ui_builder/ui_builder.module
```
function ui_builder_theme($existing, $type, $theme, $path) {
function ui_builder_theme_suggestions_field_alter(array &$suggestions, array $variables) {
function ui_builder_theme_suggestions_block_alter(array &$suggestions, array $variables) {
function ui_builder_form_node_form_alter(array &$form, \Drupal\Core\Form\FormStateInterface $form_state, $form_id) {
```

### web/modules/custom/ui_builder/ui_builder.libraries.yml
```
keys: [builder_app, frontend_defaults]
```

### web/themes/custom/custom_theme/components/browse-by-style/browse-by-style.component.yml
```
keys: [name, status, group, description, props]
```

### web/themes/custom/custom_theme/components/brand-bar/brand-bar.css
```
.brand-bar
.brand-bar__inner
.brand-bar__logo
.brand-bar__logo
```

### web/themes/custom/custom_theme/components/brand-bar/brand-bar.component.yml
```
keys: [name, description, props]
```

### web/themes/custom/custom_theme/components/browse-by-style/browse-by-style.css
```
.browse-by-style
.browse-by-style__wrapper
.browse-by-style__title
.browse-by-style__grid
.style-card
.style-card
.style-card__title
.style-card__image
```

### web/themes/custom/custom_theme/components/happy-customers/happy-customers.component.yml
```
keys: [name, props, library]
```

### web/themes/custom/custom_theme/components/footer/footer.css
```
.site-footer
.site-footer__container
.site-footer__top
.site-footer__brand
.site-footer__logo
.site-footer__description
.site-footer__socials
.site-footer__social-link
```

### web/themes/custom/custom_theme/components/footer/footer.component.yml
```
keys: [name, description, props, slots]
```

### web/themes/custom/custom_theme/components/happy-customers/happy-customers.css
```
.happy-customers
.happy-customers
.happy-customers
.happy-customers
.happy-customers
.happy-customers__header
.happy-customers__title
.happy-customers__navigation
```

### web/themes/custom/custom_theme/components/hero-banner/hero-banner.component.yml
```
keys: [name, description, props]
```

### web/themes/custom/custom_theme/components/hero-banner/hero-banner.css
```
.hero-banner
.hero-inner
.hero-content-wrapper
.hero-text-content
.hero-title
.hero-description
.hero-btn
.hero-btn
```

### web/themes/custom/custom_theme/components/newsletter/newsletter.css
```
.newsletter-wrapper
.newsletter__title
.newsletter__form-wrapper
.newsletter__input-group
.newsletter__input-icon
.newsletter__input
.newsletter__input
.newsletter__submit
```

### web/themes/custom/custom_theme/components/product-collection/product-collection.component.yml
```
keys: [name, description, props]
```

### web/themes/custom/custom_theme/components/newsletter/newsletter.component.yml
```
keys: [name, description, props, slots]
```

### web/themes/custom/custom_theme/css/style.css
```
.container
```

### web/themes/custom/custom_theme/custom_theme.theme
```
function custom_theme_preprocess_page(&$variables) {
function custom_theme_preprocess_block(&$variables) {
function custom_theme_page_attachments(array &$attachments) {
```

### web/themes/custom/custom_theme/custom_theme.libraries.yml
```
keys: [global-styling, layout-builder-fix, swiper]
```

### web/themes/custom/custom_theme/custom_theme.info.yml
```
keys: [name, type, description, core_version_requirement, package, libraries, regions]
```

### web/themes/custom/custom_theme/components/product-collection/product-collection.css
```
.product-collection
.product-collection__title
.product-collection__grid
.product-collection__actions
.btn--outline
.btn--outline
```
