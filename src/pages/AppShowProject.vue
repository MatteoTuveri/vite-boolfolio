<template>
  <div class="d-flex justify-content-center">
    <div class="card" style="width: 18rem;">
      <img :src="store.imgPath + project.image" class="card-img-top" style="aspect-ratio: 16/9;" :alt="project.title">
      <div class="card-body">
        <h5 class="card-title">{{ project.title }}</h5>
        <p class="card-text">{{ project.description }}</p>
        <p class="card-text">Category: {{ category }}</p>
        <div>
          <p class="card-text">Technologies: <span v-for="(technology,index) in technologies">{{ technology.name }}</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from '@/data/store';
import axios from "axios";
import router from '@/router';
export default {
  data() {
    return {
      store,
      project:'',
      category:'',
      technologies:[]
    }
  },
  methods: {
    getApiproject() {
      axios.get(this.store.api + 'projects/' + this.$route.params.slug).then((res) => {
        console.log(res.data.project.technologies)
        if (res.data.project) {
          this.project = res.data.project
          this.category = res.data.project.category.name
          res.data.project.technologies.forEach(element => {
            this.technologies.push(element)
          });
        }
        else {
          this.$router.push({ name: 'not-found' })
        }
      })
    }
  },
  mounted() {
    this.getApiproject();
  },
}
</script>
<style lang="scss" scoped></style>
