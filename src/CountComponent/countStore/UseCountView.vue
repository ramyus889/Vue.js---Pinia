<script setup>
import { useLocalStorage } from '@vueuse/core';
import { ref } from 'vue';
import { useCounterStore } from './countStore';

const storeCounter = useCounterStore();
const countTwo = ref(useLocalStorage('countTwo', 0));
</script>
<template>
  <div>
    <div class="mt-10 ms-10">
      <div class="">Count: {{ storeCounter.count }}</div>
      <div class="mt-10">Count: {{ countTwo }}</div>
      <div class="flex gap-5 mt-5">
        <UseButton icon="pi pi-plus" @click="countTwo++" />
        <UseButton icon="pi pi-minus" @click="countTwo--" />
      </div>
    </div>
  </div>
</template>
