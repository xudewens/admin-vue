<template>
  <div id="Transaction">
      <div class="searchTop">
          <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
            <el-radio-button label="top">1 Day</el-radio-button>
            <el-radio-button label="right">7 Days</el-radio-button>
            <el-radio-button label="bottom">15 Days</el-radio-button>
            <el-radio-button label="left">30 Days</el-radio-button>
          </el-radio-group>
      </div>
      <div class="tableBox" style="display: flex; justify-content: center; padding: 0 5%;">
          <el-table :data="tableData" style="width: 80%;" max-height="800" class="showMb">
              <el-table-column prop="imgSrc" width="130">
                  <template slot-scope="scoped">
                      <img :src="scoped.row.imgSrc" alt="" width="120px">
                  </template>
              </el-table-column>
              <el-table-column prop="name" label="Name"></el-table-column>
              <el-table-column prop="Item" label="Item"></el-table-column>
              <el-table-column prop="Amount" label="Amount"></el-table-column>
              <el-table-column prop="Date" label="Date"></el-table-column>
              <el-table-column prop="Status" label="Status"></el-table-column>
              <el-table-column>
                  <template slot-scope="scoped">
                    <div style="display: flex; justify-content: flex-end;">
                      <div style="display: flex; justify-content: center; width: 30px; height: 30px; border-radius: 50%; background-color: #fff; align-items: center; cursor: pointer;" @click="openDetails(scoped.row)">
                          <i class="el-icon-arrow-right" style="color: black; font-style: 18px;"></i>
                      </div>
                    </div>
                  </template>
              </el-table-column>
          </el-table>
      </div>
      <div class="showPc">
          <div class="order-item" v-for="item in tableData">
              <div class="left">
                  <img :src="item.imgSrc" alt="" width="100"> 
              </div>
              <div class="right">
                  <div class="top">
                      <div class="orderName">
                          One Punch Man : The Strongest
                      </div>
                      <div class="staus">
                        Success
                      </div>
                  </div>
                  <div class="center">
                    Rp 16.000
                  </div>
                  <div class="bottom">
                    <span>65 Jade</span>
                    <span>Apr 20, 2024</span>
                  </div>
              </div>
          </div>
      </div>
      <el-dialog
          :visible.sync="dialogVisible"
          width="40%"
          title="Order Information"
          >
            <el-card class="box-card goods-item showMb">
                      <div class="goods-img">
                          <img src="https://cdn.unipin.com/images/icon_product_pages/1711000595-icon-icon_11zon.png" alt="Paw Rumble" class="product-icon">
                          <p class="goods-name">Ghost Story: Love Destiny</p>
                      </div>
            </el-card>
            <el-card class="box-card">
                <div class="checkout-item" style="display: flex; justify-content: space-between;">
                    <div style="display: flex; align-items: center;">
                        <svg t="1732612280595" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9637" width="20" height="20"><path d="M512.8 216l185.6 200H327.2l185.6-200z m273.6 200h172.8l-224-288h-56l107.2 288z m-273.6 413.6L732 448H292.8l220 381.6zM647.2 128H377.6L276 412.8 512.8 168l236.8 245.6L647.2 128z m121.6 320l-256 450.4-256-450.4H87.2L512 963.2 933.6 448H768.8z m-530.4-32l107.2-288h-56L68 416h170.4z" p-id="9638" fill="#ffffff"></path></svg>
                        <span style="margin-left: 5px;">Email Address</span>
                    </div>
                    <div class="checkout-item-right1">
                        ahhdag@Gmail.com
                    </div>
                </div>
                <div class="checkout-item" style="display: flex; justify-content: space-between;">
                    <div style="display: flex; align-items: center;">
                        <svg t="1732612280595" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9637" width="20" height="20"><path d="M512.8 216l185.6 200H327.2l185.6-200z m273.6 200h172.8l-224-288h-56l107.2 288z m-273.6 413.6L732 448H292.8l220 381.6zM647.2 128H377.6L276 412.8 512.8 168l236.8 245.6L647.2 128z m121.6 320l-256 450.4-256-450.4H87.2L512 963.2 933.6 448H768.8z m-530.4-32l107.2-288h-56L68 416h170.4z" p-id="9638" fill="#ffffff"></path></svg>
                        <span style="margin-left: 5px;">Game ID</span>
                    </div>
                    <div class="checkout-item-right1">
                        asksakdj88372
                    </div>
                </div>
            </el-card>
            <el-card class="box-card">
                <!-- <div class="step-title" style="display: flex; align-items: center; margin-bottom: 15px;">
                    Check out
                </div> -->
                <div class="checkout-item" style="display: flex; justify-content: space-between;">
                    <div style="display: flex; align-items: center;">
                        <svg t="1732612280595" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9637" width="20" height="20"><path d="M512.8 216l185.6 200H327.2l185.6-200z m273.6 200h172.8l-224-288h-56l107.2 288z m-273.6 413.6L732 448H292.8l220 381.6zM647.2 128H377.6L276 412.8 512.8 168l236.8 245.6L647.2 128z m121.6 320l-256 450.4-256-450.4H87.2L512 963.2 933.6 448H768.8z m-530.4-32l107.2-288h-56L68 416h170.4z" p-id="9638" fill="#ffffff"></path></svg>
                        <span style="margin-left: 5px;">Item</span>
                    </div>
                    <div class="checkout-item-right1">
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
                <div class="checkout-item" style="display: flex; justify-content: space-between;">
                    <div style="display: flex; align-items: center;">
                        <svg t="1732612280595" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9637" width="20" height="20"><path d="M512.8 216l185.6 200H327.2l185.6-200z m273.6 200h172.8l-224-288h-56l107.2 288z m-273.6 413.6L732 448H292.8l220 381.6zM647.2 128H377.6L276 412.8 512.8 168l236.8 245.6L647.2 128z m121.6 320l-256 450.4-256-450.4H87.2L512 963.2 933.6 448H768.8z m-530.4-32l107.2-288h-56L68 416h170.4z" p-id="9638" fill="#ffffff"></path></svg>
                        <span style="margin-left: 5px;">Payment Channel</span>
                    </div>
                    <div class="checkout-item-right1">
                        65 Jade
                    </div>
                </div>
            </el-card>
            <el-card class="box-card">
                <div class="checkout-item" style="display: flex; justify-content: space-between;">
                    <div style="display: flex; align-items: center;">
                        <svg t="1732612280595" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9637" width="20" height="20"><path d="M512.8 216l185.6 200H327.2l185.6-200z m273.6 200h172.8l-224-288h-56l107.2 288z m-273.6 413.6L732 448H292.8l220 381.6zM647.2 128H377.6L276 412.8 512.8 168l236.8 245.6L647.2 128z m121.6 320l-256 450.4-256-450.4H87.2L512 963.2 933.6 448H768.8z m-530.4-32l107.2-288h-56L68 416h170.4z" p-id="9638" fill="#ffffff"></path></svg>
                        <span style="margin-left: 5px;">Order</span>
                    </div>
                    <div class="checkout-item-right1">
                        G812371764123152
                    </div>
                </div>
                <div class="checkout-item" style="display: flex; justify-content: space-between;">
                    <div style="display: flex; align-items: center;">
                        <svg t="1732612280595" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9637" width="20" height="20"><path d="M512.8 216l185.6 200H327.2l185.6-200z m273.6 200h172.8l-224-288h-56l107.2 288z m-273.6 413.6L732 448H292.8l220 381.6zM647.2 128H377.6L276 412.8 512.8 168l236.8 245.6L647.2 128z m121.6 320l-256 450.4-256-450.4H87.2L512 963.2 933.6 448H768.8z m-530.4-32l107.2-288h-56L68 416h170.4z" p-id="9638" fill="#ffffff"></path></svg>
                        <span style="margin-left: 5px;">Date</span>
                    </div>
                    <div class="checkout-item-right1">
                       Apr 20, 2024
                    </div>
                </div>
                <div class="checkout-item" style="display: flex; justify-content: space-between;">
                    <div style="display: flex; align-items: center;">
                        <svg t="1732612280595" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9637" width="20" height="20"><path d="M512.8 216l185.6 200H327.2l185.6-200z m273.6 200h172.8l-224-288h-56l107.2 288z m-273.6 413.6L732 448H292.8l220 381.6zM647.2 128H377.6L276 412.8 512.8 168l236.8 245.6L647.2 128z m121.6 320l-256 450.4-256-450.4H87.2L512 963.2 933.6 448H768.8z m-530.4-32l107.2-288h-56L68 416h170.4z" p-id="9638" fill="#ffffff"></path></svg>
                        <span style="margin-left: 5px;">Status</span>
                    </div>
                    <div class="checkout-item-right1">
                        Success
                    </div>
                </div>
            </el-card>
      </el-dialog>
  </div>
