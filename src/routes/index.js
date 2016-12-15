import Index from './index.vue'
import Btn from './btn.vue'
import ActionSheet from './action_sheet.vue'
import Dialog from './dialog.vue'
import Toast from './toast.vue'
import Switch from './switch.vue'
import Cell from './cell.vue'
import Checkbox from './checkbox.vue'
import Picker from './picker.vue'

const routes = [
	{path: '/', component: Index},
	{path: '/btn', component: Btn},
	{path: '/action_sheet', component: ActionSheet},
	{path: '/dialog', component: Dialog},
	{path: '/toast', component: Toast},
	{path: '/switch', component: Switch},
	{path: '/cell', component: Cell},
	{path: '/checkbox', component: Checkbox},
	{path: '/picker', component: Picker}
]

export default routes
