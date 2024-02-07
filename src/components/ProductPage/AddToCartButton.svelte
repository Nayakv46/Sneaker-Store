<script>
    import { addProduct } from "../../stores/store";

    export let item;
    export let size;
</script>

<button
    class="productPage__addToCartButton"
    type="submit"
    on:click={() => addProduct(item, size)}
>
    Add to cart
</button>

<style lang="scss">
    .productPage__addToCartButton{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2.2rem;
        border: none;
        border-radius: 3.6rem;
        color: var(--white700);
        font-size: 1.5rem;
        font-weight: 600;
        background: var(--black700);
        transition: var(--transition);
        cursor: pointer;

        &:hover {
            background: var(--gray700);
        }
    }
</style>