<template>
	<transition	name="fade" appear>
		<section v-if="state.visible">
			<div class="weui-mask_transparent"></div>
			<div class="weui-toast">
				<i class="weui-icon_toast" :class="iconClass"></i>
				<p class="weui-toast__content">{{message}}</p>
			</div>
		</section>
	</transition>
</template>

<script>
	export default {
		name: 'toast',
		data () {
			return {
				state: {
					visible : true
				}
			}
		},
		props: {
			type: {
				default: ''
			},
			message: String,
			duration: {
				default: 1500
			},
			resolve: Function
		},
		mounted () {
			if (this.duration) {
				setTimeout(() => {
					this.state.visible = false
					if (this.resolve) {
						this.resolve()
					}
				}, this.duration)
			}
		},
		computed: {
			iconClass () {
				return {
					'weui-icon-success-no-circle': this.type === 'success',
					'weui-loading': this.type === 'loading',
				}
			}
		},
		methods: {
			close () {
				this.state.visible = false
			}
		}
	}
</script>

<style src="../animate/fade.css"></style>
