import * as types from '../vuex/mutation-type'
/**
 * 更新loading
 * @param  {Function} options.dispatch store对象解构出来的函数，无需手动提供
 */
export const updateLoading = ({ commit},loading) => {
    commit(types.UPDATE_LOADING,loading)
}

/**
 * 更新subLoad
 * @param  {Function} options.dispatch store对象解构出来的函数，无需手动提供
 */
export const updateSubLoading=({ commit},subload) => {
  commit(types.UPDATE_SUB_LOADING,subload)
}
