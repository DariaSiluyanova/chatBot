<template>
  <v-card class="bg-white bot-text mb-4 px-2" flat>{{ props.message.text }}
  </v-card>
</template>
<script setup>
const props = defineProps({ message: Object })

</script>
<style scoped>
.bot-text {
  width: fit-content;
  display: flex;
  flex-wrap: wrap;
  align-self: flex-start;
  border-radius: 10px;
}
</style>
