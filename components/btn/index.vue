<template>
  <a :href="link ? link : 'javascript:;'" class="weui-btn" @click="handle" :class="[btnClass, disabledClass, sizeClass]">
    <i v-if="loading" class="weui-loading"></i>
    <span class="btn-text"><slot>确定</slot></span>
  </a>
</template>

<script>
export default {
  props: {
    link: {
      default: ''
    },
    plain: {
      default: null
    },
    type: {
      default: 'default' // 'default, primary, warn'
    },
    disabled: {
      default: null
    },
    size: {
      default: '' // 'mini'
    },
    loading: {
      default: false
    }
  },
  computed: {
    btnClass () {
      const cls = 'weui-btn_' + (this.plain !== null ? 'plain-' : '') + this.type
      return cls
    },
    disabledClass () {
      return this.disabled !== null ? (this.plain !== null ? 'weui-btn_plain-disabled' : 'weui-btn_disabled') : ''
    },
    sizeClass () {
      return this.size === 'mini' ? 'weui-btn_mini' : ''
    }
  },
  methods: {
    handle () {
      if (this.loading || this.disabled) return;
      this.$emit('click')
    }
  }
}
</script>

<style>
</style>