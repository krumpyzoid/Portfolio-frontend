<template>
<div class="footer__socialmedias">
        <ul class="socialmedias__list icofont-ul">
          <li><a href="mailto:hello@evankurz.com"><span class="icofont-ui-email"></span></a></li>
          <li><a href="http://github.com/krumpyzoid"><span class="icofont-github"></span></a></li>
          <li><a href="https://www.facebook.com/mskurz/"><span class="icofont-facebook"></span></a></li>
        </ul>
        <span class="socialmedias__line"></span>
</div>
<div class="portfolio__modal" :class="{'portfolio__modal--active': modalActive}">
  <svg @click="closeContactForm()" class="portfolio__modal-close" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
      width="50" height="50"
      viewBox="0 0 172 172"
      style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M49.5575,44.72l-4.8375,4.8375l36.55,36.4425l-36.55,36.4425l4.8375,4.8375l36.6575,-36.4425l36.55,36.4425l4.8375,-4.8375l-36.55,-36.4425l36.55,-36.4425l-4.8375,-4.8375l-36.55,36.4425z"></path></g></g></svg>
  <div class="contact__form-wrapper">
    <Form class="contact__form" @submit="sendMessage">
      <h1>Me contacter</h1>
      <div class="contact__form-row">
        <div class="form-input">
          <label for="name">Nom</label>
          <Field type="text" name="name" :rules="validateText" />
          <ErrorMessage name="name" />
        </div>
        <div class="form-input">
          <label for="email">E-mail</label>
          <Field type="email" name="email" :rules="validateEmail"/>
          <ErrorMessage name="email" />
        </div>
        <div class="form-input">
          <label for="email">Téléphone</label>
          <Field type="text" name="phone" :rules="validatePhone"/>
          <ErrorMessage name="phone" />
        </div>
      </div>
      <div class="form-input">
          <label for="message">Message</label>
          <Field type="textarea" name="message" v-slot="{field}" :rules="validateText">
            <textarea v-bind="field"></textarea>
          </Field>
          <ErrorMessage name="message" />
      </div>
      <button class="btn">Envoyer</button>
    </Form>
  </div>
</div>
<section id="hero">
  <div class="container row align-center">
    <div class="hero__logo">
      <h3 data-aos="fade-left" data-aos-delay="0" data-aos-anchor="#hero">Hey 👋, moi c'est</h3>
      <h1 data-aos="fade-left" data-aos-delay="100" data-aos-anchor="#hero">EVAN KURZ</h1>
      <h2 data-aos="fade-left" data-aos-delay="200" data-aos-anchor="#hero">Développeur Full Stack & UI/UX Designer </h2>
      <p data-aos="fade-left" data-aos-delay="300" data-aos-anchor="#hero">Je suis un développeur freelance, passionné par le <strong>front-end</strong>, le <strong>design d'interfaces</strong> et l'<strong>expérience utilisateur.</strong></p>
      <p data-aos="fade-left" data-aos-delay="300" data-aos-anchor="#hero">Quand je m'ennuie je développe des scripts en python. Je me nourris de cartes graphiques et de barrettes de RAM</p>
      <div class="hero__buttons" data-aos="fade-left" data-aos-delay="400" data-aos-anchor="#hero">
        <button ref="contactb" class="btn btn-outline hero__button--contact animate__pulse" @click="contactAnimation()">
          <span v-if="!heroButtonsShownText" class="animate__opacityin">me contacter</span>
          <span v-else><img class="hero__arrow" src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48cGF0aCBkPSJNMjYuMDI1IDE0LjQ5NmwtMTQuMjg2LS4wMDEgNi4zNjYtNi4zNjZMMTUuOTc5IDYgNS45NzUgMTYuMDAzIDE1Ljk3MSAyNmwyLjEyOS0yLjEyOS02LjM2Ny02LjM2NmgxNC4yOXoiLz48L3N2Zz4='/></span>
        </button>
        <button aria-label="E-mail" class="hero__button hero__button--mail" @click="goToMail()">
          <img style="height: 24px; width: auto" src="../assets/icons8-mail.png" alt="">
        </button>
        <button aria-label="Formulaire" class="hero__button hero__button--form" @click="openContactForm()">
          <img style="height: 30px; width: auto" src="../assets/icons8-form.png" alt="">
        </button>
        <button aria-label="Téléphone" class="hero__button hero__button--phone">
          <img style="height: 30px; width: auto" src="../assets/icons8-phone.png" alt="">
        </button>
      </div>
        <div class="contact__button button--free" :class="{'button--fixed': get_scroll_position()>=btnheight}">
          <div class="button-fixed__button animate__pulse" @click="fixedContactAnimation()">
            <span v-if="!fixedButtonActiveIcon" class="animate__opacityin"><img style="height: 32px; width: auto; margin-top: 3px;" src="../assets/icons8-talk.png" alt=""></span>
            <span v-else><img class="hero__arrow" src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48cGF0aCBkPSJNMjYuMDI1IDE0LjQ5NmwtMTQuMjg2LS4wMDEgNi4zNjYtNi4zNjZMMTUuOTc5IDYgNS45NzUgMTYuMDAzIDE1Ljk3MSAyNmwyLjEyOS0yLjEyOS02LjM2Ny02LjM2NmgxNC4yOXoiLz48L3N2Zz4='/></span>
          </div>
          <div class="button-fixed__mail" @click="goToMail()">
            <img style="height: 24px; width: auto" src="../assets/icons8-mail.png" alt="">
          </div>
          <div class="button-fixed__form" @click="openContactForm()">
            <img style="height: 30px; width: auto" src="../assets/icons8-form.png" alt="">
          </div>
          <div class="button-fixed__phone">
            <img style="height: 30px; width: auto" src="../assets/icons8-phone.png" alt="">
          </div>
        </div>
      
    </div>
    <div class="hero__torus">
      <Torus />
    </div>

  </div>
