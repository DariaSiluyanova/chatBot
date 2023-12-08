<template>
  <v-text-field
    v-model="store.comment.text"
    class="input-style"
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

<style lang="scss">
.v-field  {
  background-color: white;
  color: rgb(66, 91, 118);
}

.v-field__input {
  @media (max-width: 320px) {
    padding-inline: 12px!important;
    padding-top: 10px!important;
    padding-bottom: 10px!important;
    min-height: 25px!important;
  }
}

input {
  font-size: 20px;

  @media (max-width: 320px) {
    font-size: 14px;
  }
}
</style>
