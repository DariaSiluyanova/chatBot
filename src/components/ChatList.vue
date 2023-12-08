<template>
  <v-card class="bg-white pa-2 mb-4 dialog">
    <template v-for="message in store.messages">

      <div class="chat-bot-message" v-if="message.chatbot" :key="message.id">
        <v-card class="bot-text mb-4 px-2" >{{ message.text }}</v-card>
        <v-btn v-if="message.index % 2 === 0" class="btn-choice pa-1 mx-1 mb-2" @click="store.sendUserOption" v-for="option in message.options" :key="option.id">{{ option.text }}</v-btn>
      </div>

      <div v-else class="user-container" :key="message.id">
        <v-card v-if="message.option" class="user-text mb-4 pa-1 px-md-2 py-md-2" flat>{{ message.text }}</v-card>
        <v-card v-else class="user-text mb-4 pa-1 px-md-3 py-md-2" >{{ message.text }}</v-card>
      </div>

    </template>
  </v-card>
</template>

<script setup>
import { useAppStore } from '@/store/app';
const store = useAppStore();

</script>

<style lang="scss" scoped>
.chat-bot-message,
.user-text {
  @media (max-width: 320px) {
    font-size: 14px;
    text-transform: none!important;
  }
}
.dialog {
  display: flex;
  flex-direction: column;
  height: 500px;
  overflow-y: auto;
}

.btn-choice {
  width: fit-content;
  font-size: 12px;
  color: rgb(66, 91, 118);
  background-color: rgba(176, 193, 212, 0.4);
}

.bot-text {
  width: fit-content;
  display: flex;
  flex-wrap: wrap;
  align-self: flex-start;
  border-radius: 10px;
  background-color: rgba(176, 193, 212, 1);
}

.user-text {
  border-radius: 10px;
  background-color: #5866BF;
  color: white;
}

.user-container {
  align-self: flex-end;
  width: fit-content;
}
</style>
