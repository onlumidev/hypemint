<template>
  <header>
    <div>
      <nav class="relative container mx-auto px-4 py-5 flex justify-between items-center">
        <a class="text-3xl font-bold leading-none " @click="scrollToAnchorPoint('#home')">
          <img src="~static/images/logo.png" />
        </a>
        <div class="lg:hidden">
          <button class="navbar-burger flex items-center text-white-600 p-3" @click="openMenu()">
            <svg class="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul
          class="hidden md:justify-end absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center w-full lg:space-x-6">

          <li><a @click="scrollToAnchorPoint('#about')">{{ $t('menuportfolio') }}</a></li>

          <li><a @click="scrollToAnchorPoint('#press')">{{ $t('menuabout') }}</a></li>

          <!--<li><a href="#jobs">{{ $t('menujobs') }}</a></li>-->

          <li><a @click="scrollToAnchorPoint('#gaming')">{{ $t('menuteam') }}</a></li>

          <li><a @click="scrollToAnchorPoint('#contact')">{{ $t('menupress') }}</a></li>





          <li>
            <a href="https://www.linkedin.com/company/hypemint" target="_blank">
              <img src="~static/images/linkedin.svg" />
            </a>
          </li>
          <!--
                    <ul class="flex lang-container">
                        <li>
                            <nuxt-link :to="switchLocalePath('en')">EN</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link :to="switchLocalePath('pt')">PT</nuxt-link>
                        </li>
                    </ul>-->

        </ul>

      </nav>
      <div :class="'navbar-menu relative z-50 mobilesidemenu ' + (isActive ? 'active' : '')">
        <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" @click="closeMenu()"></div>
        <nav class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-black  overflow-y-auto">
          <div class="flex topo-sidemenu mb-8">

            <a class="text-3xl font-bold leading-none logolink" @click="scrollToAnchorPoint('#home')">
              <img src="~static/images/logo.png" />
            </a>

            <button class="navbar-close" @click="closeMenu()">
              <svg class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div>
            <ul class="menu-mobile">

              <li><a href="#about">{{ $t('menuportfolio') }}</a></li>

<li><a @click="scrollToAnchorPoint('#press')">{{ $t('menuabout') }}</a></li>

<!--<li><a href="#jobs">{{ $t('menujobs') }}</a></li>-->

<li><a @click="scrollToAnchorPoint('#gaming')">{{ $t('menuteam') }}</a></li>

<li><a @click="scrollToAnchorPoint('#contact')">{{ $t('menupress') }}</a></li>


              <ul class="flex redes-mobile">
                <!--
                <li>
                  <a href="mailto:hello@hypemint.io" target="_blank">
                    <img src="~static/images/mail.svg" />
                  </a>
                </li>
                -->


                <li>
                  <a href="https://www.linkedin.com/company/hypemint" target="_blank">
                    <img src="~static/images/linkedin.svg" />
                  </a>
                </li>
              </ul>

              <!--
              <ul class="flex lang-container">
                <li>
                  <nuxt-link :to="switchLocalePath('en')">EN</nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="switchLocalePath('pt')">PT</nuxt-link>
                </li>
              </ul>
              -->

            </ul>
          </div>

        </nav>
      </div>
    </div>
  </header>
</template>
<script>


export default {
  name: 'Header',
  methods: {
    openMenu() {
      this.isActive = true
    },
    closeMenu() {
      this.isActive = false
    },
    scrollToAnchorPoint(id) {

      this.isActive = false
      const el = document.querySelector(id)
      el && el.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" })


    }
  },
  data() {
    return {
      isActive: false,
      isOnBlack: false,
    }
  }
}
</script>

<style>
header {

  position: absolute;
  z-index: 9;
  left: 18px;
  right: 30px;
  top: 18px;
  color: #fff;
  letter-spacing: 3px;
  font-size: 17px;
}

.logolink {
  display: block;
  position: absolute;
  z-index: 2;
}

section {
  position: relative;
}

body,
html {
  overflow-x: hidden;
  background: url(~static/images/bg.png) top center no-repeat fixed;

}

.mobilesidemenu {
  display: none;

  &.active {
    display: block;
  }
}

header .bg-black {
  transition: background-color 400ms linear;
  padding: 15px 0;
}

nav a {
  cursor: pointer;
  font-weight: 500;

  &:hover {
    color: #00cc63;
  }
}

.lang-container a {
  width: 27px;
  text-align: center;
  display: block;


  &.nuxt-link-active.nuxt-link-exact-active {
    background: #fff;
    color: #000;
  }
}

