<script>
    export let item;

    import { updateProductCount } from "../stores/store";
    import { ProductsStore } from "../stores/store";

    let itemInCart;

    $: itemInCart = $ProductsStore.find((product) => product.id == item.id && product.size == item.size);

</script>

{#if itemInCart !== undefined}

    <input type="number"
        bind:value={itemInCart.numberOfItems}
        on:change={() => {
                updateProductCount(item, Number(itemInCart.numberOfItems))
            }
        }
        min="0"
        class="updateProductCount"
    />

{/if}

<style lang="scss">
    .updateProductCount {
        width: 2.5rem;
        height: 2.5rem;
        font-size: 1.6rem;
        text-align: center;
        background: var(--white500);
        border: none;
        outline: none;
        border-top: 0.2rem solid var(--black500);
        border-bottom: 0.2rem solid var(--black500);

        /* Chrome, Safari, Edge, Opera */
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
        }

        /* Firefox */
        &[type=number] {
        -moz-appearance: textfield;
        }
    }
</style>