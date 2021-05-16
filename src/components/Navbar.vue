<template>
  <div class="mb-3">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">VueBootstrap</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/">Home</b-nav-item>
          <b-nav-item href="/about">About</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form @submit.prevent="search">
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search" v-model="searchText"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>

  export default {
    methods: {
      search() {
        this.$store.dispatch("search", { text : this.searchText });
      }
    },
    data() {
      return {
        searchText: ''
      }
    }
  }
</script>

<style scoped>

</style>
