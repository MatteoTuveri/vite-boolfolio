<template>
    <div>{{ project.title }}</div>
</template>

<script>
import { store } from '@/data/store';
import axios from "axios";
export default {
  data () {
    return {
        store,
        project : []
    }
  },
  methods: {
        getApiproject(){
      axios.get(this.store.api + 'projects/'+ this.$route.params.slug).then((res)=>{
        console.log(res.data.project)
        if (res.data.project) {
            this.project = res.data.project
        }
        else{
            this.$route.push({name:'not-found'})
        } 
      })
    }
    },
    mounted() {
        this.getApiproject();
    },
}
</script>
<style lang="scss" scoped>

</style>
