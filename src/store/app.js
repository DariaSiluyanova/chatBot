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
    ]),

    message: reactive ({
      id: Date.now(),
      text: "",
      option: false,
    }),

    messageOption: reactive({
      id: Date.now(),
      text: "",
      option: true,
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

      console.log(this.messages)
    },

    sendUserOption(e) {
      this.messageOption.text = e.target.textContent
      this.messages.push(this.messageOption)
      setTimeout(this.sendChatBotMessage, 1000)
    },

    clearMessage() {
      this.comment.text = ""
    },

    sendChatBotMessage() {
      if(this.comment.text) return

      const messageBot = ref({
        id: Date.now(),
        chatbot: true,
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
      });

      this.messages.push(messageBot.value)

      console.log(this.messages)

      if(this.messagesIndex.index < this.chatBotMessages.length) {
        this.messagesIndex.index++;
      }

      if(this.messagesIndex.index === 2) {
        setTimeout(this.sendChatBotMessage, 1000)
      }
    }
  }
})
