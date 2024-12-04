<template>
  <!-- 商品搜索 -->
  <div id="productSearch">
    <topBar>Search</topBar>
    <van-search v-model="searchValue" shape="round" background="#9b86b4" placeholder="Search..." clearable style="margin: 0 8%;" v-if="$store.state.settings.mode !== 'pc'" />
    <div v-if="!productList.length" style="height: 400px; flex-direction: column; display: flex; align-items: center; justify-content: center; font-size: 22px;">
        No data found
        <img src="../../assets/images/noData.png" alt="" width="550" style="margin-top: 10px;">
    </div>
    <div
      id="home-favourite-track"
      class="cards-hscroll-track"
      style="padding-left: 10px;"
    >
      <div class="cards-hscroll-container card-hscroll-limit-productSearchfeatured hftc cards-hscroll-container2">
        <div
          v-for="item in 1"
          :key="item"
          @click="toDetails(item)"
          class="card-sizer o"
        >
          <div class="card-container a-plain">
            <div class="card-image flex-shrink-0">
              <img
                src="https://cdn.unipin.com/images/icon_product_pages/1731057021-icon-iocn-soul land 200_11zon.png"
                alt=""
              >
            </div>
            <div class="card-title-publisher-wrap">
              <div class="card-game-publisher">
                UniPin
              </div>
              <div class="card-game-title">
                UniPin Voucher (ID)
              </div>
            </div>
            <div class="card-actions">
              <div class="topup-button rounded-pill flex-center-xy">
                top up
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <bottomInfo />
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
             searchValue:'',
             productList:[
                
             ]
        }
    },
    methods: {
      // 商品详情
      toDetails(item){
        this.$router.push({
          path:'/productDetail',
          query:{}
        })
      },
      loadMore() {
        this.$router.push({
          path:'/allProduct',
          query:{}
        })
      }
    },  
}
</script>

