<script setup lang="ts">
  import { $fetch } from 'ofetch'

  const pizzas = await $fetch(
    'https://my-json-server.typicode.com/Pinegrow/pizzeria-iles/pizzas',
  )
</script>

<template>
  <PizzaStore :pizzas="pizzas" />
</template>

<style scoped></style>
