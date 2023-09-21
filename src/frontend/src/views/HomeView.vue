<template>
  <main class="container">
    <h1 class="quote-text">{{ quote.text }}</h1>
    <h3 class="quote-author">- {{ quote.author }}</h3>
    <br/><br/>
  </main>
</template>

<style>
.container {
  display: flex;
  flex-direction: column;
}
.quote-text {
  font-family: "Garamond",serif;
  font-size: 4rem;
  color: white;
}
.quote-author {
  margin-top: 2rem;
  font-size: 2rem;
  color: lightgray;
}
</style>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  data() {
    return {
      quote: {} as Quote
    }
  },
  async beforeMount() {
    this.quote = await this.$api.quote.getRandomQuote();
  }
})

</script>
