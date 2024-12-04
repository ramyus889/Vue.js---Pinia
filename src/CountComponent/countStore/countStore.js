import { useLocalStorage } from '@vueuse/core';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useCounterStore = defineStore('counter', () => {
  const count = ref(useLocalStorage('count', 0));

  function increaseCounter() {
    count.value++;
  }
  function decreaseCounter() {
    count.value--;
  }

  const oddOrEven = computed(() => {
    if (count.value % 2 === 0) return 'even';
    return 'odd';
  });

  return { count, oddOrEven, increaseCounter, decreaseCounter };
});
