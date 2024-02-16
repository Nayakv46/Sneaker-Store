<script>
    import { addProduct } from "../../stores/store";

    import Icon from 'svelte-icons-pack/Icon.svelte';

    import FaPlus from 'svelte-icons-pack/fa/FaSolidPlus';
    export let item;

</script>

<button type="button" class="button-addToCart"
    on:click={() => addProduct(item, item.size)}
    >
    <Icon src={FaPlus}  className="button-addToCart-icon" />
</button>

<style lang="scss">
    .button-addToCart {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 2.5rem;
        height: 2.5rem;
        color: var(--white500);
        font-size: 1.5rem;
        border: 0.2rem solid var(--black500);
        border-top-right-radius: 1.5rem;
        border-bottom-right-radius: 1.5rem;
        background-color: var(--black500);
        transition: var(--transition);
        cursor: pointer;

        &:hover {
            color: var(--black500);
            background-color: var(--white500);

            & > :global(svg) {
                fill: var(--black500);
            }
        }

        & > :global(svg) {
            transition: var(--transition);
            fill: var(--white500);
        }
    }
</style>