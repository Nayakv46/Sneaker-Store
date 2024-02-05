import { writable } from 'svelte/store';



const ProductsStore = writable([
        {
            productId: 1,
            numberOfItems: 2,
        }
    ]);

export default ProductsStore;

export function addProduct(id) {
    ProductsStore.update((currentStore) => {
        let copiedStore = [...currentStore];

        let result = copiedStore.find(({ productId }) => productId === id )

        // if there is no result found
        if ( result === undefined) {

            // create products object to be added into store
            let addedProduct = {
                productId: id,
                numberOfItems: 1,
            };

            // return the store with newly added product
            return [addedProduct, ...copiedStore];

        } else {

            // increase the number of chosen item in the store
            result.numberOfItems++;

            return copiedStore;
        }
    });
}

export function removeAllProduct(id) {
    ProductsStore.update((currentStore) => {
        // return the filtered store without item of chosen id
        return currentStore.filter((product) => product.productId !== id )
    })
}

export function removeSingleProduct(id) {
    ProductsStore.update((currentStore) => {
        let copiedStore = [...currentStore];

        let result = copiedStore.find(({ productId }) => productId === id);

        // if the product is not found in store
        if ( result === undefined ) {
            // return unchanged store
            return [...currentStore];
        } else {
            // decrement number of chosen item by 1
            result.numberOfItems--;

            // if there are no more chosen items, remove it from the store
            if (result.numberOfItems === 0){
                return copiedStore.filter((product) => product.productId !== id);
            } else {
                return copiedStore;
            }

        }
    })
}

export function updateProductCount(id, amount) {
    ProductsStore.update((currentStore) => {
        let copiedStore = [...currentStore];

        let result = copiedStore.find(({ productId }) => productId === id);

        // anti funny customer
        if (amount < 0) {
            result.numberOfItems = 0;
        } else {
            // set the input value to store
            result.numberOfItems = amount;
        }

        return copiedStore;
    })
}

export function addMultipleProducts(id, amount) {
    ProductsStore.update((currentStore) => {
        let copiedStore = [...currentStore];

        let result = copiedStore.find(({ productId }) => productId === id);

        if ( result ) {
            result.numberOfItems += amount;
        } else {
            let addedProduct = {
                productId: id,
                numberOfItems: amount
            };

            return [addedProduct, ...copiedStore];
        }

        return copiedStore;
    })
}