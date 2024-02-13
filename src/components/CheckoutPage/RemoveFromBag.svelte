<script>
    import { removeAllProduct } from "../../stores/store";

    export let item;

</script>

<button class="button__removeFromBag" type="button" on:click={() => removeAllProduct(item)}>
    Remove
</button>

<style lang="scss">
    .button__removeFromBag {
        position: relative;
        display: flex;
        background-color: rgba(0,0,0,0);
        border: none;
        color: var(--gray700);
        font-family: Montserrat;
        font-size: 1.6rem;
        font-weight: 600;
        transition: var(--transition);
        cursor: pointer;

        &:after {
            content: '';
            position: absolute;
            bottom: -0.3rem;
            width: 100%;
            height: 0.2rem;
            background-color: var(--gray700);
            transition: var(--transition);
        }

        &:hover {
            color: var(--black600);

            &:after {
                background-color: var(--black600);
            }
        }
    }
</style>