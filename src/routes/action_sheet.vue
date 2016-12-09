<template>
	<section class="page action-sheet-page">
		<btn-list>
			<btn @click="showActionSheet" type="primary">action sheet</btn>	
		</btn-list>
	</section>
</template>

<script>
	import { ActionSheet, Btn, BtnList } from '../../components'

	export default {
		data () {
			return {
				visible: false,				
				menus: [
					{label: '菜单'},{label: '菜单(disabled)', disabled: true},{label: '菜单'}
				],
				actions: [
					{label: '取消'},
				]
			}
		},
		components: {
			Btn,
			BtnList
		},
		methods: {
			showActionSheet () {
				ActionSheet(this.menus, this.actions).then(item => {
					console.log(item.label)
				})
			}
		}
	}
</script>

<style>
	.action-sheet-page{
		padding: 15px 0;
	}
</style>