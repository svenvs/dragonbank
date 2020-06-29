<template>
  <div>
    <app-navigation-bar></app-navigation-bar>
    <router-view/>
  </div>
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";

export default {
  components: {
    "app-navigation-bar": NavigationBar
  }
};
</script>
