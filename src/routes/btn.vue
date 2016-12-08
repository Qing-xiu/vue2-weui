<template>
	<section class="page btn-page">
		<btn-list>
			<btn type="primary" loading="1">{{loadingText}}</btn>
			<btn type="default" link="https://weui.io">点我链接跳转</btn>
		</btn-list>
		<br>
		<btn-list>
			<btn type="primary">页面主操作 Normal</btn>
			<btn type="primary" disabled>页面主操作 Disbaled</btn>
			<btn type="default">页面次要操作 Normal</btn>
			<btn type="default" disabled>页面次要操作 Disabled</btn>
			<btn type="warn" >警告类操作 Normal</btn>
			<btn type="warn" disabled>警告类操作 Disabled</btn>
		</btn-list>
		<br>
		
		<btn-list direction="horizontal">
			<btn type="primary" plain>按钮 Plain</btn>
			<btn type="default" plain>按钮 Plain</btn>
		</btn-list>
		<br>
		<btn-list direction="horizontal">
			<btn type="primary" plain disabled>PlainDisabled</btn>
			<btn type="default" plain disabled>PlainDisabled</btn>
		</btn-list>
		<br>
		<btn-list direction="horizontal">

			<btn type="primary" size="mini">mini</btn>
			<btn type="default" size="mini">mini</btn>
			<btn type="warn" size="mini">mini</btn>
		</btn-list>
	</section>
</template>

<script>
	import { Btn, BtnList } from '../../components'

	export default {
		data () {
			return {
				loading: false,
				loadingText: '数据请求中...'
			}
		},
		components: {
			Btn,
			BtnList
		},
		methods: {
			showLoading () {
				
			}
		},
		computed: {
		}
	}
</script>

<style>
	.btn-page{
		padding: 15px 0;
	}
	.btn-page h3{
		padding: 15px
	}
</style>