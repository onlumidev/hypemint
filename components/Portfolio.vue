<template>

  <section class="border-b bg-black bg-opacity-90  text-white fold-portfolio" ref="portfolio">
    <div class="container mx-auto pt-4">



<div class="flex flex-wrap">
  <div class="w-5/6 sm:w-1/2 p-6">
    <img src="~static/images/qr-fold.png" class="mustache" />
  </div>
  <div class="w-full sm:w-1/2 p-6 xs-hidden">



    <h3 class="press-title">
      {{ $t('ourcompanies') }}

      <span class="green">{{ $t('work') }}</span>.
      <img src="~static/images/qr-logo.png" />
    </h3>

    {{ $t('mkt_text') }}
        <ul>
          <li>{{ $t('mkt_bullet1') }}</li>
          <li>{{ $t('mkt_bullet2') }}</li>
          <li>{{ $t('mkt_bullet3') }}</li>
        </ul>


  </div>
</div>


</div>



  </section>

</template>
<script>


export default {
  name: 'What we do'
}
</script>

<style>
.border-title {
  border-bottom: 1px solid #00EFCA;
  display: inline-block;
  margin: auto;
  font-size: 20px;
}

.fold-portfolio {
  justify-content: center;
  padding-top: 50px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  clip-path: polygon(0% 11%, 100% 0%, 100% 100%, 0% 86%);
}
.mustache {
  margin-top:-80px;
}
.webuild {
  max-width: 689px;
  margin: auto;
  text-align: center;
}



.fold-portfolio .slick-track.slick-center {

  display: flex;

  justify-content: space-evenly;
}

h3 {
  clear: both;
  width: 100%;
  font-weight: 600;
  font-size: 43px;
  margin-top: 16px;
}

.portfolio-texto {
  max-width: 300px;
}

.foxbitportfolio h4 {
  border-bottom: 2px solid #a7a9ac;
  color: #666666;
}

.foxbitportfolio a {
  color: #666666;
}

h4 {
  line-height: 30px;
  border-bottom: 2px solid #00EFCA;
  display: inline-block;
  margin: 19px 0 19px;
  font-weight: 800;
  font-size: 23px;
}

.fold-portfolio .slick-slide {
  margin: 0 14px;
}


@media only screen and (min-width: 1200px) {
  .fold-portfolio .slick-track.slick-center {

    min-width: 1200px;
  }
}
@media only screen and (min-width: 1500px) {
  .fold-portfolio .slick-track.slick-center {

    min-width: 1500px;
  }
}
@media only screen and (min-width: 1600px) {
  .fold-portfolio .slick-track.slick-center {

    min-width: 1600px;
  }
}


@media only screen and (max-width: 1320px) {
  .fold-portfolio div .containermin {
    max-width: inherit;
  }

  .webuild {
    max-width: 100%;
  }

  .fold-portfolio .slick-track.slick-center {}

  .fold-portfolio .slick-list .slick-track {
    justify-content: center;
    display: flex;
  }

  .fold-portfolio .slick-initialized .slick-slide {
    max-width: 245px;
  }

  .fold-portfolio h4 {
    font-size: 20px;
  }

  .fold-portfolio {
    display: block;
    padding: 0 20px 57px;
    min-height: auto;
  }

  .fold-portfolio h2 {
    margin-top: 39px;
  }



}
</style>


<i18n>
{
  "en": {
    "portfolio": "What we do",
    "ourcompanies": "Our last",
    "work": "work",
    "mkt_text": "Increase engagement and results in your campaigns using NFTs, give NFTs as a bonus, for special customers or in specific campaigns, if you will have an event, you can innovate giving a NFTs instead of a boring regular ticket. Whatever you think in marketing, we can help you with the best strategy!",
    "mkt_bullet1": "Rarity farming implementation to add value to your art",
    "mkt_bullet2": "Exclusive illustrations based on your project",
    "mkt_bullet3": "Distribution of NFTs on several channels "
  }
}
</i18n>
