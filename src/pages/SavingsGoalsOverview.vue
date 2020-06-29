<template>
  <div class="savingsGoalsOverview">
    <b-container>
      <b-row class="py-3">
        <b-col md="3"></b-col>
        <b-col cols="12" md="6" class="text-left">
          <h1>Mijn spaardoelen</h1>
          <p>
            Hieronder staan de spullen waar je voor an het sparen bent. Dit kunnen er zo veel zijn als je maar wilt!
            Klik op de knop hieronder om een nieuw spaardoel toe te voegen.
          </p>
          <router-link to="/nieuw-spaardoel/wat"><b-button variant="outline-info" class="spaardoel-btn mt-3">Spaardoel toevoegen</b-button></router-link>
        </b-col>
        <b-col md="3"></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
  .spaardoel-btn {
    width: 100%;
    height: 150px;
    border: 5px dashed;
  }

</style>