</template>

<script>
export default {
    data() {
        return {
          tabPosition:'top',
          tableData: [{
              Item: '65 Jade',
              name: 'One Punch Man : The Strongest',
              Amount: 16000,
              imgSrc:'	https://cdn.unipin.com/images/icon_product_pages/1724239711-icon-icon_11zon.jpg',
              Date:'Apr 20, 2024',
              Status:'Success'
          }, {
              Item: '65 Jade',
              name: 'One Punch Man : The Strongest',
              Amount: 16000,
              imgSrc:'	https://cdn.unipin.com/images/icon_product_pages/1724239711-icon-icon_11zon.jpg',
              Date:'Apr 20, 2024',
              Status:'Success'
          }, {
              Item: '65 Jade',
              name: 'One Punch Man : The Strongest',
              Amount: 16000,
              imgSrc:'	https://cdn.unipin.com/images/icon_product_pages/1724239711-icon-icon_11zon.jpg',
              Date:'Apr 20, 2024',
              Status:'Success'
          }, {
              Item: '65 Jade',
              name: 'One Punch Man : The Strongest',
              Amount: 16000,
              imgSrc:'	https://cdn.unipin.com/images/icon_product_pages/1724239711-icon-icon_11zon.jpg',
              Date:'Apr 20, 2024',
              Status:'Success'
          }, {
              Item: '65 Jade',
              name: 'One Punch Man : The Strongest',
              Amount: 16000,
              imgSrc:'	https://cdn.unipin.com/images/icon_product_pages/1724239711-icon-icon_11zon.jpg',
              Date:'Apr 20, 2024',
              Status:'Success'
          }, {
              Item: '65 Jade',
              name: 'One Punch Man : The Strongest',
              Amount: 16000,
              imgSrc:'	https://cdn.unipin.com/images/icon_product_pages/1724239711-icon-icon_11zon.jpg',
              Date:'Apr 20, 2024',
              Status:'Success'
          }, {
              Item: '65 Jade',
              name: 'One Punch Man : The Strongest',
              Amount: 16000,
              imgSrc:'	https://cdn.unipin.com/images/icon_product_pages/1724239711-icon-icon_11zon.jpg',
              Date:'Apr 20, 2024',
              Status:'Success'
          }],
          dialogVisible:false,
        }
    },
    methods: {
        // 订单详情
        openDetails(item) {
            this.dialogVisible = true
        }
    },  
}
</script>

