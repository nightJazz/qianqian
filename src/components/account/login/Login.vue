<template>
    <div class='logins'>
        <section>
            <el-form :model="ruleForm2" status-icon :rules="rules2" ref="love" label-width="80px" label-position="top">
                <el-form-item label="账号" prop="user_name">
                    <el-input type="text" v-model="ruleForm2.user_name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="upassword" v-model="ruleForm2.password" auto-complete="off"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="info" round @click="submitForm('love')">登陆</el-button>
                    <el-button type="danger" round @click="resetForm('love')">重置</el-button>
                </el-form-item>
            </el-form>
        </section>
    </div>
</template>

<script>
export default {
  data() {
    //   var validatePass2 = (rule, value, callback) => {
    //     if (value === '') {
    //       callback(new Error('请再次输入密码'));
    //     } else if (value !== this.ruleForm2.pass) {
    //       callback(new Error('两次输入密码不一致!'));
    //     } else {
    //       callback();
    //     }
    //   };
      return {
        ruleForm2: {
          user_name: 'ivanyb',
          password: '',
        },
        rules2: {
          user_name: [{ required: true, message: '请输入账号', trigger: 'blur' }],
          upassword: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        }
      };
    },
    methods: {
        login(){
            //发送post请求
            this.$http.post(this.$api.login,this.ruleForm2).then((res)=>{
                // console.log(res);
                if(res.data.status==0){
                    this.$alert("登录成功",'正在跳转',{
                         callback:()=> {
                              // console.log(123);
                              localStorage.setItem('user_name',res.data.message.user_name);
                              let nextPage = this.$route.query.next ||'goods/list'
                             this.$router.push({path:nextPage})

                        }
                    })
                }else{
                    this.$alert(res.data.message)
                }
            })
        },
        // 登录按钮
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.login();
          } else {
            this.$alert("账号或密码不正确")
          }
        });
      },
      //重置按钮方法
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>

<style scoped lang="less">
.logins {
  height: 100%;
  background-color:#333;
  section {
    width: 400px;
    height: 300px;
    margin: 0 auto;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    border: 5px solid #fff;
  }

}

</style>
