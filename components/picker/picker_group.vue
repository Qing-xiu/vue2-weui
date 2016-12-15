<template>
	<div @touchstart="handleStart($event)" @touchmove="handleMove($event)" @touchend="handleEnd($event)" class="weui-picker__group">
		<div class="weui-picker__mask"></div>
		<div class="weui-picker__indicator"></div>
		<div :style="{transform: 'translate3d(0px,' + translate + 'px, 0px)', transition: transition}" class="weui-picker__content">
			<div v-for="item in 10" class="weui-picker__item">{{1990 + item }}年</div>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				translate: 0,
				transition: 'all 1s',
				originY: 0
			}
		},
		methods: {
			handleStart (e) {
				this.originY = this.translate == 0 ? e.targetTouches[0].pageY : e.targetTouches[0].pageY - this.translate
			},
			handleMove (e) {
				const y = this.originY
				//this.transition = 'all 0s'
				this.translate = Math.round(e.targetTouches[0].pageY - y)
			},

			handleEnd (e) {
				console.log('end')
				
			}
		}
	}
</script>

<style>
</style>