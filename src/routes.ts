import { createRouter, createWebHistory } from "vue-router";

import Categories from "./modules/categories/pages/index.vue";
import ProductDetail from "./modules/product-detail/pages/index.vue";
import Cart from "./modules/cart/pages/index.vue";
import Home from "./modules/home/pages/index.vue";
const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/category",
    component: Categories,
  },
  {
    path: "/product-detail",
    component: ProductDetail,
  },
  {
    path: "/cart",
    component: Cart,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
