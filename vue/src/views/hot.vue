<template>
  <div>
      <nav1></nav1>
      <header>
        <img src="../../public/image/hot_header.jpg">
      </header>
      <main>
        <side1></side1>
        <div class="main_r wow bounceInLeft">
          <h6>热卖产品</h6>
          <hr>
          <!-- 商品图片 -->
          <div>
            <ul>
            <li v-for="(item,i) in list1" :key="i"><img :src="'http://127.0.0.1:8080/'+item.img"></li>
          </ul>
          <ul>
            <li v-for="(item,i) in list2" :key="i"><img :src="'http://127.0.0.1:8080/'+item.img"></li>
          </ul>
          </div>
        </div>
      </main>
      <footer1></footer1>
  </div>
</template>
<script>
import { WOW } from 'wowjs'
export default {
  data(){
    return {
      list1:[],
      list2:[]
    }
  },
  methods:{
    equipmentPictures(){
      var url="product";
      // 发送axios
      this.axios.get(url).then(res=>{
        // console.log(res.data)
        var row=res.data;
        var row1=row.slice(0,4);
        // console.log(row1);
        var row2=row.slice(4);
        // console.log(row2)
        this.list1=row1;
        this.list2=row2;
        // console.log(this.list2)
      })
    },
  }, 
  created(){
    this.equipmentPictures();
  },
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
    flex: 1;
    margin-left: 20px;
    /* border: 1px solid; */
  }
  .main_r ul{
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
  }
  .main_r h6{
        width: 70px;
        height: 30px;
        line-height: 30px;
        color: #f13a3a;
    }
</style>>
  
