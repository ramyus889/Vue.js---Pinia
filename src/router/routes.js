import UseHome from '@/component/UseHome.vue';
import UseCountView from '@/CountComponent/countStore/UseCountView.vue';
import UseCountPinia from '@/CountComponent/UseCountPinia.vue';
import UsePinia from '@/TaskComponent/UsePinia.vue';

export const routes = [
  {
    path: `/`,
    component: UseHome
  },
  {
    path: `/Pinia`,
    component: UsePinia
  },
  {
    path: `/CountPinia`,
    component: UseCountPinia
  },
  {
    path: `/CountView`,
    component: UseCountView
  }
];
