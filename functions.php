<?php

function filmfestival_scripts_styles(){
   wp_enqueue_style('filmfestival_style', get_stylesheet_uri());
}
  
add_action('wp_enqueue_scripts','filmfestival_scripts_styles');

function filmfestival_excerpt_length(){
  return 133;
}

add_filter('excerpt_length', 'filmfestival_excerpt_length');

function custom_enqueue_scripts() {
    // Enqueue the custom script
    wp_enqueue_script('custom-script', get_stylesheet_directory_uri() . '/custom-script.js', array(), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'custom_enqueue_scripts');

