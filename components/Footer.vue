<template>
  <section>
    <footer class="bg-white bg-opacity-70 text-white">
      <div class="container  mx-auto  items-center px-2 ">


        <div class="w-full mx-auto flex flex-wrap justify-center items-center">

          <div class="text-center copyright ">

            <img src="~static/images/logo-footer.png" />
          </div>
        </div>


      </div>
	</footer>
  </section>
</template>

<style>
  .footermenu li {
    margin: 0 12px;
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
  }

  a.pitchbutton {
    border: 1px solid #00cc63;
  }

  #qrcapital-newsletter-en-ed87386a4c5c7bccb111 * {
    background: transparent;
  }

  #rd-section-l145hm69 {
     background: transparent!important;
  }

  #conversion-form-qrcapital-newsletter-en-footer, #conversion-form-qrcapital-newsletter-pt-footer {
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

  .footermenu, .pitch-container {
    justify-content: flex-end;
    display: flex;
  }

  .footerbutton {
    border: 1px solid #fff;
    padding: 9px 0;
    font-size: 20px;
    text-align:center;
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

        .footermenu, .pitch-container {
          justify-content: center;
          flex-wrap: wrap;
        }

        footer .text-right {
          text-align: center;
        }

        #conversion-form-qrcapital-newsletter-en-footer, #conversion-form-qrcapital-newsletter-pt-footer {
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

                if(this.$router.history.current.path == "/contact") {
                    this.$router.push('/'+id)
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
    "thissite": "This site was prepared by Quick Response Capital Servicos de Intermediacao e Tecnologia Ltda and is for informational purposes only, not constituting an offer to sell shares of managed funds and not considering investment objectives or individual and particular needs. QR Capital does not sell or distribute shares of funds or any other financial asset. We recommend consulting investment advisors and specialist professionals for a specific, personalized analysis prior to your investment decision. Investors are advised to carefully read prospectuses and regulations when investing their funds. This material may not be copied, reproduced or distributed to third parties without the express agreement of QR Capital.",
    "termsmenu": "TERMS & CONDITIONS",
    "privacypolicy": "PRIVACY POLICY",
    "copyright": "© COPYRIGHT QUICK RESPONSE CAPITAL 2022",
    "menuportfolio":"PORTFOLIO",
    "menuabout": "ABOUT",
    "menujobs": "JOBS",
    "menuteam": "TEAM",
    "menupress": "PRESS",
    "menubrand": "Brand",
    "menucontact": "CONTACT",
    "menuprivacy": "PRIVACY POLICY",
    "joinnews": "Join our ",
    "news": "Newsletter",
    "Keepup": "Keep up to date to what we're doing.",
    "institucional":"This site was prepared by Quick Response Capital Servicos de Intermediacao e Tecnologia Ltda and is for informational purposes only, not constituting an offer to sell shares of managed funds and not considering investment objectives or individual and particular needs. QR Capital does not sell or distribute shares of funds or any other financial asset. We recommend consulting investment advisors and specialist professionals for a specific, personalized analysis prior to your investment decision. Investors are advised to carefully read prospectuses and regulations when investing their funds. This material may not be copied, reproduced or distributed to third parties without the express agreement of QR Capital."
  },
  "pt": {


    "siteem": "Site em português",
    "areyou": "É um empreendedor da indústria de blockchain e criptoativos?",
    "itwould":"Seria legal ouvir você.",
    "sendpitch": "Mande seu pitch",
    "thissite": "This site was prepared by Quick Response Capital Servicos de Intermediacao e Tecnologia Ltda and is for informational purposes only, not constituting an offer to sell shares of managed funds and not considering investment objectives or individual and particular needs. QR Capital does not sell or distribute shares of funds or any other financial asset. We recommend consulting investment advisors and specialist professionals for a specific, personalized analysis prior to your investment decision. Investors are advised to carefully read prospectuses and regulations when investing their funds. This material may not be copied, reproduced or distributed to third parties without the express agreement of QR Capital.",
    "termsmenu": "TERMS & CONDITIONS",
    "privacypolicy": "PRIVACY POLICY",
    "copyright": "© COPYRIGHT QUICK RESPONSE CAPITAL 2022",
    "menuportfolio":"PORTFÓLIO",
    "menuabout": "SOBRE",
    "menujobs": "VAGAS",
    "menuteam": "TIME",
    "menupress": "IMPRENSA",
    "menubrand": "Brand",
    "menucontact": "CONTATO",
    "menuprivacy": "POLÍTICA DE PRIVACIDADE",
    "joinnews": "Inscreva-se na nossa ",
    "news": "Newsletter",
    "Keepup": "Fique por dentro do que estamos fazendo.",
    "institucional":"Este site foi preparado pela Quick Response Capital Servicos de Intermediacao e Tecnologia Ltda e tem caráter meramente informativo, não se constituindo em oferta de venda de cotas dos fundos geridos e não considerando objetivos de investimento ou necessidades individuais e particulares. A QR Capital não comercializa e nem distribui cotas de fundos ou qualquer outro ativo financeiro. Recomendamos uma consulta a assessores de investimento e profissionais especializados para uma análise específica, personalizada antes de sua decisão sobre investimentos. Aos investidores é recomendada a leitura cuidadosa de prospectos e regulamentos ao aplicar seus recursos. Este material não pode ser copiado, reproduzido ou distribuído a terceiros sem a expressa concordância da QR Capital."
  }
}
</i18n>