</section>

<section id="workflow" >
  <div class="container" >
    <h1 class="section-title" data-aos="fade-right"><span class="number">01. </span>Votre projet, entre de bonnes mains</h1>
    <p class="section-subtitle" data-aos="fade-right" data-aos-delay="100" data-aos-anchor="#workflow">Communication et adaptation, les pilliers pour un accompagnement répondant à tous vos besoins.</p>
    <div class="workflow__graph">
      <span class="workflow__line" style="z-index:-1;" data-aos="fade-right" data-aos-delay="800" data-aos-anchor="#workflow"></span>
      <div class="workflow__grid">
        <div class="workflow__stage" data-aos="fade-right" data-aos-delay="200" data-aos-anchor="#workflow">
          <img src="../assets/workflow__icon1.svg" alt="">
          <div>
            <h2>Imaginer</h2>
            <p>Analyse des besoins, des utilisateurs et préparation du contenu</p>
          </div>
        </div>
        <div class="workflow__stage" data-aos="fade-right" data-aos-delay="300" data-aos-anchor="#workflow">
          <img src="../assets/workflow__icon2.svg" alt="">
          <div>
            <h2>Concevoir</h2>
            <p>Création d'un prototype de l'expérience utilisateur, puis de la maquette graphique</p>
          </div>
        </div>
        <div class="workflow__stage" data-aos="fade-right" data-aos-delay="400" data-aos-anchor="#workflow">
          <img src="../assets/workflow__icon3.svg" alt="">
          <div>
            <h2>Développer</h2>
            <p>Intégration de la maquette et développement de l'application</p>
          </div>
        </div>
        <div class="workflow__stage" data-aos="fade-right" data-aos-delay="500" data-aos-anchor="#workflow">
          <img src="../assets/workflow__icon4.svg" alt="">
          <div>
            <h2>Déployer</h2>
            <p>Mise en ligne sur vos serveurs, prestataires externes ou sur mon hébergement dédié.</p>
          </div>
        </div>
        <div class="workflow__stage" data-aos="fade-right" data-aos-delay="600" data-aos-anchor="#workflow">
          <img src="../assets/workflow__icon4.svg" alt="">
          <div>
            <h2>Suivre</h2>
            <p>Mises à jour évolutives de l'application et correction des failles de sécurité.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section id="features">
  <div class="container">
    <h1 class="section-title" data-aos="fade-left" data-aos-anchor="#features"><span class="number">02. </span>Un résultat prêt pour l'avenir</h1>
    <p class="section-subtitle" data-aos="fade-left" data-aos-delay="100"  data-aos-anchor="#features">Des fondations solides assurent un dévelopement efficace et un projet prêt à évoluer dans le temps.</p>
    <div class="features__grid">
      <div class="features__card" data-aos="fade-left" data-aos-delay="100" data-aos-anchor="#features">
        <img src="../assets/features_icons/01.svg" alt="">
        <h2>Workflow Robuste</h2>
        <p>Conception intelligente passant par des étapes clés</p>
      </div>
      <div class="features__card" data-aos="fade-left" data-aos-delay="200" data-aos-anchor="#features">
        <img src="../assets/features_icons/02.svg" alt="">
        <h2>Flexibilité</h2>
        <p>Différentes solutions technologiques pour s'adapter à votre projet</p>
      </div>
      <div class="features__card" data-aos="fade-left" data-aos-delay="300" data-aos-anchor="#features">
        <img src="../assets/features_icons/03.svg" alt="">
        <h2>Dashboard</h2>
        <p>Un pannel administrateur pour suivre les statistiques et modifier le contenu</p>
      </div>
      <div class="features__card" data-aos="fade-left" data-aos-delay="400" data-aos-anchor="#features">
        <img src="../assets/features_icons/04.svg" alt="">
        <h2>Communication</h2>
        <p>Une boucle de communication quotidienne pour s'assurer que le projet répond à vos attentes</p>
      </div>
      <div class="features__card" data-aos="fade-left" data-aos-delay="500" data-aos-anchor="#features">
        <img src="../assets/features_icons/05.svg" alt="">
        <h2>Composants réutilisables</h2>
        <p>Des composants personnalisables et réutilisables</p>
      </div>
      <div class="features__card" data-aos="fade-left" data-aos-delay="600" data-aos-anchor="#features">
        <img src="../assets/features_icons/06.svg" alt="">
        <h2>Organisation</h2>
        <p>Architecture et conventions de nommage pour une durabilité dans le temps.</p>
      </div>
    </div>
  </div>
