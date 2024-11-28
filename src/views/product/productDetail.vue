<template>
    <div id="productDetail">
        <topBar>Commodity</topBar>
        <div class="content">
            <div class="left">
                <el-card class="box-card goods-item showPc">
                    <div class="goods-img">
                        <img src="https://cdn.unipin.com/images/icon_product_pages/1711000595-icon-icon_11zon.png" alt="Paw Rumble" class="product-icon">
                        <p class="goods-name">Ghost Story: Love Destiny</p>
                    </div>
                    <div class="goods-desc">
                      Ghost Story bukan sekadar game MMORPG - ini adalah sebuah perjalanan, melodi cinta dan persahabatan. Apakah kamu siap mulai petualangan...
                      Ghost Story bukan sekadar game MMORPG - ini adalah sebuah perjalanan, melodi cinta dan persahabatan. Apakah kamu siap mulai petualangan...
                    </div>
                    <div class="bottom-website">
                        <div style="margin-right: 25px; cursor: pointer; display: flex; align-items: center;">
                            <svg t="1732614526580" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11135" id="mx_n_1732614526581" width="20" height="20"><path d="M490.496 1014.784c-144.384-126.464-227.328-308.736-227.328-500.224 0-192.512 83.456-375.808 228.864-501.76l41.984 48.128c-131.584 114.176-206.848 279.552-206.848 453.632 0 173.056 74.752 337.92 205.312 452.096l-41.984 48.128z" fill="#f97300" p-id="11136"></path><path d="M529.408 1014.784l-41.984-48.128c130.56-114.176 205.312-279.04 205.312-452.096 0-174.08-75.264-339.456-206.848-453.632l41.984-48.128c145.408 126.464 228.864 309.248 228.864 501.76 0 192-82.432 374.272-227.328 500.224z" fill="#f97300" p-id="11137"></path><path d="M67.584 480.768c1.024-15.872 3.072-31.744 5.632-47.104 37.888-212.48 222.208-366.592 438.272-366.592 182.784 0 346.112 111.616 413.696 279.552H993.28c-70.144-204.8-263.68-343.04-481.28-343.04C264.704 3.584 53.76 179.712 10.752 422.912 5.632 452.608 2.56 482.816 2.56 513.024v31.744h953.856c-1.024 16.384-3.072 32.768-6.144 49.152-38.912 210.944-223.232 364.032-438.272 364.032-185.344 0-349.696-113.664-415.744-285.184H28.16C97.28 882.176 291.84 1022.464 512 1022.464c245.76 0 456.704-175.104 500.736-416.768 5.632-30.208 8.192-61.44 8.192-92.672V481.28H67.584z" fill="#f97300" p-id="11138"></path></svg>
                            <span style="margin-left: 5px;">Website</span>
                        </div>
                        <div style="margin-right: 25px; cursor: pointer; display: flex; align-items: center;">
                            <svg t="1732614617911" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12131" width="20" height="20"><path d="M304 431.3m-60 0a60 60 0 1 0 120 0 60 60 0 1 0-120 0Z" fill="#f97300" p-id="12132"></path><path d="M512 431.3m-60 0a60 60 0 1 0 120 0 60 60 0 1 0-120 0Z" fill="#f97300" p-id="12133"></path><path d="M720 431.3m-60 0a60 60 0 1 0 120 0 60 60 0 1 0-120 0Z" fill="#f97300" p-id="12134"></path><path d="M930 79.3H94c-51.9 0-94 42.1-94 94v516c0 51.9 42.1 94 94 94h216V917.6c0.4 4.1 1.6 8.3 3.9 12.1 8.2 14.3 26.7 19.2 41 11L370 932l250.6-144.7c4.6-2.6 9.7-4 15-4H930c51.9 0 94-42.1 94-94v-516c0-51.9-42.1-94-94-94z m34 610c0 18.8-15.2 34-34 34H617.9c-4 0-8.1 0.9-11.6 3h-0.1l-98.7 57L370 862.7V753.3c0-16.6-13.4-30-30-30H94c-18.8 0-34-15.2-34-34v-516c0-18.8 15.2-34 34-34h836c18.8 0 34 15.2 34 34v516z" fill="#f97300" p-id="12135"></path></svg>
                            <span style="margin-left: 5px;">Community</span>
                        </div>
                    </div>
                </el-card>
                <el-card class="box-card">
                    <div class="step-title" style="display: flex; align-items: center; margin-bottom: 15px;">
                        <div class="step-circle">1</div>
                        Email Address
                    </div>
                    <el-input placeholder="Email Address" v-model="email" style="width: 70%;">
                        <template slot="prepend">
                            <svg t="1732529754487" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2926" width="24" height="24"><path d="M838.954667 234.666667H170.666667c-3.626667 0-7.168 0.448-10.56 1.322666l323.690666 323.669334a21.333333 21.333333 0 0 0 30.165334 0L838.954667 234.666667z m46.144 14.186666l-260.693334 260.693334 262.933334 262.912c5.44-7.168 8.661333-16.106667 8.661333-25.792V277.333333c0-10.944-4.117333-20.906667-10.88-28.48zM843.861333 789.333333l-249.6-249.621333-50.133333 50.133333a64 64 0 0 1-90.517333 0l-50.112-50.133333L156.373333 786.88c4.48 1.578667 9.28 2.453333 14.314667 2.453333h673.194667zM128.661333 754.218667L373.333333 509.525333 129.578667 265.813333A42.709333 42.709333 0 0 0 128 277.333333v469.333334c0 2.56 0.213333 5.098667 0.661333 7.552zM170.666667 192h682.666666a85.333333 85.333333 0 0 1 85.333334 85.333333v469.333334a85.333333 85.333333 0 0 1-85.333334 85.333333H170.666667a85.333333 85.333333 0 0 1-85.333334-85.333333V277.333333a85.333333 85.333333 0 0 1 85.333334-85.333333z" fill="#FFFFFF" p-id="2927"></path>
                            </svg>
                        </template>
                    </el-input>
                    <p>You will receive a successful order information</p>
                </el-card>
                <el-card class="box-card">
                  <div class="step-title" style="display: flex; align-items: center; margin-bottom: 15px;">
                        <div class="step-circle">2</div>
                        Enter Game ID
                    </div>
                    <el-input placeholder="Enter Game ID" v-model="gameID" style="width: 70%;">
                        <template slot="prepend">
                            <svg t="1732610355569" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8286" width="24" height="24"><path d="M880 192A80 80 0 0 1 960 272v480a80 80 0 0 1-80 80h-736A80 80 0 0 1 64 752v-480A80 80 0 0 1 144 192h736zM864 288H160v448h704V288z m-528 256a128 128 0 0 1 127.84 121.6 6.24 6.24 0 0 1-6.08 6.4h-243.2a6.4 6.4 0 0 1-6.4-6.4v-0.32A128 128 0 0 1 336 544zM672 544a32 32 0 0 1 32 32v32a32 32 0 0 1-32 32h-128a32 32 0 0 1-32-32v-32a32 32 0 0 1 32-32h128z m-336-192a80 80 0 1 1 0 160 80 80 0 0 1 0-160zM768 384a32 32 0 0 1 32 32v32a32 32 0 0 1-32 32h-224a32 32 0 0 1-32-32v-32a32 32 0 0 1 32-32h224z" fill="#ffffff" p-id="8287"></path>
                            </svg>
                        </template>
                    </el-input>
                    <el-button class="more-btn" @click="learnmore">Learn more</el-button>
                    <p>Note:XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
                </el-card>
                <el-card class="box-card">
                    <div class="step-title" style="display: flex; align-items: center; margin-bottom: 15px;">
                        <div class="step-circle">3</div>
                        Select Amount
                    </div>
                    <div class="payment-denom-container">
                        <div class="payment-denom-button" v-for="item in priceList" :key="item.id" :class="{'active': item.active}" @click="checkPrice(item)">
                          <svg t="1732612280595" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9637" width="40" height="40"><path d="M512.8 216l185.6 200H327.2l185.6-200z m273.6 200h172.8l-224-288h-56l107.2 288z m-273.6 413.6L732 448H292.8l220 381.6zM647.2 128H377.6L276 412.8 512.8 168l236.8 245.6L647.2 128z m121.6 320l-256 450.4-256-450.4H87.2L512 963.2 933.6 448H768.8z m-530.4-32l107.2-288h-56L68 416h170.4z" p-id="9638" fill="#ffffff"></path></svg>
                            {{ item.name }}
                        </div>
                    </div>
                </el-card>
            </div>
            <div class="right">
                <el-card class="box-card goods-item showMb">
                    <div class="goods-img">
                        <img src="https://cdn.unipin.com/images/icon_product_pages/1711000595-icon-icon_11zon.png" alt="Paw Rumble" class="product-icon">
                        <p class="goods-name">Ghost Story: Love Destiny</p>
                    </div>
                    <div class="goods-desc">
                      Ghost Story bukan sekadar game MMORPG - ini adalah sebuah perjalanan, melodi cinta dan persahabatan. Apakah kamu siap mulai petualangan...
                      Ghost Story bukan sekadar game MMORPG - ini adalah sebuah perjalanan, melodi cinta dan persahabatan. Apakah kamu siap mulai petualangan...
                    </div>
                    <div class="bottom-website">
                        <div style="margin-right: 25px; cursor: pointer; display: flex; align-items: center;">
                            <svg t="1732614526580" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11135" id="mx_n_1732614526581" width="20" height="20"><path d="M490.496 1014.784c-144.384-126.464-227.328-308.736-227.328-500.224 0-192.512 83.456-375.808 228.864-501.76l41.984 48.128c-131.584 114.176-206.848 279.552-206.848 453.632 0 173.056 74.752 337.92 205.312 452.096l-41.984 48.128z" fill="#f97300" p-id="11136"></path><path d="M529.408 1014.784l-41.984-48.128c130.56-114.176 205.312-279.04 205.312-452.096 0-174.08-75.264-339.456-206.848-453.632l41.984-48.128c145.408 126.464 228.864 309.248 228.864 501.76 0 192-82.432 374.272-227.328 500.224z" fill="#f97300" p-id="11137"></path><path d="M67.584 480.768c1.024-15.872 3.072-31.744 5.632-47.104 37.888-212.48 222.208-366.592 438.272-366.592 182.784 0 346.112 111.616 413.696 279.552H993.28c-70.144-204.8-263.68-343.04-481.28-343.04C264.704 3.584 53.76 179.712 10.752 422.912 5.632 452.608 2.56 482.816 2.56 513.024v31.744h953.856c-1.024 16.384-3.072 32.768-6.144 49.152-38.912 210.944-223.232 364.032-438.272 364.032-185.344 0-349.696-113.664-415.744-285.184H28.16C97.28 882.176 291.84 1022.464 512 1022.464c245.76 0 456.704-175.104 500.736-416.768 5.632-30.208 8.192-61.44 8.192-92.672V481.28H67.584z" fill="#f97300" p-id="11138"></path></svg>
                            <span style="margin-left: 5px;">Website</span>
                        </div>
                        <div style="margin-right: 25px; cursor: pointer; display: flex; align-items: center;">
                            <svg t="1732614617911" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12131" width="20" height="20"><path d="M304 431.3m-60 0a60 60 0 1 0 120 0 60 60 0 1 0-120 0Z" fill="#f97300" p-id="12132"></path><path d="M512 431.3m-60 0a60 60 0 1 0 120 0 60 60 0 1 0-120 0Z" fill="#f97300" p-id="12133"></path><path d="M720 431.3m-60 0a60 60 0 1 0 120 0 60 60 0 1 0-120 0Z" fill="#f97300" p-id="12134"></path><path d="M930 79.3H94c-51.9 0-94 42.1-94 94v516c0 51.9 42.1 94 94 94h216V917.6c0.4 4.1 1.6 8.3 3.9 12.1 8.2 14.3 26.7 19.2 41 11L370 932l250.6-144.7c4.6-2.6 9.7-4 15-4H930c51.9 0 94-42.1 94-94v-516c0-51.9-42.1-94-94-94z m34 610c0 18.8-15.2 34-34 34H617.9c-4 0-8.1 0.9-11.6 3h-0.1l-98.7 57L370 862.7V753.3c0-16.6-13.4-30-30-30H94c-18.8 0-34-15.2-34-34v-516c0-18.8 15.2-34 34-34h836c18.8 0 34 15.2 34 34v516z" fill="#f97300" p-id="12135"></path></svg>
                            <span style="margin-left: 5px;">Community</span>
                        </div>
                    </div>
                </el-card>
                <el-card class="box-card">
                    <div class="step-title" style="display: flex; align-items: center; margin-bottom: 15px;">
                        Check out
                    </div>
                    <div class="checkout-item" style="display: flex; justify-content: space-between;">
                        <div style="display: flex; align-items: center;">
                            <svg t="1732612280595" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9637" width="20" height="20"><path d="M512.8 216l185.6 200H327.2l185.6-200z m273.6 200h172.8l-224-288h-56l107.2 288z m-273.6 413.6L732 448H292.8l220 381.6zM647.2 128H377.6L276 412.8 512.8 168l236.8 245.6L647.2 128z m121.6 320l-256 450.4-256-450.4H87.2L512 963.2 933.6 448H768.8z m-530.4-32l107.2-288h-56L68 416h170.4z" p-id="9638" fill="#ffffff"></path></svg>
                            <span style="margin-left: 5px;">Item</span>
                        </div>
                        <div class="checkout-item-right">
                            65 Jade
                        </div>
                    </div>
                    <div class="checkout-item" style="display: flex; justify-content: space-between;">
                        <div style="display: flex; align-items: center;">
                            <svg t="1732616654760" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="19619" id="mx_n_1732616654761" width="20" height="20"><path d="M419.868545 371.201505c119.957888 0 244.638514-26.377915 319.492222-76.610347v91.550631h69.357129V185.603409C808.719666 65.05053 608.372533 0 419.868545 0S31.031591 65.05053 31.031591 185.610492v547.081422c0 120.552879 200.341821 185.598096 388.844038 185.598097v-69.351816c-197.949463 0-319.486909-67.708509-319.48691-116.248051V568.145151c74.860791 50.225349 199.534334 76.610347 319.48691 76.610346v-69.357128c-197.949463 0-319.486909-67.708509-319.48691-116.253364v-164.546763c74.848396 50.225349 199.516626 76.603264 319.479826 76.603263z m0-301.85146c197.956546 0 319.492222 67.715592 319.492222 116.253364 0 48.541313-121.535675 116.249822-319.492222 116.249822-197.94415 0-319.486909-67.708509-319.486909-116.249822 0.001771-48.539542 121.54453-116.253363 319.486909-116.253364zM730.699759 409.109133c-172.180705 0-262.272192 66.244053-262.272193 131.668223v351.557963c0 65.425941 90.091487 131.662911 262.272193 131.66291 170.888017 0 260.866173-65.254173 262.197818-130.203767h0.069061V540.770273c-0.005312-65.42417-90.084404-131.66114-262.266879-131.66114z m0 69.357128c127.276626 0 192.909751 43.669828 192.909751 62.311095 0 18.643037-65.633125 62.319949-192.909751 62.319948-127.287251 0-192.920376-43.67514-192.920376-62.319948 0-18.641267 65.645521-62.311095 192.920376-62.311095z m0 476.162444c-127.287251 0-192.920376-43.67514-192.920376-62.311094v-83.922002c44.011593 23.897017 108.59286 39.807702 192.920376 39.807702 84.322204 0 148.905241-15.915997 192.909751-39.807702v83.922002c0 18.635954-65.633125 62.311095-192.909751 62.311094z m0-175.77544c-127.287251 0-192.920376-43.669828-192.920376-62.305782V632.620169c44.011593 23.898787 108.59286 39.814785 192.920376 39.814785 84.322204 0 148.905241-15.903602 192.909751-39.802389v83.927314c0 18.623559-65.633125 62.298699-192.909751 62.298699v-0.005313z m0 0" fill="#FFFFFF" p-id="19620"></path></svg>
                            <span style="margin-left: 5px;">Total</span>
                        </div>
                        <div class="checkout-item-right">
                            Rp 16.000
                        </div>
                    </div>
                    <el-button class="buy-btn">Purchase Now</el-button>
                    <div style="display: flex; justify-content: center;">
                        <el-checkbox v-model="checked">Website Terms and Conditions</el-checkbox>
                    </div>
                </el-card>
            </div>
        </div>
        <bottomInfo />
        <el-dialog
            :visible.sync="dialogVisible"
            width="70%"
            >
            <span>这是后台配置的游戏指引信息</span>
          </el-dialog>
    </div>
