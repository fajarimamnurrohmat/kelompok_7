<template>
  <div class="border border-2 mb-4">
    <p class="text-start py-2 ms-5 fw-bold fs-5 my-auto">Tambah Barang</p>
  </div>
  <div class="container_all border border-2">
    <div class="contain product">
      <label for="id_pesanan" class="form-label">Nama Barang</label>
      <input type="string" class="form-control" id="id_pesanan" />
    </div>
    <div class="contain payment">
      <label for="id_harga" class="form-label">Harga Barang</label>
      <input type="string" class="form-control" id="id_harga"/>
    </div>
    <div class="contain row" style="margin-left: 620px">
      <div class="col">
        <button type="button" class="btn btn-secondary">Batal</button>
      </div>
      <div class="col">
        <button type="button" class="btn btn-secondary">Tambah</button>
      </div>
    </div>
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
