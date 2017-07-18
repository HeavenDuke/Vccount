<template>
    <div class="page-content padding-top">
        <div class="bar bar-header">
            <button class="button icon ion-ios-arrow-back" @click="cancel()">取消</button>
            <h1 class="title">筛选</h1>
            <button class="button icon ion-navicon" @click="confirm()">筛选</button>
        </div>
        <von-input type="text"
                   :value.sync="filter.location"
                   placeholder="收支产生的地点"
                   label="地点"></von-input>
        <von-input type="text"
                   :value.sync="filter.start_date"
                   placeholder="起始日期"
                   label="起始日期"></von-input>
        <von-input type="text"
                   :value.sync="filter.end_date"
                   placeholder="终止日期，可空"
                   label="终止日期"></von-input>
        <item class="item-divider">收入/支出</item>
        <von-radio :options="filter.typeOptions" :value.sync="filter.typeIndex" style="margin-bottom: 0;"></von-radio>
        <item class="item-divider">支付方式</item>
        <von-checkbox :options="filter.methodOptions" :value.sync="filter.chosenMethods"
                   style="margin-bottom: 0;"></von-checkbox>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                filter: {
                    methodOptions: ["微信支付", "支付宝", "银行卡", "现金"],
                    typeOptions: ["全部", "收入", "支出"],
                    location: "",
                    start_date: "",
                    end_date: "",
                    chosenMethods: [],
                    typeIndex: 0
                },
                lastEdit: {
                    methodOptions: ["微信支付", "支付宝", "银行卡", "现金"],
                    typeOptions: ["全部", "收入", "支出"],
                    location: "",
                    start_date: "",
                    end_date: "",
                    chosenMethods: [],
                    typeIndex: 0
                }
            }
        },
        methods: {
            confirm () {
                $vonicModal.hide();
            },
            cancel () {
                this.filter = JSON.parse(JSON.stringify(this.lastEdit));
                $vonicModal.hide();
            }
        }
    }
</script>
<style>

</style>