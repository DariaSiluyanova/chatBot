<template>
  <v-text-field
    v-model="store.comment.text"
    append-icon="mdi-send"
    variant="filled"
    clear-icon="mdi-close-circle"
    clearable
    type="text"
    @click:append="sendMessage"
    @click:clear="clearMessage">
  </v-text-field>
</template>
<script setup>
import { onMounted } from 'vue'
import { useAppStore } from '../store/app'

const store = useAppStore()

const emit = defineEmits(["sendMessage", "sendChatBotMessage"])

onMounted(store.sendChatBotMessage)
</script>
