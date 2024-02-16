<script>
    import Products from "../../assets/Products";
    import ProductTile from "../../components/Category/ProductTile.svelte";
    import Sorter from "../../components/Category/Sorter.svelte";

    let filteredProducts = Products.filter((item) => item.category.indexOf("training") > -1 );

    const handleSort = (event) => {
        if (event.detail === 'HL') {
            filteredProducts = filteredProducts.sort((itemA, itemB) => {
                    return itemB.price - itemA.price;
            })
        } else if (event.detail === 'LH') {
            filteredProducts = filteredProducts.sort((itemA, itemB) => {
                return itemA.price - itemB.price;
            })
        }
    }

    $: filteredProducts;
</script>

<div class="categoryPage">

    <div class="categoryPage__sort">
        <Sorter on:changeSort={handleSort} />
    </div>

    <div class="categoryPage__content">

        {#each filteredProducts as item (item.id)}
            <ProductTile {item} />
        {/each}
    </div>
</div>

<style lang="scss">
    .categoryPage {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
        padding: var(--wrapper-padding);

        &__sort {
            display: flex;
            justify-content: flex-end;
            width: 100%;
            max-width: var(--max-width);
        }

        &__content {
            display: flex;
            flex-wrap: wrap;
            gap: 3rem 1.5rem;
            max-width: var(--max-width);
        }
    }
</style>