</section>

<section id="services">
  <div class="container" >
    <h1 class="section-title" data-aos="fade-right"><span class="number">03. </span>Mes prestations</h1>
    <p class="section-subtitle" data-aos="fade-right" data-aos-delay="100" data-aos-anchor="#services" >Pour chaque besoin il existe une solution adaptée</p>
    <div class="services__grid">
      <div class="services__card" data-aos="fade-right" data-aos-delay="100" data-aos-anchor="#services">
        <div>
          <img src="../assets/services_design.svg" alt="">
          <h2>Design & Intégration</h2>
          <p>A partir d’un design fourni ou conçu ensemble, je réalise l’intégration de votre site web.</p>
        </div>
      </div>
      <div class="services__card" data-aos="fade-right" data-aos-delay="200" data-aos-anchor="#services">
        <div>
          <img src="../assets/services_webapp.svg" alt="">
          <h2>Application Web</h2>
          <p>Application Web avec pannel d'administration, fonctionnalités d'affichage de rendu dynamique</p>
        </div>
      </div>
      <div class="services__card" data-aos="fade-right" data-aos-delay="300" data-aos-anchor="#services">
        <div>
          <img src="../assets/services_wordpress.svg" alt="">
          <h2>WordPress</h2>
          <p>Création, customisation, administration de votre site sous WordPress</p>
        </div>
      </div>
    </div>
  </div>
</section>
<section id="portfolio" >
  <div class="container">
    <h1 class="section-title" data-aos="fade-left" data-aos-anchor="#portfolio"><span class="number">04. </span>Mes dernières créations</h1>
    <p class="section-subtitle" data-aos="fade-left" data-aos-delay="100" data-aos-anchor="#portfolio">Découvrez mon travail et les raisons derrière chaque choix en cliquant sur les images.</p>
    <div class="portfolio">
      <PortfolioItem v-for="id in 3" v-bind:key="id" v-bind:order="id" />
    </div>
  </div>
</section>
<section id="footer">
  <ul class="socialmedias__list2 icofont-ul">
    <li><a href="mailto:hello@evankurz.com"><span class="icofont-ui-email"></span></a></li>
    <li><a href="http://github.com/krumpyzoid"><span class="icofont-github"></span></a></li>
    <li><a href="https://www.facebook.com/mskurz/"><span class="icofont-facebook"></span></a></li>
  </ul>
  <p class="footer__copyright">Designed and coded by <a href="mailto:hello@evankurz.me">Evan Kurz</a></p>
</section>
<div id="sentsuccessfully"><p>Message envoyé avec succès !</p></div>
</template>

<script>
// @ is an alias to /src
import Torus from '../components/Torus.vue'
import PortfolioItem from '../components/PortfolioItem.vue'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks} from 'body-scroll-lock';
import MessageService from '../services/message.service.js'
import { Form, Field, ErrorMessage } from 'vee-validate';

