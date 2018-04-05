<template>
  <div>
    <ul class="collection with-header">
      <li class="collection-header blue-grey-text text-darken-1"><h4>最新比赛</h4></li>
        <div v-for="result in sidebarResultProject" v-bind:key="result.id" class="collection-item">
          <router-link :to="{ path: 'item', query: { id: result.id }}" style="color: #26a69a">
            <span v-if="result.theme.length > 11">
              {{result.theme.slice(0, 10)}}…
            </span>
            <span v-else>
              {{result.theme}}
            </span>
          </router-link>
        </div>
    </ul>
    <ul class="collection with-header">
      <li class="collection-header blue-grey-text text-darken-1"><h4>热门项目</h4></li>
        <div v-for="result in sidebarResult" v-bind:key="result.id" class="collection-item">
          <router-link :to="{ path: 'item', query: { id: result.id }}" style="color: #26a69a">
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
          </router-link>
        </div>
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
      return this.$store.state.sidebarResult
    },
    sidebarResultProject() {
      return this.$store.state.sidebarResultProject
    }
  }
}
</script>

