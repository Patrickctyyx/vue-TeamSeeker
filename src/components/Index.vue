<template>
  <div>
    <div v-for="result in indexResult" v-bind:key="result.id">
      <div class="card-panel grey lighten-5 z-depth-1">
        <div class="row valign-wrapper" style="margin-bottom: 0px">
          <div v-if="result.type === 0" class="col s2">
            <img src="https://okdkbnczs.qnssl.com/image/wx/comp2.jpeg" alt="" class="circle responsive-img"> 
          </div>
          <div v-else class="col s2">
            <img src="https://okdkbnczs.qnssl.com/image/wx/proj1.jpeg" alt="" class="responsive-img">
          </div>
          <div class="col s10">
            <h5 v-if="result.type === 0" class="card-title">
              {{ result.comp_name }}
              <span v-if="result.status=='processing'" class="new badge" data-badge-caption="进行中"></span>
              <span v-else-if="result.status=='pending'" class="new badge blue" data-badge-caption="即将开始"></span>
              <span v-else class="new badge red" data-badge-caption="已结束"></span>
            </h5>
            <h5 v-else class="card-title">
              {{ result.theme }}
              <span v-if="result.status=='processing'" class="new badge" data-badge-caption="进行中"></span>
              <span v-else-if="result.status=='pending'" class="new badge blue" data-badge-caption="即将开始"></span>
              <span v-else class="new badge red" data-badge-caption="已结束"></span>
            </h5>
            <p class="black-text">
              <i class="fa fa-clock-o" aria-hidden="true"></i> {{ result.last_modified.split(" ")[0] }}&nbsp;&nbsp;&nbsp;
              <i class="fa fa-user" aria-hidden="true"></i> 项目人数：{{ result.current_num }}/{{ result.num }}&nbsp;&nbsp;&nbsp;
              <i class="fa fa-fire" aria-hidden="true"></i> 热度：{{ result.apply_count }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div align="center">
      <a v-on:click="showMore(page)" class="waves-effect waves-light btn">加载更多</a>
    </div>
  </div>
</template>

<style>
.btn {
  background-color: #546e7a;
}
</style>

<script>
import axios from 'axios'

export default {
  name: 'indexContent',
  data() {
    return {
      page: 1
    }
  },
  computed: {
    indexResult() {
      if (this.$store.state.indexResult.length == 0) {
        var _self = this;
        var rspdata;
        // axios.get('http://localhost:5000/api/index')
        axios.get('http://119.29.253.254:8000/api/index')
          .then(function (response) {
            _self.$store.dispatch('getIndex', response.data);
            rspdata = response.data;
          })
          .catch(function (error) {
            console.log(error);
          })
        this.$nextTick(function () { });
        return rspdata;
      }
      return this.$store.state.indexResult
    }
  },
  methods: {
    showMore(page) {
      var _self = this;
      // axios.get('http://localhost:5000/api/index', {
      axios.get('http://119.29.253.254:8000/api/index', {
        params: {
          "page": page + 1
        }
      })
        .then(function (response) {
          _self.page += 1;
          _self.$store.dispatch('showMoreIndex', response.data);
        })
        .catch(function (error) {
          alert('没有更多页面!');
          console.log(error);
        })
      // var qs = require('qs');
      // axios.post('http://119.29.253.254:8000/api/wxlogin', qs.stringify({
      //     js_code: '001U3te40K6KSD1Bpaf40DKAe40U3tel'
      // })
      // )
      //   .then(function (response) {
      //     console.log(response);
      //   })
      //   .catch(function (error) {
      //     console.log('aaa', error);
      //   })
    }
  }
}
</script>
