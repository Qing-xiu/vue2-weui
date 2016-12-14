<template>
	<section class="page switch-page">
		<cells>
			<cell>
				<cell-body>{{val1}}</cell-body>
				<cell-footer><we-switch v-model="val1"></we-switch></cell-footer>
			</cell>
			<cell>
				<cell-body>{{val2}}</cell-body>
				<cell-footer><we-switch v-model="val2"></we-switch></cell-footer>
			</cell>
			<cell>
				<cell-body>disabled</cell-body>
				<cell-footer><we-switch v-model="val3" disabled></we-switch></cell-footer>
			</cell>
		</cells>
	</section>
</template>

<script>
	import { Switch as WeSwitch, Cells, Cell, CellHeader, CellBody, CellFooter } from '../../components'

	export default {
		data () {
			return {
				val1: true,
				val2: false,
				val3: true
			}
		},
		
		components: {
			WeSwitch,
			Cells,
			Cell,
			CellHeader,
			CellBody,
			CellFooter
		}
	}
</script>

<style>
	
</style>