<?php
/**
 * Template Name: contact
 */

 // Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
 get_header();?>
<section class="banner">
    <div class="banner-contact container-fluid">
        <div class="container sp-container">
            <div class="row">
                <div class="col-md-12 mt-2">
                    <h1 class="text-white text-center" data-aos="fade-right" data-aos-offset="300" data-aos-delay="200"
                        data-aos-easing="ease-in-sine" style="font-size:40px">WE ARE HIRING ! </h1>
                    <h1 class="text-white text-center" data-aos="fade-right" data-aos-offset="300" data-aos-delay="300"
                        data-aos-easing="ease-in-sine" style="font-size:30px">
                        Come and work with us. BridSoft hires top trained professionals
                    <br>
with a curiosity for new things, growth and self-fulfilment.
                    </h1>
                </div>

            </div>
        </div>
    </div>
</section>

<section class="contact-us">
    <div class="container">
        <div class="row">


            <div class="col-lg-2">

            </div>
            <div class="col-lg-8 mb-4">
                <div class="wprt-spacer" data-desktop="70" data-mobi="60" data-smobi="60" style="height:70px"></div>
                <h2 class="text-left margin-bottom-10">GET IN TOUCH WITH US</h2>
                <div class="wprt-lines style-2 custom-1 mb-4">
                    <div class="line-2"></div>
                </div>
                <?php 
echo do_shortcode('[contact-form-7 id="341" title="hiring"]');
?>
            </div>
            <div class="col-lg-2">

</div>
        </div>
    </div>
</section>

<?php  
get_footer() ?>