<style lang="scss" scoped>
    #productSearch {
        color: #fff;
        font-size: 14px;
        .sub-caption {
            color: #b7d450;
            padding: 10px 0;
        }
        h2 {
            margin: 0;
        }
        .cards-hscroll-track {
            width: 100%;
            padding-bottom: 15px;
            padding-top: 10px;
            overflow-x: scroll;
            -ms-overflow-style: none;
            // scrollbar-width: none;
        }
        .van-search__content {
            background-color: #c6b6d8;
        }
        ::v-deep .van-field__control {
            color: #fff !important;
        }
        ::v-deep .van-field__left-icon {
            color: #fff !important;
        }
        // .home-featured-tab-content .cards-hscroll-container.card-hscroll-limit-productSearchfeatured {
        //     height: 240px;
        //     margin-left: 15px;
        // }
        .cards-hscroll-container {
            display: -webkit-box;
            display: flex;
        }
        .cards-hscroll-container2 {
            flex-wrap: wrap;
        }
        .card-container {
            border-radius: 30px;
            display: -webkit-box;
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            text-align: center;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            flex-direction: column;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.07), 0 4px 5px rgba(0, 0, 0, 0.06), 0 1px 10px rgba(0, 0, 0, 0.1);
            background-color: #390f6b;
            position: relative;
            margin-top: 10px;
        }
        .a-plain {
            text-decoration: none !important;
            color: inherit !important;
        }
        .card-container .card-image {
            background-color: #000;
            border-radius: 30px;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            top: -10px;
            width: 100%;
            padding-top: 100%;
            position: relative;
        }
        .flex-shrink-0 {
            flex-shrink: 0 !important;
        }
        .card-image {
            width: 100%;
            position: relative;
            border-radius: 21px;
        }
        .card-container .card-image img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            -o-object-fit: cover;
            object-fit: cover;
            border-radius: 30px;
            vertical-align: middle;
        }
        .card-container .card-title-publisher-wrap {
            -webkit-box-flex: 1;
            flex-grow: 1;
            font-size: 11px;
            padding: 0 8px 8px;
        }
        // .card-container .card-game-publisher,
        // .card-container .card-game-title {
        //     display: -webkit-box;
        //     -webkit-box-orient: vertical;
        //     overflow: hidden;
        //     text-overflow: ellipsis;
        // }
        .cards-hscroll-container .card-sizer {
            position: relative;
            padding: 0 15px 15px 0;
            flex-shrink: 0;
            width: 115px;
            max-width: 250px;
            cursor: pointer;
            .tags {
                padding: 4px 6px;
                background-color: #f00;
                font-size: 12px;
                color: #fff;
                position: absolute;
                top: -10px;
                right: 5px;
                border-radius: 2px;
            }
        }
        .card-container .card-game-publisher {
            word-break: break-all;
            font-weight: 400;
            color: #bec4cf;
            font-size: 12px;
            -webkit-line-clamp: 1;
        }
        .card-container .card-game-title {
            margin-top: 2px;
            font-weight: 500;
            -webkit-line-clamp: 2;
            height: 3em;
        }
        .card-container .card-game-publisher,
        .card-container .card-game-title {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .card-container .card-actions {
            display: -webkit-box;
            display: flex;
            width: 100%;
            padding: 0 8px 8px;
        }
        .card-container .topup-button {
            color: #ff962d;
            border: 1px solid #ff962d;
            border-radius: 12px;
            text-transform: uppercase;
            cursor: pointer;
            -webkit-box-flex: 1;
            flex-grow: 1;
            padding: 3px;
            width: 100%;
            font-size: 10px;
        }
        .flex-center-xy {
            display: -webkit-box;
            display: flex;
            -webkit-box-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            align-items: center;
        }
        .rounded-pill {
            border-radius: 50rem !important;
        }
        .card-container .topup-button:active,
        .card-container .topup-button:focus .card-container .topup-button:focus-within,
        .card-container .topup-button:hover {
            text-decoration: none;
            color: #fff;
            background: #ff962d;
        }
        .home-featured-tab-content .cards-hscroll-container.card-hscroll-limit-productSearchfeatured {
            display: flex;
            height: 240px;
            margin-left: 15px;
            flex-wrap: wrap;
        }
        .loadmore {
            font-size: 18px;
            color: #fff;
            font-weight: bold;
            padding: 10px 0;
            border-radius: 3px;
            background-color: #390f6b;
            text-align: center;
            margin: 0 10px 20px 0;
            cursor: pointer;
        }
        @media (min-width: 576px) {
            .home-featured-tab-content .cards-hscroll-container.card-hscroll-limit-productSearchfeatured {
                height: 300px;
            }
        }
        @media (min-width: 576px) {
            .card-container {
                padding: 0 0 12px;
            }
        }
        @media (min-width: 576px) {
            .card-container .topup-button {
                font-size: 12px;
            }
        }
        @media (min-width: 576px) {
            .card-container .card-actions {
                padding: 0 12px;
            }
        }
        @media (min-width: 576px) {
            .card-container .topup-button {
                font-size: 12px;
            }
        }
        @media (min-width: 576px) {
            .card-container .card-title-publisher-wrap {
                padding: 0 12px;
            }
        }
        @media (min-width: 576px) {
            .cards-hscroll-container .card-sizer {
                width: 135px;
                .tags {
                    padding: 5px 10px;
                    background-color: #f00;
                    font-size: 12px;
                    color: #fff;
                    position: absolute;
                    top: -10px;
                    right: 0;
                    border-radius: 2px;
                }
            }
        }
        @media (min-width: 768px) {
            .card-container .card-title-publisher-wrap {
                font-size: 14px;
            }
        }
        @media (min-width: 768px) {
            .cards-hscroll-container .card-sizer {
                width: 165px;
                .tags {
                    padding: 5px 10px;
                    background-color: #f00;
                    font-size: 12px;
                    color: #fff;
                    position: absolute;
                    top: -10px;
                    right: 0;
                    border-radius: 2px;
                }
            }
        }
        @media (min-width: 992px) {
            .home-featured-tab-content .card-container .card-game-title {
                -webkit-line-clamp: 3;
                font-size: 1.142rem;
                line-height: 21px;
            }
        }
        @media (min-width: 992px) {
            .card-container .card-game-title {
                height: 4.2em;
            }
            .van-search {
                // display: none;
            }
        }
        @media (min-width: 992px) {
            .cards-hscroll-container .card-sizer {
                width: 16%;
                .tags {
                    padding: 8px 15px;
                    background-color: #f00;
                    color: #fff;
                    position: absolute;
                    top: -10px;
                    right: 0;
                    border-radius: 4px;
                }
            }
        }
        @media (min-width: 992px) {
            .home-featured-tab-content .cards-hscroll-container.card-hscroll-limit-productSearchfeatured {
                height: 315px;
                width: auto;
                margin-left: 30px;
                margin-right: 0;
            }
        }
        @media (min-width: 1200px) {
            .home-featured-tab-content .cards-hscroll-container.card-hscroll-limit-productSearchfeatured {
                height: 385px;
            }
        }
        @media (min-width: 1200px) {
            .card-container {
                margin-top: 14px;
                padding: 0 0 15px;
            }
        }
        @media (min-width: 1200px) {
            .card-container .card-actions {
                padding: 0 15px;
            }
        }
        @media (min-width: 1200px) {
            .card-container .card-title-publisher-wrap {
                padding: 0 15px;
            }
            .tags {
                padding: 10px 20px;
                background-color: #f00;
                color: #fff;
                position: absolute;
                top: -10px;
                right: 0;
                border-radius: 4px;
            }
        }
    }
</style>