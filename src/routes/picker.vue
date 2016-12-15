<template>
	<section class="page picker-page">
		<btn-list>
			<btn @click="showPicker1">日期选择器</btn>
		</btn-list>
		<picker v-model="picker1Visble"></picker>
	</section>
</template>

<script>
	import { Btn, BtnList, Picker } from '../../components'
	export default {
		data () {
			return {
				picker1Visble: false
			}
		}, 
		components: {
			Btn, 
			BtnList,
			Picker
		},
		methods: {
			showPicker1 () {
				this.picker1Visble = true
			}
		}
	}	
</script>

<style>
	.picker-page{
		padding-top: 15px;
	}
</style>