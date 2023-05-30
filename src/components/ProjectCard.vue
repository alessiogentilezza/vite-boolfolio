<script>
import axios from 'axios';

export default {
  name: 'ProjectCard',
  data() {
    return {
      projects: [],
      baseUrl: 'http://127.0.0.1:8001',
    }
    // console.log(projects)
  },
  methods: {
    getProjects() {
      console.log('prova axios');
      axios.get(`${this.baseUrl}/api/projects`,
      )
        .then(response => {
          console.log(response);
          this.projects = response.data.results.data;
        });
    },
  },
  mounted() {
    this.getProjects();
  }
}



</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-4" v-for="project in projects">
        <div class="card">
          <img v-if="project.cover_image" :src="`${this.baseUrl}/storage/${project.cover_image}`" class="card-img-top">
          <img v-else src="https://cdn.icon-icons.com/icons2/1462/PNG/512/120nophoto_100007.png" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <h5>{{ project.technology?.name }}</h5>
            <a href="#" class="btn btn-primary">Vedi project completo ... </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
