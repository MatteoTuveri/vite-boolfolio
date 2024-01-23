
import { pushScopeId } from 'vue';

<template>
    <div>Projects list</div>
    <div v-for="(project, index) in projects" :key="index">
        <router-link :to="{ name:'project', params: { slug:project.slug }}">{{ project.title }}</router-link>
    </div>
    
</template>

<script>
import axios from "axios";
import { store } from '@/data/store';
export default {
    name: 'AppProjects',
    data () {
        return {
            store,
            projects:[]
        }
    },
    methods: {
        getApi(){
      axios.get(this.store.api + 'projects').then((res)=>{
        console.log(res.data.projects)
        this.projects = res.data.projects;
        console.log(this.projects)
      })
    }
    },
    mounted() {
        this.getApi();
    },
}
</script>
<style lang="scss" scoped>

</style>
