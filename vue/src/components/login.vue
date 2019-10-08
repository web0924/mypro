<template>
 <div>
     <!-- 登录 -->
     <div class="login">
         <div class="userName">
             <span>用户名</span>
             <el-input
                placeholder="请输入用户名"
                v-model="uname"
                clearable
                autofocus=true>
            </el-input>
         </div>
         <div class="userUpwd">
             <span>密码</span>
             <el-input 
                placeholder="请输入密码" 
                v-model="upwd" 
                show-password>
            </el-input>
         </div>
         <!-- 分割线 -->
         <hr>
         <!-- 提交按钮 -->
           <el-button type="primary" @click="login">登录</el-button>
     </div>
 </div>
</template>
<script>
export default {
    data(){
        return {
            uname:'',
            upwd:''
        }
    },
    methods:{
        login(){
            // 发送axios
            var uname=this.uname;
            var upwd=this.upwd;
            var url="login";
            this.axios.post(url,{uname,upwd}).then(res=>{
                console.log(res.data)
                var code=res.data.code;
                if(code==-1){
                    this.$message({
                        message: '登陆失败,账号或密码有误',
                        type: 'warning'
                    });
                }else{
                    this.$message({
                        message: '登陆成功',
                        type: 'success'
                    });
                    this.$router.push("/index")
                }
            })
        }
    }
}
</script>
<style scoped>
.login{
    padding: 10px;
    /* border: 1px solid blueviolet; */
    color: #606266;
    text-align: right;
    font-size:14px 
}
.el-input{
    width: 228px;
    margin-left: 15px;
}
.userName,.userUpwd{
    margin:20px 0;
}
/* 登录按钮 */
.el-button{
    width: 100%;
}
</style>