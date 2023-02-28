import HomePage from '../components/HomePage.vue';
import FormContents from '../components/FormContents.vue';
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    { name: 'HomePage', path: '/', component: HomePage },
    { name: 'FormContents', path: '/formContents', component: FormContents },
  ]
  
  const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes,
  })
  
export default router;
  