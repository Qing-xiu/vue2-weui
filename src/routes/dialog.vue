<template>
	<section class="dialog-page">
		<btn-list>
			<btn @click="showDialog1" type="primary">ios 标准</btn>
			<btn @click="showDialog2" type="primary">ios 无标题</btn>
			<btn @click="showDialog3" type="primary">ios 只有一个按钮</btn>
			
			<btn @click="showDialog4" type="primary">android 标准</btn>
			<btn @click="showDialog5" type="primary">android 无标题</btn>
			<btn @click="showDialog6" type="primary">android 只有一个按钮</btn>
		</btn-list>
	</section>
</template>

<script>
	import { Dialog, Btn, BtnList } from '../../components'

	export default {
		components: {
			Btn, BtnList
		},
		methods: {
			showDialog1 () {
				Dialog({
					title: '自定义标题',
					message: '这是dialog内的message',
					confirmBtnText: '确定',
					cancelBtnText: '取消'
				}).then(confirm => {
					console.log(confirm)
				})
			},
			showDialog2 () {
				Dialog({
					message: '这是dialog内的message',
					confirmBtnText: '确定',
					cancelBtnText: '取消',
					
				}).then(confirm => {
					console.log(confirm)
				})
			},
			showDialog3 () {
				Dialog({
					title: '标题',
					message: '这是dialog内的message',
					confirmBtnText: '确定',
					
				}).then(confirm => {
					console.log(confirm)
				})
			},
			showDialog4 () {
				Dialog({
					title: '自定义标题',
					message: '这是dialog内的message',
					confirmBtnText: '确定',
					cancelBtnText: '取消',
					type: 'android'
				}).then(confirm => {
					console.log(confirm)
				})
			},
			showDialog5 () {
				Dialog({
					message: '这是dialog内的message',
					confirmBtnText: '确定',
					cancelBtnText: '取消',
					type: 'android'
				}).then(confirm => {
					console.log(confirm)
				})
			},
			showDialog6 () {
				Dialog({
					title: '标题',
					message: '这是dialog内的message',
					confirmBtnText: '确定',
					type: 'android'
				}).then(confirm => {
					console.log(confirm)
				})
			}
		}
	}
</script>

<style>
	.dialog-page{
		padding: 15px 0;
	}
</style>