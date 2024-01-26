<template>
    <div class="container">
        <h1>Contact Us</h1>
        <div v-if="success" class="alert alert-success">
            Messaggio inviato con successo
        </div>
        <form @submit.prevent="submitForm($event)" class="need-validation" :class="{ 'was-validated': !validForm }"
            novalidate>
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" aria-describedby="nameHelp" v-model="name">
                <div class="invalid-feedback" v-for="(error, index) in errors.name" :key="`message-error-${index}`">
                    {{ error }}
                </div>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" v-model="email">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                <div class="invalid-feedback" v-for="(error, index) in errors.name" :key="`message-error-${index}`">
                    {{ error }}
                </div>
            </div>
            <div class="mb-3">
                <label for="address" class="form-label">Address</label>
                <input type="text" class="form-control" id="address" aria-describedby="addressHelp" v-model="address">
                <div id="addressHelp" class="form-text">We'll never share your address with anyone else.</div>
                <div class="invalid-feedback" v-for="(error, index) in errors.name" :key="`message-error-${index}`">
                    {{ error }}
                </div>
            </div>
            <div class="mb-3">
                <label for="message" class="form-label">Write your message</label>
                <textarea type="text" class="form-control" id="message" v-model="message"></textarea>
                <div class="invalid-feedback" v-for="(error, index) in errors.name" :key="`message-error-${index}`">
                    {{ error }}
                </div>
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
            message: '',
            loading: false,
            success: false,
            errors: {},
            validForm: true
        }
    },
    methods: {
        submitForm(e) {
            //console.log(e.target);
            if (!this.validateForm(e.target)) {
                return;
            };
            this.loading = true;
            this.errors = {};
            this.validForm = true;
            const data = {
                name: this.name,
                email: this.email,
                address: this.address,
                message: this.message
            }
            const url = this.store.api + 'contacts';
            axios.post(url, data).then((res) => {
                //console.log(res.data);
                if (res.data.success) {
                    this.success = true;
                    this.name = '';
                    this.email = '';
                    this.address = '';
                    this.message = '';
                    this.errors = {};
                } else {
                    this.errors = res.data.errors;
                    this.validForm = false;
                }
            }).catch((err) => {
                console.log('error', err);
            }).finally(() => {
                this.loading = false;
            })
        },
        validateForm(data) {
            if (!data.checkValidity())
                this.validForm = false;
            Array.from(data.elements).forEach((el) => {
                // console.log(el);
                //console.log(el.validity)
                // console.log(el.validity.valid)
                if (!el.validity.valid) {
                    this.errors[el.id] = ['The field is required'];
                    if (el.validity.typeMismatch) this.errors[el.id].push('The field must be a valid email');
                }
            });
            return this.validForm;
        },
    },
}
</script>

<style lang="scss" scoped></style>