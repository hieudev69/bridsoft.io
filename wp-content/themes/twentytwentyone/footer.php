<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_One
 * @since Twenty Twenty-One 1.0
 */

?>
</main><!-- #main -->
</div><!-- #primary -->
</div><!-- #content -->

<?php get_template_part( 'template-parts/footer/footer-widgets' ); ?>

    <footer>
        <div class="container " >
        <p class="copyright text-center mt-4 " >Copyright © 2023 <a href="/">BridSoft.com</a> All Rights
Reserved.<!-- <a href="http://www.hodfords.jp/">Hodfords Japan</a>--></p>

        </div>
    </footer>
<?php wp_footer(); ?>

</body>

</html>