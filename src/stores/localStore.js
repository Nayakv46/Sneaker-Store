import { writable } from "svelte/store";

export const localStore = ( key, initial ) => {
    // get the store from localStorage
    const local = localStorage.getItem(key);

    // assign the value from localStorage if found, else put initial value - empty array []
    const data = local ? JSON.parse(local) : initial;

    // create a writable store with value of data
    const ProductsStore = writable(data, () => {
        // on change of stores value
        const unsubscribe = ProductsStore.subscribe((value) => {
            // set the local storage value as new store's value
            localStorage.setItem(key, JSON.stringify(value));
        })
        // return the handle to unsubscribe
        return unsubscribe;
    })
    // return the store
    return ProductsStore
}