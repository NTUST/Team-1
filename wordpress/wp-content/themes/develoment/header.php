<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo('charset');?>">
	<title><?php
            if (is_home()) {
                bloginfo('name');
                echo ' - ';
                bloginfo('description');
            } else {
                wp_title(' - ', true, 'right');
                bloginfo('name');
            } ?>
            </title>
    <?php wp_head(); ?>
    <meta name="viewport" content="width=device-width, initial-scale=1" /> <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
    <link href="<?php bloginfo('template_directory') ?>/style.css" media="screen" rel="stylesheet" type="text/css" />
	<link rel="stylesheet" href="<?php bloginfo('template_directory') ?>/css/normalize.css">
	<link rel="stylesheet" href="<?php bloginfo('template_directory') ?>/css/kickstart.css">
	<link rel="stylesheet" href="<?php bloginfo('template_directory') ?>/css/style.css">

</head>
<body>
	 
         <header id="header">
         <div class="logo-box">
         <a href="<?php bloginfo('url'); ?>"><img src="http://dev.daychen.tw/team1/wp-content/uploads/2015/04/banner.png" alt="<?php echo( get_bloginfo( 'title' ) ); ?>" /></a>
         </div>
<div class="nav-box"> <?php wp_nav_menu( array( 'theme_location' => 'primary-menu' ) ); ?>
            </div>



            <!-- temp -->


            <!-- end temp -->
         </header>
    <div id="wrapper" class="grid">