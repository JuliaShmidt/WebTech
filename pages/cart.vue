<template>
  <div class="page">
    <h1>Корзина</h1>
    <ul class="list-group" v-if="items.length">
      <li class="list-group-item d-flex justify-content-between align-items-center" v-for="(item, key) in items">
        <span>
          {{ item.title }}
          <small class="text-muted"> – {{ item.price }} руб</small>
        </span>
        <div>
          <button type="button" class="btn btn-secondary btn-sm" @click="remove(key)">Удалить</button>
        </div>
      </li>
    </ul>
    <div class="h3" v-else="">Корзина пуста!</div>
    <div class="text-right mt-5">
      <p class="h3">Итого: {{ totalPrice }} руб.</p>
      <button type="button" class="btn btn-primary btn-lg" @click="order">Заказать</button>
    </div>
  </div>
</template>
<script>
  import {mapMutations, mapGetters} from 'vuex'

  export default {
    methods: {
      order () {
        // todo
      },
      ...mapMutations({
        remove: 'cart/removeItem'
      })
    },
    computed: {
      totalPrice () {
        let price = 0
        this.items.forEach(item => {
          price += item.price
        })
        return price
      },
      ...mapGetters({
        items: 'cart/items'
      })
    }
  }
</script>
