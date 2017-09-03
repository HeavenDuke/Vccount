<template>
    <div class="page">
        <div class="page-content text-center">
            <h2 class="padding">Welcome</h2>
        </div>
    </div>
</template>
<script>
    export default {
        created: function () {
            var access_token = localStorage.getItem("access_token");
            setTimeout(function () {
                if (access_token) {
                    this.$router.go("/accounting");
                }
                else {
                    this.$router.go("/login");
                }
            }, 3000);
        },
        mounted: function () {
            var access_token = localStorage.getItem("access_token");
            setTimeout(function () {
                if (access_token) {
                    this.$router.go("/accounting");
                }
                else {
                    this.$router.go("/login");
                }
            }, 3000);
        }
    }
</script>
<style>

</style>