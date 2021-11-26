<template>
<form class="testimonial__form">
    <div class="row grid-2">
        <div class="input">
            <label for="author">Nom</label>
            <input type="text" name="author" v-model="testimonial.author">
        </div>
        <div class="input">
            <label for="name">Position</label>
            <input type="text" name="authorjob" v-model="testimonial.authorjob">
        </div>
    </div>
    <label for="title">Titre</label>
    <input type="text" name="title" v-model="testimonial.title">
    <label for="message">Message</label>
    <textarea name="message" v-model="testimonial.message"></textarea>
    <label for="authorpicture">Photo (url)</label>
    <input type="text" name="authorpicture" v-model="testimonial.authorpicture">
    <div class="row btn__row">
        <button class="btn-main" @click.prevent="saveTestimonial()">Sauvegarder</button> <router-link :to="{name: 'Testimonials'}"><button class="btn-outline-accent">Annuler</button></router-link> <button v-if="this.$route.params.id" @click.prevent="deleteTestimonial()" class="btn-accent">Supprimer</button>
    </div>
</form>
</template>

<script>
import TestimonialService from '../services/testimonial.service';

export default ({
    data() {
        return {
            testimonial: {
                title: '',
                message: '',
                author: '',
                authorjob: '',
                authorpicture: ''
            }
        }
    },
    methods: {
        async getTestimonial() {
            if (this.$route.params.id) {
                this.testimonial = await TestimonialService.getOne(this.$route.params.id)
            }
        },
        saveTestimonial() {
            if (this.$route.params.id) {
            TestimonialService.editOne(this.testimonial._id, this.testimonial)
                    .then(() => { this.$router.push({name: 'Testimonials'}) })
            } else {
            TestimonialService.createOne(this.testimonial)
                    .then(() => { this.$router.push({name: 'Testimonials'}) })
            }
        },
        deleteTestimonial() {
            TestimonialService.deleteOne(this.testimonial._id)
                .then(() => { this.$router.push({name: 'Testimonials'}) })
        }
    },
    mounted() {
        this.getTestimonial()
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

.testimonial__form {
    width: 100%;
    .grid-2 {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 1em;
    }
    label {
        display: block;
        margin-top: 1.5em;
        margin-bottom: 0.5em;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 0.7em;
        color: $text-main;
    }
    input, textarea {
        padding: 0.5em;
        width: 100%;
        border-radius: 0.5em;
        background-color: lighten($text-main, 45%);
        border: 2px solid lighten($text-main, 45%);
        outline: none;
        color: $bg-lt;
        &:active, &:focus {
            border-color: $text-main;
        }
    }
}
.btn__row > *{
    margin-right: 2em;
}
</style>