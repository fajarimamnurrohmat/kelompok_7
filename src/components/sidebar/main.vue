<template>
  <!--Main Navigation-->
  <header>
    <!-- Sidebar -->
    <nav
      id="sidebarMenu"
      :class="{ show: sidebarOpen }"
      class="collapse d-lg-block sidebar collapse bg-white"
    >
      <div class="position-sticky">
        <div class="list-group list-group-flush mx-3 mt-5">
          <router-link
            to="/mainsidebar/dashboard"
            class="list-group-item list-group-item-action py-2 ripple"
            aria-current="true"
          >
            <i class="fas fa-tachometer-alt fa-fw me-3"></i
            ><span>Dashboard</span>
          </router-link>
          <router-link
            to="/mainsidebar/penjualan"
            class="list-group-item list-group-item-action py-2 ripple"
            aria-current="true"
          >
            <i class="fas fa-money-bill fa-fw me-3"></i><span>Penjualan</span>
          </router-link>
          <router-link
            to="/mainsidebar/riwayatpenjualan"
            class="list-group-item list-group-item-action py-2 ripple"
            aria-current="true"
          >
            <i class="fas fa-chart-line fa-fw me-3"></i
            ><span>Riwayat Penjualan</span>
          </router-link>
          <router-link
            to="/mainsidebar/laporan"
            class="list-group-item list-group-item-action py-2 ripple"
            aria-current="true"
          >
            <i class="fas fa-chart-bar fa-fw me-3"></i><span>Laporan</span>
          </router-link>

          <router-link
            to="/mainsidebar/tambah"
            class="list-group-item list-group-item-action py-2 ripple"
            aria-current="true"
          >
            <i class="fas fa-chart-bar fa-fw me-3"></i><span>Tambah Barang</span>
          </router-link>
        </div>
      </div>
    </nav>
    <!-- Sidebar -->

    <!-- Navbar -->
    <nav
      id="main-navbar"
      class="navbar navbar-expand-lg navbar-light bg-white fixed-top"
    >
      <!-- Container wrapper -->
      <div class="container-fluid">
        <!-- Toggle button -->
        <button
          class="navbar-toggler"
          type="button"
          @click="toggleSidebar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>

        <!-- Brand -->
        <a class="navbar-brand" href="#">
          <img
            src="../../assets/logo_kasir.png"
            height="25"
            alt="MDB Logo"
            loading="lazy"
          />
        </a>
      </div>
      <!-- Container wrapper -->
    </nav>
    <!-- Navbar -->
  </header>
  <!--Main Navigation-->

  <!--Main layout-->
  <main :style="{ marginTop: sidebarOpen ? '58px' : '0' }">
    <div class="container pt-4">
      <router-view></router-view>
    </div>
  </main>
  <!--Main layout-->
</template>

<script>
import { RouterView } from "vue-router";

export default {
  data() {
    return {
      sidebarOpen: true,
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
  },
};
</script>

<style>
body {
  background-color: #fbfbfb;
}
@media (min-width: 991.98px) {
  main {
    padding-left: 240px;
  }
}
</style>
