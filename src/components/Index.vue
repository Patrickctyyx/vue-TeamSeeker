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
              <router-link :to="{ path: 'item', query: { id: result.id }}" style="color: black">{{ result.comp_name }}</router-link>
              <span v-if="result.status=='processing'" class="new badge" data-badge-caption="进行中"></span>
              <span v-else-if="result.status=='pending'" class="new badge blue" data-badge-caption="即将开始"></span>
              <span v-else class="new badge red" data-badge-caption="已结束"></span>
            </h5>
            <h5 v-else class="card-title">
              <router-link :to="{ path: 'item', query: { id: result.id }}" style="color: black">{{ result.theme }}</router-link>
              <span v-if="result.status=='processing'" class="new badge" data-badge-caption="进行中"></span>
              <span v-else-if="result.status=='pending'" class="new badge blue" data-badge-caption="即将开始"></span>
              <span v-else class="new badge red" data-badge-caption="已结束"></span>
            </h5>
            <p class="black-text">
              <i class="fa fa-clock-o" aria-hidden="true"></i> {{ result.last_modified.split(" ")[0] }}&nbsp;&nbsp;&nbsp;
              <i class="fa fa-user" aria-hidden="true"></i> 项目人数：{{ result.current_num }}/{{ result.num }}&nbsp;&nbsp;&nbsp;
              <i class="fa fa-fire" aria-hidden="true"></i> 热度：
                <span v-if="result.apply_count">{{ result.apply_count }} </span>
                <span v-else>{{ result.current_num }} </span>
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
      return this.$store.state.indexResult
    }
  },
  methods: {
    showMore(page) {
      if (this.$store.state.indexResult.length == 0) {
        return this.$store.dispatch('initInfo');
      }
      var _self = this;
      axios.get('http://localhost:5000/api/index', {
      // axios.get('http://119.29.253.254:8000/api/index', {
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
    }
  }
}
</script>
