<template>
  <div class="home">
    <b-container align-h="center">
      <b-row align-v="center">
        <Cartao/>
        <Cartao/>
        <Cartao/>
        <Cartao/>
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
  }
}
</script>
