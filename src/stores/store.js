import { localStore } from './localStore';

export const ProductsStore = localStore("localStore", []);

export function addProduct(item) {

    ProductsStore.update((currentStore) => {
        let copiedStore = [...currentStore];
        let result = copiedStore.find(({ id }) => id === item.id )
        // if there is no result found
        if ( result === undefined) {

            // create products object to be added into store
            let addedProduct = {
                id: item.id,
                numberOfItems: 1,
                name: item.name,
                price: item.price,
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

export function removeAllProduct(item) {
    ProductsStore.update((currentStore) => {
        // return the filtered store without item of chosen id
        return currentStore.filter((product) => product.id !== item.id )
    })
}

export function removeSingleProduct(item) {
    ProductsStore.update((currentStore) => {
        let copiedStore = [...currentStore];

        let result = copiedStore.find(({ id }) => id === item.id);

        // if the product is not found in store
        if ( result === undefined ) {
            // return unchanged store
            return [...currentStore];
        } else {
            // decrement number of chosen item by 1
            result.numberOfItems--;

            // if there are no more chosen items, remove it from the store
            if (result.numberOfItems === 0){
                return copiedStore.filter((product) => product.id !== item.id);
            } else {
                return copiedStore;
            }

        }
    })
}

export function updateProductCount(item, amount) {
    ProductsStore.update((currentStore) => {
        let copiedStore = [...currentStore];

        let result = copiedStore.find(({ id }) => id === item.id);

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

export function addMultipleProducts(item, amount) {

    ProductsStore.update((currentStore) => {
        let copiedStore = [...currentStore];

        let result = copiedStore.find(({ id }) => id === item.id);

        if ( result ) {
            result.numberOfItems += amount;
        } else {
            let addedProduct = {
                id: item.id,
                numberOfItems: amount,
                name: item.name,
                price: item.price,
            };

            return [addedProduct, ...copiedStore];
        }

        return copiedStore;
    })
}