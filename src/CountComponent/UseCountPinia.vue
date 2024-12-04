<script setup>
import { useCounterStore } from './countStore/countStore';

const storeCounter = useCounterStore();
</script>
<template>
  <div class="flex place-content-start">
    <div class="flex flex-col items-center gap-10 mt-10 ms-10 max-w-[200px] w-full">
      <div class="">Count: {{ storeCounter.count }}</div>
      <div class="flex gap-5">
        <UseButton icon="pi pi-plus" @click="storeCounter.increaseCounter" />
        <UseButton icon="pi pi-minus" @click="storeCounter.decreaseCounter" />
      </div>
      <div class="w-full border-b-2"></div>
      <div class="">The counter is: {{ storeCounter.oddOrEven }}</div>
      <div class="w-full border-b-2"></div>
      <div class="">Edit Counter:</div>
      <input type="number" v-model="storeCounter.count" />
      <div class="w-full border-b-2"></div>
    </div>
  </div>
</template>