.lang-container {
  border: 1px solid #fff;

  margin-right: 15px !important;
}

.mobilesidemenu .lang-container {

  width: 58px;
  height: 21px;

}

.navbar-burger {
  margin-right: 12px;
  position: absolute;
  right: 0;
  top: -6px;
}

.topo-sidemenu {
  justify-content: space-between;
}

.mobilesidemenu li {
  margin-bottom: 18px;
}

.menu-mobile {
  margin: 105px 0 0 20px;
}

.redes-mobile {
  margin: 40px 0 30px;
}

.redes-mobile li {
  margin-right: 28px;
}

.redes-mobile img {
  width: 15px;
}

.navbar-close {
  position: absolute;
  right: 22px;
  top: 18px;
}

.girafa {
  margin-left: 102px;
  margin-bottom: -72px;
  margin-top: 77px;
}

nav li {
  padding: 0 5px;
}

.press-title {
  font-size: 47px;
  margin-bottom: 20px;
}

.press-title .green {
  position: relative;
}

.press-title .green:after {
  height: 7px;
  width: 126%;
  border-radius: 10px;
  background: #00cc63;
  display: block;
  content: '';
  position: absolute;
  right: 0;
}

.mkt-text {
  margin-top: 40px;
  max-width: 535px;
  font-size: 19px;
  margin-bottom: 25px;
}

.mkt-bullets li {
  margin: 0 0 16px;
  font-size: 18px;
}

.mkt-bullets li:before {
  content: '';
  display: inline-block;
  width: 25px;
  border-radius: 10px;
  background: #0478db;
  height: 10px;
  margin-right: 14px;
}

.blue {
  color: #0478db;
}

.press-title.mb-10 {
  margin-bottom: 2.5rem;
}

.btn, #mc_embed_signup .button.btn {
  background: rgb(1, 198, 117);
  background: linear-gradient(90deg, rgb(8, 175, 106) 0%, rgba(0, 169, 178, 1) 39%, rgb(0 140 238) 100%);
  padding: 12px 38px;
  line-height: initial;
  border-radius: 7px;


}

.btn:hover, #mc_embed_signup:hover .button.btn:hover {
  background: rgb(1, 198, 117);
  background: linear-gradient(90deg, rgb(0 140 238) 0%, rgba(0, 169, 178, 1) 39%, rgb(8, 175, 106) 100%);
}

#mc_embed_signup .button.btn {
  margin-top: 20px;
  height: auto;
}

.nft-qr {
  position: absolute;
  margin-top: -695px;
  margin-left: -150px;
}

.fold-about {
  overflow: hidden;
  padding-top: 40px;
  clip-path: polygon(0 0, 29% 10%, 44% 14%, 100% 0, 100% 10%, 100% 0, 100% 85%, 100% 100%, 85% 100%, 15% 100%, 0 100%, 0% 85%);
  background: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.9) 100%);
}

.fold-press {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.9) 100%);
  clip-path: polygon(0% 19%, 0% 16%, 16% 14%, 100% 0%, 100% 10%, 100% 0, 100% 85%, 100% 100%, 85% 100%, 15% 100%, 0 100%, 0% 85%);
  min-height: 848px;
  padding-top: 90px;
}

.nft-moments {
  right: 0;
  margin-top: -785px;
}

.nft-cartas.nft-qr {
  margin: -1172px auto 0;
    max-width: 546px;
    left: 30px;
    transform: none;
}


.fold-portfolio {
  clip-path: polygon(0% 0%, 0% 9%, 0% 9%, 100% 0%, 100% 10%, 100% 0, 100% 85%, 100% 100%, 85% 100%, 15% 100%, 0 100%, 0% 85%);
}

.not-on-desktop {
  display: none;
}


@media only screen and (max-width: 1500px) {
  .girafa {
    margin-bottom: -62px;
    margin-top: 73px;
    margin-left: 44px;
  }

  .nft-cartas.nft-qr {
    margin-top: -1010px;
    max-width: 456px;

}

  .navbar-burger {
    top: 53px;
  }

  .nft-qr.nft-moments {
    margin-top: -710px;
    right: -26px;
    transform: none;
    max-width: 736px;
  }

  header {

    right: 0;

    letter-spacing: 1px;
    font-size: 15px;
  }

  .building-bg h3 {
    font-size: 54px;
    line-height: 67px;
  }

  .nft-qr {
    transform: skew(0deg, 4deg);
    margin-top: -439px;
    max-width: 524px;
    margin-left: -119px;
  }

  .mkt-text {

    font-size: 17px;

  }

  .mkt-bullets li {

    font-size: 17px;
  }


  .mustache {

    margin-bottom: -114px;
  }


}

