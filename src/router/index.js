import { createWebHistory, createRouter } from "vue-router";
import LandingPage from "../components/landing_page.vue";
import Login from "../components/login.vue";
import MainSidebar from "../components/sidebar/main.vue";
import Dashboard from "../components/sidebar/dashboard.vue";

const routes = [
  {
    path: "/",
    component: LandingPage
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/mainsidebar",
    component: MainSidebar,
  },
  {
    path: "/dashboard",
    component: Dashboard
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
