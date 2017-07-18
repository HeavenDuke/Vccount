<template>
    <div class="page fade">
        <div class="page-content" style="background-color: #0083f5;">
            <h2 class="app-icon text-center">
                <i class="icon ion-person light"></i>
            </h2>
            <h2 class="light text-center">Vccount</h2>

            <h4 class="light login-header text-center">用户登录</h4>
            <div class="padding">
                <von-input type="text"
                           :value.sync="info.key"
                           placeholder="请输入用户名/手机号/邮箱"
                           label="账号"></von-input>
                <von-input type="password"
                           :value.sync="info.password"
                           placeholder="请输入密码"
                           label="密码"></von-input>
                <md-button class="button button-positive button-block" @click="login">登录</md-button>
                <div class="padding">
                    <span>
                        <a class="login-link" href="#/register">注册</a>
                    </span>
                    <span class="pull-right">
                        <a class="login-link" href="#/password/new">忘记密码</a>
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