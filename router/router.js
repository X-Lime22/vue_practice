import { createRouter, createWebHistory } from 'vue-router'

import TodoItem from "../src/components/TodoItem.vue";
import TodoList from "../src/components/TodoList.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/notes/id',
      name: 'item',
      component: TodoItem,
      props: true
    },
    {
      path: '/',
      name: 'list',
      component: TodoList,
    },

  ],
})

export default router