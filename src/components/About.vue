<template>
  <div class="page has-navbar" v-nav="{title: '应用信息', showBackButton: true}">
    <div class="page-content">
        <list>
            <item v-for="(name, value) in AppInfo">
              <div class="hairline-top"></div>
              <div class="hairline-bottom">
                {{name}}
                <span class="item-note">{{value}}</span>
              </div>
            </item>
        </list>
    </div>
  </div>
</template>
<script>
  export default {
      data () {
          return {
              AppInfo: {
                  "应用名称": "Vccount",
                  "作者": "HeavenDuke",
                  "平台": "Android",
                  "版本": "1.2.1",
                  "更新时间": "2016-01-01"
              }
          }
      }
  }
</script>
<style>

</style>