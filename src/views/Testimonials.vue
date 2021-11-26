<template>
<router-link :to="{name: 'NewTestimonial'}"><button class="btn-main mt-0 mb-1">Nouveau</button></router-link>
  <table class="testimonials__table">
      <thead>
          <td>Name</td>
          <td>Position</td>
          <td>Testimonial</td>
          <td>Actions</td>
      </thead>
      <tr v-for="testimonial in testimonials" v-bind:key="testimonial.name">
          <td>{{testimonial.author}}</td>
          <td>{{testimonial.authorjob}}</td>
          <td>{{testimonial.title.slice(0, 20)}}</td>
          <td><router-link :to="{ name: 'EditTestimonial', params: { id: testimonial._id }}">Edit</router-link></td>
      </tr>
  </table>
</template>
<script>
import TestimonialService from '../services/testimonial.service';

export default ({
    data() {
        return {
            testimonials: []
        }
    },
    methods: {
        async getTestimonials() {
            this.testimonials = await TestimonialService.getAll();
            this.testimonials = this.testimonials.reverse();
        }
    },
    mounted() {
        this.getTestimonials()
    }
})
</script>

<style lang="scss">
$bg: #251C3F;
$bg-lt: #312552;
$bg-dk: #191426;
$accent: #FF0044;
$text-main: #746399;
$text-secondary: #18191F;
@import url('../assets/icofont/icofont.min.css');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

.testimonials__table {
    width: 100%;
    font-size: 0.8em;
    color: $text-main;
    border-collapse: collapse;
    a {
        color: $text-main;
        font-weight: 700;
    }
    thead {
        display: grid;
        grid-template-columns: 2fr 2fr 7fr 0.5fr;
        background: $bg;
        color: white;
        font-weight: 700;
        td {
            padding: 0.8em 0.5em;
        }
    }
    tr {
        display: grid;
        grid-template-columns: 2fr 2fr 7fr 0.5fr;
        cursor: pointer;
    }
    tr:nth-of-type(2n-1) {
        background: rgb(246, 245, 248);
    }
    td {
        padding: 0.5em;
    }
}

.strong {
    font-weight: 600;
}
</style>