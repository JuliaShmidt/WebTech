<template>
  <div class="page">
    <h1>Интернет-магазин слаймов JSHOP</h1>
    <p>
      Привет! Мы продаем и доставляем самые залипательные и ароматные СЛАЙМЫ JSHOP в Омске и по всей России. Слаймы или жвачка для рук - лучший антистресс. По способности поднимать настроение слайм - почти как глажка кота! Для любителей теории: пять фактов о слаймах.
    </p>
    <div class="row" style="margin-bottom: 50px">
      <div class="col-sm-4" v-for="category in categories">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">{{ category.title }}</h4>
            <nuxt-link :to="{ path: `/categories/${category.alias}`}" class="btn btn-primary">Перейти</nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <h3>JSHOP - это:</h3>
    <ul>
      <li>Крупнейший интернет-магазин самых популярных слаймов в России</li>
      <li>Гарантии качества слаймов по доступным ценам</li>
      <li>Доставка по всей России</li>
    </ul>
  </div>
</template>

<script>
  export default {
    async asyncData ({app}) {
      const {data} = await app.$axios.get('categories')
      return {
        categories: data.categories
      }
    }
  }
</script>
