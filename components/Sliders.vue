<template>
    <div class="snapsections bg-black bg-opacity-90 ">
      <section>
        <a id="home"></a>

      </section>
      <section>
      <a id="building" style="position: absolute;top: 0; bottom: 0; margin: auto;"></a>
        <div class="building-bg">
          <div class="container  mx-auto">
            <div class="flex flex-wrap">
              <div class="w-5/6 sm:w-1/2 p-6">


                <h3 :class="{activetitle: isActive}" v-observe-visibility="{
                  callback: visibilityChanged
                }">
                  <p>{{ $t('disclaimer1') }}</p>
                  <!--
                  <p>{{ $t('disclaimer2') }}</p>
                  <p>{{ $t('disclaimer3') }}</p>
                  <p>{{ $t('disclaimer4') }}</p>
                  -->
                  <span class="typewriter" v-if="$t('investments')=='Investments'"></span>
                  <span class="typewriter type-pt" v-if="$t('investments')=='Blockchain'"></span>

                </h3>

                <!--<div>{{ $t('mission') }}
                {{ $t('CEO') }}
                </div>-->
                <div class="joy-title">
                  {{ $t('joinnews') }} <span class="green">{{ $t('news') }}</span>.
                </div>

                {{ $t('Keepup') }}

                <!--<div role="main" id="qrcapital-newsletter-en-ed87386a4c5c7bccb111" v-if="$t('investments')=='Investments'"></div>-->

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

              <div class="w-full sm:w-1/2 p-6 text-center">
                <div>
                  <img src="~static/images/girafa.png" class="girafa" />
                </div>



              </div>
            </div>

          </div>
        </div>


      </section>

    </div>

</template>
<script>

  import Vue from 'vue'
  import VueObserveVisibility from 'vue-observe-visibility'

  Vue.use(VueObserveVisibility)

  export default {
      name: 'Sliders',
      data() {
        return {
          isActive: false,
        };
      },
      methods: {
          visibilityChanged (isVisible, entry) {
            this.isActive = isVisible;
          },
          scrollToAnchorPoint(id) {
              this.isActive = false
              console.log('ok');
              const el = document.querySelector(id)
              el && el.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" })
          }
      },
      components: {
        VueObserveVisibility
      }
  }
</script>

