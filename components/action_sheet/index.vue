<template>	
	<transition name="action-sheet" appear>
		<div v-if="state.visible" class="weui-actionsheet">
			<div class="weui-actionsheet__menu">
				<div @click="handle(item.label)" v-for="item in menus" class="weui-actionsheet__cell">{{item.label}}</div>
			</div>

			<div v-if="actions && actions.length > 0" class="weui-actionsheet__action">
				<div @click="handle(item.label)" v-for="item in actions" class="weui-actionsheet__cell">{{item.label}}</div>
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
					visible: true,
					menuVisible: false
				}
			}
		},
		props: {
			menus: Array,
			actions: Array,
			type: 'ios' //'android'
		},
		mounted () {
			Mask(true, () => {
				this.state.visible = false
			})
		}
	}
</script>

<style>
	.weui-actionsheet{
		transform: translateY(0);
	}

	.action-sheet-enter,
	.action-sheet-leave-active {
	  	transform: translateY(100%);
	}
</style>