<style lang="scss" scoped>
@media (min-width: 1200px) {
    .showMb {
        display: block;
    }
    .showPc {
        display: none;
    }
}
@media (max-width: 1200px) {
    .showMb {
        display: none;
    }
    .showPc {
        display: block;
        .order-item {
            position: relative;
            height: 75px;
            width: 100%;
            border-radius: 5px;
            background-color: #390f6b !important;
            margin: 36px 10px 36px 0;
            display: flex;
            .left {
                position: absolute;
                left: 0;
                top: -18px;
                width: 100px;
                height: 100px;
                border-radius: 5px;
                background-color: #fff;
                img {
                    border-radius: 5px;
                }
            }
            .right {
                padding: 5px 5px 5px 105px;
                width: 100%;
                .top {
                    display: flex;
                    justify-content: space-between;
                    .orderName {
                        width: 140px;
                        height: 27px;
                        font-size: 11px;
                        color: #fff;
                        font-weight: bold;
                    }
                    .staus {
                        font-size: 10px;
                    }
                }
                .center {
                    display: flex;
                    justify-content: flex-end;
                    color: #f97300;
                    font-weight: bold;
                    font-size: 14px;
                }
                .bottom {
                    display: flex;
                    justify-content: space-between;
                    padding-top: 5px;
                    font-size: 8px;
                    color: #fff;
                }
            }
        }
        .order-item:first-child {
            margin-top: 10px;
        }
        .order-item:last-child {
            margin-bottom: 60px;
        }
    }
}
.searchTop {
    display: flex;
    justify-content: flex-end;
}
::v-deep .el-table .el-table__cell {
    background-color: #351267;
    color: #fff;
}
::v-deep .el-table__row-hover {
    background-color: inherit;
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
::v-deep .el-dialog__title {
    font-size: 24px;
    color: #fff;
    font-weight: bold;
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
    font-size: 20px;
}
.checkout-item-right {
    font-size: 24px;
    color: #f97300;
    font-weight: bold;
}
.checkout-item-right1 {
    font-size: 24px;
    // color: #f97300;
    font-weight: 400 !important;
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
</style>