export default {
  
  data() {
    return {
      scrollPosition: 0,
      btnheight: 30000,
      heroButtonsShown: false,
      heroButtonsShownText: false,
      fixedButtonActive: false,
      fixedButtonActiveIcon: false,
      items: {},
      modalActive: false
    }
  },
  computed: {
  },
  methods: {
    toggleMessage() {
      let message = document.getElementById('sentsuccessfully');
      message.style.display = 'block';
      setTimeout(() => { message.style.display = 'none' }, 3000);
    },
    get_scroll_position() {
        window.addEventListener('scroll', () => {
            this.scrollPosition = window.scrollY;
            if (this.scrollPosition < this.btnheight) { this.fixedButtonActive = false; this.fixedButtonActiveIcon = false}
        });
        return this.scrollPosition
    },
    contactAnimation() {
      let heroButtons = document.getElementsByClassName('hero__buttons')[0];
      let contactButton = document.getElementsByClassName('hero__button--contact')[0];
      let heroArrow = document.getElementsByClassName('hero__arrow')[0];
      if (!this.heroButtonsShown) {
        heroButtons.classList.add('hero__buttons--visible')
        this.heroButtonsShown = true
        this.heroButtonsShownText = true
        setTimeout(() => {
          heroButtons.classList.add('hero__buttons--reverse')
        }, 1500)
      } else {
        contactButton.classList.add('hero__button--contact--reverse')
        heroButtons.classList.remove('hero__buttons--visible')
        this.heroButtonsShown = false
        heroArrow.classList.add('animate__fadeout')
        setTimeout(() => {
          heroButtons.classList.remove('hero__buttons--reverse')
          contactButton.classList.remove('hero__button--contact--reverse')
          this.heroButtonsShownText = false
        }, 1500)
      }
    },
    fixedContactAnimation() {
      let contactList = document.getElementsByClassName('contact__button')[0];
      let contactButton = document.getElementsByClassName('button-fixed__button')[0];
      if (!this.fixedButtonActive) {
        contactList.classList.add('button--fixed--active')
        contactButton.classList.remove('animate__pulse')
        this.fixedButtonActive = true;
        this.fixedButtonActiveIcon = true;
      } else {
        contactList.classList.remove('button--fixed--active')
        contactButton.classList.add('animate__pulse')
        this.fixedButtonActive = false;
        this.fixedButtonActiveIcon = false;
      }
    },
    goToMail() {
      window.location = "mailto:hello@evankurz.com"
    },
    openContactForm() {
      this.modalActive = true;
      disableBodyScroll(document.querySelector('body'))
    },
    closeContactForm() {
      this.modalActive = false;
      enableBodyScroll(document.querySelector('body'))
    },
    sendMessage(values) {
      MessageService.sendOne(values)
        .then(res => {if (res == 200) {
          this.toggleMessage()
        }})
    },
    validateEmail(value) {
      // if the field is empty
      if (!value) {
        return 'Ce champ est requis';
      }
      // if the field is not a valid email
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return 'Email valide requise: utilisateur@domaine.ext';
      }
      // All is good
      return true;
    },
    validateText(value) {
      // if the field is empty
      if (!value) {
        return 'Ce champ est requis';
      }
      // must contain only letter
      const regex = /^[a-zA-Z0-9/ ]*$/;
      if (!regex.test(value)) {
        return 'Un ou plusieurs caractères sont interdit(s)';
      }
      // All is good
      return true;
    },
    validatePhone(value) {
      // if the field is empty
      if (value == '') {
        return true;
      }
      // must contain only letter
      const regex = /^[0-9]{10}$/g;
      if (!regex.test(value)) {
        return 'Numéro de téléphone 10 chiffres';
      }
      // All is good
      return true;
    }
  },
  mounted() {
    this.btnheight = this.$refs.contactb.getBoundingClientRect().top
    this.btnrightvalue = this.$refs.contactb.getBoundingClientRect().right
    this.$refs.contactb.style.right = this.btnrightvalue + ' px'
  },
  components: {
    Torus,
    PortfolioItem,
    Field,
    Form,
    ErrorMessage
  }
}
</script>

<style lang="scss">
$bg: #E8E6DE;
$bg-lt: #0F161B;
$bg-dk: #0F161B;
$accent: #0F161B;
$text-main: #474d55;
$text-lt: #7e838a;
$text-secondary: #18191F;
@import url('../assets/icofont/icofont.min.css');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  text-decoration: none;
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
}
h1 {
  font-size: 3em;
  color: $accent;
  margin-bottom: 1em;
}
h2 {
  color: $accent;
  margin-bottom: 0.5em;
  font-size: 1.1em;
  font-weight: 500;
  margin-top: 0;
}
p {
  color: $text-main;
  font-size: 0.9em;
}
body {
  background-color: $bg;
}
::-webkit-scrollbar {
  width: 3px;
  height: 20px;
}

