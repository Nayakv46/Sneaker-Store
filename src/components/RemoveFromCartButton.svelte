<script>
    import { removeSingleProduct } from "../stores/store";

    export let item;

</script>

<button type="button" on:click={() => removeSingleProduct(item)} >
    -
</button>

<style>

</style>