<template>
	<span class="weui-cells_checkbox">
		<input @change="this.$emit('input', $event.target.checked)" type="checkbox" class="weui-check">
		<i class="weui-icon-checked"></i>
	</span>
</template>

<script>
	export default {
		props: {
			value: Boolean
		}
	}
</script>
