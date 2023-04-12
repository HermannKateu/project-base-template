import { createRouter, createWebHistory } from "vue-router";

import "vue-router";
declare module "vue-router" {
  interface RouteMeta {
  }
}

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: []
});

export default router;