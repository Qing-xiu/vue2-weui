<template>
	<transition name="fade" appear>
		<div v-if="state.visible" class="weui-dialog" :class="{'weui-skin_android': type =='android'}">
			<div v-if="title" class="weui-dialog__hd">
				<strong class="weui-dialog__title">{{title}}</strong>
			</div>
			<div class="weui-dialog__bd">
				{{message}}
			</div>
			<div class="weui-dialog__ft">
				<a v-if="cancelBtnText" href="javascript:;" @click="cancel" class="weui-dialog__btn weui-dialog__btn_default">{{cancelBtnText}}</a>
				<a v-if="confirmBtnText" href="javascript:;" @click="confirm" class="weui-dialog__btn weui-dialog__btn_primary">{{confirmBtnText}}</a>
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
			title: {
				default: '标题'
			},
			message: {
				default: ''
			},
			cancelBtnText: {
				default: '取消'
			},
			confirmBtnText: {
				default: '确定'
			},
			type: {
				default:'android', //'android' 
			},
			resolve: Function
		},

		mounted () {
			this.maskInstance = Mask(true, () => {
				this.state.visible = false
			})
		},
		methods: {
			cancel () {
				if (this.resolve) {
					this.state.visible = false;
					this.maskInstance.close()
					this.resolve(false)
				}
			},
			confirm () {
				if (this.resolve) {
					this.state.visible = false;
					this.maskInstance.close()
					this.resolve(true)
				}
			}
		}
	}
</script>

<style src="../animate/fade.css"></style>
