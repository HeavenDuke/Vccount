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
                           :value.sync="info.email"
                           placeholder="请输入邮箱"
                           label="邮箱"></von-input>
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
                    email: "",
                    password: ""
                }
            }
        },
        methods: {
            login() {
                this.$http.post("users/sessions", {
                    email: this.info.email,
                    password: this.info.password
                }).then(function (response) {
                    if (response.body.code == 200) {
                        localStorage.setItem("access_token", JSON.stringify(response.body.data.session));
                        this.$router.go('/accounting');
                    }
                });
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