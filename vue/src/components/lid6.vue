<template>
    <div>
       
       <div class="new_box">
           <h4>新闻详情</h4>
        <hr>
        <h5>液压升降机机械设备保养细则</h5>
       <p v-html="content"></p>
       </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            content:'1、减速箱、变速箱、外啮合齿轮等各部分的润滑以及液压油均按润滑表中的要求进行。<br><br2、各机构的制动器应经常进行检查和调整制动瓦和制动轮的间隙，保证灵活可靠。在摩擦面上，不应有污物存在，遇有污物必须用汽油或稀料洗掉。<br><br>3、经常检查液压升降机各部的连接情况，如有松动应予拧紧。机体连接螺栓应在机体受压时检查松紧度，所有连接稍轴都必须有开口销，并需张开充分。<br><br>4、要注意检查各部钢丝绳有无断丝和松股现象。如超过有关规定必须立即换新。钢丝绳的维护保养应严格按GB5144-85规定。<br><br>5、安装、拆卸和调整回转机构时，要注意保证回转机构减速器的中心线与齿轮中心线平行，其啮合面不小于70%，啮合间隙要适合。<br><br>6、经常检查各机构运转是否正常，有无噪音，如发现故障，必须及时排除。<br><br>7、遇到液压升降机电动机有过热现象要及时停车，排除故障后再继续运行，电机轴承润滑要良好。<br><br>8、经常检查所有的电线、电缆有无损伤。要及时的包扎和更换以损伤的部分。<br><br>9、各控制箱、配电箱等经常保持清洁，及时清扫电器设备上的灰尘。<br><br>10、各部分电刷，其接触面要保持清洁，调整电刷压力，使其接触面积不小于50%。<br><br>11、各安全装置的行程开关的触点开闭必须可靠，触点弧坑应及时磨光。'
      }
    }
}
</script>
<style  scoped>
    @import url("../assets/newsdetails.css");
</style>