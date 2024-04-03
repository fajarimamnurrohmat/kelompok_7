<template>
  <div class="border border-2 mb-4">
    <p class="text-start py-2 ms-5 fw-bold fs-5 my-auto">Riwayat Penjualan</p>
  </div>
  <div class="container_all border border-2">
    <form class="d-none d-md-flex input-group p-4">
      <table class="table table-striped mt-4">
        <thead>
          <tr>
            <th scope="col">Kode</th>
            <th scope="col">Tanggal</th>
            <th scope="col">Total Bayar</th>
            <th scope="col">Jenis Pelanggan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>31-03-2024</td>
            <td>111.500</td>
            <td>Utangan bayar telat</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>31-03-2024</td>
            <td>45.500</td>
            <td>Bayar lunas</td>
          </tr>
        </tbody>
      </table>
    </form>
  </div>
</template>
<style>
.border {
  height: 50px;
}
.container_all {
  height: 500px;
}
</style>
