<?php
/**
 * Displays header site branding
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_One
 * @since Twenty Twenty-One 1.0
 */

$blog_info    = get_bloginfo( 'name' );
$description  = get_bloginfo( 'description', 'display' );
$show_title   = ( true === get_theme_mod( 'display_title_and_tagline', true ) );
$header_class = $show_title ? 'site-title' : 'screen-reader-text';

?>

<?php if ( has_custom_logo() && $show_title ) : ?>

<div class="site-logo w150px"><?php the_custom_logo(); ?></div>

<?php endif; ?>
<nav id="site-navigation" class="primary-navigation navbar-fixed-top" 
    aria-label="<?php esc_attr_e( 'Primary menu', 'twentytwentyone' ); ?>">
    <div class="primary-menu-container">
        <ul id="primary-menu-list" class="menu-wrapper">
            <li 
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item  current_page_item">
                <a href="#home" aria-current="page" title="Home"  class="js-curnav-switch active">Home</a>
            </li>
			<li 
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children "><a
                    href="#whywe"  title="Choose We" class="js-curnav-switch">Choose We</a>
            </li>
            <li 
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children "><a
                    href="#ourServices"  title="Service"  class="js-curnav-switch">Service</a>
            </li>
            <li 
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children "><a
                    href="#use-case"  title="Works" class="js-curnav-switch">Works</a>
            </li>
			<!-- <li 
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children "><a
                    href="#use-case">Clients</a>
            </li> -->
            <li 
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children  "><a
                    href="#contact" title="Contact" class="js-curnav-switch">Contact</a>
        </ul>
       
    </div>
</nav><!-- #site-navigation -->