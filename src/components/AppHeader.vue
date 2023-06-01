<template>
  <nav class="navbar navbar-expand-lg" style="background-color: #e3f2fd;">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item" v-for="item in menuItems">
            <router-link :to="{ name: item.routeName }" class="nav-link">{{ item.label }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      menuItems: [
        {
          label: 'Home',
          routeName: 'home'
        },
        {
          label: 'Contatti',
          routeName: 'contact'
        },
        {
          label: 'Progetti',
          routeName: 'projects'
        },
      ]
    }
  }
}
</script>