<template>
  <div class="container_all border border-2 p-3">
    <p class="contain text-start py-2 ms-5 fw-bold fs-5 my-auto">
      Detail Pembayaran
    </p>
    <div class="contain row">
      <div class="col">
        <label for="id_pesanan" class="form-label">Kode Pesanan</label>
        <input type="string" class="form-control" id="id_pesanan" />
      </div>
      <div class="col">
        <label for="id_pesanan" class="form-label">Kasir</label>
        <input type="string" class="form-control" id="id_pesanan" />
      </div>
    </div>
    <div class="contain row">
      <div class="col">
        <label for="id_pesanan" class="form-label">Tanggal Transaksi</label>
        <input type="string" class="form-control" id="id_pesanan" />
      </div>
      <div class="col">
        <label for="id_pesanan" class="form-label">Pelanggan</label>
        <input type="string" class="form-control" id="id_pesanan" />
      </div>
    </div>
    <div class="contain transaction">
      <label for="id_pesanan" class="form-label">Transaksi</label>
      <input type="string" class="form-control" id="id_pesanan" />
    </div>
    <div class="contain payment">
      <label for="id_pesanan" class="form-label">Pembayaran</label>
      <input type="string" class="form-control" id="id_pesanan" />
    </div>
    <div class="contain row" style="margin-left: 520px">
      <div class="col">
        <button type="button" class="btn btn-secondary">Batal</button>
      </div>
      <div class="col">
        <button type="button" class="btn btn-secondary">Kembali</button>
      </div>
      <div class="col">
        <button type="button" class="btn btn-secondary">Cetak</button>
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
.contain {
  margin-top: 20px;
}
</style>
