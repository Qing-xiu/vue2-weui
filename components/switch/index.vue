<template>
  <input type="checkbox" :checked="value" @click="change($event)" class="weui-switch">
</template>

<script>
  export default {
    props: {
      value: {
        default: 0
      },
      disabeld: {
      	default: null
      }
    },
    methods: {
      change ($event) {
      	if (this.disabeld === null) {
      		this.$emit('input', $event.target.checked)
      	}
      }
    }
  }
</script>