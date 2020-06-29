<template>
  <div>
    <router-link to="/nieuw-spaardoel/wat">Terug naar vorige stap</router-link>
    <h1>Hoe duur is dat?</h1>
    <p>Wat kost dat wat je wilt kopen? door dit in te vullen, kunnen we kijken hoe lang het duurt voordat je het kunt gaan kopen.</p>
    <b-form class="py-4">
      <b-form-input id="cost" v-model="form.cost" type="number" placeholder="Kosten Spaardoel"
                    required @click="form.cost = '120'"
      ></b-form-input>
    </b-form>
    <router-link to="/nieuw-spaardoel/hoe-sparen"><b-button>Verder</b-button></router-link>
  </div>
</template>

<script>
export default {
  name: 'HowExpensive',
  data() {
    return {
      form: {
        cost: '',
      },
    };
  },
};
</script>
