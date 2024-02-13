<script>
    import CheckoutProductTile from '../components/CheckoutPage/CheckoutProductTile.svelte';
    import { ProductsStore } from "../stores/store";
    import { fly } from 'svelte/transition';
    import { flip } from 'svelte/animate';

    let itemsNumber;
    $: itemsNumber = $ProductsStore.reduce((accumulator, object) => {
        return accumulator + object.numberOfItems;
    }, 0);

    let subtotal;

    $: subtotal = $ProductsStore.reduce((accumulator, object) => {
        return accumulator + (object.numberOfItems * object.price);
    }, 0);


</script>


<div class="checkoutPage">
    <div class="checkoutPage__content">
        <h4>
            Your Shopping Bag ({itemsNumber})
        </h4>

        <div class="checkoutPage__details">

            <div class="checkoutPage__items">
                {#each $ProductsStore as item (item.name+item.size)}
                <div out:fly={{ x: '-100%', duration: 500,  }} animate:flip={{  duration: 500 }}>
                    <CheckoutProductTile {item} />
                </div>
                {/each}
            </div>
            
            <div class="checkoutPage__summary">
                <h5>Summary</h5>

                <div class="checkoutPage__total">
                    <div class="subtotalRow">
                        <p>
                            Subtotal
                        </p>

                        <p>
                            ${subtotal.toFixed(2)}
                        </p>
                    </div>

                    <div class="subtotalRow">
                        <p class="subtotalRow-text">
                            Estimated Shipping & Handling
                        </p>

                        <p>
                            ${((subtotal/100) * 9).toFixed(2)}
                        </p>
                    </div>

                    <div class="subtotalRow">
                        <p>
                            Estimated Tax
                        </p>

                        <p>
                            ${((subtotal/100) * 12).toFixed(2)}
                        </p>
                    </div>

                </div>

                <div class="totalRow">
                    <p>Total</p>

                    <p>${(((subtotal/100) * 21) + subtotal).toFixed(2)}</p>
                </div>

                <button type="button" class="button__checkout">
                    Checkout
                </button>
            </div>
        </div>

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

        &__details {
            display: flex;
            gap: 2rem;
            width: 100%;
        }

        &__items {
            flex: 7;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            width: 100%;
            overflow: hidden;
        }

        &__summary {
            flex: 4;
            display: flex;
            flex-direction: column;
            gap: 3rem;
            // width: 100%;
        }

        &__total {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }
    }

    .subtotalRow {
        display: flex;
        justify-content: space-between;
        gap: 2rem;

        &-text {
            text-wrap: wrap;
        }
    }

    .totalRow {
        display: flex;
        justify-content: space-between;
        gap: 2rem;
        font-weight: 700;
        padding: 1.5rem 0;
        border-top: 0.2rem solid var(--gray200);
        border-bottom: 0.2rem solid var(--gray200);
    }
    
    .button__checkout {
        padding: 1.8rem 2rem;
        border: none;
        border-radius: 3.6rem;
        background: var(--black600);
        color: var(--white600);
        font-size: 1.5rem;
        font-weight: 600;
        text-decoration: none;
        line-height: normal;
        transition: var(--transition);
        cursor: pointer;

        &:hover {
            background: var(--gray800);
        }
    }

    @media screen and (max-width: 991px) {
        .checkoutPage{

            &__details {
                flex-direction: column;
            }

            &__items {
                flex:none;
            }

            &__summary {
                flex: none;
            }
        }
    }
</style>