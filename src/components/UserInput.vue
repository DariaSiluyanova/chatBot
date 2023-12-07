<template>
  <v-text-field
    v-model="model"
    append-icon="mdi-send"
    variant="filled"
    clear-icon="mdi-close-circle"
    clearable
    type="text"
    @click:append="store.sendMessage"
    @click:clear="store.clearMessage">
  </v-text-field>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { useAppStore } from '../store/app.js'

const store = useAppStore()
const model = ref("")
store.comment.text = model.value

onMounted(store.sendChatBotMessage)
</script>
