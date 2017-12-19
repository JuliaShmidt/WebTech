<template>
  <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #16a085">
    <div class="container">
      <nuxt-link to="/" class="navbar-brand">JSHOP</nuxt-link>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <nuxt-link to="/" class="nav-link">Каталог</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/delivery" class="nav-link">Оплата и доставка</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/contacts" class="nav-link">Контакты</nuxt-link>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item">
          <nuxt-link to="/cart" class="nav-link">
            Корзина
            <span class="badge badge-light">{{ cartItemsCount }}</span>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        cartItemsCount: 'cart/itemsCount'
      })
    }
  }
</script>
