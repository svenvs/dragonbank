<template>
  <div id="BuyWhat">
    <router-link to="/">Terug naar overzicht</router-link>
    <h1>Wat wil je kopen?</h1>
    <p>Laten we vooraan beginnen. Wat wil je eigenlijk kopen van je zakgeld? Vul het hieronder test
    in!</p>
    <b-form class="py-4">
      <b-form-input id="goal" v-model="form.goal" type="text" placeholder="Mijn Spaardoel"
                    required @click="form.goal = 'Lego Harry Potter kasteel'"
      ></b-form-input>
    </b-form>
    <router-link to="/nieuw-spaardoel/hoe-duur"><b-button>Volgende</b-button></router-link>
  </div>
</template>

<script>
export default {
  name: 'BuyWhat',
  data() {
    return {
      form: {
        goal: '',
      },
    };
  },
};
</script>
