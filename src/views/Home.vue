<template>
  <div class="home">
    <b-container align="center">
      <b-row align-v="center">
        <Cartao v-for="cartao in cartoesMostrados" :key="cartao.id" :name="cartao.name">
        </Cartao>
      </b-row>
        <b-pagination align="center"
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          first-text="Primeiro"
          prev-text="Anterior"
          next-text="Próximo"
          last-text="Último"
          class="mt-4"
          @input="paginate(currentPage)"
        ></b-pagination>
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
      cartoes: [],
      cartoesMostrados: [],
      currentPage: 1,
      rows: 1,
      perPage: 3
    }
  },
  methods: {
    async fetchData(){
      try {
        const res = await fetch("dados.json");
        const val = await res.json();
        this.cartoes = val;
        this.cartoesMostrados = val.splice(0, 3);
        this.rows = this.cartoes.length;
        console.log(val);
      } catch (err) {
        console.log(err);
      }
    },
    paginate(currentPage) {
      const start = (currentPage - 1) * this.perPage;
      this.cartoesMostrados = this.cartoes.slice(start, start+3);
    }
  }
}
</script>
