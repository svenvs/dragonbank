<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#"><img src="https://cdn.pixabay.com/photo/2013/07/12/15/05/dragon-149393__340.png" alt="dragon"></b-navbar-brand>

      <!-- Right aligned nav items -->
      <b-navbar-nav v-if="this.$route.path !== '/login'" class="ml-auto flex-row">
        <b-nav-item class="d-flex align-items-center">
          <span vertical-align="center">${{balance}}</span>
        </b-nav-item>
        <b-nav-item class="d-flex align-items-center mx-4">
          <span vertical-align="center">{{name}}</span>
        </b-nav-item>
        <b-nav-item>
          <b-avatar></b-avatar>
        </b-nav-item>
      </b-navbar-nav>
  </b-navbar>
</template>

<script>
import store from '../store';

export default {
  name: 'Header',
  data() {
    return {
      name: store.state.user.name,
      balance: store.state.user.inHandBalance,
    };
  },
};
</script>

<style scoped>
  img {
    height: 48px;
    width:  48px;
  }
</style>
