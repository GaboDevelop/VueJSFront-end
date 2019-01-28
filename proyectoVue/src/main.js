// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueResource from 'vue-resource'//vue resource nos permite obtener datos de manera remota
import VueRouter from 'vue-router'//dependencia que simula la navegacion


Vue.config.productionTip = false

Vue.use(VueResource);//implementando la dependencia
Vue.use(VueRouter);//implementando la dependencia de vue router

//importando los componentes a cargar como secciones de página 
import Test from './components/text';
import User from './components/user';

const router = new VueRouter({//configuracion de las rutas , por defecto , usar esta
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path:'/',
      component: User
    },
    {
      path:'/test',
      component: Test
    }
  ]
})
/* eslint-disable no-new */
new Vue({
  router,//aqui estoy utilizando la const router anterior
  components: { App },
  template: '<App/>'
}).$mount('#app')//vista de componente por defecto
