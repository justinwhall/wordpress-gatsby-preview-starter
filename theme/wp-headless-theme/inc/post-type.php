<?php
/**
 * Register Post Types
 *
 * @package wp-headless
 */

/**
 * Registers beer post type
 *
 * @return void
 */
function beer_post_init() {
	$labels = array(
		'name'               => _x( 'Beers', 'post type general name', 'wp-gatsby-headless' ),
		'singular_name'      => _x( 'Beer', 'post type singular name', 'wp-gatsby-headless' ),
		'menu_name'          => _x( 'Beers', 'admin menu', 'wp-gatsby-headless' ),
		'name_admin_bar'     => _x( 'Beer', 'add new on admin bar', 'wp-gatsby-headless' ),
		'add_new'            => _x( 'Add New', 'beer', 'wp-gatsby-headless' ),
		'add_new_item'       => __( 'Add New beer', 'wp-gatsby-headless' ),
		'new_item'           => __( 'New beer', 'wp-gatsby-headless' ),
		'edit_item'          => __( 'Edit beer', 'wp-gatsby-headless' ),
		'view_item'          => __( 'View beer', 'wp-gatsby-headless' ),
		'all_items'          => __( 'All Beers', 'wp-gatsby-headless' ),
		'search_items'       => __( 'Search Beers', 'wp-gatsby-headless' ),
		'parent_item_colon'  => __( 'Parent Beers:', 'wp-gatsby-headless' ),
		'not_found'          => __( 'No beers found.', 'wp-gatsby-headless' ),
		'not_found_in_trash' => __( 'No beers found in Trash.', 'wp-gatsby-headless' ),
	);

	$args = array(
		'labels'              => $labels,
		'description'         => __( 'Description.', 'wp-gatsby-headless' ),
		'public'              => true,
		'publicly_queryable'  => true,
		'show_ui'             => true,
		'show_in_menu'        => true,
		'query_var'           => true,
		'rewrite'             => array( 'slug' => 'beer' ),
		'capability_type'     => 'post',
		'has_archive'         => true,
		'hierarchical'        => false,
		'menu_position'       => null,
		'show_in_graphql'     => true,
		'graphql_single_name' => 'Beer',
		'graphql_plural_name' => 'Beers',
		'supports'            => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments', 'revisions' ),
	);

	register_post_type( 'beer', $args );
}
add_action( 'init', 'beer_post_init' );
