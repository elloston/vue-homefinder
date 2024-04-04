/**
 * router/routes.ts
 */

import HomesView from "@/views/HomesView.vue";

const routes = [
  { path: "/", component: HomesView },
  //   {
  //     path: "/homes/:homeId",
  //     component: () => import("@/views/HomeDetailView.vue"),
  //   },
];

export default routes;
