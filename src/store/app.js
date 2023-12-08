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

    messages: reactive([])
  }),

  actions: {
    /**
     * Функция, создающее сообщение, которое введено пользователем через input
     * @returns
     */
    sendMessage() {
      if(!this.comment.text) return
      const message = ref({
        id: Date.now(),
        text: this.comment.text,
        option: false,
      })

      this.messages.push(message.value)
      this.clearMessage()

      if(this.messagesIndex.index === 3) {
        this.messagesIndex.index = 1
      }
      setTimeout(this.sendChatBotMessage, 1000)
    },

    /**
     * Функция, отправляющая сообщение от имени пользователя при выборе опций, предложенных чат-ботом
     * @returns
     */
    sendUserOption(e) {
      if(this.messagesIndex.index === 3) {
        this.messagesIndex.index = 1
      }
      const messageOption = ref({
        id: Date.now(),
        text: e.target.textContent,
        option: true,
      });

      this.messages.push(messageOption.value)
      setTimeout(this.sendChatBotMessage, 1000)
    },

    /**
     * Функция очищения поля ввода
     * @returns
     */
    clearMessage() {
      this.comment.text = ""
    },

    /**
     * Функция отправления сообщений от лица бота
     * @returns
     */
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

      if(this.messagesIndex.index < this.chatBotMessages.length) {
        this.messagesIndex.index++;
      }

      if(this.messagesIndex.index === 2) {
        setTimeout(this.sendChatBotMessage, 1000)
      }
    }
  }
})
