<template>
    <div>
        <ContactForm />
    </div>
</template>

<script>
import ContactForm from '@/components/ContactForm.vue';
export default {
    data () {
        return {
            name:'AppContact'
        }
    },
    components:{ ContactForm }
}
</script>

<style lang="scss" scoped>

</style>