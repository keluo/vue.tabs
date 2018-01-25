import componentTabs from './VueTabs.vue'
import componentTabPane from './VueTabPane.vue'

if (typeof window !== 'undefined' && window.Vue) {
	(Vue => {
	  Vue.component(componentTabs.name, componentTabs);
	  Vue.component(componentTabPane.name, componentTabPane);
	})(window.Vue)
}
export default function(Vue) {
  Vue.component(componentTabs.name, componentTabs);
  Vue.component(componentTabPane.name, componentTabPane);
};

export { componentTabs, componentTabPane }
