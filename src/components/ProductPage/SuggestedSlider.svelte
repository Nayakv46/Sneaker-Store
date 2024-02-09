<script>
    import Products from "../../assets/Products";
  import SuggestedProductTile from "./SuggestedProductTile.svelte";

    export let sex;

    let filteredProducts = Products.filter((item) => item.sex === sex || item.sex === 'unisex')

    // EXPLANATION OF TWO #EACH BLOCKS
    // rendering 5 items starting from randomly selected number
    // if the list of products end before rendering 5 -> render left number of them from 0
    const randomInt = (min, max) => {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);

        return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
    }

    const randomNumber = randomInt(0, filteredProducts.length - 1);

    const lowerIndex = randomNumber - 1;

    const upperIndex = randomNumber + 4 + 1;

    const diffrenceForSecond = upperIndex - filteredProducts.length;

</script>

<div class="suggestedSlider">
    <p class="suggestedSlider__title">You might also like</p>

    <div class="suggestedSlider__items">
        {#each filteredProducts as item, index (index)}
            {#if index > lowerIndex && index < upperIndex}
                <SuggestedProductTile {item} />
                <!-- {index}. {item.name}
                <br/> -->
            {/if}
        {/each}

        {#if diffrenceForSecond > 0}
            {#each filteredProducts as item, index (index)}
                {#if index < diffrenceForSecond}
                <SuggestedProductTile {item} />
                    <!-- {index}. {item.name}
                    <br /> -->
                {/if}
            {/each}
        {/if}
    </div>
</div>

<style lang="scss">
    .suggestedSlider{
        display: flex;
        flex-direction: column;
        gap: 2rem;

        &__title {
            font-size: 2.4rem;
            font-weight: 500;
            text-transform: capitalize;
        }

        &__items {
            display: flex;
            gap: 1.5rem;
            scroll-snap-type: x mandatory;
            overflow-x: auto;

            // &::-webkit-scrollbar-thumb ... styles
        }
    }
</style>