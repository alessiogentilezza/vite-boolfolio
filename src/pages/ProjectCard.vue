<script>
import axios from 'axios';
import { store } from '../store.js';


export default {
  name: 'ProjectCard',
  data() {
    return {
      projects: [],
      store,
    }
  },
  methods: {
    getProjects() {
      console.log('prova axios');
      axios.get(`${this.store.baseUrl}/api/projects`
      )
        .then(response => {
          console.log(response);
          this.projects = response.data.results.data;
          console.log(this.projects)

        });
    },
  },
  mounted() {
    this.getProjects();
  }
}



</script>

<template>
  <div class="container d-flex flex-wrap p-0">
    <div v-for="project in projects">
      <div class="card m-3" style="width: 18rem;">
        <div class="card">
          <img v-if="project.cover_image" :src="`${this.store.baseUrl}/storage/${project.cover_image}`"
            class="card-img-top p-3">
          <img v-else src="public/No_Image_Available-8d923bfe.jpg" class="card-img-top p-3" />

          <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
            <h6 class="card-subtitle mb-3 text-success">Tipo di linguaggio: {{ project.type?.name }}</h6>

            <router-link :to="{ name: 'single-project', params: { slug: project.slug } }"
              class="badge rounded-pill text-bg-warning">
              Vedi progetto completo
            </router-link>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
