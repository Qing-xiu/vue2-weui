<template>
	<transition name="weui-picker" >
		<div v-show="value" class="weui-picker">
			<div class="weui-picker__hd">
				<a href="javascript:;" class="weui-picker__action">取消</a>
				<a href="javascript:;" class="weui-picker__action">确定</a>
			</div>
			<div class="weui-picker__bd">
				<picker-group></picker-group>
				<picker-group></picker-group>
			</div>
		</div>
	</transition>
</template>

<script>
	import Mask from '../mask'
	import PickerGroup from './picker_group.vue'

	export default {
		props: {
			value: {
				default: false
			}
		},
		watch: {
			value (newVal) {
				if (newVal) {
					this.maskInstance = Mask(true, this.cancel)
				} else {
					this.maskInstance && this.maskInstance.close()	
				}
			}
		},
		components: {
			PickerGroup
		},

		methods: {
			cancel () {
				this.$emit('input', false)
			}
		}
	}
</script>

<style>

	.weui-picker{
		transform: translateY(0);
	}

	

	.weui-picker-enter,
	.weui-picker-leave-active {
	  	transform: translateY(100%) translateZ(0);
	}
</style>