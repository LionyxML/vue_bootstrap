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
import Cartao from '@/components/Cartao.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  components: {
    Cartao
  },
  computed: {
    ...mapGetters(["cartoes", "cartoesMostrados", "rows"])
  },
  mounted() {
    this.fetchData();
  },
  data() {
    return {
      currentPage: 1,
      perPage: 3
    }
  },
  methods: {
    async fetchData(){
      try {
        await this.$store.dispatch("pegaCartoes");
      } catch (err) {
        console.log(err);
      }
    },
    paginate(currentPage) {
      this.$store.dispatch("paginate", { currentPage, perPage: this.perPage })
    }
  }
}
</script>
