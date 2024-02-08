import { localStore } from './localStore';

export const ProductsStore = localStore("localStore", []);

export function addProduct(item, chosenSize) {

    ProductsStore.update((currentStore) => {
        let copiedStore = [...currentStore];
        let result = copiedStore.find(({ id, size }) => {
            return id === item.id && size === chosenSize;
        })
        // if there is no result found
        if ( result === undefined) {

            // create products object to be added into store
            let addedProduct = {
                id: item.id,
                size: chosenSize,
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
        return currentStore.filter((product) => {
            return product.id !== item.id || (product.id === item.id && product.size !== item.size);
        });
    })
}

export function removeSingleProduct(item) {
    ProductsStore.update((currentStore) => {
        let copiedStore = [...currentStore];

        let result = copiedStore.find(({ id, size }) => id === item.id && size === item.size);

        // if the product is not found in store
        if ( result === undefined ) {
            // return unchanged store
            return [...currentStore];
        } else {
            // decrement number of chosen item by 1
            result.numberOfItems--;

            // if there are no more chosen items, remove it from the store
            if (result.numberOfItems < 1){
                return copiedStore.filter((product) => product.id !== item.id || (product.id === item.id && product.size !== item.size));
            } else {
                return copiedStore;
            }

        }
    })
}

export function updateProductCount(item, amount) {
    ProductsStore.update((currentStore) => {
        let copiedStore = [...currentStore];

        let result = copiedStore.find(({ id, size }) => id === item.id && size === item.size);

        // anti funny customer
        if (amount < 1) {
            // result.numberOfItems = 0;
            return currentStore.filter((product) => product.id !== item.id || (product.id === item.id && product.size !== item.size) )
        } else if (amount > 0) {
            // set the input value to store
            result.numberOfItems = amount;
        }

        return copiedStore;
    })
}

export function addMultipleProducts(item, size, amount) {

    ProductsStore.update((currentStore) => {
        let copiedStore = [...currentStore];

        let result = copiedStore.find(({ id, size }) => id === item.id && size === size);

        if ( amount > 0) {
            if ( result ) {
                result.numberOfItems += amount;
            } else {
                let addedProduct = {
                    id: item.id,
                    size: size,
                    numberOfItems: amount,
                    name: item.name,
                    price: item.price,
                };

                return [addedProduct, ...copiedStore];
            }
        }

        return copiedStore;
    })
}