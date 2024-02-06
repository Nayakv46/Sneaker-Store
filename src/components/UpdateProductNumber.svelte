<script>
    export let id;

    import { updateProductCount } from "../stores/store";
    import { ProductsStore } from "../stores/store";

    let itemInCart;

    $: itemInCart = $ProductsStore.find((product) => product.productId == id);

</script>

{#if itemInCart !== undefined}

    <input type="number"
        bind:value={itemInCart.numberOfItems}
        on:change={() => {
                updateProductCount(id, Number(itemInCart.numberOfItems))
            }
        }
        min="0"
    />

{/if}