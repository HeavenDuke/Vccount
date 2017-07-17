<template>
    <div class="page has-navbar has-tabbar" v-nav="{title: '个人中心', showBackButton: false}"  v-tabbar-menu-index="2">
        <div class="page-content padding-top">
            <list>
                <!--TODO: 个人信息摘要-->
                <item><h1>233</h1></item>
            </list>
            <list v-for="menus in menuGroup">
                <item v-for="menu in menus" class="item-icon-right" @click.native="this.$router.go(menu.link)">
                    <div class="hairline-top"></div>
                    <div class="hairline-bottom">
                        {{menu.text}}
                    </div>
                    <i class="icon ion-ios-arrow-right"></i>
                </item>
            </list>
            <div class="list-action">
                <md-button class="button button-assertive button-block">登出</md-button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                menuGroup: [[{
                    text: "个人信息管理",
                    link: "/user/edit"
                }, {
                    text: "修改密码",
                    link: "/password/edit"
                }], [{
                    text: "应用信息",
                    link: "/about"
                }]]
            }
        }
    }
</script>
<style>
    .list-action {
        margin-left: 10px;
        margin-right: 10px;
    }
</style>