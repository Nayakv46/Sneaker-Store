<script>
    import { addProduct } from "../../stores/store";
    import MessagePopUp from "./MessagePopUp.svelte";

    export let item;
    export let size;

    let popUpType = '';

    $: popUpType;

    const handlePopUp = (type) => {

        popUpType = type;

        let timeoutId = setTimeout(() => {
            popUpType = '';
            clearTimeout(timeoutId);
        }, 5000);
    }
</script>

{#if popUpType !== ''}
    <MessagePopUp type={popUpType} />
{/if}

<button
    class="productPage__addToCartButton"
    type="submit"
    on:click={() => {
        if (size){
            addProduct(item, size);
            handlePopUp('confirm');
        } else {
            handlePopUp('error');
        }
    }}
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