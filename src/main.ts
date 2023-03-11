import { createApp } from "vue";
import "./styles.css";
import App from "./App.vue";

createApp(App).mount("#app");

// 如何构建一个支持热插拔的插件体系
// 1. 首先要有一个插件的注册器
// 2. 插件的注册器要能够自动的去扫描src/plugins下面的所有插件
