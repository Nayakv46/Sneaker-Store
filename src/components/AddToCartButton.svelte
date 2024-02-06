<script>
    import { addProduct } from "../stores/store";
    export let item;

</script>

<button type="button" class="button-addToCart"
    on:click={() => addProduct(item)}
    >
    +
</button>

<style lang="scss">
    .button-addToCart {
        // display: flex;
        // justify-content: center;
        // width: max-content;
        // padding: 1rem 1.8rem;
        // color: var(--white300);
        // font-weight: 600;
        // border: 0.1rem solid var(--white300);
        // border-radius: 1.8rem;
        // background-color: var(--black500);
        // transition: var(--transition);
        // cursor: pointer;

        // &:hover {
        //     color: var(--black500);
        //     border: 0.1rem solid var(--black500);
        //     background-color: var(--white300);
        // }

        // &:active {
        //     transform: scale(0.92);
        // }
    }
</style>