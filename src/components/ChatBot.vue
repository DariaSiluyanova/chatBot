<template>
  <v-dialog width="500">
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" icon="mdi-chat-outline" class="bg-indigo-darken-3"> </v-btn>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card
        class="bg-purple-lighten-3 pa-2 pa-sm-4"
        title="Let`s chat"
        prepend-icon="mdi-robot-excited-outline"
      >
        <chat-list :messages="messages"/>
        <user-input @send-message="pushMessage"/>
        <v-btn
          text="Close Chat"
          @click="isActive.value = false">
        </v-btn>
      </v-card>
    </template>
  </v-dialog>
</template>

<script setup>
import { ref } from 'vue'
import ChatList from "./ChatList.vue"
import UserInput from "./UserInput.vue"
let messages = ref([])

function pushMessage(message) {
  messages.value.push(message.value)
}
</script>

<style>
.mdi-robot-excited-outline::before {
  color: #6A1B9A;
}

.mdi:before {
  font-size: 36px;
}
</style>
