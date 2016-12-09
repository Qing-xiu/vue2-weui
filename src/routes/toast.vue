<template>
	<section class="toast-page page">
		<btn-list>
			<btn @click="showSuccessToast">成功提示</btn>
			<btn @click="showLoadingToast">加载中提示</btn>
			<btn @click="showLoading3">手动控制3s后关闭</btn>
			<btn @click="showLoading4">关闭后回调</btn>
		</btn-list>
	</section>
</template>

<script>
	import { Toast, Btn, BtnList } from '../../components'

	export default {
		components: {
			Btn, BtnList
		},
		methods: {
			showSuccessToast () {
				Toast.success('请求成功').then(() =>{
					console.log('end')
				})
			},
			showLoadingToast () {
				Toast.loading('数据加载中')
			},
			showLoading3 () {
				const vm = Toast.loading('数据加载中', 0)
				setTimeout(() => {
					vm.close()
				}, 3000)
			},
			showLoading4 () {
				Toast.loading('请求成功').then(() => {
					alert('end')
				})
			}
		}
	}
</script>

<style>
	.toast-page{
		padding: 15px 0;
	}
</style>
