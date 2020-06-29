<template>
  <div class="addNewSavingsGoal">
    <b-container>
      <b-row class="py-3">
        <b-col md="3"></b-col>
        <b-col cols="12" md="6" class="text-left">
          <router-view></router-view>
        </b-col>
        <b-col md="3"></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

export default {
  name: 'AddNewSavingsGoal',
  components: {},
};
</script>