::-webkit-scrollbar-thumb {
  background: $bg-dk;
  background-clip: padding-box;
}
.section-title {
  font-size: 2em;
  margin-bottom: 0.2em;
  font-weight: 900;
  text-align: left;
  .number {
    font-weight: 300;
    color: $text-main;
  }
}
.section-subtitle {
  text-align: left;
}

section:nth-of-type(2n + 1) {
  .section-title, .section-subtitle {
    text-align: right;
  }
}

.container {
  max-width: 1400px;
  padding: 0 6em 0 6em;
  width: 100%;
  margin: 0 auto;
  position: relative;
  height: 100%;
  @media (max-width: 1000px) {
    padding: 0 2em 0 2em;
  }
}

.row {
  display: flex;
  flex-direction: row;
}

.align-center {
  align-items: center;
}
body {
  width: 100vw;
  overflow-x: hidden;
}
#hero {
  .container {
    position: relative;
  }
}
.hero__logo {
  min-height: 100vh;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 500px;
  flex-grow: 1;
  p + p {
    margin-top: 0.5em;
  }
  h2, h3 {
    text-transform: uppercase;
  }
  h1 {
    margin-bottom: 0;
    font-weight: 900;
  }
  h2 {
    font-weight: 500;
  }
  h3 {
    font-weight: 300;
    font-size: 1em;
  }
  h1, h2, h3, p {
    padding: 5px;
    background: $bg;
  }
  .btn {
    text-transform: uppercase;
    font-size: 0.7em;
    border-radius: 5em;
    letter-spacing: 0.05em;
  }
}
.hero__torus {
  z-index: -1;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: -100px;
}

#profile {
  margin-bottom: 10em;
}

.profile {
  margin-top: 3em;
  display: flex;
  column-gap: 2em;
  min-height: 450px;
  &__picture {
    flex-grow: 1;
    flex-shrink: 1;
    position: relative;
    img {
      position: absolute;
      right: 0;
      width: 475px;
      height: auto;
      border-radius: 3em;
    }
  
  }
  &__description {
    width: 65%;
  }
}

#workflow {
  text-align: center;
  margin-bottom: 10em;
}
#workflow__list {
  color: $accent;
}
.workflow__graph {
  margin-top: 3em;
  position: relative;
}
.workflow__stage {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1em;
  img {
    width: 80px;
    height: auto;
    margin-bottom: 2em;
    z-index: 10;
  }
}
.workflow__line {
  position: absolute;
  z-index: 1;
  left: 12.5%;
  top: 40px;
  display: block;
  width: 75%;
  border-bottom: 1px dashed $accent;
}
.workflow__grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  transition: 1s;
}
@media (min-width: 551px) and (max-width: 1000px) {
  .workflow__line {
    position: absolute;
    z-index: 1;
    left: 50%;
    top: 70px;
    display: block;
    height: calc(100% - 130px);
    width: 1px;
    border-left: 1px dashed $accent;
  }
  .workflow__grid {
    grid-template-columns: repeat(4, 1fr) 80px repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
  }

  .workflow__stage {
    grid-column: 5 / -1;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0;
    &:nth-of-type(2n-1) {
      flex-direction: row-reverse;
      grid-column: 1 / 6;
      div {
        text-align: right;
        margin-right: 1em;
      }
    }
    img {
      margin-bottom: 0;
    }
    div {
      text-align: left;
      margin-left: 1em;
    }
    &+ .workflow__stage {
      margin-top: 1.5em;
    }
  }
}
@media (max-width: 550px) {
  .workflow__line {
    position: absolute;
    z-index: 1;
    left: 40px;
    top: 70px;
    display: block;
    height: calc(100% - 130px);
    width: 1px;
    border-left: 1px dashed $accent;
  }
  .workflow__grid {
    grid-template-columns: 80px repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
  }

  .workflow__stage {
    grid-column: 1 / -1;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0;
    img {
      margin-bottom: 0;
    }
    div {
      text-align: left;
      margin-left: 1em;
    }
    &+ .workflow__stage {
      margin-top: 1.5em;
    }
  }
}


