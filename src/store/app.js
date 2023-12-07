// Utilities
import { defineStore } from 'pinia'
import { reactive } from "vue";

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
    ]),

    message: reactive ({
      id: Date.now(),
      text: "",
    }),

    messageBot: reactive({
      id: Date.now(),
      index: 0,
      text: "",
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
    }),

    messages: reactive([])
  }),

  actions: {
    sendMessage() {
      if(!this.comment.text) return
      this.message.text = this.comment.text
      this.messages.push(this.message)
      this.clearMessage()
      setTimeout(this.sendChatBotMessage, 1000)
    },

    clearMessage() {
      this.comment.text = ""
    },

    sendChatBotMessage() {
      if(this.comment.text) return

      this.messageBot.index = this.messagesIndex.index
      this.messageBot.text = this.chatBotMessages[this.messageBot.index]
      this.messages.push(this.messageBot)

      if(this.messagesIndex.index < this.chatBotMessages.length) {
        this.messagesIndex.index++;
      }

      if(this.messagesIndex.index === 2) {
        setTimeout(this.sendChatBotMessage, 1000)
      }
    }
  }
})
