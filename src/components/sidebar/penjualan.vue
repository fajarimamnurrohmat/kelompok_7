<template>
  <div class="border border-2 mb-4">
    <p class="text-start py-2 ms-5 fw-bold fs-5 my-auto">Penjualan</p>
  </div>
  <div class="card border border-2">
    <form class="d-none d-md-flex input-group">
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
          <tr>
            <th scope="row">1</th>
            <td>shampo</td>
            <td>5.000</td>
            <td>2</td>
            <td>10.000</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Roti</td>
            <td>3000</td>
            <td>3</td>
            <td>9.000</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Garam</td>
            <td>2.500</td>
            <td>3</td>
            <td>7.500</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Mie Instan</td>
            <td>3.000</td>
            <td>1</td>
            <td>3.000</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Beras 5kg</td>
            <td>76.000</td>
            <td>1</td>
            <td>76.000</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>IceCream</td>
            <td>3.000</td>
            <td>2</td>
            <td>6.000</td>
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
<style>
.border {
  height: 50px;
}
.card {
  height: 500px;
}
</style>
