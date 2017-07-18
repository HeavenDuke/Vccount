<template>
    <div class="page has-navbar has-tabbar" v-nav="{title: '账目管理', backButtonText: backButtonText, showBackButton: true, showMenuButton: true, menuButtonText: menuButtonText, onBackButtonClick: showFilter, onMenuButtonClick: addNewItem}" v-tabbar-menu-index="1">
        <scroll class="page-content" :on-refresh="onRefresh" :on-infinite="onInfinite">
            <item v-for="(date, daily_records) in records" class="listed-item">
                <list>
                    <item class="item-divider">{{date}}</item>
                    <item v-for="record in daily_records" @click.native="toRecordDetail(record.id)">
                        <div class="hairline-top"></div>
                        <div class="hairline-bottom">
                            {{record.explanation}}
                            <span class="item-note {{(record.budget > 0) ? 'income' : 'payment'}}">{{record.budget | normalize}}</span>
                        </div>
                    </item>
                </list>
            </item>
            <div v-if="nomore" slot="infinite">没有更多记录</div>
        </scroll>
    </div>
</template>
<script>
    import FilterModal from './Filter.vue'
    export default {
        data () {
            return {
                filter: [],
                modal: undefined,
                nomore: true,
                backButtonText: "<i class='icon ion-navicon'></i> 筛选",
                menuButtonText: "<i class='icon ion-plus'> 新建</i>",
                records: {
                    "2017-01-01": [{
                        id: "1",
                        budget: -10,
                        method: "paypal",
                        explanation: "买可乐",
                        date: new Date("2017-01-01"),
                        location: "America",
                        geometry: [1.23, 3.45]
                    }, {
                        id: "2",
                        budget: -10,
                        method: "wechat",
                        explanation: "午饭",
                        date: new Date("2017-01-01"),
                        location: "America",
                        geometry: [1.23, 3.45]
                    }, {
                        id: "3",
                        budget: -10,
                        method: "wechat",
                        explanation: "晚饭",
                        date: new Date("2017-01-01"),
                        location: "America",
                        geometry: [1.23, 3.45]
                    }, {
                        id: "4",
                        budget: -0.2,
                        method: "wechat",
                        explanation: "单日打卡",
                        date: new Date("2017-01-01"),
                        location: "America",
                        geometry: [1.23, 3.45]
                    }, {
                        id: "5",
                        budget: 6666.66,
                        method: "cash",
                        explanation: "彩票中奖",
                        date: new Date("2017-01-01"),
                        location: "America",
                        geometry: [1.23, 3.45]
                    }],
                    "2017-01-02": [{
                        id: "2333",
                        budget: -99,
                        method: "cache",
                        explanation: "Steam游戏购买",
                        date: new Date("2017-01-02"),
                        location: "America",
                        geometry: [1.23, 3.45]
                    }]
                }
            }
        },
        filters: {
            normalize: (value) => {
                let _normalize = (value) => {
                    let result = "";
                    value = "" + value;
                    if (value.indexOf('.') != -1) {
                        for(let i = value.indexOf('.'); i < value.length; i++) {
                            result += value.charAt(i);
                        }
                        for(let i = 0; i < value.indexOf('.'); i++) {
                            result = value.charAt(value.indexOf('.') - 1 - i) + result;
                            if ((i + 1) % 3 == 0 && i != value.indexOf('.') - 1) {
                                result = "," + result;
                            }
                        }
                    }
                    else {
                        for (let i = 0; i < value.length; i++) {
                            result = value.charAt(value.length - 1 - i) + result;
                            if ((i + 1) % 3 == 0 && i != value.length - 1) {
                                result = "," + result;
                            }
                        }
                    }
                    return result;
                };

                if (value > 0) {
                    return "+" + _normalize(value);
                }
                else if (value < 0) {
                    return "-" + _normalize(-value);
                }
                return "" + _normalize(value);
            }
        },
        methods: {
            addNewItem() {
                this.$router.go('/accounting/new');
            },
            showFilter() {
                $vonicModal.show('filter-modal');
            },
            onRefresh(done) {
                setTimeout(() => {
                    done();
                }, 1500)
            },
            onInfinite(done) {
                setTimeout(() => {
                    this.nomore = true;
                    done();
                }, 1500)
            },
            toRecordDetail: function (id) {
                this.$router.go("/accounting/" + id + "/edit");
            }
        },
        created() {
            let currc = this;
            FilterModal.methods.confirm = function () {
                currc.filter = JSON.parse(JSON.stringify(this.filter));
                FilterModal.data = () => {
                    return {
                        filter: JSON.parse(JSON.stringify(currc.filter)),
                        lastEdit: JSON.parse(JSON.stringify(currc.filter))
                    }
                };
                $vonicModal.hide();
            };
            $vonicModal.fromComponent("filter-modal", FilterModal);
        },
        destroyed() {
            $vonicModal.destroy();
        }
    }
</script>
<style>
    .listed-item {
        padding: 0;
    }

    .income {
        color: red;
    }

    .payment {
        color: #1bb70e;
    }

    .date-indicator {
        padding-bottom: 8px;
    }

</style>