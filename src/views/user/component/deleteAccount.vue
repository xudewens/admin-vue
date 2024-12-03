<template>
  <div id="deleteAccount">
      <van-form @submit="onSubmit" v-if="loginStp1" style="width: 100%;">
          <van-field v-model="email" label="Email"  :rules="[{ required: true, message: '请填写用户名' }]"/>
          <div style="margin: 16px; background-color: #390f6b; display: flex; justify-content: center;">
              <van-button block type="info" native-type="submit" style="width: 180px; margin-top: 30px; font-size: 16px; font-weight: bold;" color="#f97300">Request OTP</van-button>
          </div>
      </van-form>
      <div class="loginStp3" v-if="loginStp3">
            <div class="checkbox1"> Please check your email </div>
            <div class="checkbox2">{{ email }}</div>
            <div class="lastTime">{{ hh }} : {{ mm }} : {{ ss }}</div>
            <div class="content-join">
            <div @click="firstFocus()" ref="joinLetter" class="join-letter">
                <van-field v-for="item in [1, 2, 3, 4]" :key="item"
                :readonly="!!letterList[`letter${item}`]" class="letter-field" center 
                :class="fieldIndex == item && 'letterBorder'"
                type="textarea"
                v-model="letterList[`letter${item}`]" maxlength="1" 
                @focus="getFocus(item)"
                @blur="getBlur()" 
                :formatter="formatter" 
                @input="getUpdate(item)">
                </van-field>
            </div>
            </div>
        </div>
        <slide-verify :l="42"
            :r="10"
            :w="310"
            :h="155"
            :imgs="imgList"
            ref="slideblock"
            slider-text="Swipe right"
            @success="onSuccess"
            @fail="onFail"
            @refresh="onRefresh"
            v-if="loginStp2"
            >
        </slide-verify>
        <!-- <div>{{msg}}</div> -->
        <div class="send-again" v-if="loginStp4" @click="SendAgain">Send again</div>
  </div>
</template>

