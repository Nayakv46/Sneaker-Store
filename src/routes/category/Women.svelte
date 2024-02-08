<script>
    import Products from "../../assets/Products";
    import ProductTile from "../../components/Category/ProductTile.svelte";

    let filteredProducts = Products.filter((item) => item.sex === 'female' || item.sex === 'unisex');

</script>

<div class="categoryPage">

    <div class="categoryPage__content">

        {#each filteredProducts as item}
        <ProductTile {item} />
        {/each}
    </div>
</div>

<style lang="scss">
    .categoryPage {
        display: flex;
        justify-content: center;

        &__content {
            display: flex;
            flex-wrap: wrap;
            gap: 3rem 1.5rem;
            max-width: var(--max-width);
        }
    }
</style>