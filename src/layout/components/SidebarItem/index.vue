<template>
  <div>
    <router-link
      v-slot="{ href, navigate, isActive, isExactActive }"
      custom
      :to="resolvePath(item.path)"
    >
      <a
        :href="isExternal(resolvePath(item.path)) ? resolvePath(item.path) : href"
        :class="[isActive && 'router-link-active', isExactActive && 'router-link-exact-active']"
        :target="isExternal(resolvePath(item.path)) ? '_blank' : '_self'"
        @click="navigate"
      >
        <el-menu-item
          :title="item.meta.title"
          :index="resolvePath(item.path)"
        >
          <div class="menu-item_container">
            <svg-icon
              v-if="item.meta.icon"
              :name="item.meta.icon"
            />
            <div class="menu_title">
              {{ item.meta.title }}
            </div>
          </div>

  
        </el-menu-item>
      </a>
    </router-link>
  </div>
</template>

<script>
import path from 'path'

export default {
    name: 'SidebarItem',
    props: {
        item: {
            type: Object,
            required: true
        },
        basePath: {
            type: String,
            default: ''
        }
    },
    data() {
        return {}
    },
    computed: {

    },
    created() {},
    mounted() {},
    methods: {
        isExternal(path) {
            return /^(https?:|mailto:|tel:)/.test(path)
        },
        resolvePath(routePath) {
            if (this.isExternal(routePath)) {
                return routePath
            }
            if (this.isExternal(this.basePath)) {
                return this.basePath
            }
            return path.resolve(this.basePath, routePath)
        }
    }
}
</script>

<style lang="scss" scoped>
::v-deep .el-menu-item,
::v-deep .el-menu-item span,
::v-deep .el-submenu__title,
::v-deep .el-submenu__title span {
    vertical-align: inherit;
    @include text-overflow;
}
::v-deep .el-menu-item,
::v-deep .el-submenu__title {
    display: flex;
    align-items: center;
}
.el-menu-item {
    background-color: $g-sub-sidebar-bg !important;
    &:hover {
        background-color: $g-sub-sidebar-menu-active-bg !important;
        color: #fff !important;
    }
}
::v-deep .el-menu-item.is-active,
::v-deep .el-submenu .el-menu--inline .el-menu-item.is-active {
    background-color: $g-sub-sidebar-menu-active-bg !important;
}
::v-deep .el-submenu,
::v-deep .el-menu-item {
    .svg-icon {
        font-size: 30px;
        vertical-align: -0.25em;
        transition: all 0.3s;
    }
    &:hover > .svg-icon,
    .el-submenu__title:hover > .svg-icon {
        transform: scale(1.2);
    }
}
a {
    cursor: pointer;
    color: inherit;
    text-decoration: none;
}
.menu_title {
    font-size: 14px;
    line-height: 14px;
    text-decoration: none;
    font-weight: 400;
    margin-top: 5px;
}
</style>

<style lang="scss">
.el-menu--collapse .el-submenu.is-active > .el-submenu__title {
    color: $g-sub-sidebar-menu-active-color !important;
    background-color: $g-sub-sidebar-menu-active-bg !important;
}

</style>

<style lang="scss" scoped>

::v-deep .el-menu-item {
    padding: 0 0;
    width: 100%;
    height: 100%;
    line-height: normal;
    padding-left: 0 !important;
    .menu-item_container {
        width: 80px;
        text-align: center;
        padding: 15px 0;
    }
}

</style>