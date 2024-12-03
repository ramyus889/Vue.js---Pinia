<script setup>
import { ref } from 'vue';
import TaskForm from './TaskForm.vue';
import TaskDetails from './TaskDetails.vue';

import { useTaskStore } from '../store/TaskStore';
const taskStore = useTaskStore();

taskStore.fetchTasks();

const filter = ref('all');

function isActive(path) {
  return filter.value === path ? ' rotate-[5deg] transition-transform ' : '';
}
</script>

<template>
  <div class="flex px-5 place-content-center">
    <div class="flex flex-col gap-14 sm:max-w-[400px] w-full">
      <div class="flex items-center gap-5 place-content-center">
        <img
          src="/img/Code/frontend.jpg"
          alt=""
          class="w-[100px] h-[100px] rounded-xl rotate-[-15deg]"
        />
        <div class="text-3xl rotate-[5deg]">Pinia Tasks</div>
      </div>
      <div class="">
        <TaskForm />
      </div>

      <nav class="flex justify-between gap-3">
        <UseButton label="All Tasks" :class="isActive('all')" @click="filter = 'all'" />
        <UseButton label="Favorite Tasks" :class="isActive('favs')" @click="filter = 'favs'" />
      </nav>

      <div class="" v-if="taskStore.loading">Loading tasks...</div>

      <div
        class="flex flex-col h-[270px] gap-3 overflow-y-auto hide-scrollbar"
        v-if="filter === 'all'"
      >
        <div class="sticky top-0 bg-[#181818] z-[1000] py-1">
          All tasks ({{ taskStore.totalCount }})
        </div>
        <div v-for="task in taskStore.tasks" :key="task.id" class="">
          <TaskDetails :task="task" />
        </div>
      </div>
      <div
        class="flex flex-col h-[270px] gap-3 overflow-y-auto hide-scrollbar"
        v-if="filter === 'favs'"
      >
        <div class="sticky top-0 bg-[#181818] z-[1000] py-1">
          Favorite tasks ({{ taskStore.favCount }})
        </div>
        <div v-for="task in taskStore.favs" :key="task.id" class="">
          <TaskDetails :task="task" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}
</style>
