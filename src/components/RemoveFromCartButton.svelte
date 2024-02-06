<script>
    import { removeSingleProduct } from "../stores/store";

    export let id;

</script>

<button type="button" on:click={() => removeSingleProduct(id)} >
    -
</button>

<style>

</style>