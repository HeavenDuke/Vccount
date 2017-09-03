<template>
    <div class="page has-navbar" v-nav="{title: '个人信息管理', showBackButton: true}">
        <div class="page-content">
            <item class="item-divider">基本信息</item>
            <von-input type="text"
                       :value.sync="info.username"
                       placeholder="请设置用户名"
                       label="用户名"></von-input>
            <!--<von-input type="tel"-->
                       <!--:value.sync="info.telephone"-->
                       <!--placeholder="请输入您使用的手机号"-->
                       <!--label="手机号"></von-input>-->
            <von-input type="email"
                       :value.sync="info.email"
                       placeholder="请输入您使用的邮箱"
                       label="邮箱"></von-input>
            <div class="padding">
                <md-button class="button button-positive button-block" @click="update">提交</md-button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                info: {
                    username: "",
                    email: ""
                }
            }
        },
        methods: {
            update() {
                var access = JSON.parse(localStorage.getItem('access_token'));
                this.$http.put("users", {
                    username: this.info.username,
                    email: this.info.email,
                    access_token: access._id
                }).then(function (response) {
                    if (response.body.code == 200) {
                        this.$router.go("/menu");
                    }
                });
            }
        },
        created: function () {
            var access = JSON.parse(localStorage.getItem('access_token'));
            this.$http.get("users?access_token=" + access._id).then(function (response) {
                console.log(response.body.data);
                this.info.username = response.body.data.username;
                this.info.email = response.body.data.email;
            });
        },
        mounted: function () {
            var access = JSON.parse(localStorage.getItem('access_token'));
            this.$http.get("users?access_token=" + access._id).then(function (response) {
                console.log(response.body.data);
                this.info.username = response.body.data.username;
                this.info.email = response.body.data.email;
            });
        }
    }
</script>