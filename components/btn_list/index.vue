<template>
	<div class="btn-list" :class="{horizontal: direction == 'horizontal'}">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		props: {
			direction: {
				default: 'vertical' //horizontal
			}
		},
		computed: {

		}
	}
</script>

<style>
	.btn-list{
		padding: 0 15px;
	}
	.btn-list.horizontal{
		display: flex;
		align-items:center;
	}

	.btn-list.horizontal .weui-btn{
		flex:1;
	}
	.btn-list.horizontal .weui-btn+.weui-btn{
		margin-top: 0px;
	}
	.btn-list.horizontal .weui-btn:not(:last-child){
		margin-right: 15px;
	}
</style>