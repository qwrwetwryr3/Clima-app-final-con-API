import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    lugares: [],
    lugarSeleccionado: null,
    loading: false,
    error: null,
    preferencias: { unidad: "metric" } // siempre Celsius
  },
  mutations: {
    setLugares(state, lugares) {
      state.lugares = lugares
    },
    setLugarSeleccionado(state, lugar) {
      state.lugarSeleccionado = lugar
    },
    setLoading(state, val) {
      state.loading = val
    },
    setError(state, err) {
      state.error = err
    }
    // ❌ elimina setUnidad
  },
  actions: {
    async fetchClima({ commit }, ciudad) {
      commit('setLoading', true)
      commit('setError', null)
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${ciudad}&appid=${import.meta.env.VITE_API_KEY}&units=metric`
        )
        commit('setLugarSeleccionado', res.data)
      } catch (err) {
        commit('setError', "No se pudo cargar el clima. Verifica tu conexión o la ciudad ingresada.")
      } finally {
        commit('setLoading', false)
      }
    }
  }
})