<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://prosvit.design/
 * @since             1.0.0
 * @package           Prosvit_Extension
 *
 * @wordpress-plugin
 * Plugin Name:       Prosvit Extension
 * Plugin URI:        https://prosvit.design/
 * Description:       This is a short description of what the plugin does. It's displayed in the WordPress admin area.
 * Version:           1.0.0
 * Author:            Prosvit
 * Author URI:        https://prosvit.design/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       prosvit-extension
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if (!defined('WPINC')) {
	die;
}

/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define('PROSVIT_EXTENSION_VERSION', '1.0.0');

define('PE_PATH', plugin_dir_path(__FILE__));

define('PE_INC_PATH', PE_PATH . 'includes/');


require_once(PE_PATH . 'vendor/autoload.php');

require_once(PE_INC_PATH . 'helpers.php');

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-prosvit-extension-activator.php
 */
function activate_prosvit_extension()
{
	require_once plugin_dir_path(__FILE__) . 'includes/class-prosvit-extension-activator.php';
	Prosvit_Extension_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-prosvit-extension-deactivator.php
 */
function deactivate_prosvit_extension()
{
	require_once plugin_dir_path(__FILE__) . 'includes/class-prosvit-extension-deactivator.php';
	Prosvit_Extension_Deactivator::deactivate();
}

register_activation_hook(__FILE__, 'activate_prosvit_extension');
register_deactivation_hook(__FILE__, 'deactivate_prosvit_extension');

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path(__FILE__) . 'includes/class-prosvit-extension.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_prosvit_extension()
{

	$plugin = new Prosvit_Extension();
	$plugin->run();
}
run_prosvit_extension();