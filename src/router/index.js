import { createWebHistory, createRouter } from "vue-router";
import LandingPage from "../components/landing_page.vue";
import Login from "../components/login.vue";
import MainSidebar from "../components/sidebar/main.vue";
import Dashboard from "../components/sidebar/dashboard.vue";
import Penjualan from "../components/sidebar/penjualan.vue";
import RiwayatPenjualan from "../components/sidebar/riwayatPenjualan.vue";
import Laporan from "../components/sidebar/laporan.vue"

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
    children: [
      {
        path: "dashboard",
        component: Dashboard
      },
      {
        path: "penjualan",
        component: Penjualan
      },
      {
        path: "riwayatpenjualan",
        component: RiwayatPenjualan
      },
      {
        path: "laporan",
        component: Laporan
      }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
