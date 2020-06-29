<template>
  <div class="login">
    <b-row class="justify-content-center m-3">
      <b-col md="6">
        <b-card title="Login">
          <div v-show="loading" class="text-center m-5">
            <b-spinner type="grow" label="Loading..." />
          </div>
          <b-form v-if="show && !loading" autocomplete="off" @submit.stop.prevent="onSubmit">
            <b-form-group id="fg-username" label="Gebruikersnaam" label-for="username" label-align="left">
              <b-form-input id="username" v-model="username" placeholder="Gebruikersnaam" type="text"></b-form-input>
            </b-form-group>
            <b-form-group id="fg-password" label="Wachtwoord" label-for="password" label-align="left">
              <b-form-input id="password" v-model="password" placeholder="Wachtwoord" type="password" required></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Inloggen</b-button>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { loginUser, getUser } from '../localStore';
import store from '../store';

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      show: true,
      loading: false,
    };
  },
  methods: {
    onSubmit() {
      this.loading = true;
      if (loginUser(this.username, this.password)) {
        sessionStorage.loginStatus = 'authenticated';
        sessionStorage.user = JSON.stringify(getUser(this.username));
        this.loading = false;
        store.commit('setLoggedInUser', getUser(this.username));
        this.$router.push('/');
      } else {
        this.loading = false;
      }
    },
  },
};
</script>
