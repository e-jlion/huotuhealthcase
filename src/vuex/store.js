import Vuex from 'vuex';
import Vue from 'vue';
import * as types from '../vuex/mutation-type'
import * as actions from '../vuex/actions'
import * as getters from '../vuex/getters'

Vue.use(Vuex);

const state = {
  loading: true,
  subLoad:{
    loading:true,
    isShowImage:true,
    message:""
  }
};
const mutations = {
  [types.UPDATE_LOADING](state,loading) {
    setTimeout(function () {
      state.loading=loading
    },2000)
  },
  [types.UPDATE_SUB_LOADING](state,subload){
    state.subLoad.loading=subload.loading;
    state.subLoad.isShowImage=subload.isShowImage;
    state.subLoad.message=subload.message;
  }
}
export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})