<style>
  .brandingLogo {
    display: none!important;
  }
  #mc_embed_signup .mc-field-group input {

    color: #000;
}
  .hubspot-link__container {
    display: none!important;
  }
  .main-title {
    font-size: 40px;
    font-weight: 600;
  }

  .girafa {
    margin-bottom: -75px;
  }

  .banner-arrow a {
    cursor: pointer;
  }

  .joy-title {
    font-size: 25px;
    font-weight: 400;
    margin-top: 17px;
  }

  #qrcapital-newsletter-en-ed87386a4c5c7bccb111 * {
    background: transparent;
  }

  #rd-button-l145hm6j:hover {
    background:#00EFCA;
  }

  #rd-section-l145hm69 {
     background: transparent!important;
  }

  #conversion-form-qrcapital-newsletter-en, #conversion-form-qrcapital-newsletter-pt{
    display: flex;
  }

  .mainnumbers {
    font-size: 80px;
    font-weight: 800;
    line-height: 75px;
    margin-top: 34px;
  }

  body #rd-button-l145hm6j {
    margin: 0;
    border-radius: 0;
    background: #fff;
    color: #000;
    height: 53px;
    font-size: 24px;
  }

  body #rd-form-l145hm6g .bricks-form__input:not(textarea) {
      background: transparent;
      width: 315px;
      height: 53px;
      color: #fff;
      border-radius: 0;
      font-size: 16px;
      padding-left: 15px;
  }

  .green {
    color: #00EFCA;
  }

  .banners {
    background-size: cover;
    min-height: 100vh;
    display: flex!important;
    align-items: center;
  }


  .banner2 img{
    max-height: 500px;
  }


  .banner3 img {
    display: inline-block!important;
  }

  .banners .container {
    padding: 0 34px;
  }

  .main-title {
    font-size: 88px;
    font-weight: 600;
    line-height: 93px;
    padding-left: 120px;
    color: #fff;
  }

  .building-bg {

    color: #fff;
    padding: 120px 0 0;
  }

  .box {
        align-self: flex-end;
        animation-duration: 2s;
        animation-iteration-count: infinite;

        margin: 0 auto 0 auto;
        transform-origin: bottom;

    }
    .bounce-6 {
        animation-name: bounce-6;
        animation-timing-function: ease;
    }
    @keyframes bounce-6 {
        0%   { transform: scale(1,1)      translateY(0); }
        10%  { transform: scale(1.1,.9)   translateY(0); }
        30%  { transform: scale(.9,1.1)   translateY(-40px); }
        50%  { transform: scale(1.05,.95) translateY(0); }
        57%  { transform: scale(1,1)      translateY(-7px); }
        64%  { transform: scale(1,1)      translateY(0); }
        100% { transform: scale(1,1)      translateY(0); }
    }

  .carouselslick {
    overflow: hidden;
  }

  .slick-dots {
      bottom: 76px;
      margin-left: 4px;
  }

  .banner-arrow {
      position: absolute;
      bottom: 15px;
      left: 0;
      right: 0;
      margin: auto;
      display: flex;
      justify-content: center;
  }

  .banner2 .banner-arrow img {
    filter: invert(0.5);
  }

  .slick-dots li.slick-active button:before {
      opacity: 1;
      color: #fff;
  }

  .slick-dots li button:before {
    font-size: 11px;
    color: #fff;
    width: auto;
    height: auto;
    content: '•';
    padding: 0;
    opacity: 0.4;
  }

  .slick-dots li button:before {
    color: #fff;
  }

  .gray-title {
    font-weight: 100;
    text-transform: uppercase;
    font-size: 20px;
    color: #868686;
  }

  .building-bg h3 {
    font-weight: 600;
    font-size: 70px;
    color: #fff;
    line-height: 81px;
    margin-bottom: 10px;
    white-space: nowrap;
  }

  .building-bg h3 p {
    overflow: hidden;
  }

  .building-bg h3.activetitle p:nth-child(1)  {
  }


/* Typewriter effect 1 */
@keyframes typing {
  0.0000%, 21.3488% { content: ""; }
  1.1395%, 20.2093% { content: "A"; }
  2.2791%, 19.0698% { content: "Ar"; }
  3.4186%, 18.9302% { content: "Art"; }
  4.5581%, 17.7907% { content: "Art."; }


  27.7674%, 61.2791% { content: ""; }
  28.9070%, 60.1395% { content: "B"; }
  29.0465%, 59.0000% { content: "Bl"; }
  30.1860%, 58.8605% { content: "Blo"; }
  31.3256%, 56.7209% { content: "Bloc"; }
  32.4651%, 55.5814% { content: "Block"; }
  33.6047%, 54.4419% { content: "Blockc"; }
  34.6047%, 53.4419% { content: "Blockch"; }
  35.6047%, 52.4419% { content: "Blockcha"; }
  36.6047%, 51.4419% { content: "Blockchai"; }
  37.6047%, 50.4419% { content: "Blockchain"; }
  38.6047%, 49.4419% { content: "Blockchain."; }

  64.6977%, 100% { content: ""; }
  65.8372%, 99.0698% { content: "C"; }
  66.9767%, 98.9302% { content: "Co"; }
  68.1163%, 97.7907% { content: "Cod"; }
  69.2558%, 96.6512% { content: "Code"; }
  70.3953%, 95.5116% { content: "Code."; }
}

