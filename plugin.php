<?php
/**
 * Plugin Name: Capitaine WP - Formation Gutenberg - Exercices
 * Plugin URI: https://github.com/maximebj/capitainewp-gut-exercices
 * Description: Corrigé des exercices de la formation Gutenberg
 * Author: maximebj
 * Author URI: https://capitainewp.io
 * Version: 1.0.0
 * License: GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
