import Toast from './index.vue'
import Vue from 'vue'

const ToastCtrl = (message = '', duration = 1500, type = '') => {
	const VM = Vue.extend(Toast)

	if (duration) {
		return new Promise(resolve => {
			const vm = new VM({
				propsData: {
					message,
					duration,
					type,
					resolve
				}
			}).$mount()

			document.body.appendChild(vm.$el)
		})
	} else {
		const vm = new VM({
			propsData: {
				message,
				duration,
				type
			}
		}).$mount()

		document.body.appendChild(vm.$el)
		return vm
	}
}

ToastCtrl.loading = (message = '', duration = 1500) => {
	return ToastCtrl(message, duration, 'loading')
}

ToastCtrl.success = (message = '', duration = 1500) => {
	return ToastCtrl(message, duration, 'success')
}

export default ToastCtrl
