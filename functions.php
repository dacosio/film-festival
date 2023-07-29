<?php

function filmfestival_scripts_styles(){
   wp_enqueue_style('filmfestival_style', get_stylesheet_uri());
}
  
add_action('wp_enqueue_scripts','filmfestival_scripts_styles');