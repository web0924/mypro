<template>
    <div>
         <nav1></nav1>
        <header>
            <img src="../../public/image/news_header.jpg">
        </header>
        <main>
            <side1></side1>
            <div class="main_r wow bounceInLeft">
                <h6>新闻动态</h6>
                <hr>
                <div v-for="(item,i) in list" :key="i" class="content">
                    <!-- 日期 -->
                    <div class="date">
                        <div>20</div>
                        <div>2017/06</div>
                    </div>
                    <div class="article">
                        <router-link :to="{path:'/new_details/lid'+parseInt(i+1)}" v-text="item.title"></router-link>
                        <p>{{item.content}}</p>
                    </div>
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
            list:[
                {
                    title:"减肥应当针对性的进行局部减肥",
                    content:"减肥要具有针对性，脸部，上手臂，腹部，腿肚子以及背部等的身体部位，对于女性来说，是担心发胖的部位。不过要防止这些部..."
                },
                {
                    title:"身体偏瘦的人如何增加胸肌",
                    content:"在力动网上看到大部分人说想要锻炼成壮实的身材,可是胸部比较薄要如何锻炼结实呢?不用说这肯定是许多想要把身体锻炼强壮..."
                },
                {
                    title:"杠铃挺举练习动作要领",
                    content:"挺举”——是奥运会举重比赛方式之一。由提铃和上挺两个动作连接组成。但今天小编要讲的则不是举重项目，而是我们在日常健..."
                },
                {
                    title:"减肥应当针对性的进行局部减肥",
                    content:"减肥要具有针对性，脸部，上手臂，腹部，腿肚子以及背部等的身体部位，对于女性来说，是担心发胖的部位。不过要防止这些..."
                }
            ]
        }
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
.main_r h6{
        width: 70px;
        height: 30px;
        line-height: 30px;
        color: #f13a3a;
}
.content{
    display: flex;
    color: #666666;
    padding:20px 0;
}
.content:not(:last-child){
     border-bottom:1px dashed ;
}
/* 日历 */
.date{
    width: 84px;
    height: 84px;
    text-align: center;
    background: rgb(224, 227, 231);
}
.date div:first-child{
    margin: 10px 0;
}
.article{
    padding: 10px;
}
.article a{
    color: #666666;
    text-decoration: none;
    display: block;
    margin-bottom: 5px;
}
.article a:hover{
    color: red;
}
</style>