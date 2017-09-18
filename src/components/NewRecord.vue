<template>
    <div class="page has-navbar" v-nav="{title: '新增收支记录', showBackButton: true}">
        <div class="page-content">
            <item class="item-divider">基本信息</item>
            <von-input type="text"
                       :value.sync="record.explanation"
                       placeholder="有关收支的描述信息，诸如原因等"
                       label="收支说明"></von-input>
            <number-input :step=0.01
                       :value.sync="record.budget"
                       placeholder="收入或支出的额度"
                       label="额度"></number-input>
            <date-input
                       :value.sync="record.date"
                       placeholder="收支产生的日期"
                       label="日期"></date-input>
            <von-input type="text"
                       :value.sync="record.location"
                       placeholder="收支产生的地点"
                       label="地点"></von-input>
            <!--<div class="side-right2">-->
                <!--<div class="list-pane paging-format">-->
                    <!--<baidu-map style="height:500px"></baidu-map>-->
                <!--</div>-->
            <!--</div>-->
            <item class="item-divider">付款/入账方式</item>
            <von-radio :options="methodOptions" :value.sync="record.methodIndex"></von-radio>
            <div class="padding">
                <md-button class="button button-positive button-block" @click.native="submit">提交</md-button>
            </div>
        </div>
    </div>
</template>
<script>
    import NumberInput from './Input/NumberInput.vue'
    import DateInput from './Input/DateInput.vue'
    import BaiduMap from 'vue-baidu-map'
    export default {
        data() {
            var methodOptions = ["微信支付", "支付宝", "银行卡", "现金"];
            return {
                methodOptions: methodOptions,
                record: {
                    budget: 0,
                    methodIndex: 0,
                    explanation: "",
                    date: "2017-01-01",
                    location: "",
//                    geometry: [1.23, 3.45]
                }
            }
        },
        methods: {
            submit() {
                var access = JSON.parse(localStorage.getItem('access_token'));
                var record = {
                    budget: this.record.budget,
                    date: this.record.date,
                    explanation: this.record.explanation,
                    location: this.record.location,
                    method: this.methodOptions[this.record.methodIndex],
                    access_token: access._id
                };
                this.$http.post("accounts", record).then(function (response) {
                    if (response.body.code == 200) {
                        this.$router.go('/accounting');
                    }
                });
            }
        },
        watch: {
            'record.methodIndex': () => {}
        },
        components: {
            "number-input": NumberInput,
            "date-input": DateInput,
            "baidu-map": BaiduMap
        }
    }
</script>
<style>

</style>