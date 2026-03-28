<template>
  <div class="home">
    <h1>App de Clima</h1>
    <p>Selecciona una ciudad para ver el pronóstico:</p>
    <ul>
      <li v-for="ciudad in ciudades" :key="ciudad">
        <router-link :to="`/detalle/${ciudad}`">{{ ciudad }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      ciudades: ["Santiago", "Valparaíso", "Concepción", "Puerto Montt"]
    }
  }
}
</script>

<style scoped>
.home {
  text-align: center;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  margin: 8px 0;
}
</style>