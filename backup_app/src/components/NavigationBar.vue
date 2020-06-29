<template>
  <div>
    <v-toolbar dark class="navbar">
      <v-toolbar-title>Dragon bank</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text router-link to="/">Home</v-btn>
        <v-btn text router-link to="/page1">Page 1</v-btn>
        <v-btn text router-link to="/page2">Page 2</v-btn>
        <v-btn text router-link to="/page3">Page 3</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "NavigationBar"
};
</script>

<style>
.navbar {
  font-family: "Roboto", "Helvetica Neue", Arial, sans-serif;
}
</style>

