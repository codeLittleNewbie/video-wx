import { createApp } from 'vue'
import './style.css'
import 'lib-flexible'
import App from './App.vue'

import router from "./router";
import store from './store'
import dict from "@/utils/mixins/dict.js";

const app = createApp(App);
app.use(router).use(store).mount('#app');
app.mixin(dict);

// 全局过滤器
app.config.globalProperties.$filters = {
    getLabelName(val, list) {
        const len = list?.length;
        for (let i = 0; i < len; i++) {
            if (list[i].code === val) {
                return list[i].name;
            }
        }
        return '';
    }
}
