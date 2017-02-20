import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routerConfig from './router.config.js'

Vue.use(VueRouter);//使用VueRouter



//配置路由
const router=new VueRouter();

router.map(routerConfig);

router.redirect({
	'/':'/home'  //访问根的时候 跳到home
});

router.start(App,'#app')



















