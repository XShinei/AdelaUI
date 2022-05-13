<template>
  <ad-button @click="handleClick">Button</ad-button>
</template>

<script setup lang="ts">
const handleClick = (e) => {
  console.log('click', e);
};
</script>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App'
});
</script>
