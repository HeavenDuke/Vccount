<template>
    <div class="page has-navbar has-tabbar" v-nav="{title: '个人中心', showBackButton: false}"  v-tabbar-menu-index="2">
        <div class="page-content padding-top">
            <list>
                <!--TODO: 个人信息摘要-->
                <item>
                    <div class="head-container">
                        <img src="/static/favicon.ico"/>
                    </div>
                    <div class="profile-container">
                        <div class="name">刘瀚诚</div>
                        <div class="meta">18811409948</div>
                    </div>
                    <div class="profile-entry-container">
                        <div class="icon ion-ios-arrow-right entry"> </div>
                    </div>
                </item>
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
            <div class="padding-left padding-right">
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
                    text: "修改密码",
                    link: "/password/edit"
                }], [{
                    text: "应用信息",
                    link: "/about"
                }, {
                    text: "设置",
                    link: "/setting"
                }]]
            }
        }
    }
</script>
<style>

    .head-container {
        height: 50px;
        float: left;
        vertical-align: middle;
        display: inline;
    }

    .head-container img {
        height: 50px;
        width: 50px;
        border: none;
    }

    .profile-container {
        height: 50px;
        float: left;
        vertical-align: middle;
        display: inline;
        margin-left: 5%;
    }

    .profile-entry-container {
        height: 50px;
        float: right;
        display: inline;
        vertical-align: middle;
    }

    .profile-entry-container .entry {
        height: 50px;
        margin-top: 10px;
        font-size: 30px;
        line-height: 30px;
        color: silver;
    }

    .profile-container .name {
        margin-top: 5px;
        font-size: 16px;
        line-height: 20px;
    }

    .profile-container .meta {
        margin-top: 5px;
        font-size: 14px;
        color: silver;
    }

</style>