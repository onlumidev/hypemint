<template>
  <section class="fold-press text-white bg-black bg-opacity-90 border-b py-8">

    <div class="container mx-auto pt-4 pb-12">

      <div class="flex flex-wrap">
  <div class="w-5/6 sm:w-1/2 p-6">
    <img src="~static/images/cartas.png" />
  </div>
  <div class="w-full sm:w-1/2 p-6 xs-hidden">



    <h3 class="press-title">
      Gaming NFTs



    </h3>

    {{ $t('game_text') }}
        <ul>
          <li>{{ $t('game_bullet1') }}</li>
        </ul>


  </div>
</div>


    </div>


    <div class="container containermin mx-auto ">
      <!-- Begin Mailchimp Signup Form -->
<link href="//cdn-images.mailchimp.com/embedcode/classic-071822.css" rel="stylesheet" type="text/css">

<div id="mc_embed_signup">
    <form action="https://hypemint.us9.list-manage.com/subscribe/post?u=256961a89b00c5d962724cbd0&amp;id=7aa9097a16&amp;f_id=008812e1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
        <div id="mc_embed_signup_scroll">

        <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
<div class="mc-field-group">
	<label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
</label>
	<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" required>
	<span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span>
</div>
<div class="mc-field-group">
	<label for="mce-LNAME">Message  <span class="asterisk">*</span>
</label>
	<input type="text" value="" name="LNAME" class="required" id="mce-LNAME" required>
	<span id="mce-LNAME-HELPERTEXT" class="helper_text"></span>
</div>
<div class="mc-field-group size1of2">
	<label for="mce-PHONE">Phone Number </label>
	<input type="text" name="PHONE" class="" value="" id="mce-PHONE">
	<span id="mce-PHONE-HELPERTEXT" class="helper_text"></span>
</div>
	<div id="mce-responses" class="clear foot">
		<div class="response" id="mce-error-response" style="display:none"></div>
		<div class="response" id="mce-success-response" style="display:none"></div>
	</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_256961a89b00c5d962724cbd0_7aa9097a16" tabindex="-1" value=""></div>
        <div class="optionalParent">
            <div class="clear foot">
                <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
                <p class="brandingLogo"><a href="http://eepurl.com/ian8yT" title="Mailchimp - email marketing made easy and fun"><img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg"></a></p>
            </div>
        </div>
    </div>
</form>
</div>
    </div>
     <a id="press" style="position: absolute;top: 0; bottom: 0; margin: auto;"></a>
  </section>

</template>

<style>
  .fold-press .border-title {
    border-bottom: 1px solid #00EFCA;
    display: inline-block;
    margin-bottom: 20px;
    font-size: 20px;
  }

  .fold-press .slick-track.slick-center{

      display: flex;

      justify-content: space-evenly;
  }

  .fold-press .slick-track.slick-center{
      display: flex;
      justify-content: space-evenly;
  }

  .fold-press .slick-dots {
      bottom: -75px;
      margin-left: 4px;
  }

  .fold-press .slick-dots li button:before {
      color: #000;
  }

  .fold-press .slick-dots li.slick-active button:before {
      opacity: 1;
      color: #000;
  }

  .press-title {
      font-size: 78px;
      line-height: 75px;
      max-width: 452px;
      margin-bottom: 20px;
  }

  .anypress {
    padding-left: 11px;
    font-size: 20px;
    display: block;
    font-weight: 600;
  }

  .contact-button {
    display: block;
    background: #000;
    max-width: 321px;
    color: #fff;
    text-align: center;
    padding: 7px 0;
    margin-top: 9px;
    font-size: 17px;
    font-weight: 500;
  }

  .contact-button:hover {
    background: #00EFCA;
    color: #000;
  }

  .fold-press div .containermin  {
    margin: 0px auto 43px;
  }

  .noticias-box > img {
    height: 30px;
  }

  .noticias-box p {
    font-size: 13px;
    margin: 30px 0;
    max-width: 347px;
  }

  .noticias-box p.fs-12 {
    font-size: 12px;
  }

  .noticias-box .closequote img {
    display: inline-block;
  }
  .fold-press  {
    padding-bottom: 150px;
  }
  .fold-press .slick-list{
    overflow: inherit;
  }

  .fold-press .slick-arrow {
    display: none!important;
  }

  .fold-press  .slick-slide > div {
    display: block;
    box-shadow: 12px 1px 25px rgb(0 0 0 / 10%);
    margin-right: 42px;
    padding: 42px 9px;
  }

  .pt-20 {
    padding-top: 70px;
  }

@media only screen and (max-width: 1320px) {
 .fold-press div .containermin {
    max-width: inherit;
  }

  .fold-press .slick-track.slick-center {
      display: flex;
      justify-content: normal;
  }

  .fold-press .slick-initialized .slick-slide {
      padding-right: 15px;
  }
}
 @media only screen and (max-width: 768px) {

     .xs-hidden {
      display: none;
    }

    h3 {
      font-size: 34px;
    }

    .joy-title {
        font-size: 22px;

    }

    .fold-press  .slick-slide > div {

      margin-right: 0;

    }

     .fold-press .flex .p-6 {
        width: 100%;
      }

      .anypress {
        text-align: center;
      }

      .contact-button {
          display: block;
          background: #000;
          max-width: 321px;
          color: #fff;
          text-align: center;
          padding: 7px 0;
          margin-top: 9px;
          font-size: 17px;
          font-weight: 500;
          margin: 9px auto 0;
      }

      .press-title {
          font-size: 36px;
          line-height: 45px;
          max-width: 384px;
          text-align: center;
          margin: 0 auto 20px;
      }

 }
</style>

<script>

  export default {
      name: 'Press'
  }
</script>

<i18n>
{
  "en": {
    "game_text": "Actually it’s very popular in the game market and is generating billions of dollars every month, quarter and year. It’s easy to integrate and with high demand at the moment, our studio is prepared for the best and most complex projects you can imagine. We can create arts and rewards in order to make your business grow exponentially, reaching large audiences to offer various monetization opportunities.",
    "game_bullet1": "Go beyond the fun of games, profit too."
  }
}
</i18n>
