<template>
  <div class="wrapper">hello</div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        mounted(){
            console.log(this.$api)
            this.$api.Common.getMes({id: 1}).then(res => {
                console.log(res)
            })
        }
    }
</script>

<style scoped>
.wrapper {
	color: #222;
}
</style>
