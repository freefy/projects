<template>
    <div id="app">
        <!-- <router-view /> -->
        <Navigation></Navigation>
    </div>
</template>

<script>
    import Navigation from '@/components/navigation'
    export default {
        name: 'app',
        components: {Navigation}
    }
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
}
</style>
