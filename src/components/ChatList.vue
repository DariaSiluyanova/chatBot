<template>
  <v-card class="bg-purple-lighten-4 pa-2 mb-4 dialog">
    <template v-for="message in store.messages">

      <div v-if="message.chatbot" :key="message.id">
        <v-card class="bg-white bot-text mb-4 px-2" flat>{{ message.text }}</v-card>
        <v-btn v-if="message.index === 0" class="btn-choice mx-1 mb-2" @click="store.sendUserOption" v-for="option in message.options" :key="option.id">{{ option.text }}</v-btn>
      </div>

      <div v-else class="user-text" :key="message.id">
        <v-card v-if="message.option" class="bg-white user-text mb-4 px-2" flat>{{ message.text }}</v-card>
        <v-card v-else class="bg-white mb-4 px-2" flat>{{ message.text }}</v-card>
      </div>

    </template>
  </v-card>
</template>

<script setup>
import { useAppStore } from '@/store/app';
const store = useAppStore();

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

.bot-text {
  width: fit-content;
  display: flex;
  flex-wrap: wrap;
  align-self: flex-start;
  border-radius: 10px;
}

.user-text {
  width: fit-content;
  align-self: flex-end;
  border-radius: 10px;
}
</style>
