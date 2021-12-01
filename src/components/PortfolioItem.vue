<template>
<div class="portfolio__item" :class="{'portfolio__item--reverse': item.order % 2 == 0}" data-aos="fade-left" :data-aos-delay="100 + item.order * 100" data-aos-anchor="#portfolio">
    <div class="portfolio__item-content">
    <div>
        <p class="portfolio__item-content-overline">{{ item.overline }}</p>
        <h2 class="portfolio__item-content-heading">{{ item.heading }}</h2>
        <a class="portfolio__item-content-extlink" :href="item.website" target="_blank">Voir le site<span class="icofont-external-link"></span></a>
        <p class="portfolio__item-content-description">{{ item.description }}</p>
        <ul class="portfolio__item-content-list" :class="{'portfolio__item-content-list--reverse': item.order % 2 == 1}">
          <li v-for="tag in item.tags" v-bind:key="tag">{{ tag.tag }}</li>
        </ul>
    </div>
    </div>
    <div class="portfolio__item-picture" @click="openModal()" style="cursor: pointer">
    <img v-if="item.preview" :src="'https://evankurz-personal-website.herokuapp.com/' + item.preview.url" alt="">
    </div>
    
</div>
<div class="portfolio__modal" :class="{'portfolio__modal--active': modalActive}">
    <svg @click="closeModal()" class="portfolio__modal-close" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        width="50" height="50"
        viewBox="0 0 172 172"
        style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M49.5575,44.72l-4.8375,4.8375l36.55,36.4425l-36.55,36.4425l4.8375,4.8375l36.6575,-36.4425l36.55,36.4425l4.8375,-4.8375l-36.55,-36.4425l36.55,-36.4425l-4.8375,-4.8375l-36.55,36.4425z"></path></g></g></svg>
    <div class="portfolio__modal-body">
        <h4>{{ item.overline }}</h4>
        <h1>{{ item.heading }}</h1>
        <ul class="portfolio__item-content-list">
        <li v-for="tag in item.tags" v-bind:key="tag">{{ tag.tag }}</li>
        </ul>
        <div class="modal__casestudy" v-html="item.casestudy"></div>
    </div>
</div>
</template>

<script>
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks} from 'body-scroll-lock';

import PortfolioItemService from "../services/portfolioitem.service"

var md = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true
});

export default {
    data() {
        return {
            modalActive: false,
            item: {
                overline: '',
                heading: '',
                tags: '',
                preview: null,
                description: '',
                casestudy: ''
            }
        }
    },
    props: {
        key: Number,
        order: Number
    },
    methods: {
        openModal() {
            this.modalActive = true;
            disableBodyScroll(document.querySelector('body'))
        },
        closeModal() {
            this.modalActive = false;
            enableBodyScroll(document.querySelector('body'))
        }
    },
    mounted() {
        console.log(this.order)
        PortfolioItemService.getAllFiltered('?order=' + this.order)
            .then((res) => {
                this.item = res[0]
            })
    },
    unmount() {
        clearAllBodyScrollLocks()
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

.portfolio__item {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1em;
  -webkit-box-align: center;
  align-items: center;
  margin-bottom: 150px;
  @media (max-width: 800px) {
    margin-bottom: 2em;
  }
  &-picture {
    z-index: 1;
    position: relative;
    grid-column: 1 / 8;
    @media (max-width: 800px) {
    grid-column: 1 / -1;
    }
    grid-row-start: 1;
    grid-row-end: 1;
    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: white;
      opacity: 0.2;
      transition: 0.2s;
    }
    img {
      width: 100%;
      height: auto;
      filter: grayscale(50%);
    }
    &:hover {
      box-shadow: 0.5em 0.5em 2em 1em rgba(0, 0, 0, 0.1),
                  0.3em 0.3em 1em 0em rgba(0, 0, 0, 0.25);
      &:after {
        opacity: 0;
      }
      img {
        filter: grayscale(0);
      }
    }
  }
  &-content {
    z-index: 2;
    position: relative;
    text-align: right;
    grid-area: 1 / 7 / 1 / -1;
    @media (max-width: 800px) {
      grid-column: 1 / -1;
      height: 100%;
      width: 100%;
      padding: 2em;
      background: hsla(205, 29, 8, 0.9);
      display: flex;
      align-items: center;
    }
    &-overline {
      text-transform: uppercase;
      @media (max-width: 800px) {
        color: white;
      }
    }
    &-heading {
      font-size: 1.5em;
      font-weight: 700;
      margin-bottom: 0;
      @media (max-width: 800px) {
        color: white;
      }
    }
    &-extlink {
      @media (max-width: 800px) {
        color: $text-lt;
      }
      color: $text-main;
      font-size: 0.8em;
      &:hover {
        border-bottom: 1px solid $text-main;
      }
      span {
        margin-left: 0.5em;
      }
    }
    &-description {
      margin-top: 0.5em;
      margin-bottom: 0.7em;
      padding: 2em;
      background-color: $bg-dk;
      color: $text-lt;
      border-radius: 1em;
      @media (max-width: 800px) {
        padding: 2em 0;
        background: transparent;
      }
    }
    &-list {
      color: $text-main;
      list-style-type: none;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      font-size: 0.8em;
      @media (max-width: 800px) {
        color: white;
      }
      li + li {
        margin-left: 1em;
      }
      &--reverse {
        justify-content: flex-end;
      }
    }
  }
  &.portfolio__item--reverse {
    .portfolio__item-content {
      text-align: left;
      grid-area: 1 / 1 / 1 / 7;
      &-tags {
        justify-content: flex-start;
      }
      @media (max-width: 800px) {
      grid-column: 1 / -1;
      }
    }
    .portfolio__item-picture {
      @media (max-width: 800px) {
      grid-column: 1 / -1;
      }
      grid-column: 6 / -1;
    }
  }
}
.portfolio__modal {
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 1000000;
  background: #0F161B;
  top: -100vh;
  left: 0;
  transition: 1s;
  overflow-y: scroll;
  &-close {
    position: absolute;
    right: 1em;
    cursor: pointer;
  }
  &--active {
      top: 0;
  }
}
.portfolio__modal-body {
    width: 100%;
    max-width: 980px;
    height: 100%;
    padding: 4em 2em;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    & > :last-child {
      margin-bottom: 3em;
    }
    h1, h2, h3, h4, p {
        color: white;
    }
    h1 {
        margin-bottom: 0;
    }
    h2 {
      font-size: 1.5em;
      font-weight: 700;
      margin-bottom: 0.2em;
    }
    h3 {
      font-size: 1em;
      font-weight: 300;
    }
    h4 {
        text-transform: uppercase;
        font-weight: 400;
        letter-spacing: 0.05em;
    }
    p + h2, p + h3 {
      margin-top: 1em;
    }
    .portfolio__item-content-list {
        color: $text-lt;
    }
    img {
        max-width: 500px;
        height: auto;
        margin: 1em 0;
        text-align: center;
    }
    p {
        display: flex;
        flex-direction: column;
        img {
            align-self: center;
        }
    }
}
.modal__casestudy {
  margin-top: 2em;
  margin-bottom: 4em;
  p {
    color: $text-lt;
  }
}
.modal__image {
  display: flex;
  justify-content: center;
}
</style>