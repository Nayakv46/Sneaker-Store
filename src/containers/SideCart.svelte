<script>
    export let toggleCart;
    export let showCart;

    import { fade } from "svelte/transition";

    import Icon from "svelte-icons-pack/Icon.svelte";
    import CloseIcon from 'svelte-icons-pack/io/IoClose';

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
        Cart is empty
    {:else}
        <div class="sideCart__content">

            <p class="sideCart__header">
                Shopping Cart ({itemsNumber})
            </p>

            <div class="sideCart__items">
                {#each $ProductsStore as product (product.id+product.size)}
                    <!-- {JSON.stringify(product)} -->
                    <SideCartItem {product} />
                {/each}
            </div>

            <div class="sideCart__total">

                <div class="sideCart__total-text">
                    <p class="sideCart__total-paragraph">Total:</p>
                    <p class="sideCart__total-paragraph">${(total).toFixed(2)}</p>
                </div>

                <button type="button" class="sideCart__total-button">
                    Go to checkout
                </button>
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
            overflow-x: hidden;
            overflow-y: auto;
        }

        &__header {
            display: flex;
            align-items: center;
            height: 4rem;
            font-size: 2rem;
            font-weight: 600;
        }

        &__items {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 2rem;
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
                height: max-content;
                padding: 1.4rem 2rem;
                border: none;
                border-radius: 3.6rem;
                background: var(--black600);
                color: var(--white600);
                font-size: 1.5rem;
                font-weight: 600;
                transition: var(--transition);
                cursor: pointer;

                &:hover {
                    background: var(--gray700);
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
</style>