<script>
import Vue from 'vue';
import SlideVerify from 'vue-monoplasty-slide-verify';
Vue.use(SlideVerify);
import { Dialog  } from 'vant';
export default {
data() {
    return {
      email:'',
      imgList:[
            'https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2024%2F0514%2F39c3774bj00sdg7480085d200u00191g00u00191.jpg&thumbnail=660x2147483647&quality=80&type=jpg',
            'https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2024%2F0217%2F94e6cfe3j00s8z717002gd200p000p0g00it00it.jpg&thumbnail=660x2147483647&quality=80&type=jpg',
            'https://img0.baidu.com/it/u=945787707,939700106&fm=253&fmt=auto&app=120&f=JPEG?w=1200&h=800',
            'https://copyright.bdstatic.com/vcg/creative/eae00b7ab5199d8202a811b5dbc41f3c.jpg@h_1280',
            'https://img0.baidu.com/it/u=1875745334,4127038418&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=450',
        ],
        // 用于计算第几个框进行了聚焦。
        fieldIndex:'',
        // 用于获取元素的ref
        joinLetter: null,
        // 当前处理的元素
          myDiv :null,
          codeId :'',
          second : 0,// 倒计时
          hh : '00',
          mm : '00',
          ss : '00',
          imgKey : '',
          timer :() => {}, // 定时器
          letterList: {
            letter1: '',
            letter2: '',
            letter3: '',
            letter4: '',
        },
        verificationCode:null,
        allWrite : false, //判断是否全部输入完成
        loginStp1:true,
        loginStp2:false,
        loginStp3:false,
        loginStp4:false,
        isMobile: window.innerWidth <= 920 ? true : false,
    }
},
watch: {
  'letterList': {
      deep: true, // 深度监听对象的变化
      handler(newVal) {
          let type = true;
          let data = '';
          let list = [1, 2, 3, 4];
          list.forEach((item) => {
          if (!newVal[`letter${item}`]) {
              type = false;
          }
          data += newVal[`letter${item}`];
          });
          
          if (type) {
              console.log(data, '====verificationCode.value===');
              this.verificationCode = data;
              // this.submit(); // 如果有 submit 方法的话
              this.allWrite = true;
          }
          }
      }
  },
  mounted() {
    if (screenfull.isEnabled) {
        screenfull.on('change', this.fullscreenChange)
    }
    window.addEventListener('click', (event) => {
    // 点击指定元素之外， 清除border的外框， 模拟清除了焦点
    const clickedElement = event.target
    // 监听是否点击改元素之外的地方
    if (this.$refs.joinLetter && !this.$refs.joinLetter.contains(clickedElement)) {
        this.fieldIndex = null
    }
    })
    window.addEventListener('keydown', (event) => {
    const keyCode = event.keyCode || event.which // 获取按下的键码
    // 如果有值说明在聚焦 且按下删除键
    if (keyCode === 8 || keyCode === 46) {
        if (this.fieldIndex == 1) {
        // 如果是最后序位， 直接取消焦点
        this.myDiv.blur()
        return
        }
        // 如果最后一个有值， 则去最后一个序位。
        this.fieldIndex = this.fieldIndex - 1
        this.letterList[`letter${this.fieldIndex + 1}`] = ''
        this.letterList[`letter${this.fieldIndex}`] = ''
        this.$nextTick(() => {
            this.getUpdate(this.fieldIndex - 1)
        })
    }
    })
    let data = [0, 1, 2, 3]
    // data.map((item) => {
    //   // 监听粘贴功能
    //   this.$refs.joinLetter.value.getElementsByClassName('van-field__control')[item].addEventListener('paste', this.paste())
    // })
},
methods: {
    onSubmit() {
      this.loginStp1 = false
      this.loginStp2 = true
      this.loginStp3 = false
      this.loginStp4 = false
    },
     // 登录弹窗
     Signin() {
        this.dialogVisible1 = 1
    },
    // 校验成功
    onSuccess(){
        // const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        // if(!this.email || !emailRegex.test(this.email)) {
        //     this.$refs.slideblock.reset();
        //     this.$message.warning('Please fill in the correct email address')
        // }else {
            this.loginStp1 = false
            this.loginStp2 = false
            this.loginStp3 = true
            this.loginStp4 = true
        // } 
    },
    // 校验失败
    onFail(){
        this.msg = ''
    },
    // 重新率刷新
    onRefresh(){
        this.msg = ''
    },

    /**
     * @method getUpdate 获取焦点
    */
    getUpdate (val) {
        console.log(val);
        this.fieldIndex = val
        if (val >= 0 && val < 4) {
            this.myDiv = this.$refs.joinLetter.getElementsByClassName('van-field__control')[val]
            this.myDiv.focus()
        } else {
            this.$refs.joinLetter.getElementsByClassName('van-field__control')[3].blur()
        }
    },

    /**
     * @method paste 复制功能
    */
    paste  (event) {
        // 获取粘贴的文本内容
        const clipboardData = event.clipboardData
        // 拿到复制的值， 筛选出只有字母的值 -> 变为全部大写 -> 变成数组供后面使用
        let pastedText = this.formatter(clipboardData.getData('text/plain'))
        let list = [1, 2, 3, 4, 5, 6]
        list.map((item, index) => {
            if (!this.letterList[`letter${item}`] && pastedText) {
                this.letterList[`letter${item}`] = pastedText[0]
                pastedText = pastedText.slice(1)
            if (!pastedText && item != 6) {
                setTimeout(() => {
                    this.getUpdate(item)
                })
            }
            if (index == 5 && this.letterList[`letter${item}`]) {
                this.fieldIndex = null
                setTimeout(() => {
                    this.myDiv.blur()
                })
            }
            }
        })
    },

    /**
     * @method firstFocus 获取点击事件 将第一个input框设置焦点
     */
    firstFocus () {
        let status = true
        let list = [1, 2, 3, 4]
        list.map((item, index) => {
            if (!this.letterList[`letter${item}`] && status && index <= 3) {
            status = false
            this.fieldIndex = index + 1
            this.myDiv = this.$refs.joinLetter.getElementsByClassName('van-field__control')[index]
            // 将第一个input的元素聚焦
            this.myDiv.focus()
            }
        })
        // 如果未变为false 代表所有input框都有值，那么将最后一个位序置空
        if (status) {
            this.letterList['letter6'] = ''
            setTimeout(() => {
                this.fieldIndex = 3
                this.$refs.joinLetter.getElementsByClassName('van-field__control')[3].focus()
            })
        }
    },

    /**
     * @method getFocus 输入框获取焦点
     */
    getFocus (index) {
        this.fieldIndex = index
    },
    /**
     * @method getBlur 焦点消失
     */
    getBlur () {
        this.fieldIndex = null
    },
    // 根据正则进行筛选，筛选出你需要的字符
    formatter (value)  {
        return value.replace(/[^0-9\s]/g, '')
    },
    async getEmailCode (result) {
        const res = await emailVerifyKey({
            email:this.email,
            result,
        })
        if(res.code === '2000100') {
            this.codeId = res.data.codeId
            const res1 =  await sendEmailCode({
                email:this.email,
                codeId:this.codeId
            })
            if(res1.code === '2000100') { 
                this.second = res.data.ttl
                ithis.mgKey = res1.data.codeKey
                this.TimeDown()
            }
            return res1
        }
    },
    // 剩余秒数转换时分秒格式
    TimeDown () {
        if (this.second <= 0) {
            this.hh = '00'
            this.mm = '00'
            this.ss = '00'
            return
        } else {
            let totalSeconds = parseInt(this.second / 1000) // 相差的总秒数
            let modulo = totalSeconds % (60 * 60) //取模（余数）
            this.hh = Math.floor(totalSeconds / (60 * 60)) >= 10 ? Math.floor(totalSeconds / (60 * 60)) : '0' + Math.floor(totalSeconds / (60 * 60)) // 小时数
            modulo = modulo % (60 * 60)
            this.mm = Math.floor(modulo / 60) >= 10 ? Math.floor(modulo / 60) : '0' + Math.floor(modulo / 60) // 分钟
            this.ss = modulo % 60 >= 10 ? modulo % 60 : '0' + (modulo % 60) // 秒
            this.letTime()
        }
    },
    // 倒计时
    letTime () {
        this.timer = setInterval(() => {
            if (this.ss > 0) {
                this.ss = (this.ss -1) >= 10 ? (this.ss -1) : '0' + (this.ss -1)
            } else if (this.ss == 0) {
            if (this.mm > 0) {
                this.mm = (this.mm -1) >= 10 ? (this.mm -1) : '0' + (this.mm -1)
                this.ss = 59
                return
            } else if (this.mm == 0) {
                if (this.hh > 0) {
                    this.hh = (this.hh -1) >= 10 ? (this.hh -1) : '0' + (this.hh -1)
                    this.mm = 59
                    this.ss = 59
                return
                } else if (this.hh == 0) {
                    this.hh = '00'
                    this.mm = '00'
                    this.ss = '00'
                clearInterval(this.timer)
                this.loginStp = 2
                showToast('Please resend')
                this.onShow()
                }
            }
            }
        }, 1000)
    },
    // 验证码重新发送
    SendAgain() {
        this.loginStp1 = false
        this.loginStp2 = true
        this.loginStp3 = true
        this.loginStp4 = false
    },
    // 登录回退
    backlogin () {
        if (this.loginStp3 && !this.loginStp2) {
            Dialog.confirm({
                title: '',
                message: 'Do you want to return and fill in your email again?',
                confirmButtonText:'Yes',
                cancelButtonText:'No'
            }).then(() => {
                this.letterList = {
                    letter1: '',
                    letter2: '',
                    letter3: '',
                    letter4: '',
                }
                this.email = ''
                this.loginStp1 = true
                this.loginStp2 = true
                this.loginStp3 = false
                this.loginStp4 = false
            }).catch(() => {
                // this.rateTemplate = null
            })
            
        } else if (this.loginStp3 && this.loginStp2) {
            this.letterList = {
                letter1: '',
                letter2: '',
                letter3: '',
                letter4: '',
            }
            this.loginStp1 = false
            this.loginStp2 = false
            this.loginStp3 = true
            this.loginStp4 = true
        }
    }
  },
}
</script>

