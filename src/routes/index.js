import Index from './index.vue'
import Btn from './btn.vue'
import ActionSheet from './action_sheet.vue'
import Dialog from './dialog.vue'
import Toast from './toast.vue'

const routes = [
	{path: '/', component: Index},
	{path: '/btn', component: Btn},
	{path: '/action_sheet', component: ActionSheet},
	{path: '/dialog', component: Dialog},
	{path: '/toast', component: Toast},
]

export default routes
