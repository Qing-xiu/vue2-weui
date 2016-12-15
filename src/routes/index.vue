<template>
	<section class="page index-page">
		<router-link class="item" to="/btn">btn</router-link>
		<router-link class="item" to="/action_sheet">action-sheet</router-link>
		<router-link class="item" to="/dialog">Dialog</router-link>
		<router-link class="item" to="/toast">Toast</router-link>
		<router-link class="item" to="/switch">Switch</router-link>
		<router-link class="item" to="/cell">Cell</router-link>
		<router-link class="item" to="/checkbox">Checkbox</router-link>
		<router-link class="item" to="/picker">Picker</router-link>
	</section>
</template>

<script>
	
</script>

<style>
	body{
		padding: 0px;
		margin: 0px;
		background: #f8f8f8;
	}
	a{
		text-decoration: none
	}

	.index-page .item{
		padding: 0 15px;
		display: flex;
		height: 50px;
		align-items: center;
		border-bottom: 1px solid #ccc;
	}


</style>