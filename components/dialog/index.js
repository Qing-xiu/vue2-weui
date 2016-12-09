import Dialog from './index.vue'
import Vue from 'vue'

export default ({ title = '', message = '', cancelBtnText = '', confirmBtnText = '确定', type = 'ios'}) => {
	const VM = Vue.extend(Dialog)
	return new Promise(resolve => {
		const vm = new VM({
			propsData: {
				title,
				message,
				cancelBtnText,
				confirmBtnText,
				type,
				resolve
			}
		}).$mount()

		document.body.appendChild(vm.$el)
	})
}