<template>
  <div id="setting">
      <div class="content">
        <el-tabs :tab-position="tabPosition" style="height: 100%;" type="border-card" v-model="activeName">
            <div v-if="activeName === '-1'" style="height: 400px; flex-direction: column; display: flex; align-items: center; justify-content: center; font-size: 22px;">
                Please select an operation from the left menu
                <img src="../../assets/images/noData.png" alt="" width="550" style="margin-top: 10px;">
            </div>
            <el-tab-pane label="Edit Profile">
              <div slot="label" style="position: relative; width: 240px;">
                <i class="el-icon-arrow-right" style="color: #fff; font-style: 18px; margin-left: 10px; position: absolute; top: 13px; right: -105px;"></i>
                    <div class="ti" style="color: #fff;">
                        Edit Profile
                    </div>
                    <div style="color: #d9d9d9; font-size: 14px;">
                       General account settings
                    </div>
                </div>
                <EditProfile></EditProfile>
            </el-tab-pane>
            <el-tab-pane label="Delete Account">
                <div slot="label" style="position: relative; width: 240px;">
                  <i class="el-icon-arrow-right" style="color: #fff; font-style: 18px; margin-left: 10px; position: absolute; top: 13px; right: -105px;"></i>
                    <div class="ti" style="color: #fff;">
                        Delete Account
                    </div>
                    <div style="color: #d9d9d9; font-size: 14px;">
                        Permanently delete your account
                    </div>
                </div>
                <DeleteAccount></DeleteAccount>
            </el-tab-pane>
            <el-tab-pane label="Manage Consent">
              <div slot="label" style="position: relative; width: 240px;">
                <i class="el-icon-arrow-right" style="color: #fff; font-style: 18px; margin-left: 10px; position: absolute; top: 13px; right: -105px;"></i>
                    <div class="ti" style="color: #fff;">
                        Manage Consent
                    </div>
                    <div style="color: #d9d9d9; font-size: 14px;">
                        Manage My Website
                    </div>
                </div>
                <ManageConsent></ManageConsent>
            </el-tab-pane>
        </el-tabs>
      </div>
  </div>
</template>

<script>
import DeleteAccount from './component/deleteAccount.vue';
import EditProfile from './component/editProfile.vue';
import ManageConsent from './component/manageConsent.vue';
export default {
    components: {
      DeleteAccount,
      EditProfile,
      ManageConsent
    },
    data() {
        return {
          tabPosition: 'left',
          activeName:'-1'
        }
    },
    methods: {

    },  
}
</script>

<style lang="scss" scoped>
.content {
    height: 500px;
    background-color: #390f6b;
    padding: 20px 0;
}
::v-deep .el-tabs__item {
    height: 20%;
}
::v-deep .el-tabs__nav {
    height: 100%;
    padding: 40px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
::v-deep .el-tabs--border-card {
    border: none;
    border-top: none !important;
    box-shadow: none;
    background-color: #390f6b;
    .el-tabs__item {
        font-size: 18px;
        font-weight: bold;
    }
}
::v-deep .el-tabs--border-card > .el-tabs__header {
    background-color: #351267;
    border-bottom: none !important;
    border-left: none !important;
    margin: 0;
}
::v-deep .el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
    color: #fff;
    background-color: #603256 !important;
    border-top: none !important;
    border-bottom: none !important;
}
::v-deep .el-tabs--border-card > .el-tabs__content {
    color: #fff;
    background-color: #390f6b !important;
    padding: 0;
}
::v-deep .van-cell {
    background-color: #390f6b;
}
::v-deep .el-tabs--border-card > .el-tabs__header .el-tabs__item:not(.is-disabled):hover {
    color: #ff962d;
}
::v-deep .el-tabs--left .el-tabs__item.is-left {
    display: flex;
    align-items: center;
    justify-content: center;
}
::v-deep .el-tabs--left.el-tabs--border-card .el-tabs__header.is-left {
    width: 40%;
}
</style>