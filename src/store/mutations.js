import * as types from './mutation-types'
import axios from 'axios'

export default {
    [types.GET_INDEX_CONTENT] (state, contentList) {
        state.indexResult = contentList;
    },

    [types.SHOW_MORE_INDEX] (state, contentList) {
        state.indexResult = state.indexResult.concat(contentList);
    },

    [types.GET_SIDEBAR_CONTENT] (state, contentList) {
        state.sidebarResult = contentList;
    },

    [types.INIT_INFO] (state) {
        var _self = this;
        axios.get('http://localhost:5000/api/index')
        // axios.get('http://119.29.253.254:8000/api/index')
            .then(function (response) {
                state.indexResult = response.data;
            })
            .catch(function (error) {
                console.log(error);
            })

        axios.get('http://localhost:5000/api/sidebar')
        // axios.get('http://119.29.253.254:8000/api/sidebar')
        .then(function (response) {
            state.sidebarResult = response.data;
        })
        .catch(function (error) {
            console.log(error);
        })
    }
}
