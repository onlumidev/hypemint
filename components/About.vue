<template>

  <div>
  <section class="text-white fold-about py-8">



    <div class="container containermin mx-auto ">
      <div class="flex flex-wrap">
      <div class="w-full sm:w-1/2 p-6">



            <h3 class="press-title mt-20">
              {{ $t('ourcompanies') }}

              <span class="green">{{ $t('about') }}</span>

            </h3>
            <p class="mkt-text">
              {{ $t('art_text') }}
            </p>

            <ul class="mkt-bullets mb-40">
              <li>{{ $t('art_bullet1') }}</li>
              <li>{{ $t('art_bullet2') }}</li>
              <li>{{ $t('art_bullet3') }}</li>
            </ul>



      </div>
      <div class="w-full sm:w-1/2 p-6 xs-hidden">





      </div>
    </div>
    </div>

    <a id="about" style="position: absolute;top: 0; bottom: 0; margin: auto;"></a>
  </section>
  <img src="~static/images/moments.png" class="nft-qr nft-moments" />
</div>


</template>

<style>
  .border-title {
    border-bottom: 1px solid #00cc63;
    display: inline-block;
    margin: auto;
    font-size: 20px;
  }


  .fold-about .portfolio-texto {
    max-width: 430px;
  }




  .fold-about .slick-track.slick-center{

      display: flex;

      justify-content: space-evenly;
  }

  .fold-about .slick-initialized .slick-slide {
    padding-right: 25px;
  }
  .fold-about .slick-dots {
    bottom: -25px;
    margin-left: 4px;
  }

  .pt-50  {
    padding-top: 90px;
  }

  @media only screen and (max-width: 1320px) {
    .fold-about div .containermin {
      max-width: inherit;
    }
    .fold-about .slick-track.slick-center {
        display: flex;
        justify-content: normal;
    }

}
</style>
<script>
  export default {
      name: 'Digital arts & collectibles',
  }
</script>

<i18n>
{
  "en": {
    "ourcompanies": "We do",
    "about": "Marketplace",
    "art_text": "We can build for you the most secure, reliable and elegant NFT marketplace with a proprietary, blockchain-powered cryptographic wallet protected with hardware-level security with protocol. We deliver a seamless user growth experience and business generation capability.",
    "art_bullet1": "Have an open and authorized NFT market",
    "art_bullet2": "Customized packaging, auctions and commercial FP models",
    "art_bullet3": "State-of-the-art verification systems "
  }
}
</i18n>
