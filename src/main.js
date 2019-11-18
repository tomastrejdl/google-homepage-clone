import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

const requireComponent = require.context('./components', true, /[\w-]+\.vue$/);

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);
  const componentName = fileName.replace(/^\.\//, '').replace(/\.\w+$/, '');
  Vue.component(componentName, componentConfig.default || componentConfig);
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
