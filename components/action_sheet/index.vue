<template>
	<transition name="action-sheet-ios" appear>
		<div v-if="state.visible"  class="weui-actionsheet">
			<div class="weui-actionsheet__menu">
				<div @click="handle(item)" v-for="item in menus" class="weui-actionsheet__cell" :class="{'weui-actionsheet__cell-disabled': item.disabled}">{{item.label}}</div>
			</div>

			<div v-if="actions && actions.length > 0" class="weui-actionsheet__action">
				<div @click="handle(item)" v-for="item in actions" class="weui-actionsheet__cell">{{item.label}}</div>
			</div>
		</div>
	</transition>
</template>

<script>
	import Mask from '../mask'

	export default {
		data () {
			return {
				state: {
					visible: true
				}
			}
		},
		props: {
			menus: Array,
			actions: Array,
			resolve: Function
		},
		mounted () {
			this.maskInstance = Mask(true, () => {
				this.state.visible = false
			})
		},

		methods: {
			handle (item) {
				if (this.resolve && !item.disabled) {
					this.maskInstance.close()
					this.state.visible = false
					this.resolve(item)
				}
			}
		}
	}
</script>

<style>
	.weui-actionsheet{
		transform: translateY(0);
	}
	.weui-actionsheet__cell-disabled{
		color: rgba(0,0,0, .3)
	}

	.action-sheet-ios-enter,
	.action-sheet-ios-leave-active {
	  	transform: translateY(100%);
	}

	.action-sheet-android-enter,
	.action-sheet-android-leave-active {
	  	transform: translateY(100%);
	}

</style>