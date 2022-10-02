
<template>
  <div :class="'snapcontrol ' + (isOnWhite ? 'whiteheader' : '')">
    <Header />
    <Sliders />
    <Portfolio />
    <About />
    <Press />
    <Footer />
  </div>
</template>

<style>
  body {
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
  }


 /*
  html,
  body {
    height: 100vh;
    overflow: hidden;
  }

  .snapcontrol {
    overflow-y: scroll;
    overflow-x: hidden;
    height: 100vh;
    scroll-snap-points-y: repeat(100vh);
    scroll-snap-type: y mandatory;
  }

  .snapcontrol > section, .snapsections > section {
    scroll-snap-align: center;
  }*/

  .whiteheader header .bg-black img {
    filter: grayscale(1) invert(1);
  }

  .whiteheader header .bg-black {
    background: #fff;
  }

  .whiteheader header .bg-black a {
    color: #000;
  }

  .whiteheader .fill-current {
    color: #000;
  }
</style>

<script>
  import Header from '../components/Header'
  import About from '../components/About'

  import Portfolio from '../components/Portfolio'
  import Press from '../components/Press'
  import Sliders from '../components/Sliders'
  import Footer from '../components/Footer'




  export default {
    name: 'IndexPage',
    components: {
      Header,
      About,
      Portfolio,
      Press,
      Sliders,
      Footer
    },
    head() {
      return {
        title: this.$t('seotitle'),
        htmlAttrs: {
          lang: this.$t('seolang'),
        },
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.$t('seodescription'),
          },
          { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'twitter:image',
        content: 'https://qr.capital/card-twitter.png'
      }
        ],
      }
    },
    data() {
      return {
          isOnWhite: false
      }
    }
  }

</script>

 <i18n>
  {
    "en": {
      "seolang":"en-US",
      "seotitle": "Hype Mint | NFT Art & Development Services",
      "seodescription": "We are a NFT art studio that creates and develops NFTs."
    }
  }
  </i18n>

