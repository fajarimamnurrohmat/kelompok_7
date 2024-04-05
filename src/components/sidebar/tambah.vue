<template>
  <div class="border border-2 mb-4">
    <p class="text-start py-2 ms-5 fw-bold fs-5 my-auto">Tambah Barang</p>
  </div>
  <div class="add_barang border border-2">
    <div class="contain product">
      <label for="id_pesanan" class="form-label">Nama Barang</label>
      <input type="string" class="form-control" id="id_pesanan" v-model="Data.nama_barang"/>
    </div>
    <div class="contain payment">
      <label for="id_harga" class="form-label">Harga Barang</label>
      <input type="string" class="form-control" id="id_harga" v-model="Data.harga"/>
    </div>
    <div class="contain row" style="margin-left: 620px">
      <div class="col">
        <button type="button" class="btn btn-secondary">Batal</button>
      </div>
      <div class="col">
        <button type="button" class="btn btn-secondary" @click="saveData">Tambah</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      Data: {
        nama_barang: "",
        harga: ""
      }
    }
  },
  methods: {
    async saveData() {
      try {
        await axios.post('http://localhost:5000/barang', this.Data);
        this.Data.nama_barang = "";
        this.Data.harga = "";
        alert('Data berhasil disimpan.');
      } catch (error) {
        console.error('Error saving data:', error);
        alert('Gagal menyimpan data.');
      }
    }
  }
}
</script>

<style>
.add_barang{
  height: 250px;
}
</style>
