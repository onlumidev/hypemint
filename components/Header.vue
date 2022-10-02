<template>
    <header>
        <div>
            <nav class="relative container mx-auto px-4 py-4 flex justify-between items-center">
                <a class="text-3xl font-bold leading-none logolink" @click="scrollToAnchorPoint('#home')">
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
                <ul class="hidden md:justify-end absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center w-full lg:space-x-6">

                    <li><a @click="scrollToAnchorPoint('#portfolio')">{{ $t('menuportfolio') }}</a></li>

                    <li><a @click="scrollToAnchorPoint('#about')">{{ $t('menuabout') }}</a></li>

                    <!--<li><a href="#jobs">{{ $t('menujobs') }}</a></li>-->

                    <li><a @click="scrollToAnchorPoint('#press')">{{ $t('menuteam') }}</a></li>

                    <li><a @click="scrollToAnchorPoint('#press')">{{ $t('menupress') }}</a></li>





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
                        <svg class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                    </div>
                    <div>
                        <ul class="menu-mobile">

                            <li><a @click="scrollToAnchorPoint('#portfolio')">{{ $t('menuportfolio') }}</a></li>

                            <li><a @click="scrollToAnchorPoint('#about')">{{ $t('menuabout') }}</a></li>

                            <!--<li><a href="#jobs">{{ $t('menujobs') }}</a></li>-->

                            <li><a @click="scrollToAnchorPoint('#team')">{{ $t('menuteam') }}</a></li>

                            <li><a @click="scrollToAnchorPoint('#press')">{{ $t('menupress') }}</a></li>

                            <li>
                                <a href="/contact" v-if="$t('menupress')=='PRESS'">{{ $t('menucontact') }}</a>
                                <a href="/pt/contact/" v-if="$t('menupress')=='IMPRENSA'">{{ $t('menucontact') }}</a>
                            </li>

                            <ul class="flex redes-mobile">

                                <li>
                                    <a href="mailto:hello@hypemint.io" target="_blank">
                                        <img src="~static/images/mail.svg" />
                                    </a>
                                </li>


                                <li>
                                    <a href="https://www.linkedin.com/company/hypemint" target="_blank">
                                        <img src="~static/images/linkedin.svg" />
                                    </a>
                                </li>
                            </ul>
                            <ul class="flex lang-container">
                                <li>
                                    <nuxt-link :to="switchLocalePath('en')">EN</nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link :to="switchLocalePath('pt')">PT</nuxt-link>
                                </li>
                            </ul>

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
        position: fixed;
        z-index: 9;
        left: 18px;
        right: 30px;
        top:18px;
        color: #fff;
        font-size: 13px;
    }

    .logolink {
        display: block;
        position: absolute;
        z-index: 2;
    }

    section {
        position: relative;
    }
    body, html {
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
            color: #00EFCA;
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

        margin-right: 15px!important;
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
        margin: 40px 0 0 20px;
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

    @media only screen and (max-width: 768px) {
        header {
            left: 0;
            right: 0;
            top:0;
        }
        .logolink {

            left: 19px;
        }
    }


</style>

<i18n>
{
  "en": {
    "menuportfolio":"What we do",
    "menuabout": "Digital arts NFTs & сollectibles",
    "menuteam": "Gaming",
    "menupress": "Contact"
  },
  "pt": {
    "menuportfolio":"O que fazemos",
    "menuabout": "Digital arts NFTs & сollectibles",
    "menuteam": "Gaming",
    "menupress": "Contato"
  }
}
</i18n>
