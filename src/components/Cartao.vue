<template>
  <div>
    <b-col>
      <b-card
        :title="name"
        img-src="https://picsum.photos/200/200"
        img-alt=""
        img-top
        tag="article"
        style="max-width:20rem"
        class="mb-4"
        footer="Rodapé">
        <b-card-text>
          Abc isso aquilo outro isso aquilo outro isso aquilo outro isso aquilo outro isso aquilo outro isso aquilo outro
        </b-card-text>
        <b-button v-b-modal="modalId" variant="primary" v-b-tooltip.hover title="Clique djá!">
          Veja agora!
        </b-button>
        <b-modal :id="modalId" title="Clicou!">
            <p class="my-4">Obrigado por clicar no cartão {{ modalId }}</p>
        </b-modal>

      </b-card>
    </b-col>
  </div>
</template>

<script>
  export default {
    props: ["name", "id"],
    computed: {
      modalId(){
        return 'modal-' + this.id;
      }
    }
  }
</script>

<style scoped>

</style>
