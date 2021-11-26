<template>
  <table class="messages__table">
      <thead>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
          <td>Message</td>
          <td>Actions</td>
      </thead>
      <tr v-for="message in messages" v-bind:key="message.name" :class="message.isread ? '' : 'strong'">
          <td>{{message.name}}</td>
          <td>{{message.email}}</td>
          <td>{{message.phone}}</td>
          <td>{{message.message.slice(0, 20) + ' ...'}}</td>
          <td><router-link :to="{ name: 'ViewMessage', params: { id: message._id }}" @click="markAsRead(message)">See</router-link></td>
      </tr>
  </table>
</template>
<script>
import MessageService from "../services/message.service"

export default ({
    data() {
        return {
            messages: []
        }
    },
    methods: {
        async getMessages() {
            const messages = await MessageService.getAll()
            this.messages = messages.reverse()
        },
        async markAsRead(message) {
                if (!message.isread) {
                message.isread = true;
                await MessageService.editOne(message._id, message)
                }
        },
        linkToMessage(message) {
            this.markAsRead(message)
            this.$router.push({name: 'ViewMessage', id: message._id})
        },
    },
    mounted() {
        this.getMessages()
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

.messages__table {
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
        grid-template-columns: 2fr 2fr 2fr 5fr 0.5fr;
        background: $bg;
        color: white;
        font-weight: 700;
        td {
            padding: 0.8em 0.5em;
        }
    }
    tr {
        display: grid;
        grid-template-columns: 2fr 2fr 2fr 5fr 0.5fr;
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