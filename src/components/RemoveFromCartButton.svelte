<script>
    import { removeSingleProduct } from "../stores/store";

    import Icon from "svelte-icons-pack/Icon.svelte"
    import FaMinus from 'svelte-icons-pack/fa/FaSolidMinus';
    import FiMinus from 'svelte-icons-pack/fi/FiMinus';

    export let item;

</script>

<button type="button" on:click={() => removeSingleProduct(item)} class="button-removeFromCart">
    <Icon src={FaMinus} color="white" />
</button>

<style lang="scss">
    .button-removeFromCart {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 2.5rem;
        height: 2.5rem;
        color: var(--white500);
        font-size: 1.5rem;
        border: 0.2rem solid var(--black500);
        border-top-left-radius: 1.5rem;
        border-bottom-left-radius: 1.5rem;
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