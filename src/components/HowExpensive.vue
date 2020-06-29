<template>
  <div>
    <a href="/#/nieuw-spaardoel/wat">Terug naar vorige stap</a>
    <h1>Hoe duur is dat?</h1>
    <p>Wat kost dat wat je wilt kopen? door dit in te vullen, kunnen we kijken hoe lang het duurt voordat je het kunt gaan kopen.</p>
    <b-form class="py-4">
      <b-form-input id="cost" v-model="form.cost" type="number" placeholder="Kosten Spaardoel"
                    required @click="form.cost = '120'"
      ></b-form-input>
    </b-form>
    <a href="/#/nieuw-spaardoel/hoe-sparen"><b-button>Verder</b-button></a>
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
