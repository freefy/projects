<template>
    <div class="navigation-wrapper">
        <div class="navigation-content">
            <div class="navigation-header">
                <div class="title">我的系统</div>
                <el-menu :default-active="activeIndex" class="el-menu-top" mode="horizontal" @select="handleSelect">
                    <el-menu-item index="1">处理中心</el-menu-item>
                    <el-menu-item index="2">我的工作台</el-menu-item>
                    <el-menu-item index="3">消息中心</el-menu-item>
                    <el-menu-item index="4">订单管理</el-menu-item>
                </el-menu>
            </div>
            <div class="navigaton-left">
                <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    @select="clickItem"
                    style="width: 200px;">
                    <!-- <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>Hello</span>
                        </template>
                        <el-menu-item-group>
                            <template slot="title">分组一</template>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="分组2">
                            <el-menu-item index="1-3">选项3</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="1-4">
                            <template slot="title">选项4</template>
                            <el-menu-item index="1-4-1">选项1</el-menu-item>
                        </el-submenu>
                    </el-submenu> -->
                    <el-menu-item v-for="item in routeList" :index="item.name" :key="item.id">
                        <i :class="item.icon"></i>
                        <span slot="title">{{item.name}}</span>
                    </el-menu-item>
                </el-menu>
                <div class="navigaton-container">
                    <router-view />
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeIndex: '1',
                routeList: [{
                    name: 'HelloWorld',
                    icon: 'el-icon-menu',
                    id: 'HelloWorld',
                    children: [],
                    path: '/HelloWorld'
                }, {
                    name: 'HelloWorld2',
                    icon: 'el-icon-menu',
                    id: 'HelloWorld2',
                    children: [],
                    path: '/HelloWorld2'
                }]
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath)
            },
            clickItem(key, keyPath) {
                this.$router.push({
                    name: key
                })
                console.log(key, keyPath)
            }
        }
    }
</script>

<style lang="scss" scoped>
.navigation-wrapper {
  width: 100%;
  height: 100%;
//   display: flex;
//   flex-direction: column;
.navigation-header {
    display: flex;
    .title {
        display: inline-block;
        width: 200px;
        line-height: 60px;
        height: 60px;
        text-align: center;
        font-size: 24px;
    }
    .el-menu-top {
        flex: 1;
    }
}
  .navigation-content {
    height: 100%;
    display: flex;
    flex-direction: column;
      .navigaton-left {
        flex: 1;
        display: flex;
        .navigaton-container {
            flex: 1;
        }
      }
  }
}
</style>
