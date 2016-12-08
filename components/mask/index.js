import Vue from 'vue'
import Mask from './index.vue'

export default (clickClose =  true, clickFn) => {
  const VM = Vue.extend(Mask)
  const vm = new VM({
    propsData:{
      clickFn,
      clickClose
    }
  }).$mount()
  document.body.appendChild(vm.$el)
  
  return vm
}
