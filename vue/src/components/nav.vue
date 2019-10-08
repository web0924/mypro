<template>
    <div id="nav1">
        <el-menu
            :default-active="this.$route.path"
            class="el-menu-demo"
            mode="horizontal"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            router 
            >
            <el-menu-item v-for="(item,i) in list" :key="i"  :index="item.name">{{item.title}}</el-menu-item>
        </el-menu>
    </div>
</template>
<script>
export default {
    data(){
        return {
            list:[
            {title:"首页",name:'/index'},
            {title:"品牌介绍",name:'/brand_introduction'},
            {title:"热卖产品",name:'/hot'},
            {title:"新闻动态",name:'/news'},
            {title:"联系我们",name:'/contact'},
            {title:"成为会员",name:'/user'},
            ]
        }
    },
}
</script>
<style  scoped>
    #nav1{
        padding: 0;
        margin: 0;
        width: 550px;
        position: absolute;
        top:60px;
        right: 100px;
        z-index: 1000;
    }
</style>