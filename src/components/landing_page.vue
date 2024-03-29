<template>
  <div>
    <div class="row">
      <div class="col">
        <div class="name_welcome">Selamat Datang</div>
        <div class="name_brand">Nama Brand</div>
      </div>
    </div>
    <hr class="liner border border-dark border-3 opacity-75 w-75 mx-auto" />
    <div class="row">
      <div class="col">
        <router-link to="/login">
          <div class="card">
            <div class="card-body">
              <div class="kasir p-3">
                <i class="fas fa-cash-register fa-3x mb-2"></i>
                <p class="name_login">Kasir</p>
              </div>
            </div>
          </div>
        </router-link>
      </div>
      <div class="col">
        <router-link to="/login">
          <div class="card">
            <div class="card-body">
              <div class="administrator p-3">
                <i class="fas fa-user-cog fa-3x mb-2"></i>
                <p class="name_login">Administrator</p>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
