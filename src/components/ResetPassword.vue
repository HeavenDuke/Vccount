<template>
    <div class="page fade">
        <div class="page-content" style="background-color: #0083f5;">
            <h2 class="app-icon text-center">
                <i class="icon ion-person light"></i>
            </h2>
            <h2 class="light text-center">Vccount</h2>

            <h4 class="light login-header text-center">重置密码</h4>
            <div class="padding">
                <von-input type="text"
                           :value.sync="info.telephone"
                           placeholder="请输入账号使用的手机号"
                           label="手机号"></von-input>
                <!--TODO: 添加Captcha-->
                <!--TODO: 添加发送短信验证码的地址-->
                <von-input v-show="reset_token.length != 0" m type="password"
                           :value.sync="info.password"
                           placeholder="请输入新密码"
                           label="密码"></von-input>
                <von-input v-show="reset_token.length != 0" type="password"
                           :value.sync="info.confirm"
                           placeholder="请再次输入新密码"
                           label="确认密码"></von-input>
                <md-button class="button button-positive button-block" @click="login">重置</md-button>
                <div class="padding text-center">
                    <span class="login-link" @click="this.$router.back('/login')">
                        返回
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                info: {
                    telephone: "",
                    reset_token: "",
                    password: "",
                    confirm: ""
                }
            }
        },
        methods: {
            login() {
                this.$router.go('/stat');
            }
        }
    }
</script>
<style>
    .app-icon {
        padding-top: 30%;
    }

    .login-header {
        margin-top: 25%;
    }

    .pull-right {
        float: right;
    }
    
    .login-link {
        font-size: 16px;
        color: white;
        text-decoration: none;
    }

</style>