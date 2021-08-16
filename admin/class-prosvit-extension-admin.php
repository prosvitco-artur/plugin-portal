<?php

/**
 * The admin-specific functionality of the plugin.
 *
 * @link       https://prosvit.design/
 * @since      1.0.0
 *
 * @package    Prosvit_Extension
 * @subpackage Prosvit_Extension/admin
 */

/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    Prosvit_Extension
 * @subpackage Prosvit_Extension/admin
 * @author     Prosvit <test@prosvit.design>
 */
class Prosvit_Extension_Admin
{

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of this plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct($plugin_name, $version)
	{

		$this->plugin_name = $plugin_name;
		$this->version = $version;
	}

	/**
	 * Register the stylesheets for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles()
	{

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Prosvit_Extension_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Prosvit_Extension_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_style('style_select2', plugin_dir_url(__FILE__) . 'css/select2.min.css', array(), $this->version, 'all');
		wp_enqueue_style($this->plugin_name, plugin_dir_url(__FILE__) . 'css/prosvit-extension-admin.css', array(), $this->version, 'all');
	}

	/**
	 * Register the JavaScript for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts()
	{

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Prosvit_Extension_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Prosvit_Extension_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */
		wp_enqueue_script('script_select2', plugin_dir_url(__FILE__) . 'js/select2.min.js', array('jquery'), $this->version, false);
		wp_enqueue_script($this->plugin_name, plugin_dir_url(__FILE__) . 'js/prosvit-extension-admin.js', array('jquery'), $this->version, false);
	}

	public function pe_add_admin_menu()
	{
		add_options_page('Egnyte Options', 'Egnyte', 'manage_options', 'egnyte-options', [$this, 'pe_options_page']);
	}

	public function pe_settings_init()
	{
		register_setting('egnyte-page', 'pe_domain');
		register_setting('egnyte-page', 'pe_folder');
		register_setting('egnyte-page', 'pe_token');

		add_settings_section(
			'pe_egnyte_page_section',
			'',
			[$this, 'pe_egnyte_section_callback'],
			'egnyte-page'
		);

		add_settings_field(
			'pe_text_field_0',
			'Domain',
			[$this, 'pe_setting_callback_function'],
			'egnyte-page',
			'pe_egnyte_page_section',
			[
				'id' => 'pe_domain',
				'option_name' => 'pe_domain'
			]
		);

		add_settings_field(
			'pe_text_field_2',
			'Folder',
			[$this, 'pe_setting_callback_function'],
			'egnyte-page',
			'pe_egnyte_page_section',
			[
				'id' => 'pe_folder',
				'option_name' => 'pe_folder'
			]
		);

		add_settings_field(
			'pe_text_field_1',
			'Token',
			[$this, 'pe_setting_callback_function'],
			'egnyte-page',
			'pe_egnyte_page_section',
			[
				'id' => 'pe_token',
				'option_name' => 'pe_token'
			]
		);
	}

	function pe_setting_callback_function($val)
	{
		$id = $val['id'];
		$option_name = $val['option_name'];
?>
		<input type="text" name="<? echo $option_name ?>" id="<? echo $id ?>" value="<? echo esc_attr( get_option($option_name) ) ?>" />
		<?
	}

	public function pe_options_page()
	{
?>
		<form action='options.php' method='post'>
			<h2>Egnyte API Options</h2>
			<?php
			settings_fields('egnyte-page');
			do_settings_sections('egnyte-page');
			submit_button();
			?>

		</form>
	<?php
	}

	public function pe_egnyte_section_callback()
	{
	}

	public function add_custom_box()
	{
		add_meta_box('pe_upload_documents', 'Upload Documents', [$this, 'meta_box_uploads_callback'], ['document']);
		add_meta_box('pe_access_documents', 'Access', [$this, 'meta_box_access_callback'], ['document'], 'side');
	}

	public function meta_box_access_callback()
	{
		global $post;

		$public = get_post_meta($post->ID, '_public', true);
		$client = get_post_meta($post->ID, '_client', true);
	?>
		<div>
			<p>
				<input type="checkbox" name="_public" id="document_public" value="yes" <?php echo !empty($public) ? 'checked="checked"' : ''; ?>>
				<label for="document_public">Public</label>
			</p>
			<p id="document_client" <?php echo !empty($public) ? ' style="display:none;"' : ''; ?>>
				<label>Client</label>
				<?php $options = $this->crb_select_client(); ?>
				<select id="document_for_client" name="_client">
					<?php foreach ($options as $key => $value) : ?>
						<option value="<?php echo $key; ?>" <?php echo $key == $client ? ' selected' : ''; ?>><?php echo $value; ?></option>
					<?php endforeach; ?>
				</select>
			</p>
		</div>
	<?php
	}

	public function meta_box_uploads_callback()
	{
		global $post;

		$files = get_post_meta($post->ID, '_files', true);
	?>
		<div id="pe-repeater">
			<div class="repeater-heading">
				<button type="button" class="button repeater-add-btn">Add Document</button>
			</div>

			<?php if (!empty($files)) : ?>
				<?php foreach ($files as $file) : ?>
					<div class="items" data-group="_file">
						<div class="item-content">
							<div class="item-col item-file">
								<span class="item-file-name"><?php echo isset($file['name']) ? $file['name'] : ''; ?></span>
								<input type="file" data-name="file">
							</div>
							<div class="pull-right repeater-remove-btn">
								<button type="button" id="remove-btn" class="button" onclick="jQuery(this).parents('.items').remove()">Delete</button>
							</div>
						</div>
					</div>
				<?php endforeach; ?>
			<?php else : ?>
				<div class="items" data-group="_file">
					<div class="item-content">
						<div class="item-col item-file">
							<input type="file" data-name="file">
						</div>
						<div class="pull-right repeater-remove-btn">
							<button type="button" id="remove-btn" class="button" onclick="jQuery(this).parents('.items').remove()">Delete</button>
						</div>
					</div>
				</div>
			<?php endif; ?>
		</div>
	<?php
	}

	public function save_post_document($post_id, $post, $update)
	{
		if (is_admin() && $update && isset($post->post_type) && $post->post_type == 'document') {
			require(PE_INC_PATH . 'lib/curl.php');
			require(PE_INC_PATH . 'lib/curl_response.php');
			require(PE_INC_PATH . 'class-egnyte-client.php');

			if (isset($_FILES['_file']) && !empty($_FILES['_file'])) {
				$domain = get_option('pe_domain');
				$folder = get_option('pe_folder');
				$oauthToken = get_option('pe_token');

				$files = $_FILES['_file'];
				$file_detail = [];

				foreach ($files['tmp_name'] as $key => $value) {
					if (empty($value['file'])) continue;
					if (!isset($_POST['_public'])) {
						$current_user = wp_get_current_user();
						$path = $folder . $current_user->data->display_name . '/';
					} else {
						$path = $folder . 'Public/';
					}

					$tax_category = wp_get_post_terms($post_id, 'tax_category', ['fields' => 'all']);
					if (!empty($tax_category)) {
						foreach ($tax_category as $term) {
							$path .= $term->name . '/';
						}
					}

					$egnyte = new EgnyteClient($domain, $oauthToken);
					$fileBinaryContents = file_get_contents($files['tmp_name'][$key]['file']);
					$response = $egnyte->uploadFile($path, $files['name'][$key]['file'], $fileBinaryContents);
					if ($response->isError()) {
						dd($response->getErrorDetails());
					} else {
						$detail = $egnyte->getFileDetails($path . $files['name'][$key]['file'])->getDecodedJSON();
						$file_detail[$key] = (array) $detail;
					}
					sleep(1);
				}

				if (!empty($file_detail)) update_post_meta($post_id, '_files', $file_detail);
			} else {
				delete_post_meta($post_id, '_files');
			}

			if (!isset($_POST['_public'])) {
				delete_post_meta($post_id, '_public');
			} else {
				update_post_meta($post_id, '_public', $_POST['_public']);
			}

			if (!isset($_POST['_client']) || isset($_POST['_public'])) {
				delete_post_meta($post_id, '_client');
			} else {
				update_post_meta($post_id, '_client', $_POST['_client']);
			}
		}
	}

	public function post_edit_form_tag($post)
	{
		if ($post->post_type == 'document') {
			echo ' enctype="multipart/form-data"';
		}
	}

	public function crb_select_client()
	{
		$users = get_users([
			'orderby'      => 'login',
			'order'        => 'ASC',
			'fields'       => ['ID', 'display_name', 'user_email'],
		]);

		$options = [];
		foreach ($users as $user) {
			$options[$user->ID] =  "{$user->display_name} ({$user->user_email})";
		}

		return $options;
	}

	public function attributes_edit_term_fields($term)
	{
		$value = get_term_meta($term->term_id, 'color', true);

		echo '<tr class="form-field">
		<th>
			<label for="color">Color</label>
		</th>
		<td>
			<input name="color" id="color" type="color" value="' . esc_attr($value) . '" />
			<p class="description">Choose a color for the tag</p>
		</td>
		</td>
		</tr>';
	}

	public function attributes_add_term_fields($term)
	{ ?>

		<tr class="form-field">
			<th>
				<label for="color">Color</label>
			</th>
			<td>
				<input name="color" id="color_field" type="color" />
				<p class="description">Choose a color for the tag</p>
			</td>
		</tr>
<?php
	}
	public function attributes_save_term_fields($term_id)
	{
		update_term_meta($term_id, 'color',	sanitize_text_field($_POST['color']));
	}
}
