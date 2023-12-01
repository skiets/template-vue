import './assets/main.css'
import 'sweetalert2/dist/sweetalert2.css'
import 'quasar/src/css/index.sass'
import '@quasar/extras/material-icons/material-icons.css'

import { createApp } from 'vue'
import { Quasar, LoadingBar } from 'quasar'
import App from './App.vue'
import router from './router'
import axiosMain from 'axios'

const myApp = createApp(App);
const User = [];
const rootDomain = "http://localhost";
const baseURL = import.meta.env.DEV
  ? "http://localhost/nystif-user/ajax/"
  : "/scan/nystif-user/";


const axios = axiosMain.create({
  baseURL,
  withCredentials: true,
});
 myApp.provide("$axios", axios);
 myApp.provide("$user", User);

axios.get("session/checkAuth.php")
.then(function (response) {
    var result = response.status


});










myApp.use(router)

myApp.use(Quasar, {
  plugins: { LoadingBar }
})

myApp.mount('#app')
