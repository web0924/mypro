<template>
    <div class="block">
        <nav1></nav1>
        <!-- 跑马灯 -->
        <div>
            <el-carousel height="800px">
                <el-carousel-item v-for="(item,i) in text" :key="i">
                    <div class="slogan">
                        <h1 v-html="item.title"></h1>
                        <p>您要的健身器材在这里,您将拥有较好的服务</p>
                         <el-button type="danger" size="medium" @click="toMore">查看更多</el-button>
                    </div> 
                </el-carousel-item>
            </el-carousel>
        </div>
        <!-- 中间主题内容 -->
       <main class="wow bounceInUp">
        <el-row :gutter="10">
            <el-col :xs="1" :sm="1" :md="2" :lg="2" :xl="1">
            </el-col>           
            <el-col :xs="7" :sm="7" :md="6" :lg="6" :xl="7" >
                 <!-- 热销产品 -->
                <h2>热销产品</h2>
                <hr>
                <div class="box box1">
                    <div class="transition hidden-md-only hidden-md-and-down">
                        <img src="image/AD0Inr2BBhACGAAgyLX3wwUowIrT0QQwnwE4pAE.jpg">
                     </div>
                    <div class="transition">
                        <img src="image/AD0Inr2BBhACGAAgyrX3wwUozNyQ2gYwnwE4pAE.jpg">
                    </div>
                </div>
                <div class="box">
                    <div class="transition hidden-md-only hidden-md-and-down"><img src="image/AD0Inr2BBhACGAAgzrX3wwUoiqz_wwMwnwE4pAE.jpg"></div>
                    <div class="transition"><img src="image/AD0Inr2BBhACGAAg0LX3wwUovMXKiAcwnwE4pAE.jpg"></div>
                </div>
            </el-col>
            <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="7" >
                <!-- 新品上市 -->
                <h2>新品上市</h2>
                <hr>
                <div class="box mm"><img src="image/AD0I-600x600.jpg"></div>
            </el-col>
            <el-col :xs="7" :sm="7" :md="6" :lg="6" :xl="7" class="mr">
                     <h2>新品介绍</h2>
                    <hr>
                    <p v-for="(item,i) in list" :key="i+1">
                        <!-- 动态地址-->
                         <router-link :to="{path:'/new_details/lid'+parseInt(i+1)}">{{item.title}}
                             <router-link :to="{path:'/new_details/lid'+parseInt(i+1)}" v-html="item.date"></router-link>
                         </router-link>
                    </p>
            </el-col>
            <el-col :xs="1" :sm="1" :md="2" :lg="2" :xl="1">
            </el-col>
        </el-row>
       </main>
        <!-- 底部 -->
        <footer1 class="wow bounceInUp"></footer1>
     </div>
</template>
<script>
import { WOW } from 'wowjs'
export default {
    data(){
        return {
            text:[
                {title:`LET'S<br>GET<br>MOVING`},
                {title:" THE BEST FITNESS EQUIPMENT IS HERE."}
            ],
            list:[
                {title:"减肥应当针对性的进行局部减肥--",date:"&nbsp;<a>2017-06-20</a>"},
                {title:"身体偏瘦的人如何增加胸肌--",date:"&nbsp;<a>2017-06-20</a>"},
                {title:"杠铃挺举练习动作要领--",date:"&nbsp;<a>2017-06-20</a>"},
                {title:"减肥应当针对性的进行局部减肥--",date:"&nbsp;<a>2017-06-20</a>"},
                {title:"满洲里口岸机械设备出口2014总额达...	--",date:"&nbsp;<a>2017-06-20</a>"},
                {title:"液压升降机机械设备保养细则--",date:"&nbsp;<a>2017-06-20</a>"},
                {title:"智加谈未来工业设计发展趋势--",date:"&nbsp;<a>2017-06-20</a>"},
            ]
        }
    },
    methods:{
        
        // 跑马灯按钮
        toMore(){
            this.$router.push({path:'/brand_introduction'})
        }
    } ,
     mounted(){
       var wow= new WOW({
         boxClass: 'wow',
         animateClass: 'animated',
         offset: 100,
        live:false
        })
        wow.init();
    }
}
</script>
<style  scoped>
    main{
    height:468px;
    margin:100px 0px;
    padding: 0px;
    /* border: 1px solid red; */
    }
    /* header */
    .block{
        position: relative;
    }
    /* 跑马灯 */
  .el-carousel__item:nth-child(2n+1) {
     background:url("../../public/image/AD0I-KrdBhACGAAgkeTm4AUolOK8xgIwgA84oAY.jpg")
     ; 
     background-size:cover 
  }
  
  .el-carousel__item:nth-child(2n) {
     background: url("../../public/image/AD0I-KrdBhACGAAgkeTm4AUolLuQfTCADzigBg.jpg")
     ;
     background-size:cover 
  }
  /* 跑马灯文字 */
  .el-carousel__item h1 {
    color: #ffffff;
    font-size: 70px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
   .el-carousel__item p{
       color: #ffffff;
       margin-bottom: 15px;
   }
  .el-carousel__item .slogan{
    width: 500px;
    height: 400px;
    position: absolute;
    top: 35%;
    left: 50%;
    margin-left:-250px;
    margin-top:-200px;
    text-align: center
  }
  /* 主体内容 */
  /* 块级标题 */
  .el-col h2{
      font-size: 17px;
      color: red;
      margin-left: 10px;
  } 
  /* 过渡图 */
  .transition{
    overflow: hidden;
    width:155px;
	height:155px;
  }
   .transition img:hover{
    transform: scale(1.2);
   }
   .transition img{
    cursor: pointer;
	transition: all 1s;
  }
  .box{
      display: flex;
      justify-content: center;
  } 
  .box div:first-child{
      margin-right: 10px;
  }
  .box1{
      margin-bottom: 10px;
  } 
  /* 主体右 */
     .mr{
      text-align: left;
      overflow: hidden;
    }
  .mr p{
      margin-top: 20px;
      border-bottom: 1px dashed #e5e5e5;
      padding:8px 20px;
  }
.mr p:hover a{
   color:#f00;
}
.mr p a {
    font-size: 14px;
    color: #666666;
    text-decoration:none;
} 
/* 主体中 */
.mm img{
    width: 100%
}
/* 响应式 */
.el-row{
    width: 100%;
}
.el-col {
    border-radius: 4px;
    /* border: 1px solid; */
    height: 100%;
  }
</style>