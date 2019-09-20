import Vue from 'vue'
import App from './App.vue'

Vue.filter("toLowercase", (value) => {
  return value.toLowerCase();
})

Vue.mixin({
  created(){
    console.log("Global Mixin created!!!");
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})


