<template>
  <div>
      <!-- 背景 -->
      <div class="bg">
          <div class="curtain"></div>
      </div>
      <!-- login/registered -->
      <div class="user">
          <h3>健身器材模板</h3>
        <el-button type="primary" @click="Login" >Login</el-button>
        <span class="el-icon-user-solid icon"></span>
        <el-button type="primary" @click="Registered">Registered</el-button>
        <!-- 切换动画 -->
        <transition mode="out-in">
            <component :is="comName"></component>
        </transition>
      </div>
  </div>
</template>
<script>
    import Login from "../components/login"
    import Registered from "../components/registered"
    export default {
        data(){
            return {
                comName:Login
                }
        },
        methods:{
            Login(){
                this.comName=Login
            },
            Registered(){
                this.comName=Registered
            }
        }
        
    }
</script>
<style scoped>
/* 背景 */
    .bg{
        position: relative;
        width: 100%;
        height: 700px;
        border: 1px solid ;
        background: url("../../public/image/background.jpg") ;
        background-size: contain;
        overflow: hidden;
    }
    /* 幕布 */
    .curtain{
        width: 100%;
        height: 100%; 
        position: absolute;  
        background-color: #000;
        opacity: 0.8;
    }
    /* 用户注册登录 */
    .user{
        position: absolute;
        border: 1px solid #409EFF;
        width: 350px;
        height: 365px;
        top: 50%;
        left: 50%;
        margin-left: -200px;
        margin-top:-160px;
        text-align: center;
        /* opacity: 0.8; */
    }
    /* logo */
    .user h3{
        font:31px "方正舒体";
        color: #ffffff;
        margin-bottom: 17px;
        opacity: 0.7;
    }
    .user .icon{
        width: 6%;
    }
    .user .el-button{
     width: 47%;
    } 
    /* 切换动画 */
    .v-enter,
    .v-leave-to {
        opacity: 0;
        transform: translateX(150px)
    }
    .v-enter-active,
    .v-leave-active{
        transition: all 0.5s ease;
    }
</style>