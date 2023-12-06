<template>
  <v-card  class="bg-purple-lighten-4 pa-2 mb-4 dialog">
    <template v-for="message in props.messages">
      <bot-messages v-if="message.chatbot" class="dialog-style" :key="message.id" :message="message"></bot-messages>
      <user-messages v-else class="dialog-style" :key="message.id" :message="message"/>
    </template>
  </v-card>
</template>

<script setup>
import UserMessages from './UserMessages.vue'
import BotMessages from './BotMessages.vue';

const props = defineProps(['messages'])
</script>

<style scoped>
.dialog {
  display: flex;
  flex-direction: column;
  height: 500px;
}
</style>
