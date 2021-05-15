<template>
  <div class="home">
    <b-container align-h="center">
      <b-row align-v="center">
        <Cartao v-for="cartao in cartoes" :key="cartao.id" :name="cartao.name">
        </Cartao>
      </b-row>
  </b-container>
  </div>
</template>

<script>
import Cartao from '@/components/Cartao.vue'

export default {
  name: 'Home',
  components: {
    Cartao
  },
  mounted() {
    this.fetchData();
  },
  data() {
    return {
      cartoes: []
    }
  },
  methods: {
    async fetchData(){
      try {
        const res = await fetch("dados.json");
        const val = await res.json();
        this.cartoes = val;
        console.log(val);
      } catch (err) {
        console.log(err);
      }
    }
  }
}
</script>
