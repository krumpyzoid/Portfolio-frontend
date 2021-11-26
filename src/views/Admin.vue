<script>
import Login from '../components/Login.vue'
export default ({
    data() {
        return {
            newmessages_count: 0,
            admin__menu: 'admin__menu',
            admin__intro: 'admin__intro',
            admin__content: 'admin__content',
            admin__login: 'admin__login'
        }
    },
    computed: {
        loggedIn() {
            return this.$store.state.auth.status.loggedIn
        }
    },
    methods: {
        logOut() {
            this.$store.dispatch('auth/logout').then(
            () => {
                this.$router.push({name: 'Admin'})
            },
            (error) => {
                this.message = (error.response && error.response.data) ||
                            error.message ||
                            error.toString()})
        }
    },
    mounted() {
    },
    created() {
        if (this.loggedIn && this.$route.path == '/krumpadmin/') {
            this.$router.push({name: "Messages"})
        }
    },
    components: {
        Login
    }
})
</script>

<template>
    <div class="sidebar" :class="this.loggedIn?admin__menu:admin__intro">
        <nav v-if="this.loggedIn" class="admin__menu">
            <img src="" alt="">
            <ul class="nav-items">
                <li class="icofont-mail"><router-link :to="{name: 'Messages'}">Messages<span class="newmessages-notification"><span>{{newmessages_count}}</span></span></router-link></li>
                <li class="icofont-ui-messaging"><router-link :to="{name: 'Testimonials'}">Témoignages</router-link></li>
            </ul>
            <p class="txt-center" @click="logOut"><span class="ico icofont-logout"></span>LogOut</p>
        </nav>
        <div v-else class="hero__torus">
            <iframe src='https://my.spline.design/untitled-7b296d3389f302085547d7d503900d00/' frameborder='0' width='100%' height='100%'></iframe>
        </div>
        
    </div>
    <div class="content admin__content" :class="this.loggedIn?admin__content:admin__login">
        <Login v-if="!this.loggedIn"></Login>
        <router-view/>
    </div>
    
</template>

<style lang="scss">
$bg: #251C3F;
$bg-lt: #312552;
$bg-dk: #191426;
$accent: #FF0044;
$text-main: #746399;
$text-secondary: #18191F;
@import url('../assets/icofont/icofont.min.css');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
* {
    margin: 0;
    padding: 0;
    font-family: 'Inter';
}
.sidebar {
    position: fixed;
    height: 100vh;
    background-color: $bg-dk;
    width: 20em;
    transition: 1s;
}
.admin__intro {
    width: 60%;
}
.admin__menu {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2em;
}
.nav-items {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    a {
        color: $text-main;
        font-size: 0.9em;
    }
    li {
        height: 3em;
        color: $text-main;
        font-size: 1em;
        &:before {
            margin-right: 0.5em;
        }
    }
}
.admin__content {
    width: calc(100% - 20em);
    margin-left: 20em;
    padding: 2em;
    min-height: 100vh;
    background-color: white;
}
.admin__login {
    width: 40%;
    margin-left: 60%;
    padding: 2em;
    min-height: 100vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.newmessages-notification {
    background-color: red;
    border-radius: 100%;
    width: 1em;
    height: 1em;
    margin-left: 0.5em;
    display: inline-block;
    position: relative;
    transform: translateY(20%);
    span {
        font-size: 0.6em;
        color: white;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%)
    }
}
.content {
    transition: 1s;
}
.ico {
    margin-right: 0.5em;
}
.txt-center {
    text-align: center;
}
.sidebar .hero__torus {
    right: 50%;
    transform: translate(50%, -50%)
}
</style>