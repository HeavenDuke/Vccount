<template>

</template>
<script>
    import datepicker from 'vue-date'
    export default {
        props: {
            label: {
                type: String,
                required: true
            },
            placeholder: {
                type: String,
                required: true
            },
            value: {
                type: Date,
                required: true
            }
        },
        components: [ {name: "datepicker"} ]
    }
</script>
<style>

</style>