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
        add_action( 'init', array(&$this,'register_post_type'), 0 );
        // Add additional icons
        add_action( 'admin_head', array(&$this,'icons_css') );
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
            'menu_icon'             => WP_PLUGIN_URL.'/'.basename(dirname(__FILE__)).'/images/light-bulb.png',
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

    function icons_css() {
        ?>
        <style type="text/css" media="screen">
            #menu-posts-concept .wp-menu-image {
                background: url(<?php echo WP_PLUGIN_URL.'/'.basename(dirname(__FILE__)) ?>/images/light-bulb.png) no-repeat 6px -17px !important;
            }
            #menu-posts-concept:hover .wp-menu-image, #menu-posts-concept.wp-has-current-submenu .wp-menu-image {
                background-position:6px 7px!important;
            }
            .icon32-posts-concept {
                background:url(<?php echo WP_PLUGIN_URL.'/'.basename(dirname(__FILE__)) ?>/images/light-bulb-32.png) no-repeat 0px 0px !important;
            }
        </style>
        <?php
    }


}

global $WP_Concept;
$WP_Concept = new WP_Concept();