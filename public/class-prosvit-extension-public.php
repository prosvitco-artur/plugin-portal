<?php

/**
 * The public-facing functionality of the plugin.
 *
 * @link       https://prosvit.design/
 * @since      1.0.0
 *
 * @package    Prosvit_Extension
 * @subpackage Prosvit_Extension/public
 */
/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the public-facing stylesheet and JavaScript.
 *
 * @package    Prosvit_Extension
 * @subpackage Prosvit_Extension/public
 * @author     Prosvit <test@prosvit.design>
 */
class Prosvit_Extension_Public
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
	 * @param      string    $plugin_name       The name of the plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct($plugin_name, $version)
	{

		$this->plugin_name = $plugin_name;
		$this->version = $version;

		add_shortcode('know-all', [$this, 'shortcode_know_all']);
	}
	/**
	 * Register the JavaScript for the public-facing side of the site.
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
		
	}
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

		$plugin_dir = ABSPATH . 'wp-content/plugins/plugin-portal/';
		$js_content = file_get_contents($plugin_dir . "/public/build/asset-manifest.json");
		$contents = json_decode($js_content);
		foreach($contents->files as $name => $path){

			$getMime = explode( '.', $path );
			$mime = end( $getMime );
			if($mime == "css"){
				wp_enqueue_style($name, plugin_dir_url(__FILE__) .'build'. $path);
			} else if($mime == "js"){
				wp_enqueue_script($name, plugin_dir_url(__FILE__) .'build'. $path, [], $this->version, true);
			}
		}
		
	}

	public function rest_api_init()
	{
		$this->user = wp_get_current_user();

		register_rest_route('prosvit/v1', '/calendar', array(
			'methods'  => 'GET',
			'callback' => [$this, 'rest_api_calendar'],
			'permission_callback' => [$this, 'rest_api_check_auth']
		));

		register_rest_route('prosvit/v1', '/user', array(
			'methods'  => 'GET',
			'callback' => [$this, 'rest_api_current_user'],
			'permission_callback' => [$this, 'rest_api_check_auth']
		));
	}

	public function rest_api_check_auth()
	{
		return user_can($this->user, 'read');
	}


	public function rest_api_current_user(WP_REST_Request $request)
	{
		$data_json = userData($this->user->ID);


		$last_name = get_user_meta( $this->user->ID, 'last_name', true );
		$first_name = get_user_meta( $this->user->ID, 'first_name', true );

		$data_json->last_name = $last_name;
		$data_json->first_name = $first_name;

		if(!empty($data_json)){
			$request = "success";
		} else {
			$request = "error";
		}
		$return_data = (object)[
			'status' => $request,
			'data' => $data_json->data,
			'params' => null,
		];
		wp_send_json($return_data);
	}


	public function rest_api_calendar(WP_REST_Request $request)
	{
		$event_json = eventsCalendarJson($this->user->ID);
		if(!empty($event_json)){
			$request = "success";
		} else {
			$request = "error";
		}
		$return_data = (object)[
			'status' => $request,
			'data' => $event_json,
			'params' => null,
		];
		wp_send_json($return_data);

	}

	public function shortcode_know_all()
	{
		$terms = get_terms([
			'taxonomy' => 'topic_category',
			'hide_empty' => false,
		]);

		ob_start();
?>
		<div class="container">
			<div class="row">
				<div class="col-12">
					<form role="search" method="get" class="mb-5" id="searchform" action="<?php echo home_url('/') ?>">
						<input type="text" class="form-control" value="<?php echo get_search_query() ?>" name="s" id="s" placeholder="Search the knowledge base..." />
						<input type="hidden" name="post_type" value="topic">
						<button type="submit" class="btn btn-secondary mt-2" id="searchsubmit">Search</button>
					</form>
				</div>
				<?php foreach ($terms as $term) : ?>
					<div class="col-6">
						<div class="card mb-3">
							<div class="row g-0">
								<div class="col-md-4">
									<img src="https://via.placeholder.com/200x200?text=<?php echo $term->name; ?>" alt="<?php echo $term->slug; ?>">
								</div>
								<div class="col-md-8">
									<div class="card-body">
										<h5 class="card-title"><a href="<?php echo get_term_link($term->term_id, 'topic_category'); ?>"><?php echo $term->name; ?></a></h5>
										<p class="card-text"><?php echo $term->description; ?></p>
									</div>
								</div>
							</div>
						</div>
					</div>
				<?php endforeach; ?>
			</div>
		</div>
		<?php
		return ob_get_clean();
	}

	public function wp_title($title)
	{
		global $wp_query;
		if (isset($wp_query->query['portal'])) {
			$portal = get_query_var('portal');
			if ($portal == 'documents') {
				$title = 'Documents';
			} elseif ($portal == 'calendar') {
				$title = 'Calendar';
			} else {
				$title = 'Portal';
			}
		}

		return $title;
	}

	public function template_include($template)
	{
		global $wp_query;

		if (isset($wp_query->query['portal'])) {
			return PE_PATH . 'public/partials/prosvit-extension-public-portal.php';
		}

		if (isset($wp_query->query['profile'])) {
			return PE_PATH . 'public/partials/prosvit-extension-public-profile.php';
		}

		return $template;
	}

	public function template_redirect()
	{
		global $wp_query;
		global $post;

		if (isset($wp_query->query['profile']) && empty($wp_query->query['profile'])) {
			wp_redirect(home_url());
			exit();
		}

		if (!is_user_logged_in() && isset($wp_query->query['portal'])) {
			wp_redirect(home_url());
			exit();
		}

		if (isset($wp_query->query['post_type']) && $wp_query->query['post_type'] == 'document') {
			$public = get_post_meta($post->ID, '_public', true);
			if ($public == 'yes') return;
			$client = get_post_meta($post->ID, '_client', true);

			if ($client != get_current_user_id()) {
				wp_redirect(home_url());
				exit();
			}
		}
	}

	public function portal_the_content($content)
	{
		global $post;
		global $wp_query;

		if (isset($wp_query->query['portal'])) {
			ob_start();
			include PE_PATH . 'public/partials/prosvit-extension-public-portal.php';
			$content = ob_get_contents();
			ob_end_clean();
		}

		$portal = get_query_var('portal');
		if ($portal == 'calendar') {
			$content = '<div id="root"></div>';
			$events = get_terms('types');
			if (!empty($events)) {
				ob_start();
		?>
				<div class="portal__schedules">
					<h5 class="mb-52">Schedules</h5>
					<hr class="portal__line">
					<ul class="portal__events">
						<?php foreach ($events as $event) : ?>
							<li> <span style="background-color: <?php echo get_term_meta($event->term_id, 'color', true); ?>;"></span><?php echo $event->name; ?></li>
						<?php endforeach; ?>
					</ul>
				</div>
			<?php
				$content .= ob_get_contents();
				ob_end_clean();
			}
		} elseif ($portal == 'documents') {
			ob_start();
			include PE_PATH . 'public/partials/prosvit-extension-public-documents.php';
			$content = ob_get_contents();
			ob_end_clean();
		} elseif ($portal == 'my-account') {
			ob_start();
			include PE_PATH . 'public/partials/prosvit-extension-public-my-account.php';
			$content = ob_get_contents();
			ob_end_clean();
		}

		if ($post->post_type == 'document') {
			$files = get_post_meta($post->ID, '_files', true);
			$public = get_post_meta($post->ID, '_public', true);
			$client = get_post_meta($post->ID, '_client', true);

			ob_start(); ?>
			<?php if (!empty($files)) : ?>
				<ul class="document-files">
					<?php foreach ($files as $file) : ?>
						<?php if (!isset($file['path']) || !isset($file['path'])) continue; ?>
						<?php if ($public == 'yes' || ($client == get_current_user_id())) : ?>
							<li><a href="<?php echo home_url(); ?>?download=egnyte&file=<?php echo base64_encode($file['path']); ?>"><?php echo $file['name']; ?></a></li>
						<?php endif; ?>
					<?php endforeach; ?>
				</ul>
			<?php endif ?>
		<?php $content .= ob_get_contents();
			ob_end_clean();
		}

		return $content;
	}

	public function user_search_columns($search_columns)
	{
		return $search_columns;
	}

	public function init_custom()
	{

		if (isset($_POST['update_my_account']) && wp_verify_nonce($_POST['update_my_account'], 'update_my_account')) {
			$user = wp_get_current_user();

			if (isset($_FILES['profile_picture']) && !empty($_FILES['profile_picture'])) {
				if (!function_exists('wp_handle_upload'))
					require_once(ABSPATH . 'wp-admin/includes/file.php');

				$file = &$_FILES['profile_picture'];
				$overrides = ['test_form' => false];
				$movefile = wp_handle_upload($file, $overrides);
				if (isset($movefile['url'])) {
					update_user_meta($user->ID, 'profile_picture', $movefile['url']);
				}
			}

			$userdata['ID'] = $user->ID;
			if (isset($_POST['first_name']) && !empty($_POST['first_name'])) {
				$userdata['first_name'] = $_POST['first_name'];
			}
			if (isset($_POST['last_name']) && !empty($_POST['last_name'])) {
				$userdata['last_name'] = $_POST['last_name'];
			}
			if (isset($_POST['user_email']) && !empty($_POST['user_email'])) {
				$userdata['user_email'] = $_POST['user_email'];
			}
			if (isset($_POST['password_current']) && !empty($_POST['password_current'])) {
				$hash = $user->data->user_pass;
				if (wp_check_password($_POST['password_current'], $hash)) {
					if ($_POST['password_1'] == $_POST['password_2']) {
						$userdata['user_pass'] = $_POST['password_1'];
					}
				}
			}

			foreach ($_POST as $key => $value) {
				$is_portal = strpos($key, '_portal_');
				if ($is_portal !== false && !empty($value)) {
					$_key = str_replace('_portal_', '', $key);
					update_user_meta($user->ID, $_key, $value);
				}
			}

			$update_user = wp_update_user($userdata);
			if (is_wp_error($update_user)) {
				echo "<p>An error occurred while updating the user.</p>";
			} else {
				echo "<p>User updated successfully.</p>";
			}
		}

		add_rewrite_endpoint('portal', EP_ROOT);
		add_rewrite_endpoint('profile', EP_ROOT);

		if (isset($_GET['download']) && $_GET['download'] == 'egnyte' && isset($_GET['file'])) {
			$file_path = base64_decode($_GET['file']);
			$file_name = basename($file_path);
			$domain = 'prosvit2';
			$token = '25wq934w4bb286dj3rbsst6m';
			$url = "https://{$domain}.egnyte.com/pubapi/v1/fs-content/{$file_path}";
			$response = wp_remote_get($url, [
				'headers' => [
					'Authorization' => "Bearer {$token}"
				]
			]);

			if (wp_remote_retrieve_response_code($response) === 200) {
				$body = wp_remote_retrieve_body($response);

				$tmpName = tempnam(sys_get_temp_dir(), 'data');
				$file = fopen($tmpName, "w") or die("Unable to open file!");
				fwrite($file, $body);
				fclose($file);

				header('Content-Description: File Transfer');
				header('Content-Disposition: attachment; filename=' . basename($file_name));
				header('Expires: 0');
				header('Cache-Control: must-revalidate');
				header('Pragma: public');
				header('Content-Length: ' . filesize($tmpName));
				header("Content-Type: text/plain");
				readfile($tmpName);
				unlink($tmpName);
			}
		}

		$labels = array(
			'name' => _x('Color Tags', 'taxonomy general name'),
			'singular_name' => _x('Color Tags', 'taxonomy singular name'),
			'search_items' =>  __('Search Colors'),
			'all_items' => __('All Colors'),
			'edit_item' => __('Edit Tag'),
			'update_item' => __('Update Tag'),
			'add_new_item' => __('Add New Tag'),
			'new_item_name' => __('New Type Name'),
			'menu_name' => __('Color Tags'),
		);

		register_taxonomy('types', ['calendar'], [
			'hierarchical' => false,
			'labels' => $labels,
			'show_ui' => true,
			'show_admin_column' => true,
			'query_var' => true,
			'rewrite' => ['slug' => 'type'],
		]);

		$labels = array(
			'name' => 'Category',
			'singular_name' => 'Category',
		);

		register_taxonomy('tax_category', ['document'], [
			'hierarchical' => false,
			'labels' => $labels,
			'show_ui' => true,
			'show_admin_column' => true,
			'query_var' => true,
			'rewrite' => ['slug' => 'tax_category'],
		]);
	}

	public function cptui_register_my_cpts()
	{

		$labels = [
			"name" => "Calendar",
			"singular_name" => "Calendar",
		];

		$args = [
			"label" => "Calendar",
			"labels" => $labels,
			"description" => "",
			"public" => true,
			"publicly_queryable" => true,
			"show_ui" => true,
			"show_in_rest" => true,
			"rest_base" => "",
			"rest_controller_class" => "WP_REST_Posts_Controller",
			"has_archive" => false,
			"show_in_menu" => true,
			"show_in_nav_menus" => true,
			"delete_with_user" => false,
			"exclude_from_search" => false,
			"capability_type" => "post",
			"map_meta_cap" => true,
			"hierarchical" => false,
			"rewrite" => ["slug" => "calendar", "with_front" => true],
			"query_var" => true,
			"supports" => ["title"],
		];

		register_post_type("calendar", $args);

		$labels = [
			"name" => "Documents",
			"singular_name" => "Document",
		];

		$args = [
			"label" => "Documents",
			"labels" => $labels,
			'description'         => '',
			'public'             => true,
			'publicly_queryable' => true,
			'show_ui'            => true,
			'show_in_menu'       => true,
			'query_var'          => true,
			'rewrite'            => true,
			'capability_type'    => 'post',
			'has_archive'        => true,
			'hierarchical'       => false,
			'menu_position'      => null,
			'supports'           => ['title', 'editor']
		];

		register_post_type("document", $args);

		$args = [
			'labels'                     => [
				'name' => 'Categories',
				'singular_name' => 'Category',
				'menu'	=> 'Category'
			],
			'hierarchical'               => false,
			'public'                     => true,
			'show_ui'                    => true,
			'show_admin_column'          => true,
			'show_in_nav_menus'          => true,
			'show_tagcloud'              => true,
		];
		register_taxonomy('topic_category', ['topic'], $args);

		register_post_type('topic', [
			'labels'             => [
				'name'               => 'Topics',
				'singular_name'      => 'Topic',
				'add_new'            => 'Add new',
				'add_new_item'       => 'Add new',
				'edit_item'          => 'Edit',
				'new_item'           => 'New',
				'view_item'          => 'View',
				'menu_name'          => 'Topics'
			],
			'public'             => true,
			'publicly_queryable' => true,
			'show_ui'            => true,
			'show_in_menu'       => true,
			'query_var'          => true,
			'rewrite'            => true,
			'capability_type'    => 'post',
			'has_archive'        => true,
			'hierarchical'       => true,
			'taxonomies' 		 => ['topic_category'],
			'supports'           => ['title', 'editor']
		]);
	}

	public function crb_select_client()
	{
		$users = get_users([
			'orderby'      => 'login',
			'order'        => 'ASC',
			'fields'       => ['ID', 'display_name', 'user_email'],
		]);

		$options = [];
		$options['all'] = "All";
		foreach ($users as $user) {
			$options[$user->ID] =  "{$user->display_name} ({$user->user_email})";
		}


		return $options;
	}
	public function calendar_template($page_template)
	{
		if (is_page('calendar')) {
			$page_template = PE_PATH . 'template/calendar.php';
		}
		return $page_template;
	}
	public function myplugin_add_custom_box()
	{
		$screens = array('post_type' => 'calendar');
		add_meta_box('myplugin_sectionid', 'Calendar', [$this, 'myplugin_meta_calendar_current'], $screens);
		add_meta_box('myplugin_sectionid_text_editor', 'Description', [$this, 'myplugin_meta_calendar_text_editor'], $screens);
	}



	public function myplugin_meta_calendar_current($post, $meta)
	{
		$screens = $meta['args'];


		wp_nonce_field(plugin_basename(__FILE__), 'myplugin_noncename');

		$value_current = get_post_meta($post->ID, 'event_for_customer', true);
		$period_interval = get_post_meta($post->ID, 'period_interval', true);
		$value_repeat = get_post_meta($post->ID, 'repet_events', true);
		$value_month = get_post_meta($post->ID, 'month_events', true);
		if (!$value_month) {
			$value_month = date("m");
		}
		$value_day = get_post_meta($post->ID, 'day_event', true);
		if (!$value_day) {
			$value_day = date("d");
		}
		$value_year = get_post_meta($post->ID, 'year_event', true);
		if (!$value_year) {
			$value_year = date("Y");
		}
		?>
		<div style="  display: grid;
  grid-template-columns: 1fr 1fr 1fr;">

			<div>
				<p><strong>Event day</strong></p>
				<select id="month_events" name="month_events">
					<option <?php if ($value_month == "01") echo "selected";  ?> value="01" data-text="Jan">01-Jan</option>
					<option <?php if ($value_month == "02") echo "selected";  ?> value="02" data-text="Feb">02-Feb</option>
					<option <?php if ($value_month == "03") echo "selected";  ?> value="03" data-text="Mar">03-Mar</option>
					<option <?php if ($value_month == "04") echo "selected";  ?> value="04" data-text="Apr">04-Apr</option>
					<option <?php if ($value_month == "05") echo "selected";  ?> value="05" data-text="May">05-May</option>
					<option <?php if ($value_month == "06") echo "selected";  ?> value="06" data-text="Jun">06-Jun</option>
					<option <?php if ($value_month == "07") echo "selected";  ?> value="07" data-text="Jul">07-Jul</option>
					<option <?php if ($value_month == "08") echo "selected";  ?> value="08" data-text="Aug">08-Aug</option>
					<option <?php if ($value_month == "09") echo "selected";  ?> value="09" data-text="Sep">09-Sep</option>
					<option <?php if ($value_month == "10") echo "selected";  ?> value="10" data-text="Oct">10-Oct</option>
					<option <?php if ($value_month == "11") echo "selected";  ?> value="11" data-text="Nov">11-Nov</option>
					<option <?php if ($value_month == "12") echo "selected";  ?> value="12" data-text="Dec">12-Dec</option>
				</select>
				<input type="text" id="jj" name="day_event" value="<?php echo $value_day; ?>" size="2" maxlength="2">
				<input type="text" id="aa" name="year_event" value="<?php echo $value_year; ?>" size="4" maxlength="4" autocomplete="off" class="form-required">
			</div>
			<div>
				<p><strong>Repeat</strong></p>
				<select id="period_interval" name="period_interval">
					<option <?php if ($value_repeat == "no") echo "selected";  ?> value="no">No</option>
					<option <?php if ($period_interval == "1" && $value_repeat != "no") echo "selected";  ?> value="1">every</option>
					<option <?php if ($period_interval == "2" && $value_repeat != "no") echo "selected";  ?> value="2">every 2nd</option>
					<option <?php if ($period_interval == "3" && $value_repeat != "no") echo "selected";  ?> value="3">every 3rd</option>
					<option <?php if ($period_interval == "4" && $value_repeat != "no") echo "selected";  ?> value="4">every 4th</option>
					<option <?php if ($period_interval == "5" && $value_repeat != "no") echo "selected";  ?> value="5">every 5th</option>
					<option <?php if ($period_interval == "6" && $value_repeat != "no") echo "selected";  ?> value="6">every 6th</option>
				</select>
				<select id="repet_events" name="repet_events">
					<option <?php if ($value_repeat == "no") echo "selected";  ?>></option>
					<option <?php if ($value_repeat == "day" && $value_repeat != "no") echo "selected";  ?> value="day">day</option>
					<option <?php if ($value_repeat == "week" && $value_repeat != "no") echo "selected";  ?> value="week">week</option>
					<option <?php if ($value_repeat == "month" && $value_repeat != "no") echo "selected";  ?> value="month">month</option>
					<option <?php if ($value_repeat == "yearly" && $value_repeat != "no") echo "selected";  ?> value="yearly">year</option>
				</select>
			</div>
			<div>
				<p><strong>Customer</strong></p>
				<?php $users = get_users();
				if ($users) { ?>
					<select id="event_for_customer" name="event_for_customer">
						<option <?php if ($value_current == "all") echo "selected";  ?> value="all">All</option>
						<?php
						foreach ($users as $user) { ?>
							<option <?php if ($user->ID == $value_current) echo "selected";  ?> value="<?php echo $user->ID; ?>"><?php echo $user->user_login; ?> <?php echo $user->user_email; ?></option>
						<?php }
						?>
					</select>
			</div>
		</div>

	<?php }
			}

			public function myplugin_meta_calendar_text_editor($post, $meta)
			{
				$screens = $meta['args'];


				wp_nonce_field(plugin_basename(__FILE__), 'myplugin_noncename');

				$text_event = get_post_meta($post->ID, 'text_event', true);
	?>

				<textarea name="text_event" style="width: 100%; height: 200px; resize: none;"><?php if ($text_event != "") echo $text_event;  ?></textarea><?
			}




			public function myplugin_save_postdata($post_id)
			{
				if (!isset($_POST['event_for_customer']))
					return;

				if (!wp_verify_nonce($_POST['myplugin_noncename'], plugin_basename(__FILE__)))
					return;

				if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE)
					return;

				if (!current_user_can('edit_post', $post_id))
					return;
				$fields = [
					'event_for_customer',
					'period_interval',
					'repet_events',
					'month_events',
					'day_event',
					'year_event',
					'text_event',
				];
				foreach ($fields as $field) {
					if (array_key_exists($field, $_POST)) {
						update_post_meta($post_id, $field, sanitize_text_field($_POST[$field]));
					}
				}
			}

			public function my_activation()
			{
				if (!wp_next_scheduled('my_daily_event'))
					wp_schedule_event(time(), 'daily', 'my_daily_event');
			}
			public function sending_daily_notifications()
			{
				$posts = get_posts(array(
					'post_type'   => 'calendar',
				));


				$calendar_posts = [];
				foreach ($posts as $post) {

					$post_id = $post->ID;
					$value_month = get_post_meta($post_id, 'month_events', true);
					$value_day = get_post_meta($post_id, 'day_event', true);
					$value_year = get_post_meta($post_id, 'year_event', true);
					$post_customer = get_post_meta($post_id, 'event_for_customer', true);



					$post_date = "" . $value_year . "-" . $value_month . "-" . $value_day . "";

					$nowDate = new DateTime(date("Y-m-d"));
					$nowDate->add(new DateInterval('P3D'));
					$today_date = $nowDate->format('Y-m-d');
					$repeat_event = get_post_meta($post_id, 'repet_events', true);
					if ($post_date) {
						if ($repeat_event == 'week') {
							for ($i = 0; $i < 52; $i++) {
								if ($i == 0) {
									$oldDate = $post_date;
									$calendar_post['date'] = $oldDate;
									$calendar_post['post_id'] = $post_id;
									$calendar_posts[] = $calendar_post;
								} else {
									$oldDate = end($calendar_posts)['date'];
									$newDate = new DateTime($oldDate);
									$newDate->add(new DateInterval('P1W'));
									$fomattedDate = $newDate->format('Y-m-d');
									$calendar_post['date'] = $fomattedDate;
									$calendar_post['post_id'] = $post_id;
									$calendar_posts[] = $calendar_post;
								}
							}
						} else if ($repeat_event == 'month') {
							for ($i = 0; $i < 24; $i++) {
								if ($i == 0) {
									$oldDate = $post_date;
									$calendar_post['date'] = $oldDate;
									$calendar_post['post_id'] = $post_id;
									$calendar_posts[] = $calendar_post;
								} else {
									$oldDate = end($calendar_posts)['date'];
									$newDate = new DateTime($oldDate);
									$newDate->add(new DateInterval('P1M'));
									$fomattedDate = $newDate->format('Y-m-d');
									$calendar_post['date'] = $fomattedDate;
									$calendar_post['post_id'] = $post_id;
									$calendar_posts[] = $calendar_post;
								}
							}
						} else if ($repeat_event == 'yearly') {
							for ($i = 0; $i < 5; $i++) {
								if ($i == 0) {
									$oldDate = $post_date;
									$calendar_post['date'] = $oldDate;
									$calendar_post['post_id'] = $post_id;
									$calendar_posts[] = $calendar_post;
								} else {
									$oldDate = end($calendar_posts)['date'];
									$newDate = new DateTime($oldDate);
									$newDate->add(new DateInterval('P1Y'));
									$fomattedDate = $newDate->format('Y-m-d');
									$calendar_post['date'] = $fomattedDate;
									$calendar_post['post_id'] = $post_id;
									$calendar_posts[] = $calendar_post;
								}
							}
						} else {
							$calendar_post['date'] = $post_date;
							$calendar_post['post_id'] = $post_id;
							$calendar_posts[] = $calendar_post;
						}
					}
				}

				foreach ($calendar_posts as $postdata) {

					if ($today_date == $postdata['date']) {

						if (isset($postdata['post_id'])) {
							$post_customer = get_post_meta($postdata['post_id'], 'event_for_customer', true);
							if ($post_customer == "all") {
								$users = get_users([
									'orderby'      => 'login',
									'order'        => 'ASC',
									'fields'       => ['ID', 'display_name', 'user_email'],
								]);
								foreach ($users as $user) {
									$user_name =  $user->display_name;
									$user_email =  $user->user_email;
									$post_title = get_the_title($postdata['post_id']);

									$content = "Dear {$user_name}, we remind you of the event '{$post_title}'";
									$headers = 'From: My Name <myname@mydomain.com>' . "\r\n";

									wp_mail($user_email, 'Notifications', $content, $headers);
								}
							} else {
								$user = get_user_by('id', $post_customer);
								$user_name =  $user->display_name;
								$user_email =  $user->user_email;
								$post_title = get_the_title($postdata['post_id']);

								$content = "Dear {$user_name}, we remind you of the event '{$post_title}'";
								$headers = 'From: My Name <myname@mydomain.com>' . "\r\n";

								wp_mail($user_email, 'Notifications', $content, $headers);
							}
						}
					}
				}
			}
		}
