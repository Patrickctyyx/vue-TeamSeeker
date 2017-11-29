<template>
  <!-- <div id="app"> -->
    <!-- todo：这个页面的配色需要改一下 -->
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
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">

              <!-- 项目标题 -->
              <div class="">
                <div class="card-panel white lighten-5 z-depth-1">
                  <div class="black-text">
                    <h1>挑战杯<span class="new badge" data-badge-caption="进行中"></span></h1>
                    <p class="black-text">
                      <i class="fa fa-clock-o" aria-hidden="true"></i> 2017-11-11&nbsp;&nbsp;&nbsp;
                      <i class="fa fa-user" aria-hidden="true"></i> 项目人数：3 / 5 &nbsp;&nbsp;&nbsp;
                      <i class="fa fa-fire" aria-hidden="true"></i> 热度：66 
                    </p><br>
                  </div>
                </div>
              </div>

              <!-- 关键信息 -->
              <div class="">
                <p>截止日期：2017-12-12</p>
                <p>要求：需要有上进心的组员一起完成项目。</p><br>
              </div>
              
              <div class="">
                <div class="detail_title">项目介绍：</div>
                <p> 挑战杯是“挑战杯”全国大学生系列科技学术竞赛的简称，是由共青团中央、中国科协、教育部和全国学联共同主办的全国性的大学生课外学术实践竞赛，竞赛官方网站为www.tiaozhanbei.net。“挑战杯”竞赛在中国共有两个并列项目，一个是“挑战杯”中国大学生创业计划竞赛，另一个则是“挑战杯”全国大学生课外学术科技作品竞赛。这两个项目的全国竞赛交叉轮流开展，每个项目每两年举办一届。</p><br>
              </div>

              <div class="">
                <!-- 发布者简介 -->
                <div class="detail_title">发布者信息：</div>
                <div class="card-panel white lighten-5 z-depth-1 black-text">
                  <div class="row">
                    <div class="col s2">
                      <img src="https://okdkbnczs.qnssl.com/img/avatar.jpg" alt="" class="circle responsive-img"> 
                    </div>
                    <div class="col s5">
                      <h4>
                        姓名：程天阳
                      </h4>
                      <p>身份：学生</p>
                    </div>
                    <!-- todo: 这里的元素要是居中会显得好一些 -->
                    <div class="col s5">
                      <ul>
                        <li><i class="fa fa-envelope-o" aria-hidden="true"></i> chengtiyanyang@qq.com</li>
                        <li><i class="fa fa-graduation-cap" aria-hidden="true"></i> 信息学院/计算机科学与技术</li>
                      </ul>
                    </div>
                  </div>

                  <div class="">
                    <h5>个人简介</h5>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我是来自信息学院的程天阳。</p>
                  </div> 
                </div>
              </div>      

              <div align="center" class="the_button">
                <router-link to="/" class="waves-effect waves-light btn">申请加入</router-link>
              </div>  

            </div>

            <!-- <div class="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div> -->
          </div>
        </div>

        <div class="col s3">
          <sidebar></sidebar>
        </div>
      </div>
    </div>
  <!-- </div> -->
</template>

<style>
</style>

<style>
nav {
  background-color: #546e7a;
}

.detail_title {
    font-size: 20px;
    color: white;
    padding-left: 12px;
    font-weight: bold;
    border-left: 4px solid white;
    line-height: 20px;
    margin-bottom: 30px;
}

.the_button {
  margin-top: 28px;
}
</style>

<script>
  import Sidebar from './Sidebar.vue'

  export default {
    components: {
      'sidebar': Sidebar
    }
  }

  methods: {
  }
</script>

