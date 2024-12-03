<template>
  <div id="manageConsent">
      <div class="website">Website Consent</div>
      <div class="item">Privacy Policy</div>
      <div class="item">User Terms & Conditions</div>
      <van-button v-if="status" type="info" style="margin-top: 30px; font-size: 16px; font-weight: bold;" color="#f97300" @click="changeStatus(false)">Withdraw Website Consent</van-button>
      <van-button  v-else type="info"  style="margin-top: 30px; font-size: 16px; font-weight: bold;" color="#f97300" @click="changeStatus(true)">Give Website Consent</van-button>
  </div>
</template>

<script>
import { Dialog  } from 'vant';
export default {
data() {
    return {
      status:true,//网站勾选状态
    }
},
methods: {
  changeStatus(status) {
      if(!status) {
          this.status = !this.status
          Dialog({
              title: 'Alert',
              message: 'Caution! Since you are withdrawing your consent,you will not be able to make transactions',
              confirmButtonText:'Close',
          }).then(() => {
            
          }).catch(() => {
              // this.rateTemplate = null
          })
      }else {
        this.status = !this.status
        Dialog({
              title: 'Alert',
              message: 'Thank you for give your consent to our website.',
              confirmButtonText:'Close',
          }).then(() => {
            
          }).catch(() => {
              // this.rateTemplate = null
          })
      }
    },
},
}
</script>

<style lang="scss" scoped>
#manageConsent {
    padding: 30px;
    .website {
        font-size: 22px;
        color: #fff;
        font-weight: bold;
        height: 80px;
        line-height: 80px;
    }
    .item {
        font-size: 20px;
        height: 50px;
        line-height: 50px;
        color: #f97300;
        cursor: pointer;
    }
}
@media (max-width: 1200px) {

}
@media (min-width: 1200px) {

}
</style>