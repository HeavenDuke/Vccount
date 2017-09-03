<template>
    <div class="von-input-wrapper" :class="{'has-floating-label': floatingLabel == 'true'}">
        <label class="item item-input thin-border von-input" :class="{'item-floating-label': floatingLabel == 'true'}">
            <span v-if="label != ''" class="input-label" :class="{'has-input': floatingLabel == 'true' && !!value}">{{label}}</span>
            <input min="{{min}}" max="{{max}}" step="{{step}}" type="number" placeholder="{{ placeholder }}" v-model="value">
        </label>

        <span class="input-clear" :class="{'active': showClearButton}" @click="clear()"></span>
    </div>
</template>
<script>
    export default {
        props: {
            label: {
                type: String,
                default: ""
            },
            min: {
                type: Number
            },
            max: {
                type: Number
            },
            step: {
                type: Number,
                default: 1
            },
            value: {
                type: [Number, String],
                required: true
            },
            placeholder: {
                type: String,
                default: ''
            },

            floatingLabel: {
                type: String,
                default: 'false'
            }
        },
        data() {
            return {
                showClearButton: (("" + this.value).length != 0)
            }
        },
        methods: {
            clear() {
                this.value = "";
                this.showClearButton = false;
            }
        },
        watch: {
            value: function () {
                if (!this.value instanceof Number) {
                    this.value = parseInt(this.value);
                }
                this.showClearButton = (("" + this.value).length != 0);
            }
        }
    }
</script>
<style lang="scss" scoped>
    .von-input-wrapper {
        position: relative;

    &.has-floating-label {
    .input-clear {
        top: 14px + 28px;
    }
    }

    .von-input {
        height: 50px;
        padding: 13px 15px;
        position: relative;

    .input-label {
        font-size: 14px;
        line-height: 20px;
    }

    input {
        font-size: 14px;
    }

    }

    .input-clear {
        position: absolute;
        top: 14px;
        right: 9px;
        z-index: 3;

        width: 24px;
        height: 24px;
        background-image: url(../../assets/clear@3x.png);
        background-size: 12px 12px;
        background-repeat: no-repeat;
        background-position: 5px 5px;

        visibility: hidden;
    &.active {
         visibility: visible;
     }
    }

    .item-floating-label {
        height: 75px;
        background: #FFF;
    .input-label {
        padding-top: 2px;
        font-size: 16px;
        line-height: 20px;
        font-weight: 400;
    }
    }

    }
</style>
