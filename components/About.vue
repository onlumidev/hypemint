<template>
  <section class="bg-black bg-opacity-90 text-white fold-about py-8">

    <div class="container mx-auto flex flex-wrap pt-4 pb-12">

      <h2 class="border-title my-2 pt-50 text-1xl  leading-tight text-center text-white">

      </h2>

    </div>

    <div class="container containermin mx-auto ">
      <div class="flex flex-wrap">
      <div class="w-5/6 sm:w-1/2 p-6">

        <h3 class="press-title">

          {{ $t('about') }}

        </h3>

        {{ $t('art_text') }}
            <ul>
              <li>{{ $t('art_bullet1') }}</li>
              <li>{{ $t('art_bullet2') }}</li>
              <li>{{ $t('art_bullet3') }}</li>
            </ul>


      </div>
      <div class="w-full sm:w-1/2 p-6 xs-hidden">

        <img src="~static/images/moments.png" />



      </div>
    </div>
    </div>

    <a id="about" style="position: absolute;top: 0; bottom: 0; margin: auto;"></a>
  </section>

</template>

<style>
  .border-title {
    border-bottom: 1px solid #00EFCA;
    display: inline-block;
    margin: auto;
    font-size: 20px;
  }

  .fold-about .portfolio-texto {
    max-width: 430px;
  }

  .fold-about {
    overflow: hidden;
    padding-top: 40px;
    clip-path: polygon(0% 11%, 100% 0%, 100% 100%, 0% 86%);
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
    "about": "Digital arts & collectibles",
    "art_text": "We can build for you the most secure, reliable and elegant NFT marketplace with a proprietary, blockchain-powered cryptographic wallet protected with hardware-level security with protocol. We deliver a seamless user growth experience and business generation capability.",
    "art_bullet1": "Have an open and authorized NFT market",
    "art_bullet2": "Customized packaging, auctions and commercial FP models",
    "art_bullet3": "State-of-the-art verification systems "
  }
}
</i18n>
