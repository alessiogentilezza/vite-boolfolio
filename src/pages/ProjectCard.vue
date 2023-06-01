<script>
import axios from 'axios';
import { store } from '../store.js';


export default {
  name: 'ProjectCard',
  data() {
    return {
      projects: [],
      store,
      //gestione delle pagine
      currentPage: 1,
      lastPage: null,
      loading: true,


    }
  },
  methods: {
    getProjects(gotoPage) {
      this.loading = true;
      axios.get(`${this.store.baseUrl}/api/projects`, { params: { page: gotoPage } })
        .then(response => {
          console.log(response);
          this.projects = response.data.results.data;
          //gestione delle pagine
          this.currentPage = response.data.results.current_page;
          this.lastPage = response.data.results.last_page;
          this.loading = false;
        });
    },
  },
  mounted() {
    this.getProjects(1);
  }
}
</script>

<template>
  <div v-if="loading == false" class="container d-flex flex-wrap p-0">
    <div v-for="project in projects">
      <div class="card m-3" style="width: 18rem;">
        <div class="card">
          <img v-if="project.cover_image" :src="`${this.store.baseUrl}/storage/${project.cover_image}`"
            class="card-img-top p-3">
          <img v-else src="/No_Image_Available-8d923bfe.jpg" class="card-img-top p-3" />

          <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
            <h6 class="card-subtitle text-success mb-2">Tipo di linguaggio: {{ project.type?.name }}</h6>
            <h6 class="card-subtitle text-primary mb-1">Tecnology:</h6>
            <li v-for="tecnology in project.technologies" class="card-subtitle text-primary pb-1">{{ tecnology.name }}
            </li>

            <router-link :to="{ name: 'single-project', params: { slug: project.slug } }"
              class="badge rounded-pill text-bg-warning text-decoration-none">
              Vedi progetto completo
            </router-link>

          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <span class="loader m-3"></span>
    <p class="text-secondary ms-3">Loading...</p>
  </div>

  <div class="container">
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        
        <li class="page-item">
          <button @click="getProjects(currentPage - 1)" :class="{ 'disabled': currentPage == 1, 'page-link': true }">
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>

        <li class="page-item" v-for="page in lastPage" :class="{ 'active': page == currentPage }">
          <button @click="getProjects(page)" :class="{ 'page-link': true }">
            {{ page }}
          </button>
        </li>

        <li class="page-item">
          <button @click="getProjects(currentPage + 1)"
            :class="{ 'disabled': currentPage == lastPage, 'page-link': true }">
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>

      </ul>
    </nav>

  </div>
</template>

<style></style>
