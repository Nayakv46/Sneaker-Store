<script>
    export let toggleCart;
    export let showCart;

    import { fly } from "svelte/transition";
    import { fade } from "svelte/transition";

    import { flip } from "svelte/animate";

    import Icon from "svelte-icons-pack/Icon.svelte";
    import CloseIcon from 'svelte-icons-pack/io/IoClose';

    import emptyBag from '../assets/images/empty_shopping_bag.png';

    import { ProductsStore } from "../stores/store";
    import SideCartItem from "../components/SideCartItem.svelte";

    let itemsNumber;
    $: itemsNumber = $ProductsStore.reduce((accumulator, object) => {
        return accumulator + object.numberOfItems;
    }, 0);

    let total;

    $: total = $ProductsStore.reduce((accumulator, object) => {
        return accumulator + (object.numberOfItems * object.price);
    }, 0);
</script>

<div class={`sideCart sideCart--${showCart ? "opened" : "closed"}`}>
    <button type="button" class="sideCart__toggle" on:click={toggleCart}>
        <Icon src={CloseIcon}/>
    </button>

    {#if itemsNumber < 1}

    <div class="sideCart__empty">
        <p class="sideCart__header">Your Shopping Bag is Empty</p>

        <div class="sideCart__empty-spreader">
            <img class="sideCart__empty-image" src={emptyBag} alt="empty shopping bag" />
        </div>
    </div>

    {:else}

        <div class="sideCart__content">

            <p class="sideCart__header">
                Shopping Bag ({itemsNumber})
            </p>

            <div class="sideCart__items">
                {#each $ProductsStore as product (product.name+product.size)}
                    <div out:fly={{ x: '100%', duration: 500,  }} animate:flip={{  duration: 500 }}>
                        <SideCartItem {product} />
                    </div>
                {/each}
            </div>

            <div class="sideCart__total">

                <div class="sideCart__total-text">
                    <p class="sideCart__total-paragraph">Total:</p>
                    <p class="sideCart__total-paragraph">${(total).toFixed(2)}</p>
                </div>

                <a href="/checkout" class="sideCart__total-button">
                    Go to checkout
                </a>
            </div>
        </div>
    {/if}
</div>

{#if showCart}
    <div class="sideCart__overlay" transition:fade={{ duration: 250 }} on:click={toggleCart}>
    </div>
{/if}


<style lang="scss">
    .sideCart {
        position: fixed;
        top: 0;
        display: flex;
        height: 100vh;
        height: 100dvh;
        width: 40rem;
        padding: 2rem;
        background-color: var(--white700);
        border-left: 0.4rem solid var(--black600);
        transition: var(--transition);
        z-index: 1000;

        &--opened {
            right: 0;
        }

        &--closed {
            right: -100%;
        }

        &__overlay {
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(18, 18, 18, 0.36);
            -webkit-backdrop-filter: blur(4px);
            backdrop-filter: blur(4px);
            z-index: 999;
        }

        &__toggle {
            position: absolute;
            right: 2rem;
            top: 2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border: none;
            background: rgba(0,0,0,0);
            border-radius: 50%;
            font-size: 4rem;
            color: var(--black600);
            transition: var(--transition);
            cursor: pointer;

            &:hover {
                background: rgba(0,0,0,0.1);
            }
        }

        &__content {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            width: 100%;
        }

        &__header {
            display: flex;
            align-items: center;
            min-height: 4rem;
            font-size: 2rem;
            font-weight: 600;
        }

        &__items {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 2rem;
            overflow-y: auto;
            overflow-x: hidden;
            padding-right: 0.6rem;

            &::-webkit-scrollbar-thumb{
                background: var(--gray800);
                border-radius: 1.2rem;

            }

            &::-webkit-scrollbar {
                width: 0.6rem;
            }
        }

        &__total{
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            padding-top: 1rem;
            border-top: 0.2rem solid var(--black600);

            &-text {
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
            }

            &-paragraph {
                font-size: 2rem;
                font-weight: 600;
            }

            &-button {
                // height: max-content;
                padding: 1.4rem 2rem;
                border: none;
                border-radius: 3.6rem;
                background: var(--black600);
                color: var(--white700);
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
        }

    }

    @media screen and (max-width: 420px){
        .sideCart {
            width: 100%;
            border-left: 0 solid var(--black600);
        }
    }

    .sideCart {
        &__empty {
            display: flex;
            flex-direction: column;
            gap: 10rem;
            width: 100%;

            & > .sideCart__header {
                max-width: 38rem;
                padding-right: 3.5rem;
            }

            &-spreader {
                display: flex;
                justify-content: center;
                width: 100%;
                overflow: hidden;
            }

            &-image {
                max-width: 150%;
            }
        }
    }

</style>