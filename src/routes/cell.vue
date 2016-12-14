<template>
	<section class="page cell-page">
		<cells-title>List with description</cells-title>
		<cells>
			<cell>
				<cell-header><span class="header">header</span></cell-header>
				<cell-body>content</cell-body>
				<cell-footer>Description</cell-footer>
			</cell>
			<cell>
				<cell-header><span class="header">header</span></cell-header>
				<cell-body>content</cell-body>
				<cell-footer>Description</cell-footer>
			</cell>
		</cells>

		<cells-title>List with Link</cells-title>
		<cells>
			<cell link="https://weui.io/">
				<cell-body>Title</cell-body>
				<cell-footer></cell-footer>
			</cell>
			<cell link="https://weui.io/">
				<cell-body>Title</cell-body>
				<cell-footer></cell-footer>
			</cell>
		</cells>

		<cells-title>List with description & Link</cells-title>
		<cells>
			<cell link="https://weui.io/">
				<cell-body>Title</cell-body>
				<cell-footer>description</cell-footer>
			</cell>
			<cell link="https://weui.io/">
				<cell-body>Title</cell-body>
				<cell-footer>description</cell-footer>
			</cell>
		</cells>
	</section>
</template>

<script>
	import { Cells, CellsTitle, Cell, CellHeader, CellBody, CellFooter } from '../../components'

	export default {
		components: {

			Cells, 
			CellsTitle,
			Cell,
			CellHeader,
			CellBody,
			CellFooter
		}
	}
</script>

<style>
	.cell-page .header{
		margin-right: 15px;
	}
</style>