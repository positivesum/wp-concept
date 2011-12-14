<?php
/*
Plugin Name: Wordpress Concept
Version: 1.0
Author: Valera Satsura
Author URI: https://www.odesk.com/users/~~41ba9055d0f90cee
*/

class WP_Concept {
    private $post_type = 'concepts';
    private $plugin_uri = '';
    private $plugin_name = '';

    /**
     * Constructor of class
     */
    function __construct() {
        // Setup plugin uri variable
        $this->plugin_uri = WP_PLUGIN_URL.'/'.basename(dirname(__FILE__));

        // Plugin name
        $this->plugin_name = 'wp-concept';

        // Register Post Type
        add_action( 'init', array(&$this,'post_type'), 0 );
        // Define metaboxes for post type
        add_action( 'add_meta_boxes', array(&$this,'post_type_metaboxes') );
        // Additional admin styles
        add_action('admin_print_styles', array(&$this,'admin_styles'));
        // Additional admin scripts
        add_action('admin_print_scripts', array(&$this,'admin_scripts'));
    }

    /**
     * Register new post type - concept
     */
    function post_type() {
        register_post_type($this->post_type, array(
            'labels'                => $this->post_type_labels(),
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
            'menu_icon'             => $this->plugin_uri.'/images/light-bulb.png',
            'supports'              => array(
                'title', 'editor', 'author', 'revisions', 'comments'
            )
        ));
    }

    /**
     * Get labels for post type "concept"
     * @return array
     */
    private function post_type_labels() {
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

    /**
     * Additional styles for admin (wp-admin)
     */
    function admin_styles() {
        wp_register_style($this->plugin_name.'-admin', $this->plugin_uri.'/css/admin.css');
        wp_enqueue_style($this->plugin_name.'-admin');
    }

    /**
     * Additional scripts for admin (wp-admin)
     */
    function admin_scripts() {
        wp_enqueue_script('media-upload');
        wp_enqueue_script('thickbox');

        wp_register_script($this->plugin_name.'-admin', $this->plugin_uri.'/js/admin.js', array('jquery','media-upload','thickbox'));
        wp_enqueue_script($this->plugin_name.'-admin');
    }

    /**
     * Adding new metaboxes
     */
    function post_type_metaboxes() {
        // Concept Files
        add_meta_box(
            $this->plugin_name,
            __('Concept Files'),
            array(&$this, 'metabox_files'),
            $this->post_type
        );
    }

    /**
     * Html for Concept Files metabox
     * @param $post
     */
    function metabox_files($post) {
        // Use nonce for verification
        wp_nonce_field( plugin_basename( __FILE__ ), 'myplugin_noncename' );
        ?>
        <label id="<?php echo $this->plugin_name ?>">
            Upload the concept source files as a zip file<br />
            <input class="upload_value" id="<?php echo $this->plugin_name ?>-value" type="text" size="36" name="<?php echo $this->plugin_name ?>-value" value="" />
            <input class="upload_file" id="<?php echo $this->plugin_name ?>-button" type="button" value="Browse" />
        </label>
        <?php
    }

    /**
     * Get all revisions for post with ID $post_id
     * @static
     * @param $post_id
     * @return mixed
     */
    static function get_revisions($post_id) {
        global $wpdb;

        return $wpdb->get_results(
            "
            SELECT * FROM $wpdb->posts WHERE post_name LIKE '$post_id-%' AND post_type='revision'
            "
        );


    }
}

/**
 * Get all revisions for post with ID $post_id
 *
 * @param $post_id
 * @return mixed
 */
function get_revisions($post_id) {
    return WP_Concept::get_revisions($post_id);
}

global $WP_Concept;
$WP_Concept = new WP_Concept();