#testimonials {
  padding: 5em 0 15em 0;
  margin-top: 10em;
  background-color: $accent;
  position: relative;
  margin-bottom: 3em;
  &:before {
    position: absolute;
    width: 100%;
    height: 3em;
    background-image: url('../assets/testimonial__separator.svg');
    background-size: cover;
    background-repeat: no-repeat;
    top: -3em;
    left: 0;
    content: '';
    box-shadow: inset 0 -2px 0 $accent; 
    fill: #FF0044;
  }
  &:after {
    position: absolute;
    width: 100%;
    height: 3em;
    background-image: url('../assets/testimonial__separator.svg');
    background-size: cover;
    background-repeat: no-repeat;
    bottom: -3em;
    transform: rotate(180deg);
    left: 0;
    content: '';
    box-shadow: inset 0 -2px 0 $accent; 
  }
}
.testimonials__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2em;
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
}

.testimonials__messages {
  position: relative;
  &:before {
    position: absolute;
    right: -80px;
    top: -90px;
    content: '';
    background: url('../assets/testimonial__quotemark.svg');
    width: 176px;
    height: 149px;
  }
}

.testimonials__bubble {
  background-color: white;
  padding: 2em;
  border-radius: 0.5em;
  position: relative;
  &:after {
    position: absolute;
    bottom: 0;
    left: calc(50% - 1em);
    transform: translateY(90%);
    content: '';
    height: 15px;
    width: 24.25px;
    background-image: url('../assets/testimonial__arrow.svg');
  }
  h2 {
    color: $text-secondary;
  }
  p {
    color: $text-secondary;
  }
}
.testimonials__message {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.testimonials__author {
  margin-top: 1em;
  display: flex;
  flex-direction: row;
  align-items: center;
  p {
    color: white;
  }
  &__picture {
    width: 3em;
    height: 3em;
    margin-right: 1em;
  }
  &__description {

  }
}

#features {
  margin-bottom: 10em;
  text-align: center;
  h1 {
    margin-bottom: 0.3em;
  }
}

.features__grid {
  margin-top: 2em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 2em;
  @media (max-width: 767px) {
    grid-template-columns: 1fr 1fr;
  }
}
.features__card {
  width: 100%;
  margin-top: 2em;
  img {
    margin-bottom: 1em;
  }
}

#technologies {
  padding: 5em 0;
}

.technologies__element {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10em;
  h2 {
    margin-top: 1em;
    opacity: 0;
    transition: 500ms;
  }
  p {
    opacity: 0;
    transition: 500ms;
  }
  &:hover h2, &:hover p {
    opacity: 1;
  }
}

