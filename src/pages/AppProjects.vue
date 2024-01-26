<template>
    <div>Projects list</div>
    <select name="category" id="category" class="form-control" style="max-width:300px;" v-model="selectedCategory" @change="setParams()">
        <option value="">--Choose category--</option>
        <option :value="category.id" v-for="(category, index) in categories" :key="index">{{ category.name }}
        </option>
    </select>
    <div v-for="(project, index) in projects" :key="index">
        <router-link :to="{ name: 'project', params: { slug: project.slug } }">{{ project.title }}</router-link>
    </div>
    <nav class="d-flex justify-content-center align-items-center my-4">
        <ul class="pagination">
            <li class="page-item" :class="{ 'disabled': currentPage === 1 }">
                <button class="page-link" :disabled="currentPage === 1" @click="setParams(currentPage - 1)">Previous
                </button>
            </li>
            <li class="page-item" v-for="n in lastPage">
                <button class="page-link" @click="setParams(n)">{{ n }}</button>
            </li>
            <li class="page-item" :class="{ 'disabled': currentPage === lastPage }">
                <button class="page-link" :disabled="currentPage === lastPage" @click="setParams(currentPage + 1)">Next
                </button>
            </li>
        </ul>
    </nav>
</template>

<script>
import axios from "axios";
import { store } from '@/data/store';
export default {
    name: 'AppProjects',
    data() {
        return {
            store,
            projects: [],
            currentPage: 1,
            lastPage: null,
            total: 0,
            selectedCategory: '',
            categories:[]
        }
    },
    methods: {
        setParams(pageNum = 1) {
            const params = new URLSearchParams();
            params.append('page', pageNum);
            if (this.selectedCategory) { 
                params.append('category', this.selectedCategory);
            }
            this.getApi(params);
        },
        getApi(params) {
            axios.get(this.store.api + 'projects', { params }).then((res) => {
                console.log(res.data.projects)
                this.projects = res.data.projects.data;
                this.currentPage = res.data.projects.current_page;
                this.lastPage = res.data.projects.last_page;
                this.total = res.data.projects.total;
            }).catch((err) => {
                console.log('error', err);
            })
        },
        getAllCategories() {
            axios.get(this.store.api +'categories').then((res) => {
                this.categories = res.data.categories;
            }).catch((err) => {
                console.log('error', err);
            })
        }
    },
    mounted() {
        this.getAllCategories();
        this.setParams();
    },
}
</script>
<style lang="scss" scoped></style>
