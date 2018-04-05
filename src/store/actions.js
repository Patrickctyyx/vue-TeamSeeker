import * as types from './mutation-types'

export default {
    getIndex({ commit }, contentList) {
        commit(types.GET_INDEX_CONTENT, contentList)
    },

    showMoreIndex({ commit }, contentList) {
        commit(types.SHOW_MORE_INDEX, contentList)
    },

    getSidebar({ commit }, contentList) {
        commit(types.GET_SIDEBAR_CONTENT, contentList)
    },

    getSidebarProject({ commit }, contentList) {
        commit(types.GET_SIDEBAR_CONTENT_PROJECT, contentList)
    },

    initInfo({ commit }) {
        commit(types.INIT_INFO)
    }
}
