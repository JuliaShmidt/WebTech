<template>
  <div class="page">
    <h1>{{ category.title }}</h1>
    <div class="row">
      <div class="col-sm-4" v-for="slime in slimes">
        <div class="card" style="margin-bottom: 30px">
          <div>
            <img :src="slime.image" :alt="slime.title" style="max-width: 100%">
          </div>
          <div class="card-body">
            <h4 class="card-title">{{ slime.title }}</h4>
            <nuxt-link :to="{ path: `/slimes/${slime.id}`}" class="btn btn-primary">Перейти</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    async asyncData ({app, params}) {
      let c = await app.$axios.get('categories/' + params.category)
      let s = await app.$axios.get('slimes/' + c.data.category.id)
      const category = c.data.category
      const slimes = s.data.slimes
      return {
        category,
        slimes
      }
    }
  }
</script>
