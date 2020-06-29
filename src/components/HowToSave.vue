<template>
  <div>
    <h1>Hoe wil je sparen voor dit spaardoel?</h1>
    <p>
      Sparen kan op verschillede manieren. Zo kan je bijvoorbeeld eens per maand
      sparen of misschien heb je al wat gespaard. Vul hieronder in hoe je ervoor
      staat en wat je van plan bent.
    </p>
    <b-form class="py-4">
      <b-form-input
        class="mb-4"
        id="deposit"
        v-model="form.deposit"
        type="number"
        placeholder="Mijn inleg"
        required
        @click="form.deposit = '5.00'"
      />

      <p>Hoe vaak wil je dit bedrag inleggen?</p>
      <b-form-radio-group id="frequency" class="pb-4">
        <b-form-radio name="weekly" value="weekly">Wekelijks</b-form-radio>
        <b-form-radio name="monthly" value="monthly">Maandelijks</b-form-radio>
      </b-form-radio-group>

      <p>Hoeveel geld heb je al gespaard?</p>
      <b-form-input
        id="currentlySaved"
        v-model="form.currentlySaved"
        type="number"
        placeholder="Mijn spaargeld"
        required
        @click="form.currentlySaved = '14.00'"
      />
    </b-form>
    <a href="/#/nieuw-spaardoel/hulp"><b-button>Verder</b-button></a>
  </div>
</template>

<script>
export default {
  name: "HowToSave",
  data() {
    return {
      form: {
        deposit: "",
        currentlySaved: "",
      },
    };
  },
};
</script>
