<script>
    import ProductsStore from "../assets/store";
    export let id;

    const handleProductAdd = (id) => {
        ProductsStore.update((currentStore) => {
            let copiedStore = [...currentStore];

            let result = copiedStore.find(({ productId }) => productId === id )

            // if result === undefined
            if ( result === undefined) {

                // create products object to be added into store
                let addedProduct = {
                    productId: id,
                    numberOfItems: 1,
                };

                // return the store with newly added product
                return [addedProduct, ...currentStore];

            } else {

                // increase the number of chosen item in the store
                result.numberOfItems++;

                return currentStore;
            }

        });
    }
</script>

<button type="button" class="button-addToCart" on:click={() => handleProductAdd(id)}>
    Add to Cart
</button>

<style lang="scss">
    .button-addToCart {
        display: flex;
        justify-content: center;
        width: max-content;
        padding: 1rem 1.8rem;
        color: var(--white300);
        font-weight: 600;
        border: 0.1rem solid var(--white300);
        border-radius: 1.8rem;
        background-color: var(--black500);
        transition: var(--transition);
        cursor: pointer;

        &:hover {
            color: var(--black500);
            border: 0.1rem solid var(--black500);
            background-color: var(--white300);
        }

        &:active {
            transform: scale(0.92);
        }
    }
</style>