<script>
    import Products from "../../assets/Products";
    import ProductTile from "../../components/Category/ProductTile.svelte";

    let filteredProducts = Products.filter((item) => item.sex === 'male' || 'unisex');

</script>

<div class="categoryPage">

    <div class="categoryPage__content">

        {#each filteredProducts as item}
        <ProductTile {item} />
        {/each}
    </div>
</div>
Men's category


<style lang="scss">
    .categoryPage {
        display: flex;
        justify-content: center;
        border: 0.1rem solid red;

        &__content {
            display: flex;
            flex-wrap: wrap;
            gap: 3rem 1.5rem;
            // width: 100%;
            max-width: var(--max-width);
            border: 0.1rem solid blue;
        }
    }
</style>