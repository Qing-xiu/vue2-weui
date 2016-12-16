<template>
	<div @touchstart="handleStart($event)" @touchmove="handleMove($event)" @touchend="handleEnd($event)" class="weui-picker__group">
		<div class="weui-picker__mask"></div>
		<div class="weui-picker__indicator"></div>
		<div :style="{transform: 'translate3d(0px,' + translate + 'px, 0px)', transitionDuration: transition}" class="weui-picker__content">
			<div v-for="item in slots" class="weui-picker__item">{{1990 + item }}年</div>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				translate: 0,
				animating: false,
				originY: 0,
				itemHeight: 25 + 9, //content + padding
				points: []
			}
		},

		props: {
			slots: {
				default() {
					return [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
				}
			}
		},

		computed: {
			transition () {
				return this.animating ? '.3s' : '0s'
			}
		},

		methods: {
			handleStart (e) {
				this.points = []
				this.animating = false
				this.originY = this.translate == 0 ? e.changedTouches[0].pageY : e.changedTouches[0].pageY - this.translate
			},
			handleMove (e) {
				const y = e.changedTouches[0].pageY
				const distanceY = y - this.originY
				
				this.points.push({time: +new Date(), y})
				if (this.points.length > 40) this.points.shift()
				this.translate = Math.round(distanceY)
			},

			handleEnd (e) {
				const time = +new Date()
				const y = e.changedTouches[0].pageY

				this.animating =  true

				//判定惯性滑动
				if (time - this.points[this.points.length -1].time < 100) {
					let startPos
					
					for (let len = this.points.length, i = len -1; i >= 0 && time - this.points[i].time < 100 ; i--) {
						startPos = this.points[i]
					}
					const distanceY = (startPos.y - y) / (startPos.time - time) * 100
					this.animating = true
					this.translate += distanceY
				}

				if (this.translate > this.itemHeight * 3)  {
					this.translate = this.itemHeight * 3
				} else if (Math.abs(this.translate) > (this.slots.length - 4) * this.itemHeight ){
					this.translate = -(this.slots.length - 4) * this.itemHeight
				}
				
			}
		}
	}
</script>

<style>
	.weui-picker__content{
		
	}
</style>