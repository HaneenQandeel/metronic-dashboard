
import ProductCreate from "../views/product/create.vue";
import Index from "../views/product/Index.vue";

export default  [
    { path: '/product/create', component: ProductCreate },
    { path: '/:resourceName', component: Index, props: true},

]
