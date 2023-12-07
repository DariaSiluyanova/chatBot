// Utilities
import { defineStore } from 'pinia'
import { reactive, ref } from "vue";

export const useAppStore = defineStore('app', {
  state: () => ({
    comment: reactive({
      text: "",
    }),

    messagesIndex: reactive({
      index: 0,
    }),

    chatBotMessages: reactive([
      'Привет! Я твой виртуальный ассистент. Чем я могу помочь?',
      'Хорошо, буду рад помочь',
      'Что ещё для вас сделать?'
    ])
  }),

  actions: {
    sendMessage() {
      if(!this.comment.text) return

      const message = ref({
        id: Date.now(),
        text: this.comment.text,
      })

      emit("sendMessage", message);
      this.clearMessage()

      setTimeout(this.sendChatBotMessage, 1000)
    },

    clearMessage() {
      this.comment.text = ""
    },

    sendChatBotMessage() {
      if(this.comment.text) return

      const message = ref({
        id: Date.now(),
        index: this.messagesIndex.index,
        text: this.chatBotMessages[this.messagesIndex.index],
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

      if(this.messagesIndex.index < this.chatBotMessages.length) {
        this.messagesIndex.index++;
      }

      if(this.messagesIndex.index === 2) {
        setTimeout(this.sendChatBotMessage, 1000)
      }
    }
  }
})
