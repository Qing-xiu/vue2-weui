import ActionSheet from './index.vue'
import Vue from 'vue'

const ac = (menus = [], actions = []) => {
	const VM = Vue.extend(ActionSheet)

	return new Promise(resolve => {
		const vm = new VM({
			propsData: {
				menus,
				actions,
				resolve
			}
		}).$mount()
		
		document.body.appendChild(vm.$el)
	})
	
}

export default ac