<template>
  <!-- <div id="app"> -->
    <div>
      <nav>
        <div class="nav-wrapper container">
          <a href="#" class="brand-logo">TeamSeeker</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><router-link to="/">主页</router-link></li>
            <li><router-link to="#">新建项目</router-link></li>
            <li><router-link to="#">个人中心</router-link></li>
          </ul>
        </div>
      </nav>

      <div class="row container" style="margin-top: 20px">
        <div class="col s9">
          <index></index>
        </div>

        <div class="col s3">
          <sidebar></sidebar>
        </div>
      </div>
    </div>
  <!-- </div> -->
</template>

<style>
nav {
  background-color: #546e7a;
}
</style>


<script>
  import Sidebar from './Sidebar.vue'
  import Index from './Index.vue'

  export default {
    components: {
      'sidebar': Sidebar,
      'index': Index
    }
  }
</script>