#services {
  margin-bottom: 10em;
  h2 {
    color: white;
    font-size: 1.5em;
    font-weight: 700;
    margin-top: 0.5em;
  }
}
.services__grid {
  margin-top: 3em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 20px;
  @media (max-width: 968px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
}

.services__card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 3em;
  border-radius: 3em;
  background-color: $bg-lt;
  margin-bottom: 1em;
  p {
    color: $text-lt;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

/* CONTACT FORM */
.contact__form-wrapper {
  width: 100%;
  height: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2em;
  display: flex;
  justify-content: center;
  align-items: center;
}
.contact__form {
  width: 100%;
  display: flex;
  flex-direction: column;
  h1 {
    color: $bg;
    margin-bottom: 0;
    font-weight: 1000;
  }
  label {
    color: $bg;
    text-transform: uppercase;
    font-size: 0.7em;
    font-weight: 300;
    letter-spacing: 0.05em;
    margin-left: 0.2em;
  }
  button {
    margin: 2em auto;
  }
  input, textarea {
    background-color: $bg;
    border: none;
    padding: 0.5em 1em;
    border-radius: 0.5em;
    &:focus, &:active {
      outline: none;
      box-shadow: 0 0 0 2px inset $text-main;
    }
  }
  textarea {
    min-height: 8em;
  }
}
.contact__form-row {
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 1em;
  margin-bottom: 1em;
}
.form-input {
  display: flex;
  flex-direction: column;
  width: 100%;
  input {
    width: 100%;
  }
  span {
    color: rgb(214, 3, 66);
    font-size: 0.7em;
  }
}

#footer {
  margin-top: 5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 1em;
  p {
    color: $bg-dk;
    }
  a {
    font-weight: 300;
    color: lighten($bg-dk, 20%);
  }
}
.footer__socialmedias {
  z-index: 1000000;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.socialmedias__list {
  @media (max-width: 1000px) {
    display: none;
  }
  height: 100%;
  padding: 0 1.5em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  li {
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    line-height: 1.1em;
    font-size: 0.9em;
    flex-shrink: 1;
    margin-bottom: 1.3em;
    a {
    color: $bg-dk;
    transition: 0.2s;
    &:hover {
        transform: translateY(-0.3em)
      }
    }
    p {
    font-size: 1em;
    }
    span {
      font-size: 1.7em;
    }
  }
}

.socialmedias__list2 {
  @media (max-width: 1000px) {
    display: flex;
  }
  display: none;
  margin: 0 auto;
  height: 100%;
  padding: 0 1.5em;
  flex-direction: row;
  justify-content: space-between;
  column-gap: 1em;
  li {
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    line-height: 1.1em;
    font-size: 0.9em;
    flex-shrink: 1;
    margin-bottom: 1.3em;
    a {
      color: $bg-dk;
      transition: 0.2s;
    &:hover {
        transform: translateY(-0.3em)
      }
    }
    p {
    font-size: 1em;
    }
    span {
      font-size: 1.7em;
    }
  }
}

.socialmedias__line {
  height: 100px;
  width: 1px;
  border-right: 2px solid $bg-dk;
}

.footer.container, #testimonials.container {
  position: relative;
}

.portfolio {
  margin-top: 3em;
}



button {
  padding: 0.8em 2.5em;
  font-size: 0.8em;
  font-weight: 600;
  border: 2px solid transparent;
  border-radius: 2em;
  margin-top: 2em;
  cursor: pointer;
  transition: 0.2s;
  background-color: $bg;
}

.btn-accent {
  background: $accent;
  color: white;
  border-color: $accent;
  &:hover {
    background: transparent;
    color: $accent;
  }
}

.btn-outline {
  background: $bg;
  color: $bg-dk;
  border-color: $bg-dk;
}

.btn-outline-accent {
  background: transparent;
  color: $accent;
  border-color: $accent;
  &:hover {
    background: $accent;
    color: white;
    
  }
}

.btn-main {
  background: transparent;
  color: white;
  border-color: white;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
}

.img--circle {
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: auto;
  }
}

#sentsuccessfully {
  display: none;
  z-index: 100000000000000000;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1em;
  transition: 0.5s;
  p {
    color: white;
    text-align: center;
    padding: 0.8em;
    width: 100%;
    border-radius: 0.5em;
    background-color: green;
    border: 1px solid lighten(green, 15%);
    font-size: 0.8em;
  }
}
.button--free {
  right: 150em;
  bottom: 100em;
  height: 1em;
  width: 4em;
  opacity: 0;
  display: none;
}
.button--fixed {
  @media (max-width: 1000px) {
    display: none;
  }
  opacity: 1;
  display: block;
  position: fixed;
  margin-top: 0;
  padding: 0;
  bottom: 1em;
  right: 1.5em;
  animation: btnslide 0s;
  width: 3em;
  height: 3em;
  z-index: 10000;
  div {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 4em;
    height: 4em;
    border-radius: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    cursor: pointer;
  }
}
.button-fixed__button {
  z-index: 12;
  background: $bg-lt;
  transition: background-color 0.5s;
}
.button-fixed__mail {
  transition: 0.4s cubic-bezier(.76,.27,.16,.92);
  z-index: 3;
  background: $bg-lt;
  opacity: 0;
  &:hover:before {
    animation: labelz 0.25s;
    display: block;
    opacity: 1;
  }
  &:before {
    display: none;
    transition: 0.2s;
    content: "Mail";
    position: absolute;
    left: -6.75em;
    padding: 0.5em 2em;
    background: $bg-lt;
    color: $bg;
    border-radius: 0.5em;
  }
}
.button-fixed__form {
  transition: 0.5s cubic-bezier(.76,.27,.16,.92);
  z-index: 2;
  opacity: 0;
  background: $bg-lt;
  &:hover:before {
    animation: labelz 0.25s;
    display: block;
    opacity: 1;
  }
  &:before {
    display: none;
    transition: 0.2s;
    content: "Form";
    position: absolute;
    left: -7.20em;
    padding: 0.5em 2em;
    background: $bg-lt;
    color: $bg;
    border-radius: 0.5em;
  }
}
.button-fixed__phone {
  transition: 0.6s cubic-bezier(.76,.27,.16,.92);
  z-index: 1;
  background: $bg-lt;
  opacity: 0;
  &:hover:before {
    animation: labelz 0.25s;
    display: block;
    opacity: 1;
  }
  &:before {
    display: none;
    transition: 0.2s;
    content: "06 70 70 47 43";
    position: absolute;
    left: -12em;
    padding: 0.5em 2em;
    background: $bg-lt;
    color: $bg;
    border-radius: 0.5em;
  }
}
.button--fixed--active {
  .button-fixed__button {
    background-color: $bg !important;
    border: 2px solid $bg-dk !important;
  }
  .button-fixed__mail {
    opacity: 1;
    bottom: 5em;
    &:hover {
      background: lighten($bg-lt, 10%);
    }
  }
  .button-fixed__form {
    bottom: 10em;
    opacity: 1;
    &:hover {
      background: lighten($bg-lt, 10%);
    }
  }
  .button-fixed__phone {
    bottom: 15em;
    opacity: 1;
    &:hover {
      background: lighten($bg-lt, 10%);
    }
  }
}

