<template>
    <div class="page fade">
        <div class="page-content" style="background-color: #0083f5;">
            <h2 class="app-icon text-center">
                <i class="icon ion-person light"></i>
            </h2>
            <h2 class="light text-center">Vccount</h2>

            <h4 class="light login-header text-center">用户注册</h4>
            <div class="padding">
                <von-input type="text"
                           :value.sync="info.username"
                           placeholder="请设置您的用户名"
                           label="用户名"></von-input>
                <von-input type="text"
                           :value.sync="info.telephone"
                           placeholder="请设置您的手机号"
                           label="手机号"></von-input>
                <von-input type="password"
                           :value.sync="info.password"
                           placeholder="请设置您的密码"
                           label="密码"></von-input>
                <von-input type="password"
                           :value.sync="info.confirm"
                           placeholder="请再次输入您的密码"
                           label="确认密码"></von-input>
                <md-button class="button button-positive button-block" @click.native="register">注册</md-button>
                <div class="padding text-center">
                    <span class="login-link" @click="this.$router.back('/login')">
                        已有账号，前去登录
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
                    key: "",
                    password: ""
                }
            }
        },
        methods: {
            register() {
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
        margin-top: 15%;
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