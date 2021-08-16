<?php

/**
 * Fired during plugin deactivation
 *
 * @link       https://prosvit.design/
 * @since      1.0.0
 *
 * @package    Prosvit_Extension
 * @subpackage Prosvit_Extension/includes
 */

/**
 * Fired during plugin deactivation.
 *
 * This class defines all code necessary to run during the plugin's deactivation.
 *
 * @since      1.0.0
 * @package    Prosvit_Extension
 * @subpackage Prosvit_Extension/includes
 * @author     Prosvit <test@prosvit.design>
 */
class Prosvit_Extension_Deactivator {

	/**
	 * Short Description. (use period)
	 *
	 * Long Description.
	 *
	 * @since    1.0.0
	 */
	public static function deactivate() {
		remove_role('employee');
	}

}
