<template>
<div class="message__display">
    <h1>Message from: {{message.name}}</h1>
    <h2>Email: {{message.email}} - Phone number: {{message.phone}}</h2>
    <p>{{message.message}}</p> 
</div>
</template>

<script>
import MessageService from '../services/message.service'
export default ({
    data() {
        return {
            message: {}
        }
    },
    methods: {
        async getMessage() {
            this.message = await MessageService.getOne(this.$route.params.id);
        }
    },
    mounted() {
        this.getMessage()
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

.message__display {
    p, h1, h2 {
        color: $text-main;
    }
    h1 {
        margin-bottom: 0.2em;
    }
}
</style>