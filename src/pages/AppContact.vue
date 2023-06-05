<template>
    <h1 class="m-3">Contatti</h1>
    <ContactForm></ContactForm>
        <!-- <img v-for="i in 12" :key="i" src="https://picsum.photos/200/300" class="m-1"> -->
</template>


<script>

import ContactForm from '../components/ContactForm.vue';

export default {
    name: 'AppContact',
    components: {
            ContactForm
        }

}
</script>