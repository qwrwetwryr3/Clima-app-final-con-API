<template>
  <div class="detalle" v-if="lugar">
    <h2>Pronóstico para {{ lugar.city.name }}</h2>

    <div v-if="loading" class="mensaje">Cargando datos del clima...</div>
<div v-if="error" class="error">{{ error }}</div>

    <ul>
      <li v-for="(dia, index) in lugar.list.slice(0, 7)" :key="index">
        <strong>{{ formatDate(dia.dt_txt) }}</strong> -
        {{ dia.weather[0].description }} -
        {{ dia.main.temp }}°{{ unidad === 'metric' ? 'C' : 'F' }}
      </li>
    </ul>

    <h3>Estadísticas semanales</h3>
    <p>Mínimo: {{ estadisticas.min }}°</p>
    <p>Máximo: {{ estadisticas.max }}°</p>
    <p>Promedio: {{ estadisticas.promedio }}°</p>

    <h3>Alerta</h3>
    <p>{{ alerta }}</p>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex"

export default {
  name: "Detalle",
  computed: {
    ...mapState(["lugarSeleccionado", "loading", "error", "preferencias"]),
    lugar() {
      return this.lugarSeleccionado
    },
    unidad() {
      return this.preferencias.unidad
    },
    estadisticas() {
      if (!this.lugar) return { min: 0, max: 0, promedio: 0 }
      const temps = this.lugar.list.map(d => d.main.temp)
      return {
        min: Math.min(...temps),
        max: Math.max(...temps),
        promedio: (temps.reduce((a, b) => a + b, 0) / temps.length).toFixed(1)
      }
    },
    alerta() {
      if (this.estadisticas.max > 30) return "⚠️ Ola de calor"
      if (this.estadisticas.promedio < 10) return "❄️ Semana fría"
      return "Clima estable"
    }
  },
  methods: {
    ...mapActions(["fetchClima"]),
    formatDate(dateStr) {
      const d = new Date(dateStr)
      return d.toLocaleDateString("es-CL", { weekday: "long", day: "numeric", month: "short" })
    }
  },
  mounted() {
    const ciudad = this.$route.params.ciudad
    this.fetchClima(ciudad)
  },
  watch: {
  unidad(newVal, oldVal) {
    if (newVal !== oldVal && this.lugar?.city?.name) {
      this.fetchClima(this.lugar.city.name)
    }
  }
}


}
</script>

<style scoped>

.mensaje {
  color: #555;
  font-style: italic;
}
.error {
  color: red;
  font-weight: bold;
}

.detalle {
  padding: 20px;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  margin: 6px 0;
}
</style>