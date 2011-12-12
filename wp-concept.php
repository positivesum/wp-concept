<?php
/*
Plugin Name: Wordpress Concept
Version: 1.0
Author: Valera Satsura
Author URI: https://www.odesk.com/users/~~41ba9055d0f90cee
*/

class WP_Concept {
    private $post_type = 'concept';

    function __construct() {
        // Register Post Type
        $this->register_post_type();
    }

    function register_post_type() {
        register_post_type($this->post_type, array(
            'labels'                => $this->get_post_type_labels(),
            'public'                => true,
            'publicly_queryable'    => true,
            'show_ui'               => true,
            'show_in_menu'          => true,
            'query_var'             => true,
            'rewrite'               => true,
            'capability_type'       => 'post',
            'has_archive'           => true,
            'hierarchical'          => false,
            'menu_position'         => null,
            'supports'              => array(
                'title', 'editor', 'author', 'revisions', 'comments'
            )
        ));
    }

    private function get_post_type_labels() {
        return array(
            'name'                  => __('Concepts'),
            'singular_name'         => __('Concept'),
            'add_new'               => __('Add New'),
            'add_new_item'          => __('Add New Concept'),
            'edit_item'             => __('Edit Concept'),
            'new_item'              => __('New Concept'),
            'all_items'             => __('All Concepts'),
            'view_item'             => __('View Concept'),
            'search_items'          => __('Search Concepts'),
            'not_found'             => __('No concepts found'),
            'not_found_in_trash'    => __('No concepts found in Trash'),
            'parent_item_colon'     => '',
            'menu_name'             => __('Concepts')
        );
    }


}

global $WP_Concept;
$WP_Concept = new WP_Concept();