<template>
  <div class="page has-navbar" v-nav="{title: '修改密码', showBackButton: true}">
    <div class="page-content text-center">
      <von-input type="password"
                 :value.sync="password.p_old"
                 placeholder="请输入原始密码"
                 label="原密码"></von-input>
      <von-input type="password"
                 :value.sync="password.p_new"
                 placeholder="请输入新密码"
                 label="新密码"></von-input>
      <von-input type="password"
                 :value.sync="password.p_confirm"
                 placeholder="请再次输入新设置的密码，两次输入应一致"
                 label="确认密码"></von-input>
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
              password: {
                  p_old: "",
                  p_new: "",
                  p_confirm: ""
              }
          }
      }
  }
</script>