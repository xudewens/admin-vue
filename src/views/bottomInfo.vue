<template>
    <div id="bottom">
        <div class="left">
            <div class="logo"></div>
            <div class="content">
                GLOBGAME is one of the outstanding e-commerce platforms in Indonesia. We are committed to building a comprehensive e-commerce service platform that integrates product display, online transactions, payment settlement, and logistics distribution. Since its e
            </div>
        </div>
        <div class="right"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    }
}
</script>

<style lang="scss" scoped>
    #bottom {
        padding: 10px 20px;
        background-color: #390f6b;
        margin-right: 10px;
    }
    @media (min-width: 576px) {
        #bottom {

        }
    }
    @media (min-width: 1200px) {
        #bottom {
            display: flex;
            .left {
                width: 70%;
                .logo {
                    width: 410px;
                    height: 50px;
                    background-color: #fff;
                    margin-bottom: 20px;
                }
                .content {
                    font-size: 18px;
                }
            }
        }
    }
</style>