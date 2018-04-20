<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since 	1.0.0
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function capitainewp_exos_block_assets() {

	// Styles.
	wp_enqueue_style(
		'capitainewp-exos-style-css',
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ),
		array( 'wp-blocks' )
	);
}
add_action( 'enqueue_block_assets', 'capitainewp_exos_block_assets' );


function capitainewp_exos_editor_assets() {

	// Scripts.
	wp_enqueue_script(
		'capitainewp-exos-block',
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element' )
	);

	// Styles.
	wp_enqueue_style(
		'capitainewp-exos-block-editor',
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ),
		array( 'wp-edit-blocks' )
	);
}
add_action( 'enqueue_block_editor_assets', 'capitainewp_exos_editor_assets' );
