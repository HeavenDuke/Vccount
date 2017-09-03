<template>
    <div class="page has-navbar" v-nav="{title: '修改收支记录', showBackButton: true}">
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
            <von-input type="text"
                       :value.sync="record.date"
                       placeholder="收支产生的日期"
                       label="日期"></von-input>
            <von-input type="text"
                       :value.sync="record.location"
                       placeholder="收支产生的地点"
                       label="地点"></von-input>
            <item class="item-divider">付款/入账方式</item>
            <von-radio :options="methodOptions" :value.sync="record.methodIndex"></von-radio>
            <div class="padding">
                <md-button class="button button-positive button-block">提交</md-button>
            </div>
        </div>
    </div>
</template>
<script>
    import NumberInput from './Input/NumberInput.vue'
    export default {
        data() {
            let methodOptions = ["微信支付", "支付宝", "银行卡", "现金"];
            return {
                methodOptions: methodOptions,
                record: {
                    budget: 0,
                    methodIndex: 0,
                    explanation: "",
                    date: "2017-01-01",
                    location: "",
                    geometry: [1.23, 3.45]
                }
            }
        },
        watch: {
            record: function () {
                console.log(this);
            }
        },
        components: { "number-input": NumberInput }
    }
</script>
<style>

</style>