import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// ■ 変更
// import App from './App.vue'
import App from './App'
import router from './router'

// ■ 追加: Bootstrap、scssファイルを経由するため、bootstrap-custom.scssをインポート
// import 'bootstrap/dist/css/bootstrap.css'
import './assets/scss/bootstrap-custom.scss'

// mix？
// import "./assets/css/custom-ag-grid-deader.css";

// ■ 追加: Ag Grid CSS
// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-balham.css";

/* ■ 追加: よく使用するライブラリ
import { axios } from "axios";
import { chartjs } from "chart.js";
import { agGrid } from "ag-grid-community";
import { localForage } from "localforage";
import { dateTime } from "luxon";
 */

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
