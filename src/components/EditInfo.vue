<template>
    <div class="page has-navbar" v-nav="{title: '个人信息管理', showBackButton: true}">
        <div class="page-content">
            <item class="item-divider">基本信息</item>
            <von-input type="text"
                       :value.sync="info.username"
                       placeholder="请设置用户名"
                       label="用户名"></von-input>
            <von-input type="tel"
                       :value.sync="info.telephone"
                       placeholder="请输入您使用的手机号"
                       label="手机号"></von-input>
            <von-input type="email"
                       :value.sync="info.email"
                       placeholder="请输入您使用的邮箱"
                       label="邮箱"></von-input>
            <div class="padding">
                <md-button class="button button-positive button-block">提交</md-button>
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
                    telephone: "",
                    email: ""
                }
            }
        }
    }
</script>