<style lang="scss" scoped>
#deleteAccount {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
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
.loginStp3 {
    color: #fff;
    text-align: center;
    font-size: 16px;
}
.checkbox1 {
    color: #fff;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
}
::v-deep .vue-auth-box_ {
    display: flex;
    flex-direction: column;
    align-items: center;
    .auth-control_ .range-box {
        background-color: #707070 !important;
    }
}
.checkbox2 {
    color: #fff;
    text-align: center;
    font-size: 16px;
    margin-bottom: 5px;
}
::v-deep .van-field__body {
    // height: 80px !important;
}
::v-deep .van-cell {
    .van-field__control {
        font-size: 20px;
        display: flex;
        justify-content: center;
        text-align: center;
        min-height: 40px;
        line-height: 40px;
        height: 40px;
    }
}
.content-join {
    margin: 22px  24px;
    .join-letter {
        display: flex;
        justify-content: space-between;
        width: 350px;
        .letter-field {
            height: 46px;
            width: 46px;
            padding: 0;
            background: #fff;
            display: flex;
            align-items: center;
            margin-right: 10px;
            justify-content: center;
            font-size: 20px;
            font-weight: 600;
            border-radius: 4px;
            border: 1px solid #c5c3c3;
        }
        .letterBorder {
            border: 1px solid #eb4d44;
        }
        .letter:last-child {
            margin-right: 0;
        }
    }
}
.send-again {
    font-size: 14px;
    cursor: pointer;
    color: #f7bc06;
    // margin-top: 15px;
}
@media (max-width: 1200px) {

}
@media (min-width: 1200px) {

}
</style>