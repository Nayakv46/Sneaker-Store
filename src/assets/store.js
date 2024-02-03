import { writable } from 'svelte/store';

const ProductsStore = writable([
    {
        productId: 1,
        numberOfItems: 2,

    }
]);

export default ProductsStore;