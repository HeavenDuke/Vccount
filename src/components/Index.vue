<template>
    <div class="page" v-tabbar="{menus: menus, menuColor: '#B5B5B5', activeMenuColor: '#4A90E2', onMenuClick: menuClicked}">
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        data() {
            return {
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
            menuClicked(menuIndex) {
                console.log(menuIndex);
            },

            beforeDestroy() {
                $tabbar.$emit('hideTabbar')
            }
        }
    }
</script>
<style>

</style>