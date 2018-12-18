import {
  fetchService,
  fetchAreasWeServe,
  updateService,
  updateServiceContent,
  updateServiceArea
} from '@/api/service'

const service = {
  namespaced: true,
  state: {
    availabelServiceNames: [
      'landlords',
      'prospective_tenants',
      'current_tenants',
      'areas_we_serve',
      'project_marketing',
      'project_leasing',
      'commercial',
      'sell',
      'careers'
    ],
    currentServiceName: 'landlords',
    servicesData: {},
    areasWeServe: [],
    serviceAreaDetailsDialogVisible: false,
    serviceAreaDetailsData: {},
    editServiceAreaDialogVisible: false,
    editServiceAreaDialogData: {}
  },
  mutations: {
    setAreasWeServe(state, payload) {
      state.areasWeServe = payload
    },
    setAreaWeServe(state, payload) {
      state.areasWeServe = state.areasWeServe.map(item => {
        return item.id !== payload.id ? item : payload
      })
    },
    setServiceData(state, payload) {
      state.servicesData = Object.assign({}, state.servicesData, {
        [payload.name]: payload
      })
    },
    setCurrentServiceName(state, payload) {
      state.currentServiceName = payload
    },
    setServiceAreaDetailsDialogVisible(state, payload) {
      state.serviceAreaDetailsDialogVisible = payload
    },
    setServiceAreaDetailsData(state, payload) {
      state.serviceAreaDetailsData = payload
    },
    setEditServiceAreaDialogVisible(state, payload) {
      state.editServiceAreaDialogVisible = payload
    },
    setEditServiceAreaData(state, payload) {
      state.editServiceAreaDialogData = payload
    }
  },
  actions: {
    async fetchServiceData({ commit, state }, payload) {
      const serviceData = (await fetchService(state.currentServiceName, payload)).data
      commit('setServiceData', serviceData)
      return serviceData
    },
    async fetchAreasWeServe({ commit }, { params = {}} = {}) {
      const areas = (await fetchAreasWeServe(params)).data
      commit('setAreasWeServe', areas.data)
    },
    async updateService({ commit, state }, { service, content }) {
      const currentServiceName = state.currentServiceName
      await updateServiceContent(currentServiceName, content)
      const serviceData = (await updateService(currentServiceName, service, {
        include: 'content'
      })).data
      commit('setServiceData', serviceData)
    },
    async updateServiceArea({ commit }, payload) {
      const area = (await updateServiceArea(payload)).data
      commit('setAreaWeServe', area)
    }
  },
  getters: {
    currentServiceData(state) {
      return state.servicesData[state.currentServiceName]
    }
  }
}

export default service
