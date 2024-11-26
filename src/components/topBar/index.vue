<template>
  <div class="topBar">
      <div class="title-container">
        <i class="el-icon-arrow-left" style="margin-right: 5px; font-weight: bold; cursor: pointer;" @click="$router.go(-1)"></i>
        <span class="title">{{ title }}</span>
      </div>
      <slot />
  </div>
</template>

<script>
export default {
  name: 'topBar',
  props: {
      title: {
          type: String,
          default: ''
      }
  }
}
</script>

<style lang="scss" scoped>
.topBar {
    position: relative;
    margin: 20px 30px;
    padding: 20px 0;
    font-size: 24px;
    font-weight: bold;
    color: #fff;
    background-color: #9b86b4;
    display: flex;
}
@media (max-width: 1200px) {
    .topBar {
        margin: 0;
        font-size: 16px;
    }
}
</style>
