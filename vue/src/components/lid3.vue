<template>
    <div>
       <div class="new_box">
           <h4>新闻详情</h4>
        <hr>
        <h5>杠铃挺举练习动作要领</h5>
       <p v-html="content"></p>
       </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            content:'挺举”——是奥运会举重比赛方式之一。由提铃和上挺两个动作连接组成。但今天小编要讲的则不是举重项目，而是我们在日常健身锻炼中的挺举动作，借助杠铃挺举可以帮助<br><br>运动员感觉力量通过核心部位由下肢的大肌群传递到上肢的小肌群。<br><br><br><br>挺举动作要领如下：<br><br>1、 如果以颈前负重深蹲开始动作，则将杠铃放在三角肌上，腹部和腰背收紧，后背不宜过分伸展。<br><br>2、下肢关节屈，使身体稍向下沉，模仿颈前负重深蹲的靠前个动作。<br><br>3、 快速伸展髋关节，产生力量帮助将杠铃从肩部举到头顶，也经常称这个动作为访肩部推举。<br><br>4、 缓慢小心地放下杠铃，回到开始位置。'
      }
    }
}
</script>
<style  scoped>
    @import url("../assets/newsdetails.css");
</style>