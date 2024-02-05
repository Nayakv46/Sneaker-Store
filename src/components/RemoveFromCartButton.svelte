<script>
    import { removeSingleProduct } from "../assets/store";

    export let id;

</script>

<button type="button" on:click={() => removeSingleProduct(id)} >
    -
</button>

<style>

</style>