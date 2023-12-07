<template>
  <v-card class="bg-white user-text mb-4 px-2" flat>{{ props.message.text }}</v-card>
</template>

<script setup>
const props = defineProps({message: Object })
</script>

<style scoped>
.user-text {
  width: fit-content;
  align-self: flex-end;
  border-radius: 10px;
}

</style>