@media only screen and (max-width: 1300px) {

  .nft-qr.nft-moments {
    margin-top: -582px;
    max-width: 556px;
    right: 30px;
  }

  .fold-portfolio .flex.flex-wrap {
    align-items: center;
  }

  .girafa {
    margin-bottom: -57px;
    margin-top: 70px;
    margin-left: 0;
  }

  .nft-qr {

    margin-left: -64px;
  }

  .mb-40 {
    margin-bottom: 10rem;
  }

  .mustache {

    margin-bottom: -113px;
  }

  .press-title.mb-10 {
    margin-bottom: 0.5rem;
  }

  .mt-20 {
    margin-top: 2rem;
  }

  .mustache {
    margin-top: -175px;

  }

  .press-title {
    font-size: 33px;

  }

  .container {
    margin: 0;
    max-width: none;
  }

  .btn {
    display: block;
    text-align: center;
    margin-bottom: 24px;
    margin-right: 0;

  }

  .logolink {
    margin-left: 22px;
  }

}

@media only screen and (max-width: 990px) {
  .fold-920 {
    display: none;
  }

  .not-on-mobile {
    display: none;
  }

  .fold-portfolio .flex.flex-wrap {
    align-items: initial;
  }

  .nft-qr.nft-cartas {
    margin: -116px auto 0;
    max-width: 100vw;
    left: 0;
    max-width: 90vw;
}

  .nft-qr.nft-moments {
      transform: initial;
      margin-top: -143px;
      margin-bottom: -26px;
      max-width: 100vw;
      right: 0;
      max-width: 90vw;
  }

  .mkt-text,
  .mkt-bullets {
    margin-right: 0;
    margin-bottom: 0;
    margin-top: 15px;
  }

  .fold-portfolio .w-full.sm\:w-1\/2 {
    margin-top: 10px;
  }

  .fold-portfolio,
  .fold-about,
  .fold-press {
    clip-path: initial;
  }

  .not-on-desktop {
    display: block;
  }

  .nft-qr {
    max-width: 460px;
    margin-top: -40px;
    right: 0px;
    position: relative;
    transform: skew(0deg, -6deg);
    margin-bottom: -147px;
    max-width: 90vw;
    margin-left: 0;
}

  .girafa {
    margin-top: -86px;
    margin-bottom: -54px;
    margin-left: 0;
    max-height: 460px;
    max-width: 90vw;
  }

  .fold-about {
    padding-top: 0;
    margin-top: -2px;
  }

  .w-full.sm\:w-1\/2 {
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .building-bg .w-full.sm\:w-1\/2 {
    margin-top: 90px;
  }

  .press-title {
    text-align: center;
  }

  .building-bg h3 {
    font-size: 54px;
    line-height: 67px;
    text-align: center;
  }




  .nft-qr.nft-moments {
    transform: initial;
    margin-top:-20px;
    margin-bottom: -35px;
  }

}


@media only screen and (max-width: 768px) {
  header {
    left: 0;
    right: 0;
    top: 0;
  }


  .nft-qr {

    margin-bottom: -110px;

}


  .mkt-text,
  .mkt-bullets {
    margin-right: 0;
  }

  .fold-about .w-full.sm\:w-1\/2 {

    margin-top: 0;

  }




  .snapsections {
    padding-top: 115px;
  }

  .logolink {

    left: 19px;
  }

  .fixed .logolink {

left: 0;
}

  .girafa {
    margin-bottom: -78px;
    margin-top: -64px;
  }

}

@media only screen and (max-width: 640px) {
  .girafa {
    margin-bottom: -87px;
    margin-top: -4px;

  }

}

@media only screen and (max-width: 520px) {
  .girafa {
    margin-bottom: -80px;
    margin-top: -61px;

  }
}
</style>

<i18n>
{
  "en": {
    "menuportfolio":"What we do",
    "menuabout": "Digital Arts NFTs & Collectibles",
    "menuteam": "Gaming",
    "menupress": "Contact"
  },
  "pt": {
    "menuportfolio":"O que fazemos",
    "menuabout": "Digital Arts NFTs & Collectibles",
    "menuteam": "Gaming",
    "menupress": "Contato"
  }
}
</i18n>
