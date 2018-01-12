<template>
  <div class="page">
    <h1 class="card-title">{{ slime.title }}</h1>
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-sm">
            <img :src="slime.image" :alt="slime.title">
          </div>
          <div class="col-sm">
            <p>Цвет: {{ slime.color }}</p>
            <p>Цена: {{ slime.price }}</p>
            <button class="btn btn-primary" @click="add(slime)">Добавить в корзину</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapMutations} from 'vuex'

  export default {
    async asyncData ({app, params}) {
      const {data} = await app.$axios.get('slimes/get/' + params.slime)
      return {
        slime: data.slime
      }
    },
    methods: {
      ...mapMutations({
        add: 'cart/addItem'
      })
    }
  }
</script>
