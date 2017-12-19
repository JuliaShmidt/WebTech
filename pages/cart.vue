<template>
  <div class="page">
    <h1>Корзина</h1>

  </div>
</template>
<script>
  import {mapMutations, mapGetters} from 'vuex'

  export default {
    methods: {
      ...mapMutations({
        add: 'cart/addItem'
      })
    },
    computed: {
      ...mapGetters({
        items: 'cart/items'
      })
    }
  }
</script>
