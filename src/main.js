import main from "./assets/main.css?inline";

import { createApp } from "vue";
import App from "./App.vue";

const mountPoint = document.createElement("div");
const container = document.getElementById("app");

container.attachShadow({ mode: "open" });
container.shadowRoot.appendChild(mountPoint);

const style = document.createElement("style");
style.textContent = `${main}'`;
container.shadowRoot.appendChild(style);

console.log(main);

createApp(App).mount(mountPoint);
