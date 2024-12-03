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
    async addTask(task) {
      try {
        const response = await axios.post('https://ea177686cdf3dfbf.mokky.dev/itemsPinia', task, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        this.tasks.push(response.data);
      } catch (error) {
        console.error('Failed to add task:', error);
      }
    },
    async deleteTask(id) {
      try {
        await axios.delete(`https://ea177686cdf3dfbf.mokky.dev/itemsPinia/${id}`);
        this.tasks = this.tasks.filter((t) => t.id !== id);
      } catch (error) {
        console.error('Failed to delete task:', error);
      }
    },
    async toggleFav(id) {
      const task = this.tasks.find((t) => t.id === id);
      if (task) {
        task.isFav = !task.isFav;
        try {
          await axios.patch(
            `https://ea177686cdf3dfbf.mokky.dev/itemsPinia/${id}`,
            {
              isFav: task.isFav
            },
            {
              headers: {
                'Content-Type': 'application/json'
              }
            }
          );
        } catch (error) {
          console.error('Failed to toggle favorite status:', error);
        }
      }
    }
  }
});
