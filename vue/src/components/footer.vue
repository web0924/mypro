<template>
  <footer class="wow bounceInUp">
      <!-- 左 -->
      <div class="fl">
          <div class="hidden-md-and-down">
               <p>Instruments</p>
               <ul>
              <li><img src="../../public/image/AD0I-KrdBhACGAAg1OWR2gUo1uT35wMwZDhk.jpg"></li>
              <li><img src="../../public/image/AD0I-KrdBhACGAAg1OWR2gUo4v2d1gMwZDhk.jpg"></li>
              <li><img src="../../public/image/AD0I-KrdBhACGAAg0eWR2gUorpaKxQMwZDhk.jpg"></li>
              <li><img src="../../public/image/AD0I-KrdBhACGAAg0eWR2gUoiImrwwcwZDhk.jpg"></li>
            </ul>
            <ul>
              <li><img src="../../public/image/AD0I-KrdBhACGAAg0eWR2gUo7_ynxwcwZDhk.jpg"></li>
              <li><img src="../../public/image/AD0I-KrdBhACGAAg0eWR2gUozaOC-wIwZDhk.jpg"></li>
              <li><img src="../../public/image/AD0I-KrdBhACGAAg0_WR2gUouNCZGDBkOGQ.jpg"></li>
              <li><img src="../../public/image/AD0I-KrdBhACGAAg0OWR2gUogsnQ3AcwZDhk.jpg"></li>
            </ul>
          </div>  
      </div>
      <!-- 右 -->
      <div class="fr">
        <p>发表您的留言：</p>
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-form-item label="姓名:" autofocus>
                <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="邮箱:">
                <el-input v-model="formLabelAlign.region"></el-input>
            </el-form-item>
            <el-form-item label="电话:">
                <el-input v-model="formLabelAlign.type"></el-input>
            </el-form-item>
            <el-form-item label="内容">
                <el-input type="textarea" v-model="form.desc"></el-input>
                 <el-button type="danger" @click="submit">提交内容</el-button>
            </el-form-item>
        </el-form>
      </div>
      <!-- 返回顶部 -->  
        <div title="回到顶部">
            <img v-if="btnFlag" class="go-top" src="image/02.png" @click="backTop">
        </div>  
  </footer>
</template>
<script>
export default {
    data(){
        return{
             labelPosition: 'left',
             formLabelAlign: {
            name: '',
            region: '',//邮箱
             type: '',//电话
            },
            form:{desc:""},
            btnFlag:true
        }
    },
    mounted () { 
        window.addEventListener('scroll', this.scrollToTop)
    },
    destroyed () {
        window.removeEventListener('scroll', this.scrollToTop)
    },
    methods: {
       // 用户意见提交
       submit(){
        //    验证内容是否为空
        var uname=this.formLabelAlign.name;
        if(this.form.desc==""){
            this.$notify.error({
                title: '错误',
                message: '请输入您宝贵的意见！'
            });
            return;
        }if(!uname){
            this.$notify.error({
                title: '错误',
                message: '请输入您的姓名'
            });
            return;
        }else{
            // 发送axios
            var email=this.formLabelAlign.region;
            var phone=this.formLabelAlign.type;
            var content=this.form.desc;
            var url="user_message";
            var obj={uname,email,phone,content};
            this.axios.get(url,{params:obj})
            .then(res=>{
                // console.log(res.data)
                this.$notify({
                    title: '提交成功',
                    message: '',
                    type: 'success',
                });
            })
            // 提交成功清除表单数据
            this.formLabelAlign.name=this.formLabelAlign.region=this.formLabelAlign.type=this.form.desc=""
        }
         
       },
  // 点击图片回到顶部方法，加计时器是为了过渡顺滑
        backTop () {
            const that = this
            let timer = setInterval(() => {
                let ispeed = Math.floor(-that.scrollTop / 5)
                document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
                if (that.scrollTop === 0) {
                clearInterval(timer)
                }
            }, 16)
        },
    // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
        scrollToTop () {
            const that = this
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            that.scrollTop = scrollTop
            if (that.scrollTop > 60) {
            that.btnFlag = true
            } else {
            that.btnFlag = false
            }
        }
    }
}
</script>
<style>
footer{
    position: relative;
    height: 600px;
    background:no-repeat url("../../public/image/AD0I-KrdBhACGAAg5oKG5gUoq_mQ_AYwgA848AM.jpg") ;
    background-size:100% 100%;
    display: flex;
    /* border: 2px solid red; */
}
footer p{
    color: aliceblue;
    margin-bottom: 10px;
}
/* 左 */
.fl{
    margin-left: 230px;
    margin-top:140px;
}
.fl div{
    /* border: 1px solid red; */
    width: 472px;
    height: 369px;
}
.fl ul{
    display:flex;
    /* margin-left:50%; */
    padding: 10px
}
.fl ul li{
    margin-right: 20px
}
/* footer右 */
.fr{
    height: 369px;
    width:400px;
    /* border: 1px solid red; */
    margin-left: 130px;
    margin-top:70px;
}
.el-button--danger{
    margin-top: 10px;
}
/* 返回顶部 */
.go-top{
    position: absolute;
    bottom:30px;
    right: 100px;
}
</style>