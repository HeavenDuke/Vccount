<template>
    <div class="page" v-if="hasAccess" v-tabbar="{menus: menus, menuColor: '#B5B5B5', activeMenuColor: '#4A90E2', onMenuClick: menuClicked}">
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                hasAccess: false,
                menus: [{
                    iconOn: 'ion-pie-graph',
                    iconOff: 'ion-pie-graph',
                    text: "收支统计",
                    path: "/stat"
                }, {
                    iconOn: 'ion-social-usd',
                    iconOff: 'ion-social-usd',
                    text: "账目管理",
                    path: "/accounting"
                }, {
                    iconOn: 'ion-person',
                    iconOff: 'ion-person',
                    text: "个人中心",
                    path: "/menu"
                }]
            }
        },
        methods: {
            verifyAccess() {
                return !!localStorage.getItem('access_token');
            },
            beforeDestroy() {
                $tabbar.$emit('hideTabbar')
            }
        },
        created() {
            if (this.verifyAccess()) {
                var access = JSON.parse(localStorage.getItem('access_token'));
                this.hasAccess = true;
                this.$http.get("users?access_token=" + access._id).then(function (response) {
//                    this.info.username = response.body.data.username;
//                    this.info.email = response.body.data.email;
                });
            }
            else {
                this.hasAccess = false;
                this.$router.go('/login');
            }
        },
        mounted() {
            if (this.verifyAccess()) {
                var access = JSON.parse(localStorage.getItem('access_token'));
                this.hasAccess = true;
                this.$http.get("users?access_token=" + access._id).then(function (response) {
//                    this.info.username = response.body.data.username;
//                    this.info.email = response.body.data.email;
                });
            }
            else {
                this.hasAccess = false;
                this.$router.go('/login');
            }
        }
    }
</script>
<style>

</style>