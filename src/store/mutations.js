import * as types from './mutation-types'

export default {
    [types.GET_INDEX_CONTENT] (state, contentList) {
        state.indexResult = contentList;
    },

    [types.SHOW_MORE_INDEX] (state, contentList) {
        state.indexResult = state.indexResult.concat(contentList);
    },

    [types.GET_SIDEBAR_CONTENT] (state, contentList) {
        state.sidebarResult = contentList;
    }
}
