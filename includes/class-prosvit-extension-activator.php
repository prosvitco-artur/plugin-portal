<?php

/**
 * Fired during plugin activation
 *
 * @link       https://prosvit.design/
 * @since      1.0.0
 *
 * @package    Prosvit_Extension
 * @subpackage Prosvit_Extension/includes
 */

/**
 * Fired during plugin activation.
 *
 * This class defines all code necessary to run during the plugin's activation.
 *
 * @since      1.0.0
 * @package    Prosvit_Extension
 * @subpackage Prosvit_Extension/includes
 * @author     Prosvit <test@prosvit.design>
 */
class Prosvit_Extension_Activator {

	/**
	 * Short Description. (use period)
	 *
	 * Long Description.
	 *
	 * @since    1.0.0
	 */
	public static function activate() {
		$subscriber = get_role('subscriber');
		if(isset($subscriber->capabilities)){
			add_role('employee', 'Employee', $subscriber->capabilities);
		}
	}

}
