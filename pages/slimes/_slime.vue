<template>
  <div class="page">
    <h1 class="card-title">{{ slime.name }}</h1>
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-sm">
            <img :src="slime.image" :alt="slime.name">
          </div>
          <div class="col-sm">
            <p>Цвет: {{ slime.color }}</p>
            <p>Категория: {{ categories[slime.category].name }}</p>
            <p>Цена: {{ slime.amount }}</p>
            <button class="btn btn-primary" @click="add(slime)">Добавить в корзину</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import slimes from '../../data/slimes.json'
  import categories from '../../data/categories.json'
  import {mapMutations} from 'vuex'

  export default {
    asyncData ({params}) {
      return {
        slime: slimes[params.slime],
        categories
      }
    },
    methods: {
      ...mapMutations({
        add: 'cart/addItem'
      })
    }
  }
</script>
