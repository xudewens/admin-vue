<template>
    <div id="editProfile">
        <van-form @submit="onSubmit">
            <van-field v-model="email" label="Email"  :rules="[{ required: true, message: '请填写用户名' }]"/>
            <van-field v-model="name" label="Name"  :rules="[{ required: true, message: '请填写用户名' }]"/>
            <!-- <van-field v-model="birth" label="Date of Birth"  :rules="[{ required: true, message: '请填写用户名' }]"/> -->
            <van-field readonl clickable name="datetimePicker" :value="birth"  label="Date of Birth" @click="showPicker = true"/>
            <van-field name="Gender" label="Gender">
              <template #input>
                <van-radio-group v-model="gender" direction="horizontal">
                  <van-radio name="1">Male</van-radio>
                  <van-radio name="2">Female</van-radio>
                </van-radio-group>
              </template>
            </van-field>
            <div style="margin: 16px; background-color: #390f6b; display: flex; justify-content: flex-end;">
                <van-button block type="info" style="width: 125px; color: #000; background-color: #c4c4c4; border-color: #c4c4c4; font-size: 16px; font-weight: bold;" plain>Cancel</van-button>
                <van-button block type="info" native-type="submit" style="width: 125px; margin-left: 10px; font-size: 16px; font-weight: bold;" color="#f97300">Submit</van-button>
            </div>
        </van-form>
        <van-popup v-model="showPicker" position="bottom">
          <van-datetime-picker
            type="date"
            @confirm="onConfirm"
            @cancel="showPicker = false"
          />
        </van-popup>
    </div>
</template>

<script>
export default {
  data() {
      return {
        email:'',
        name:'',
        birth:'',
        gender:'1',
        showPicker: false,
      }
  },
  methods: {
      onSubmit() {},
      onConfirm(time) {
          this.birth = this.formatDate(time);
          this.showPicker = false;
      },
      formatDate(time) {
          const date = new Date(time);
          const year = date.getFullYear();
          const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 补齐月份为两位数
          const day = date.getDate().toString().padStart(2, '0'); // 补齐日期为两位数
          return `${year}-${month}-${day}`;
      }
  },
}
</script>

<style lang="scss" scoped>
    ::v-deep .van-field__control {
        color: #fff;
    }
    ::v-deep .van-field__label {
        color: #999;
        font-size: 18px;
        margin-bottom: 10px;
    }
    ::v-deep .van-cell {
        flex-direction: column;
    }
    ::v-deep .van-radio__label {
        color: #fff;
    }
    ::v-deep .van-radio__icon--checked .van-icon {
        background-color: #fabe00;
        border-color: #fabe00;
    }
    @media (max-width: 1200px) {

    }
    @media (min-width: 1200px) {

    }
</style>