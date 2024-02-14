<script>
    import CheckoutProductTile from '../components/CheckoutPage/CheckoutProductTile.svelte';
    import emptyBag from '../assets/images/empty_shopping_bag.png';
    import { ProductsStore } from "../stores/store";
    import { fly } from 'svelte/transition';
    import { flip } from 'svelte/animate';
    import { onMount } from 'svelte';

    let itemsNumber;
    $: itemsNumber = $ProductsStore.reduce((accumulator, object) => {
        return accumulator + object.numberOfItems;
    }, 0);

    let subtotal;

    $: subtotal = $ProductsStore.reduce((accumulator, object) => {
        return accumulator + (object.numberOfItems * object.price);
    }, 0);

    let arrivalDate = new Date(new Date().setDate(new Date().getDate() + 3));

    //  check if the date is a weekend, and make it monday
    onMount(() => {

        if(arrivalDate.getDay() == 0) {
            arrivalDate = new Date(arrivalDate.setDate(arrivalDate.getDate() + 1));
        } else if (arrivalDate.getDay() == 6) {
            arrivalDate = new Date(arrivalDate.setDate(arrivalDate.getDate() + 2));
        }
    })

    let shownDate;
    $: shownDate = arrivalDate.toLocaleString('default', { weekday: 'short' })+", "+arrivalDate.getDate()+" "+arrivalDate.toLocaleString('default', { month: 'long' });


</script>


<div class="checkoutPage">
    <div class="checkoutPage__content">

        {#if itemsNumber > 0}

        <h4 class="checkoutPage__header">
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

                <div class="checkoutPage__delivery">
                    <div class="checkoutPage__shipping">
                        <p class="checkoutPage__delivery-text">Shipping</p>

                        <p class="checkoutPage__delivery-date">Estimated Arrival {shownDate}</p>
                    </div>

                    <div class="checkoutPage__pickup">
                        <p class="checkoutPage__delivery-text">Pickup</p>

                        <p>Today at <a href="/" class="checkoutPage__delivery-underline">SneakerStore NYC</a></p>
                    </div>
                </div>
            </div>
        </div>

        {:else}

        <div class="checkoutPage__empty">
            <h4>Your Shopping Bag is Empty</h4>

            <a href="/" class="checkoutPage__continue" >Continue Shopping</a>

            <img class="checkoutPage__empty-image" src={emptyBag} alt="empty shopping bag" />
        </div>

        {/if}

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
            position: relative;
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
            position: sticky;
            top: 9.8rem;
            display: flex;
            flex-direction: column;
            gap: 3rem;
            height: max-content;
        }

        &__total {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }

        &__delivery {
            display: flex;
            flex-direction: column;
            gap: 2rem;

            &-text {
                font-weight: 700;
            }

            &-date {
                text-transform: capitalize;
            }

            &-underline {
                position: relative;
                font-size: 1.6rem;
                color: var(--black600);
                font-weight: 600;
                text-decoration: none;
                cursor: pointer;
                transition: var(--transition);

                &:hover {
                    color: var(--gray800);

                    &:after {
                        background-color: var(--gray800);
                    }
                }

                &:after {
                    content: '';
                    position: absolute;
                    bottom: -0rem;
                    left: 0;
                    width: 100%;
                    height: 0.2rem;
                    background-color: var(--black600);
                    transition: var(--transition);
                
                }
            }
        }

        &__shipping,
        &__pickup {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
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

            &__summary {
                position: static;
                top: 0;
            }

            &__items {
                flex:none;
            }

            &__summary {
                flex: none;
            }
        }
    }

    @media screen and (max-width: 500px) {
        .checkoutPage{
            &__items {
                gap: 2rem;
            }
        }
    }

    @media screen and (max-width: 340px) {
        .checkoutPage {
            &__header {
                font-size: 2.1rem;
            }
        }
    }

    .checkoutPage {
        &__empty {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 4rem;
            width: 100%;

            &-image {
                max-width: 100%;
                max-height: 50rem;
            }
        }

        &__continue {
            display: flex;
            justify-content: center;
            padding: 1.4rem 3rem;
            border-radius: 2.8rem;
            color: var(--white700);
            text-decoration: none;
            background-color: var(--black600);
            transition: var(--transition);

            &:hover {
                background-color: var(--gray800);
            }
        }
    }
</style>