<template>
<div>
    <nav1></nav1>
    <header>
        <img src="../../public/image/brand_introduction_header.jpg">
    </header>
    <main>
        <side1></side1>
        <div class="mr wow bounceInLeft" >
             <!-- 公司简介 -->
              <h6>公司简介</h6>
              <hr>
            <div>
                <div><img src="../../public/image/AD0I-2.jpg"></div>
                <p v-html="text1"></p>
            </div>
        <!-- 公司理念 -->
            <div>
                <h6>公司理念</h6>
                <hr>
                <p v-html="text2"></p>
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
            text1:"XX科技股份有限公司（股票代码：xxxxxx），成立于1996年1月9日，是国内领<br><br>先的综合型第三方B2B电子商务平台运营商，其开发及运营的中国制造网<br><br>（Made-in-China.com）位列国内B2B电子商务领域前三甲。该平台现已成为<br><br>全球采购商采购中国制造产品的重要渠道.<br><br>XX科技专注服务于全球贸易领域，在帮助中国中小企业应用互联网络开展国际营<br><br>销、产品推广方面拥有超过十年的成功经验。公司积极平衡中国供应商与全球采<br><br>购商，注册免费会员与注册收费会员之间的服务与利益以维持中国制造网电子商<br><br>务平台的持续稳定发展。",
            text2:"始终秉承“用质量打动客户，用质量说服顾客。<br><br>用质量回报顾客，用质量留住顾客”的企业宗旨；诚信为本、百折不挠的企业精神，满怀二十年蕴育，只为一朝破茧。<br><br>设计——拒绝平庸　追求经典<br><br>施工——注重细节　工艺精湛<br><br>服务——顾客至上　为您着想<br><br>品质——品质优异　让您无悔<br><br>"
        }
    },
    mounted(){
       var wow= new WOW({
         boxClass: 'wow',
         animateClass: 'animated',
         offset: "200",
        live:false
        })
        wow.init();
    }
}
</script>
<style scoped>
@import url("../assets/common.css");
    .mr{
        /* border: 1px solid; */
        flex: 1;
        margin-left: 25px;
        color: #666;
        font-size: 15px;
    }
    .mr h6{
        width: 60px;
        height: 30px;
        line-height: 30px;
        color: #f13a3a;
    }
    /* 公司简介容器 */
    .mr>div:nth-child(3){
        display: flex;
    }
    /* 图片容器 */
    .mr>div>div{
        margin-top: 14px;
         margin-bottom: 5px;
         margin-right:5px; 
    }
    /* 图片右侧文字 */
    .mr>div>p:nth-child(2){
        display: flex;
        align-items: center;
        /* color: #666;
        font-size: 15px; */
    }
</style>>

