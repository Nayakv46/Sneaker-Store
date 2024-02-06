<script>
import { removeAllProduct } from "../stores/store";

export let id;

</script>

<button class="button-removeFromCart" type="button" on:click={() => removeAllProduct(id)}>
    X
</button>

<style lang="scss">
    .button-removeFromCart {
        display: flex;
        justify-content: center;
        width: max-content;
        padding: 1rem;
        color: var(--white300);
        font-weight: 600;
        border: 0.1rem solid var(--white300);
        border-radius: 0.8rem;
        background-color: var(--black500);
        transition: var(--transition);
        cursor: pointer;

        &:hover {
            color: var(--black500);
            border: 0.1rem solid var(--black500);
            background-color: var(--white300);
        }

        &:active {
            transform: scale(0.92);
        }
    }
</style>