.mt-0 {
  margin-top: 0;
}

.mb-1 {
  margin-bottom: 1em;
}

/* Les animations d'entrée (« enter ») et de sortie (« leave »)  */
/* peuvent utiliser différentes fonctions de durée et de temps.  */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.visible { visibility: visible; }
.invisible { visibility: hidden; }

@keyframes labelz {
  0% {
    display: none;
    opacity: 0;
  }
  1% {
    display: block;
  }
  100% {
    opacity: 1;
  }
}
@keyframes btnslide {
  0% {
    display: none;
    opacity: 0;
    right: 150em;
    bottom: 100em;
  }
  1% {
    width: 4em;
    height: 1em;
    display: block;
    position: fixed;
  }
  100% {
    width: 3em;
    height: 3em;
    opacity: 1;
    bottom: 1em;
    right: 1.5em;
  }
}
.animate__pulse:hover {
  animation: pulse 1s;
  box-shadow: 0 0 0 2em rgba(#fff,0);
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 $bg-lt; }
}

/* HERO BUTTONS */
.hero__buttons {
  position: relative;
  height: 5.5em;
  overflow-y: clip;
  overflow-x: visible;
  button {
    position: absolute;
  }
  &--visible > .hero__button {
    top: -3px
  }
  &--visible > .hero__button--contact {
    left: 20.5em;
    width: 5.5em;
    height: 5.5em;
    border-radius: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    animation: contactbutton forwards 1.5s;
  }
  &--reverse > .hero__button {
    &--mail {
    transition-duration: 0.25s;
    transition-delay: 300ms;
    }
    &--form {
      transition-duration: 0.25s;
      transition-delay: 150ms;
    }
    &--phone {
      transition-duration: 0.25s;
      transition-delay: 0ms;
    }
  }
}
.hero__button {
  top: 5em;
  width: 5em;
  height: 5em;
  border-radius: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  background: $bg-lt;
  &--contact {
    left: 0em;
    width: 15em;
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    &--reverse {
      left: 24em;
      width: 5.5em;
      height: 5.5em;
      animation: contactbutton-reverse 1.3s 0.2s forwards ease !important;
    }
  }
  &--mail {
    transition-duration: 0.25s;
    transition-delay: 1s;
  }
  &--form {
    transition-duration: 0.25s;
    transition-delay: 1.15s;
    left: 7em;
  }
  &--phone {
    transition-duration: 0.25s;
    transition-delay: 1.30s;
    left: 14em;
  }
}

@keyframes contactbutton {
  0% {
    left: 0em;
    width: 15em;
    height: 3em;
  }
  20% {
    left: 0em;
    width: 5.5em;
  }
  100% {
    left: 24em;
    width: 5.5em;
    height: 5.5em;
  }
}
@keyframes contactbutton-reverse {
  0% {
    left: 24em;
    width: 5.5em;
    height: 5.5em;
  }
  50% {
    padding: 0;
    left: 0em;
    width: 3em;
    height: 3em;
    color: $text-main;
  }
  100% {
    padding: 0;
    left: 0em;
    width: 15em;
    height: 3em;
  }
}
.animate__opacityin {
  animation: opacityin 0.5s forwards;
}
@keyframes opacityin {
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
}
.animate__fadeout {
  animation: fadeout 1s forwards;
}
@keyframes fadeout {
  from {
    height: 32px;
    width: 32px;
    opacity: 1;
  }
  to {
    height: 1px;
    width: 1px;
    opacity: 0;
  }
}
</style>
