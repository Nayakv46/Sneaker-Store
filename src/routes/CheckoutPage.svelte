<script>
    import CheckoutProductTile from '../components/CheckoutPage/CheckoutProductTile.svelte';
    import { ProductsStore } from "../stores/store";

    let itemsNumber;
    $: itemsNumber = $ProductsStore.reduce((accumulator, object) => {
        return accumulator + object.numberOfItems;
    }, 0);

    let total;

    $: total = $ProductsStore.reduce((accumulator, object) => {
        return accumulator + (object.numberOfItems * object.price);
    }, 0);
</script>


<div class="checkoutPage">
    <div class="checkoutPage__content">
        <p>
            Your shopping Bag ({itemsNumber}):
        </p>

        <div class="checkoutPage__items">
            {#each $ProductsStore as item (item.name+item.size)}
                <CheckoutProductTile {item} />
            {/each}
        </div>
        
        <p>
            Total: ${total}
        </p>

    </div>
</div>



<style lang="scss">
    .checkoutPage {
        display: flex;
        justify-content: center;
        padding: var(--wrapper-padding);

        &__content {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 2rem;
            max-width: var(--max-width);
        }

        &__items {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            width: 100%;
        }
    }
</style>