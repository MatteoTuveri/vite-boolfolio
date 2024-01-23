<template>
    <AppHeader/>
    <router-view></router-view>
</template>

<script>
import { store } from './data/store';
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
export default {
  data () {
    return {
      store
    }
  },
  methods: {

  },
  components:{
    AppHeader
  }
}
</script>
<style lang="scss" scoped>
@use './assets/styles/partials/variables.scss' as *;
  h1{
    color:$title-color;
  }
</style>
