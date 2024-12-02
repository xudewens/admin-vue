<template>
  <div id="user">
      <!-- <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
          <el-radio-button label="top">top</el-radio-button>
          <el-radio-button label="right">right</el-radio-button>
          <el-radio-button label="bottom">bottom</el-radio-button>
          <el-radio-button label="left">left</el-radio-button>
      </el-radio-group> -->
      <el-tabs type="border-card" v-model="activeName">
          <el-tab-pane label="Transaction" name="Transaction">
              <transaction></transaction>
          </el-tab-pane>
          <el-tab-pane label="Settings" name="Settings">
              <Setting></Setting>
          </el-tab-pane>
      </el-tabs>
  </div>
</template>

<script>
import transaction from './transaction.vue';
import Setting from './setting.vue';
export default {
    components: {
        transaction,
        Setting
    },
    data() {
        return {
          activeName:'Settings'
        }
    },
    methods: {

    },  
}
</script>

<style lang="scss" scoped>
::v-deep .el-tabs--border-card {
    border: none;
    border-top: 1px solid #fff;
    box-shadow: none;
    .el-tabs__item {
        font-size: 18px;
        font-weight: bold;
    }
}
::v-deep .el-tabs--border-card > .el-tabs__header {
    background-color: #351267;
    border-bottom: 1px solid #fff;
    border-left: 1px solid #fff;
    margin: 0;
}
::v-deep .el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
    color: #fff;
    background-color: #9b86b4;
    border-right-color: #fff;
    border-left-color: #fff;
}
::v-deep .el-tabs--border-card > .el-tabs__content {
    color: #fff;
    background-color: #9b86b4;
    // padding: 0;
}
::v-deep .el-tabs--border-card > .el-tabs__header .el-tabs__item:not(.is-disabled):hover {
    color: #ff962d;
}
</style>