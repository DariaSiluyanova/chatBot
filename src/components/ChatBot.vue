<template>
  <v-dialog width="500">
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" icon="mdi-chat-outline" class="bg-indigo-darken-3"> </v-btn>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card
        class="bg-dialog px-1 py-2 py-md-6"
        title="Let`s chat"
        prepend-icon="mdi-robot-excited-outline"
      >
        <chat-list/>
        <user-input/>
        <v-btn
          class="close-btn mr-10"
          text="Закрыть чат"
          @click="isActive.value = false">
        </v-btn>
      </v-card>
    </template>
  </v-dialog>
</template>

<script setup>
import ChatList from "./ChatList.vue"
import UserInput from "./UserInput.vue"

</script>

<style lang="scss">
.v-card-item {
  align-items: baseline;
}

.mdi-robot-excited-outline::before {
  color: #FFC32C;
  font-size: 72px!important;

  @media (max-width: 320px) {
    font-size: 28px!important;
  }
}

.v-card-title {
  font-size: 36px;
  color: #FFC32C;

  @media (max-width: 320px) {
    font-size: 22px!important;
  }
}

.v-card-item__prepend .v-avatar.v-avatar--density-default {
  width: 80px;
  height: 80px;

  @media (max-width: 320px) {
    width: 30px;
    height: 30px;
  }
}

.close-btn {
  align-self: flex-end;
  width: 40%;
  background-color: #FFC32C;
  color: rgb(66, 91, 118);

  @media (max-width: 320px) {
    height: 30px!important;
    font-size: 12px;
  }
}

.bg-dialog {
  background-color: rgb(71, 96, 255)
}

.chat-bot-message .v-btn--size-default {
  @media (max-width: 320px) {
    height: 26px!important;
  }
}

</style>
