<template>
  <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #16a085">
    <div class="container">
      <nuxt-link to="/" class="navbar-brand">Наркошоп</nuxt-link>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <nuxt-link to="/" class="nav-link">Главная страница</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/catalog" class="nav-link">Каталог</nuxt-link>
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
          <nuxt-link to="/cart" class="nav-link">Корзина</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