/* Typewriter effect 1 */
@keyframes typingpt {
  0.0000%, 21.3488% { content: ""; }
  1.1395%, 20.2093% { content: "A"; }
  2.2791%, 19.0698% { content: "Ar"; }
  3.4186%, 18.9302% { content: "Art"; }
  4.5581%, 17.7907% { content: "Art."; }


  27.7674%, 61.2791% { content: ""; }
  28.9070%, 60.1395% { content: "B"; }
  29.0465%, 59.0000% { content: "Bl"; }
  30.1860%, 58.8605% { content: "Blo"; }
  31.3256%, 56.7209% { content: "Bloc"; }
  32.4651%, 55.5814% { content: "Block"; }
  33.6047%, 54.4419% { content: "Blockc"; }
  34.6047%, 53.4419% { content: "Blockch"; }
  35.6047%, 52.4419% { content: "Blockcha"; }
  36.6047%, 51.4419% { content: "Blockchai"; }
  37.6047%, 50.4419% { content: "Blockchain"; }
  38.6047%, 49.4419% { content: "Blockchain."; }

  64.6977%, 100% { content: ""; }
  65.8372%, 99.0698% { content: "C"; }
  66.9767%, 98.9302% { content: "Co"; }
  68.1163%, 97.7907% { content: "Cod"; }
  69.2558%, 96.6512% { content: "Code"; }
  70.3953%, 95.5116% { content: "Code."; }

}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.building-bg h3.activetitle .typewriter {
  --caret: currentcolor;
}

.building-bg h3.activetitle .typewriter::before {
  content: "";
  animation: typing 9.5s infinite;
}

.building-bg h3.activetitle .typewriter.type-pt::before {
  animation: typingpt 9.5s infinite;
}

.building-bg h3.activetitle .typewriter::after {
  content: "";
  border-right: 1px solid var(--caret);
  animation: blink 0.5s linear infinite;
}

.building-bg h3.activetitle .typewriter.thick::after {
  border-right: 1ch solid var(--caret);
}

.building-bg h3.activetitle .typewriter.nocaret::after {
  border-right: 0;
}


@media (prefers-reduced-motion) {
  .building-bg h3.activetitle .typewriter::after {
    animation: none;
  }

  @keyframes sequencePopup {
    0%, 100% { content: "developer"; }
    25% { content: "writer"; }
    50% { content: "reader"; }
    75% { content: "human"; }
  }

  .building-bg h3.activetitle .typewriter::before {
    content: "developer";
    animation: sequencePopup 12s linear infinite;
  }
}


  @media only screen and (max-width: 1047px) {
    #conversion-form-qrcapital-newsletter-en {
      display: block;
    }
  }

  @media only screen and (max-width: 768px) {

    .building-bg h3, .xs-hidden {
      font-size: 46px;
      line-height: 69px;
    }

    body #rd-button-l145hm6j {
      margin-top: 8px;
    }

    .building-bg {
      background-size: cover;
      color: #fff;
      text-align: center;
      padding: 0px 0 30px;
      position: relative;
    }

    .building-bg .w-5\/6 {
      width: 100%;

      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    div.mainnumbers {
      margin-top: 0px;
    }

    .building-bg .w-full {
        margin-top: 110px;
    }

    body #rd-button-l145hm6j {

        height: 65px;

        padding: 0;
    }

    .gray-title {
      position: absolute;
      top:50px;
      font-size: 15px;
      border-bottom: 1px solid #00EFCA;
    }

   .banners {
      background-size: contain;
      min-height: 423px;
    }
    .banner1 {
      background-size: cover;
    }

    #conversion-form-qrcapital-newsletter-en, #conversion-form-qrcapital-newsletter-pt {
      display: block;
    }

    .main-title {
            font-size: 34px;
    font-weight: 600;
    line-height: 47px;
    padding-left: 0;
    text-align: center;
    }

    .banner3 .banner-arrow {

        bottom: 46px;

    }




    .banner2 .container > img {
      display: none!important;

    }




    .banner3 .container > img {
      display: none!important;

    }

  }



</style>


<i18n>
{
  "en": {
    "blockchain": "Blockchain",
    "investments": "Investments",
    "anew": "A New",
    "frontier": "Frontier",
    "ofinvestments": "of Investments",
    "building": "Design & Development",
    "disclaimer1": "NFT Studio",
    "disclaimer2": "Art.",
    "disclaimer3": "Code.",
    "disclaimer4": "Blockchain.",
    "joinnews": "Join our ",
    "news": "Newsletter",
    "Keepup": "Keep up to date to what we're doing."
  }
}
</i18n>
