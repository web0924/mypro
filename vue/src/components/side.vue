<template>
  <div class="aside1 wow bounceInRight">
    <div class="asideT">
      <h3>栏目导航</h3>
      <el-menu
      :default-active="this.$route.path"
      router
      class="el-menu-vertical-demo">
       <el-menu-item v-for="(item,i) in list" :key="i+2"  :index="item.name">{{item.title}}</el-menu-item>
      </el-menu>
    </div>
    <div class="asideB">
      <h3>在线客服</h3>
        <ul>
          <li> 
            <label>
              <!-- 接入qq -->
              <a href="http://wpa.qq.com/msgrd?v=3&uin=1972580211&site=qq&menu=yes" class="block">
                <img  src="../../public/image/pa45.gif"><span >客服一</span>
              </a>
            </label>
            <label>
              <a href="http://wpa.qq.com/msgrd?v=3&uin=1972580211&site=qq&menu=yes" class="block">
                <img  src="../../public/image/pa45.gif"><span >客服二</span>
            </a>
            </label>
          </li>
          <li >
            <h6>
                <img src="../../public/image/serviceOnlineTime1.png" alt=""><strong>工作时间</strong>
            </h6>
            <p>周一至周五 ：8:30-17:30</p>
            <p>周六至周日 ：9:00-17:00</p>
          </li>
          <li>
            <h6>
                <img src="../../public/image/serviceOnlineCall.png" alt=""><strong>联系方式</strong>
            </h6>
            <p>客服热线:000-000-0000</p>
            <p>邮箱：xxx@.com</p>
      </li>
  </ul>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
       list:[
            {title:"品牌介绍",name:'/brand_introduction'},
            {title:"热卖产品",name:'/hot'},
            {title:"新闻动态",name:'/news'},
            {title:"联系我们",name:'/contact'},
        ]
    }
  }
}
</script>
<style scoped>
  .asideT,.asideB{
    width: 210px;
  }
  .asideB{
     border-right:solid 1px #e6e6e6; 
  }
  /* h3标题 */
  .aside1 h3{
    width: 210px;
    height: 45px;
    background: #f13a3a;
    text-align: center;
    line-height: 45px;
    color: aliceblue
  }
   .asideB ul{
    font-size: 14px;
    color: #666;
  }
  .asideB li{
    padding:7px 20px;
  }
  /* a标签设置为block */
  .block{
    display: block;
    height: 24px;
    text-decoration:none;
  }
   .asideB li span{
      color: #666;
      position: absolute;
      margin: 5px;
   }
   .asideB li h6{
     font-size: 15px;
     color: #000;
   }
</style>