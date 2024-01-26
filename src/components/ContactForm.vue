<template>
    <div class="container">
        <h1>Contact Us</h1>
        <form @submit.prevent="submitForm">
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" aria-describedby="nameHelp" v-model="name">
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" v-model="email">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="address" class="form-label">Address</label>
                <input type="text" class="form-control" id="address" aria-describedby="addressHelp" v-model="address">
                <div id="addressHelp" class="form-text">We'll never share your address with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="message" class="form-label">Write your message</label>
                <textarea type="text" class="form-control" id="message" v-model="message"></textarea>
            </div>
            <button type="submit" class="btn btn-primary me-3">Submit</button>
            <button type="reset" class="btn btn-warning">Reset</button>
        </form>
    </div>
</template>

<script>
import { store } from '@/data/store';
import axios from 'axios';
export default {
    name: 'ContactForm',
    data() {
        return {
            store,
            name: '',
            email: '',
            address: '',
            message: ''
        }
    },
    methods: {
        submitForm() {
            const data = {
                name: this.name,
                email: this.email,
                address: this.address,
                message: this.message
            }
            axios.post(this.store.api + 'contacts/', data).then((res) => {
                console.log(res.data);
                this.name= '';
                this.email= '';
                this.address= '';
                this.message= '';
            }).catch((err)=>{
                console.log('error',err)
            })
        }
    },
}
</script>

<style lang="scss" scoped></style>