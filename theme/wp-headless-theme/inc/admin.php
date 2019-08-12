<?php
/**
 * Admin customizations
 *
 * @package wp-headless
 */

/**
 * By default, in Add/Edit Post, WordPress moves checked categories to the top of the list and unchecked to the bottom.
 * When you have subcategories that you want to keep below their parents at all times, this makes no sense.
 * This function removes automatic reordering so the categories widget retains its order regardless of checked state.
 * Thanks to https://stackoverflow.com/a/12586404
 *
 * @param arr $args Array of arguments.
 * @return arr
 */
function taxonomy_checklist_checked_ontop_filter( $args ) {
	$args['checked_ontop'] = false;
	return $args;
}

add_filter( 'wp_terms_checklist_args', 'taxonomy_checklist_checked_ontop_filter' );

/**
 * Customize the preview button in the WordPress admin to point to the headless client.
 *
 * @param  str $link The WordPress preview link.
 * @return str The headless WordPress preview link.
 */
function set_headless_preview_link( $link ) {
	flush_rewrite_rules();
	global $post;

	$prefix = $post->post_type === 'post' ? 'blog' : $post->post_type;

	return 'http://localhost:8000/' . $prefix . '/'
		. get_page_uri( $post->ID ) . '?'
		. 'post=' . $post->ID
		. '&nonce=' . wp_create_nonce( 'wp_rest' )
		. '&preview=true';
}

add_filter( 'preview_post_link', 'set_headless_preview_link' );

add_filter( 'use_block_editor_for_post', '__return_false', 10 );

