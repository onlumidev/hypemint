<template>
  <div>

    <section class="border-b  text-white fold-portfolio" ref="portfolio">
      <div class="container mx-auto pt-4">



        <div class="flex flex-wrap">
          <div class="w-5/6 sm:w-1/2 p-6 fold-920">
            <img src="~static/images/qr-fold.png" class="mustache" />

          </div>
          <div class="w-full sm:w-1/2 p-6">

            <h3 class="press-title ">
              {{ $t('ourlast') }}

              <span class="blue">{{ $t('bluework') }}</span>

            </h3>

            <div>

              <div class="mb-10">
              <a href="https://criptomasterclass.com/" target="_blank">
                <img src="~static/images/logos-cm-qr.svg" class="logo-qr" />
              </a>
            </div>

            <div>

              <a class="btn mr-10" href="https://br.financas.yahoo.com/noticias/qr-capital-e-criptoman%C3%ADacos-lan%C3%A7am-130046424.html" target="_blank">On Press</a>

            <a class="btn" href="https://opensea.io/collection/hodl-sapiens" target="_blank">On OpenSea</a>

            </div>

            </div>





            <h3 class="press-title mt-20">
              {{ $t('ourcompanies') }}

              <span class="green">{{ $t('work') }}</span>

            </h3>
            <p class="mkt-text">
              {{ $t('mkt_text') }}
            </p>

            <ul class="mkt-bullets">
              <li>{{ $t('mkt_bullet1') }}</li>
              <li>{{ $t('mkt_bullet2') }}</li>
              <li>{{ $t('mkt_bullet3') }}</li>
            </ul>




          </div>
        </div>

        <div class="container relative m-auto  not-on-desktop">
        <img src="~static/images/nft-qr.png" class="nft-qr" />
      </div>

      </div>



    </section>
    <div class="container relative m-auto  not-on-mobile">
      <img src="~static/images/nft-qr.png" class="nft-qr" />
    </div>
  </div>


</template>
<script>


export default {
  name: 'what-we-do'
}
</script>

<style>

.logo-qr {
  width: 340px;
}

.border-title {
  border-bottom: 1px solid #00cc63;
  display: inline-block;
  margin: auto;
  font-size: 20px;
}


.fold-portfolio {
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  overflow: hidden;
  padding-top: 13px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.9) 100%);
}

.mustache {
  margin-top: -100px;
    margin-bottom: -61px;
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
  border-bottom: 2px solid #00cc63;
  display: inline-block;
  margin: 19px 0 19px;
  font-weight: 800;
  font-size: 23px;
}

.fold-portfolio .slick-slide {
  margin: 0 14px;
}



@media only screen and (max-width: 1320px) {
  .fold-portfolio div .containermin {
    max-width: inherit;
  }

  .webuild {
    max-width: 100%;
  }


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
    "ourcompanies": "We do",
    "work": "Campaigns",
    "ourlast": "Our last",
    "bluework": "work",
    "mkt_text": "Increase engagement and results in your campaigns using NFTs, give NFTs as a bonus, for special customers or in specific campaigns, if you will have an event, you can innovate giving a NFTs instead of a boring regular ticket. Whatever you think in marketing, we can help you with the best strategy!",
    "mkt_bullet1": "Rarity farming implementation to add value to your art",
    "mkt_bullet2": "Exclusive illustrations based on your project",
    "mkt_bullet3": "Distribution of NFTs on several channels "
  }
}
</i18n>
