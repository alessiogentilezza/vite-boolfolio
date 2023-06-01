<template>
    <div v-if="project">
        <div class="container d-flex flex-wrap p-0">
            <div class="card m-3" style="width: 18rem;">
                <div class="card">
                    <img v-if="project.cover_image" :src="`${this.store.baseUrl}/storage/${project.cover_image}`"
                        class="card-img-top p-3">
                    <img v-else src="/No_Image_Available-8d923bfe.jpg" class="card-img-top p-3" />

                    <div class="card-body">
                        <h5 class="card-title">{{ project.title }}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the
                            card's content.</p>
                        <h6 class="card-subtitle text-success mb-2">Tipo di linguaggio: {{ project.type?.name }}</h6>
                        <h6 class="card-subtitle text-primary mb-1">Tecnology:</h6>
                        <li v-for="tecnology in project.technologies" class="card-subtitle text-primary pb-1">
                            {{ tecnology.name }}
                        </li>
                        <div class="d-flex justify-content-end">
                            <router-link :to="{ name: 'projects' }" class="badge rounded-pill text-bg-danger">
                                <i class="fa-solid fa-arrow-left"></i>
                            </router-link>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <span class="loader m-3"></span>
        <p class="text-secondary ms-3">Loading...</p>
    </div>
</template>


<script>
import axios from 'axios';
import { store } from '../store.js';

export default {
    name: 'SingleProject',
    data() {
        return {
            store,
            project: null
        }
    },
    mounted() {
        const slug = this.$route.params.slug;

        axios.get(`${this.store.baseUrl}/api/project/${slug}`)
            .then(response => {
                console.log(response);
                if (response.data.success == true) {
                    this.project = response.data.project;
                } else {
                    alert(response.data.error);
                    this.$router.push({ name: 'not-found' });
                }

            });

    }
}
</script>