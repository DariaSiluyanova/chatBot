<template>
  <v-text-field
    v-model="store.comment.text"
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
import { onMounted } from 'vue'
import { useAppStore } from '../store/app.js'

const store = useAppStore()
onMounted(store.sendChatBotMessage)
</script>
<style>
::deep(.v-input__control .v-field__clearable) {
  font-size: 28px;
  max-width: 50px!important;
}
</style>
