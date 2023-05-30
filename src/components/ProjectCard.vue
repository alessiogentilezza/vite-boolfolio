<script>
import axios from 'axios';

export default {
  name: 'ProjectCard',
  data() {
    return {
      projects: [],
      baseUrl: 'http://127.0.0.1:8000',
    }
  },
  methods: {
    getProjects() {
      console.log('prova axios');
      axios.get(`${this.baseUrl}/api/projects`
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
          <img :src="`${this.baseUrl}/storage/${project.cover_image}`" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
            <h6 class="card-subtitle mb-3 text-success">Tipo di linguaggio:
              {{ project.type ? project.type.name : '-' }}
            </h6>
            <h5>{{ project.technology?.name }}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
