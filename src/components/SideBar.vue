<template>
  <div>
    <ul class="collection with-header">
      <li class="collection-header blue-grey-text text-darken-1"><h4>最新比赛</h4></li>
        <a class="collection-item" href="#">港澳台侨学生创新创业…</a>
        <a class="collection-item" href="#">软件测试大赛</a>
        <a class="collection-item" href="#">挑战杯</a>
    </ul>
    <ul class="collection with-header">
      <li class="collection-header blue-grey-text text-darken-1"><h4>热门项目</h4></li>
        <a v-for="result in sidebarResult" v-bind:key="result.id" class="collection-item" href="#">
          <span v-if="result.type === 0">
            <span v-if="result.comp_name.length > 11">
              {{result.comp_name.slice(0, 10)}}…
            </span>
            <span v-else>
              {{result.comp_name}}
            </span>
          </span>
          <span v-else>
            <span v-if="result.theme.length > 11">
              {{result.theme.slice(0, 10)}}…
            </span>
            <span v-else>
              {{result.theme}}
            </span>
          </span>
        </a>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'sidebarContent',
  data() {
    return {
    }
  },
  computed: {
    sidebarResult() {
      if (this.$store.state.sidebarResult.length == 0) {
        var _self = this;
        var rspdata;
        // axios.get('http://localhost:5000/api/sidebar')
        axios.get('http://119.29.253.254:8000/api/sidebar')
          .then(function (response) {
            _self.$store.dispatch('getSidebar', response.data);
            rspdata = response.data;
          })
          .catch(function (error) {
            console.log(error);
          })
        this.$nextTick(function () { });
        return rspdata;
      }
      return this.$store.state.sidebarResult
    }
  }
}
</script>

