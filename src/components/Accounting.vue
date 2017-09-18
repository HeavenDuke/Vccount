<template>
    <div class="page has-navbar has-tabbar" v-nav="{title: '账目管理', backButtonText: backButtonText, showBackButton: true, showMenuButton: true, menuButtonText: menuButtonText, onBackButtonClick: showFilter, onMenuButtonClick: addNewItem}" v-tabbar-menu-index="1">
        <scroll class="page-content" :on-refresh="onRefresh" :on-infinite="onInfinite">
            <item v-for="(date, daily_records) in records" class="listed-item">
                <list>
                    <item class="item-divider">{{date}}</item>
                    <item v-for="record in daily_records" @click.native="toRecordDetail(record._id)">
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
                nomore: false,
                backButtonText: "<i class='icon ion-navicon'></i> 筛选",
                menuButtonText: "<i class='icon ion-plus'> 新建</i>",
                lastDate: null,
                records: {}
//                records: {
//                    "2017-01-01": [{
//                        id: "1",
//                        budget: -10,
//                        method: "paypal",
//                        explanation: "买可乐",
//                        date: new Date("2017-01-01"),
//                        location: "America"
//                    }, {
//                        id: "2",
//                        budget: -10,
//                        method: "wechat",
//                        explanation: "午饭",
//                        date: new Date("2017-01-01"),
//                        location: "America"
//                    }, {
//                        id: "3",
//                        budget: -10,
//                        method: "wechat",
//                        explanation: "晚饭",
//                        date: new Date("2017-01-01"),
//                        location: "America"
//                    }, {
//                        id: "4",
//                        budget: -0.2,
//                        method: "wechat",
//                        explanation: "单日打卡",
//                        date: new Date("2017-01-01"),
//                        location: "America"
//                    }, {
//                        id: "5",
//                        budget: 6666.66,
//                        method: "cash",
//                        explanation: "彩票中奖",
//                        date: new Date("2017-01-01"),
//                        location: "America"
//                    }],
//                    "2017-01-02": [{
//                        id: "2333",
//                        budget: -99,
//                        method: "cache",
//                        explanation: "Steam游戏购买",
//                        date: new Date("2017-01-02"),
//                        location: "America"
//                    }]
//                }
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
                var app = this;
                app.loadList({date: null}, function () {
                    app.lastDate = null;
                    setTimeout(() => {
                        done();
                    }, 1000);
                });
            },
            onInfinite(done) {
                var app = this;
                app.loadList({date: app.lastDate}, function () {
                    app.nomore = true;
                    setTimeout(() => {
                        done();
                    }, 1000);
                });
            },
            loadList(filter, callback) {
                var access = JSON.parse(localStorage.getItem('access_token'));
                this.$http.get('accounts?access_token=' + access._id + (filter.date ? "&date=" + filter.date : "")).then(function (response) {
                    if (response.body.code == 200) {
                        if (response.body.data.isLast) {
                            this.nomore = true;
                        }
                        else {
                            this.nomore = false;
                        }
                        if (response.body.data.date) {
                            var _records = {};
                            _records[response.body.data.date] = response.body.data.accounts;
                            this.records = Object.assign({}, this.records, _records);
                            var _lastDate = new Date(response.body.data.date);
                            _lastDate.setDate(_lastDate.getDate() - 1);
                            this.lastDate = _lastDate.getFullYear() + "-" + (_lastDate.getMonth() + 1) + "-" + _lastDate.getDate();
                        }
                        else if (response.body.data.accounts) {
                            var keys = Object.keys(response.body.data.accounts);
                            for(var i = 0; i < keys.length; i++) {
                                keys[i] = {
                                    name: keys[i],
                                    value: new Date(keys[i])
                                };
                            }
                            keys.sort(function (dt1, dt2) {
                                if (dt1.value < dt2.value) {
                                    return -1;
                                }
                                else if (dt1.value == dt2.value) {
                                    return 0;
                                }
                                return 1;
                            });
                            var _records = {};
                            for(var i = keys.length - 1; i >= 0; i--) {
                                _records[keys[i].name] = response.body.data.accounts[keys[i].name];
                            }
                            this.records = _records;
                        }
                        if (callback) {
                            callback();
                        }
                    }
                });
            },
            toRecordDetail: function (id) {
                this.$router.go("/accounting/" + id + "/edit");
            }
        },
        created() {
            var currc = this;
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
            this.loadList({});
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