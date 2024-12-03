<template>
  <div class="flex items-center justify-between pb-4 border-b-2">
    <div class="">{{ task.title }}</div>
    <div class="flex gap-1">
      <UseButton
        text
        :icon="task.isFav ? 'pi pi-heart-fill' : 'pi pi-heart '"
        @click="taskStore.toggleFav(task.id)"
      />
      <UseButton text icon="pi pi-trash" @click="taskStore.deleteTask(task.id)" />
    </div>
  </div>
</template>

<script setup>
import { useTaskStore } from '../store/TaskStore';
defineProps(['task']);

const taskStore = useTaskStore();
</script>
