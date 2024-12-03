<script setup>
import { ref } from 'vue';
import { useTaskStore } from '../store/TaskStore';

const taskStore = useTaskStore();
const newTask = ref('');

const handleSubmit = () => {
  if (newTask.value.length > 0) {
    taskStore.addTask({
      id: Date.now(),
      title: newTask.value,
      isFav: false
    });
    newTask.value = '';
  }
};
</script>
<template>
  <form @submit.prevent="handleSubmit" class="flex flex-col items-center justify-center gap-5">
    <input
      type="text"
      v-model="newTask"
      placeholder="Add a new task"
      class="w-full px-3 py-3 text-white bg-slate-600 rounded-xl"
    />
    <UseButton type="submit" icon="pi pi-plus" class="!w-full" />
  </form>
</template>
