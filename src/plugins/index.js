/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import ElementPlus from "element-plus";
import router from "@/router";

export function registerPlugins(app) {
  app.use(ElementPlus);
  app.use(router);
}
