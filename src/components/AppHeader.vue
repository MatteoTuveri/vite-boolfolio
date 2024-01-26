<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container">
      <div class="d-flex align-items-center">
        <a class="navbar-brand">Navbar</a>
        <router-link :to="{ name: 'home' }" class="mx-2 nav-link" active-class="active">Home</router-link>
        <router-link :to="{ name: 'projects' }" class="mx-2 nav-link" active-class="active">Projects</router-link>
      </div>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav>

</template>

<script>
export default {
  data() {
    return {
    }
  }
}
</script>
<style lang="scss" scoped></style>
