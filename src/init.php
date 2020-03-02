<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since 	1.0.0
 * @package CGB
 */


if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function capitainewp_exos_register_assets() {

	wp_register_style(
		'capitainewp-exos',
		plugins_url( 'dist/blocks.style.build.css' , dirname( __FILE__ ) ),
		is_admin() ? [ 'wp-editor' ] : null,
		'1.0'
	);

	wp_register_script(
		'capitainewp-exos',
		plugins_url( 'dist/blocks.build.js', dirname( __FILE__ ) ),
		[ 'wp-editor', 'wp-blocks', 'wp-i18n', 'wp-element' ],
		'1.0',
		true
	);

	wp_register_style(
		'capitainewp-exos-editor',
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ),
		[ 'wp-edit-blocks' ],
		'1.0'
	);

	register_block_type(
		'capitainewpexo/blocks', array(
			'style'         => 'capitainewp-exos',
			'editor_script' => 'capitainewp-exos',
			'editor_style'  => 'capitainewp-exos-editor',
		)
	);
}

add_action( 'init', 'capitainewp_exos_register_assets' );