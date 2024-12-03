import axios from 'axios';
import { defineStore } from 'pinia';

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [],
    loading: false
  }),
  getters: {
    favs() {
      return this.tasks.filter((t) => t.isFav);
    },
    favCount() {
      return this.tasks.reduce((p, c) => {
        return c.isFav ? p + 1 : p;
      }, 0);
    },
    totalCount: (state) => {
      return state.tasks.length;
    }
  },
  actions: {
    async fetchTasks() {
      this.loading = true;
      try {
        const response = await axios.get('https://ea177686cdf3dfbf.mokky.dev/itemsPinia');
        this.tasks = response.data;
      } catch (error) {
        console.error('Failed to fetch tasks:', error);
      } finally {
        this.loading = false;
      }
    },
    addTask(task) {
      this.tasks.push(task);
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter((t) => {
        return t.id !== id;
      });
    },
    toggleFav(id) {
      const task = this.tasks.find((t) => t.id === id);
      if (task) {
        task.isFav = !task.isFav;
      }
    }
  }
});
