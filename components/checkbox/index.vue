<template>
	<div class="weui-cells_checkbox">
		<input @change="handle($event.target.checked)" type="checkbox" class="weui-check">
		<i class="weui-icon-checked"></i>
	</div>
</template>

<script>
	export default {
		props: {
			value: Boolean
		},
		methods: {
			handle (checked) {
				console.log(123)
				console.log(checked)
			}
		}
	}
</script>
