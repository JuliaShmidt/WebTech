<template>
  <div class="layout">
    <app-header></app-header>
    <div class="container">
      <div class="content">
        <transition name="page">
          <nuxt/>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
  import AppHeader from '../components/Header.vue'

  export default {
    components: {
      AppHeader
    }
  }
</script>
