/**
 * router/index.js
 */

import routes from "./routes";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to) => {
  //
});

router.afterEach((to) => {
  //
});

export default router;
