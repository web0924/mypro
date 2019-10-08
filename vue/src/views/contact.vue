<template>
  <div>
      <nav1></nav1>
      <header>
          <img src="../../public/image/contact_header.jpg">
      </header>
      <main>
          <side1></side1>
          <div class="main_r wow bounceInLeft">
              <h6>联系我们</h6>
              <hr>
              <ul>
                  <li>
                      <img src="../../public/image/phone.png" alt="">
                      <p>电话：000-000-0000</p>
                  </li>
                  <li>
                      <img src="../../public/image/gps.png" alt="">
                      <p>XXX省XXX市XXX县XXX路XX号</p>
                  </li>
                  <li>
                      <img src="../../public/image/email.png" alt="">
                      <p>contact@fkadjkhsf.co</p>
                  </li>
              </ul>
                <!-- 百度API -->
                <div class="bMap">
                    <baidu-map :center="center" :zoom="zoom" @ready="handler" style="height:300px" @click="getClickInfo" :scroll-wheel-zoom='true'>
                    </baidu-map>
                </div>
         </div>  
      </main>
      <footer1></footer1>
  </div>
</template>
<script>
import { WOW } from 'wowjs'
export default {
  name: 'TestBaiDu',
  data () {
    return {
      center: {lng: 109.45744048529967, lat: 36.49771311230842},
      zoom: 13
    }
  },
  methods: {
    handler ({BMap, map}) {
      var point = new BMap.Point(113.67178, 34.802546)
      map.centerAndZoom(point, 13)
      var marker = new BMap.Marker(point) // 创建标注
      map.addOverlay(marker) // 将标注添加到地图中
      var circle = new BMap.Circle(point, 6, { strokeColor: 'Red', strokeWeight: 6, strokeOpacity: 1, Color: 'Red', fillColor: '#f03' })
      map.addOverlay(circle)
      var opts = {    
        width : 10,     // 信息窗口宽度    
        height: 30,     // 信息窗口高度    
        title : "硅谷广场"  // 信息窗口标题   
         }
         var infoWindow = new BMap.InfoWindow("", opts);  // 创建信息窗口对象    
        map.openInfoWindow(infoWindow, map.getCenter());      // 打开信息窗口
    },
    getClickInfo (e) {
    //   console.log(e.point.lng)
    //   console.log(e.point.lat)
      this.center.lng = e.point.lng
      this.center.lat = e.point.lat
    }
},
// 周期函数
    mounted(){
       var wow= new WOW({
         boxClass: 'wow',
         animateClass: 'animated',
         offset: 200,
        live:false
        })
        wow.init();
    }
}
</script>
<style scoped>
    @import url("../assets/common.css");
    .main_r{
        /* border: 1px solid ; */
        flex: 1;
        margin-left:30px;
    }
    .main_r h6{
        width: 70px;
        height: 30px;
        line-height: 30px;
        color: #f13a3a;
    }
    .main_r ul{
        display: flex;
        justify-content: space-around;
    }
    /* 地图 */
    .bMap{
        height: 300px;
        margin-top:60px ;
        /* flex: 1; */
    }
</style>