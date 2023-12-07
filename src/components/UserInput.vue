<template>
  <v-text-field
    v-model="comment"
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
import { ref, onMounted } from 'vue'

const emit = defineEmits(["sendMessage", "sendChatBotMessage"])

const comment = ref("");
const chatBotMessages = ref ([
  'Привет! Я твой виртуальный ассистент. Чем я могу помочь?',
  'Хорошо, буду рад помочь',
  'Что ещё для вас сделать?'
])

let messagesIndex = ref(0)

onMounted(sendChatBotMessage)

function sendMessage() {
  if(!comment.value) return

  const message = ref({
    id: Date.now(),
    text: comment.value,
  })
  emit("sendMessage", message);
  clearMessage()
  setTimeout(sendChatBotMessage, 1000)
}

function clearMessage() {
  comment.value = ""
}

function sendChatBotMessage() {
  if(comment.value) return

  const message = ref({
    id: Date.now(),
    index: messagesIndex.value,
    text: chatBotMessages.value[messagesIndex.value],
    options: [
      {
        id: 1,
        text: "Поставить будильник"
      },
      {
        id: 2,
        text: "Посмореть прогноз погоды"
      },
      {
        id: 3,
        text: "Открыть google календарь"
      },
    ],
    chatbot: true,
  })

  emit('sendMessage', message, "sendChatBotMessage")

  if(messagesIndex.value < chatBotMessages.value.length) {
    messagesIndex.value++;
  }

  if(messagesIndex.value === 2) {
    setTimeout(sendChatBotMessage, 1000)
  }
}
</script>