</template>

<script>
import bottomInfo from '@/views/bottomInfo.vue'
export default {
  components: {
        bottomInfo
    },
  data() {
      return {
        priceList:[{
          name:'规格1',
          id:'1',
          active:false,
          total:123
        },{
          name:'规格2',
          id:'2',
          active:false,
          total:1234
        },{
          name:'规格3',
          id:'3',
          active:false,
          total:1235
        },{
          name:'规格4',
          id:'4',
          active:false,
          total:1236
        },{
          name:'规格5',
          id:'5',
          active:false,
          total:1237
        },{
          name:'规格6',
          id:'6',
          active:false,
          total:1238
        }],
        email:'',
        gameID:'',
        checkPriceValue:'',
        checked:true,
        dialogVisible:false
      }
  },
  methods: {
    checkPrice(value){
      this.priceList.forEach(item => {
        item.active = false
      });
      value.active = true
      this.checkPriceValue = value
    },
    learnmore() {
      this.dialogVisible = true
    },
  },
}
</script>

<style lang="scss" scoped>
.content {
    padding: 0 30px;
}
::v-deep .el-card {
    background-color: #390f6b;
    border-radius: 10px;
    border-color: #390f6b;
    margin-bottom: 30px;
    color: #fff;
    .step-circle {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #390f6b;
        box-shadow: 0 4px 8px rgba(255, 150, 45, 0.5);
        background-color: #fff;
        border-radius: 50%;
        width: 36px;
        height: 36px;
        font-size: 20px;
        margin-right: 15px;
    }
    p {
        margin-top: 15px;
        font-size: 12px;
    }
    .payment-denom-container {
        display: grid;
        grid-column-gap: 16px;
        grid-row-gap: 16px;
        grid-auto-rows: 1fr;
        grid-template-columns: repeat(4, 1fr);
    }
    .active {
        color: #fff !important;
        background: #ff962d !important;
        font-weight: 400;
        box-shadow: 0 4px 8px rgba(255, 150, 45, 0.5) !important;
    }
    .payment-denom-container .payment-denom-button {
        font-size: 14px;
        color: hsla(0, 0%, 100%, 0.7);
        background: -webkit-gradient(linear, left bottom, left top, from(rgba(45, 150, 255, 0.2)), to(rgba(45, 150, 255, 0.2))), rgba(47, 46, 60, 0.6);
        background: linear-gradient(0deg, rgba(45, 150, 255, 0.2), rgba(45, 150, 255, 0.2)), rgba(47, 46, 60, 0.6);
        border: 1px solid hsla(0, 0%, 100%, 0.12);
        height: 100%;
        width: 100%;
        display: -webkit-box;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-direction: column;
        line-height: 1.3em;
        border-radius: 4px;
        position: relative;
        cursor: pointer;
        padding: 10px 0;
        .icon {
            margin-bottom: 10px;
        }
    }
    .payment-denom-button:hover {
        color: #fff;
        background-color: rgba(255, 150, 45, 0.5);
        border-color: #ff962d;
    }
}
::v-deep .el-input-group__prepend {
    background-color: #9b86b4;
    border: none;
}
::v-deep .el-checkbox__input.is-checked .el-checkbox__inner {
    background-color: #f97300;
}
::v-deep .el-checkbox__label {
    color: #fff;
    font-size: 18px;
}
::v-deep .el-checkbox__input.is-checked + .el-checkbox__label {
    color: #f97300;
}
::v-deep .el-dialog {
    background-color: #9b86b4;
}
::v-deep .el-dialog__headerbtn .el-dialog__close {
    color: #fff;
}
::v-deep .el-dialog__body {
    color: #fff;
}
@media (min-width: 1200px) {
    .content {
        display: flex;
        justify-content: space-between;
        .showMb {
            display: block;
        }
        .showPc {
            display: none;
        }
        .goods-item {
            .goods-img {
                display: flex;
                align-items: flex-start;
                .product-icon {
                    width: 80px;
                    border-radius: 10px;
                }
                .goods-name {
                    margin: 0 0 0 10px;
                    font-size: 18px;
                }
            }
            .goods-desc {
                font-size: 14px;
                margin-top: 15px;
            }
            .bottom-website {
                margin-top: 30px;
                display: flex;
                align-items: center;
                color: #f97300 !important;
            }
        }
        .checkout-item {
            height: 60px;
            line-height: 60px;
        }
        .checkout-item-right {
            font-size: 30px;
            color: #f97300;
        }
        .buy-btn {
            background-color: #f97300;
            color: #fff;
            font-size: 18px;
            width: 100%;
            border-color: #f97300;
            margin: 30px 0 40px 0;
        }
        .more-btn {
            background-color: #f97300;
            color: #fff;
            font-size: 12px;
            margin-left: 10px;
            border-color: #f97300;
        }
        .el-checkbox {
            font-size: 18px;
        }
        .el-checkbox__input.is-checked .el-checkbox__inner {
            background-color: #f97300;
            border-color: #f97300;
        }
        .left {
            width: 48%;
        }
        .right {
            width: 48%;
        }
    }
}
@media (max-width: 1200px) {
    .content {
        padding: 0 10px 0 0;
        .showMb {
            display: none;
        }
        .showPc {
            display: block;
        }
        .goods-item {
            .goods-img {
                display: flex;
                align-items: flex-start;
                .product-icon {
                    width: 60px;
                    border-radius: 7px;
                }
                .goods-name {
                    margin: 0 0 0 10px;
                    font-size: 16px;
                }
            }
            .goods-desc {
                font-size: 14px;
                margin-top: 15px;
            }
            .bottom-website {
                margin-top: 30px;
                display: flex;
                align-items: center;
                color: #f97300 !important;
            }
        }
        .checkout-item {
            height: 40px;
            line-height: 40px;
        }
        .checkout-item-right {
            font-size: 24px;
            color: #f97300;
        }
        .buy-btn {
            background-color: #f97300;
            color: #fff;
            font-size: 18px;
            width: 100%;
            border-color: #f97300;
            margin: 30px 0 40px 0;
        }
        .more-btn {
            background-color: #f97300;
            color: #fff;
            font-size: 12px;
            margin-left: 5px;
            border-color: #f97300;
            padding: 12px 10px;
        }
        .el-checkbox {
            font-size: 18px;
        }
        .el-checkbox__input.is-checked .el-checkbox__inner {
            background-color: #f97300;
            border-color: #f97300;
        }
        .left {
            // width: 48%;
            .payment-denom-container {
                display: grid;
                grid-column-gap: 16px;
                grid-row-gap: 16px;
                grid-auto-rows: 1fr;
                grid-template-columns: repeat(3, 1fr);
            }
        }
        .right {
            margin-top: 30px;
        }
    }
}
</style>