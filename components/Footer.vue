<template>
  <section>
    <footer class="bg-white bg-opacity-70 text-white">
      <div class="container  mx-auto  items-center px-2 ">


        <div class="w-full mx-auto  justify-center items-center">

          <div class="text-center copyright ">

            <img src="~static/images/logo-footer.png" />
          </div>

          <div class="text-center copyright ">
             <ul
          class="flex justify-center lg:mx-auto text-center lg:items-center w-full mt-2">


          <li class="mr-5 pr-5 border-r-2">
            <a href="https://www.linkedin.com/company/hypemint" target="_blank">
              Our Linkedin
            </a>
          </li>

          <li class="mr-5 pr-5 border-r-2">
            <a href="mailto:hello@hypemint.io" target="_blank">
              hello@hypemint.io
            </a>
          </li>

          <li>
            <a href="#">
              Back to Top
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
        <p class="m-5 ">
          © COPYRIGHT Hype Mint INC. 2022
        </p>
          </div>


        </div>
        <a id="contact" style="position: absolute;bottom: 0;"></a>

      </div>
    </footer>
  </section>
</template>

<style>
.footermenu li {
  margin: 0 12px;
}

footer a, footer p {
  color: #000;
  font-weight: 500
}
.institucional-text {
  font-size: 12px;
  margin-bottom: 25px;
}

footer {
  padding: 14px 0;
  font-size: 13px;
}

.joy-title {
  font-size: 25px;
  font-weight: 400;
  margin-top: 17px;
}

.green {
  color: #00cc63;
}

footer a:hover {
  color: #00cc63;
  cursor: pointer;
}

footer img {
  max-width: 200px;
  display: block;
  margin: auto;
}

a.pitchbutton {
  border: 1px solid #00cc63;
}

#qrcapital-newsletter-en-ed87386a4c5c7bccb111 * {
  background: transparent;
}

#rd-section-l145hm69 {
  background: transparent !important;
}

#conversion-form-qrcapital-newsletter-en-footer,
#conversion-form-qrcapital-newsletter-pt-footer {
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

.footermenu,
.pitch-container {
  justify-content: flex-end;
  display: flex;
}

.footerbutton {
  border: 1px solid #fff;
  padding: 9px 0;
  font-size: 20px;
  text-align: center;
  margin-top: 13px;
  display: inline-block;
  margin-right: 11px;
  min-width: 371px;
}

.footerbutton:hover {
  background: #00cc63;
  color: #000;
}

.separador-bordas {
  border-top: 1px solid #757575;
  border-bottom: 1px solid #757575;
  margin-top: 35px;
  margin-bottom: 35px;
  padding: 23px 0;
}

footer #rd-form-l145hm6g .bricks-form__submit {
  width: 189px;
  min-width: initial;
}

@media only screen and (max-width: 1320px) {
  footer {
    padding: 15px 0;
    text-align: center;
  }

  footer img {
    display: inline-block;
  }

  .footermenu,
  .pitch-container {
    justify-content: center;
    flex-wrap: wrap;
  }

  footer .text-right {
    text-align: center;
  }

  #conversion-form-qrcapital-newsletter-en-footer,
  #conversion-form-qrcapital-newsletter-pt-footer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .footerbutton {
    border: 1px solid #fff;
    padding: 10px 47px;
    font-size: 20px;
    margin-top: 13px;
    display: inline-block;
    margin-right: 0;
  }

  .footermenu li {
    margin: 3px 12px;
  }
}

@media only screen and (max-width: 768px) {
  .institucional-text {
    font-size: 12px;
    margin-bottom: 25px;
    padding: 0 18px;
  }
}
</style>

<script>
export default {
  name: 'Footer',
  methods: {
    scrollToAnchorPoint(id) {

      if (this.$router.history.current.path == "/contact") {
        this.$router.push('/' + id)
      } else {
        this.isActive = false
        const el = document.querySelector(id)
        el && el.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" })
      }

    }
  }
}
</script>
<i18n>
{
  "en": {
    "siteem": "Site em português",
    "areyou": "Are you an entrepreneur in the blockchain and crypto industry?",
    "itwould":"It would be nice to hear your ideas.",
    "sendpitch": "Send your pitch!",
    "termsmenu": "TERMS & CONDITIONS",
    "privacypolicy": "PRIVACY POLICY",
    "copyright": "© COPYRIGHT QUICK RESPONSE CAPITAL 2022",
    "menuportfolio":"O que fazemos",
    "menuabout": "Digital Arts NFTs & Collectibles",
    "menuteam": "Gaming",
    "menupress": "Contato",
    "menuprivacy": "PRIVACY POLICY",
    "joinnews": "Join our ",
    "news": "Newsletter",
    "Keepup": "Keep up to date to what we're doing."
  }
}
</i18n>

