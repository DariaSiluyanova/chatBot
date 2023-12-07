<template>
  <v-card class="bg-purple-lighten-4 pa-2 mb-4 dialog">
    <template v-for="message in props.messages">
      <div v-if="message.chatbot" :key="message.id">
        <bot-messages  class="dialog-style" :message="message"></bot-messages>
        <v-btn v-if="message.index === 0" class="btn-choice mx-1 mb-2" @click="chooseOption" v-for="option in message.options" :key="option.id">{{ option.text }}</v-btn>
      </div>
      <user-messages v-else class="dialog-style" :key="message.id" :message="message"/>
    </template>
  </v-card>
</template>

<script setup>
import UserMessages from './UserMessages.vue';
import BotMessages from './BotMessages.vue';
const emit = defineEmits(['chooseOption']);
const props = defineProps(['messages']);

const chooseOption = (e) => {
  let payload = e.target.textContent
  emit("chooseOption", {text: payload})
};

</script>

<style scoped>
.dialog {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 200px);
  overflow-y: auto;
}

.btn-choice {
  width: fit-content;
  font-size: 12px;
  background: #4A148C;
  color: #fff;
}
</style>
