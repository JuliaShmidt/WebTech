<template>
  <div class="page">
    <h1>{{ category.name }}</h1>
    <div class="row">
      <div class="col-sm" v-for="slime in slimes">
        <div class="card" style="margin-bottom: 30px">
          <div>
            <img :src="slime.image" :alt="slime.name">
          </div>
          <div class="card-body">
            <h4 class="card-title">{{ slime.name }}</h4>
            <nuxt-link :to="{ path: `/slimes/${slime.alias}`}" class="btn btn-primary">Перейти</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import categories from '../../data/categories.json'
  import slimes from '../../data/slimes.json'

  export default {
    asyncData ({params}) {
      return {
        category: categories[params.category],
        slimes
      }
    }
  }
</script>
