<template>
  <div class="border border-2 mb-4">
    <p class="text-start py-2 ms-5 fw-bold fs-5 my-auto">Penjualan</p>
  </div>
  <div class="container_all border border-2">
    <form class="d-none d-md-flex input-group p-4">
      <input
        autocomplete="off"
        type="search"
        class="form-control rounded"
        placeholder="cari barang..."
        style="min-width: 225px"
      />
      <span class="input-group-text border-0"
        ><i class="fas fa-search"></i
      ></span>
      <table class="table table-striped mt-4">
        <thead>
          <tr>
            <th scope="col">Kode</th>
            <th scope="col">Nama</th>
            <th scope="col">Harga</th>
            <th scope="col">Jumlah</th>
            <th scope="col">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="barang in listBarang" :key="barang.id">
          <td>{{ barang.id }}</td>
          <td>{{ barang.nama_barang }}</td>
          <td>{{ barang.harga }}</td>
          <td>nantinya di isi jumlah inputan</td>
          <td>nantinya buat sub total</td>
        </tr>
        </tbody>
      </table>
      <div class="row">
        <div class="col" style="margin-right: 450px">
          <p class="fs-3 mr-5 fw-bold">Total</p>
        </div>
        <div class="col">
          <p class="fs-3">111.500,00</p>
        </div>
        <div class="col">
          <button type="button" class="btn btn-secondary">Selesai</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      listBarang: [],
    };
  },
  async mounted() {
    try {
      const response = await axios.get("http://localhost:5000/barang");
      this.listBarang = response.data.data.barang.rows;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
};
</script>
<style>
.border {
  height: 50px;
}
.container_all {
  height: 500px;
}
</style>
