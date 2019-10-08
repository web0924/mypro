<template>
  <div>
      <div class="registered">
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="uname">
            <el-input v-model="ruleForm2.uname" placeholder="请输入要注册的用户名"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm2.pass" auto-complete="off" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="请再次输入密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')">注册</el-button>
            <el-button @click="resetForm('ruleForm2')">重置</el-button>
          </el-form-item>
        </el-form>       
      </div>
  </div>
</template>
<script>
export default {
  // 注入reload；
  inject:['reload'],
  data(){
       var checkName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('用户名不能为空'));
        }else{callback()}
      };
      var validatePass = (rule, value, callback) => {
        // 密码正则
        var passReg=/^.{6,20}$/;
        if (value === '') {
          callback(new Error('请输入密码'));
        }
        // 验证密码是否为6-12位
        if(!passReg.test(value)){
          callback(new Error('请输入6-12位密码'));
        } 
        else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          uname: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          uname: [
            { validator: checkName, trigger: 'blur' }
          ]
        }
      };
  },
  methods:{
     submitForm(formName) {
       var that=this;
       var url="registered";
       var u=that.ruleForm2.uname;
       var p=that.ruleForm2.pass;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // console.log(that.ruleForm2)
              // 发送axios
            this.axios.post(url,{uname:u,upwd:p}).then(res=>{
                // 注册成功
                // console.log(res.data)
                if(res.data.code===-3){
                  this.$message({
                  message: '用户名已存在,请重新输入',
                  type: 'warning'
                  });
                  return;
                }
                 if(res.data.code==1){
                  this.$alert('恭喜你，注册成功', 'Message', {
                  confirmButtonText: '去登陆',
                  callback: action => {
                    // 注册成功刷新页面
                    this.reload()
                  }
                });
                }else{
                  this.$message({
                  message: '注册未成功！',
                  type: 'warning'
                  });
                }
            }) 
          }else{
            this.$message({
            message: '请完整输入要注册的用户名或密码',
            type: 'warning'
            });
            // 注册失败清空输入框
            this.$refs[formName].resetFields()
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
  }
}
</script>
<style scoped>
  .registered{
    padding: 10px;
    /* border: 1px solid blue; */
    text-align: center;
    font-size:14px 
  }
</style>