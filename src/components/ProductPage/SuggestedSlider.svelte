<script>
    import Products from "../../assets/Products";
    import SuggestedProductTile from "./SuggestedProductTile.svelte";

    import Icon from 'svelte-icons-pack/Icon.svelte';
    import FaChevronLeft from 'svelte-icons-pack/fa/FaSolidChevronLeft';
    import FaChevronRight from 'svelte-icons-pack/fa/FaSolidChevronRight';

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

    const handleScroll = (side) => {
        const slider = document.querySelector(".suggestedSlider__items");

        if(side === 'prev') {
            slider.scrollLeft = slider.scrollLeft - 150;
        } else {
            slider.scrollLeft = slider.scrollLeft + 150;
        }
    }
</script>

<div class="suggestedSlider">
    <div class="suggestedSlider__header">
        <p class="suggestedSlider__title">You might also like</p>

        <div class="suggestedSlider__controls">
            <button
                class="suggestedSlider__controls-prev"
                type="button"
                on:click={() => handleScroll('prev')}
            >
                <Icon src={FaChevronLeft} />
            </button>
            <button
                class="suggestedSlider__controls-next"
                type="button"
                on:click={() => handleScroll('next')}
                >
                <Icon src={FaChevronRight} />
            </button>
        </div>
    </div>

    <div class="suggestedSlider__items">
        {#each filteredProducts as item, index (index)}
            {#if index > lowerIndex && index < upperIndex}
                <SuggestedProductTile {item} />
            {/if}
        {/each}

        {#if diffrenceForSecond > 0}
            {#each filteredProducts as item, index (index)}
                {#if index < diffrenceForSecond}
                    <SuggestedProductTile {item} />
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

        &__header {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 2rem;
        }

        &__title {
            font-size: 2.4rem;
            font-weight: 500;
            text-transform: capitalize;
        }

        &__controls {
            display: flex;
            gap: 1rem;

            &-prev,
            &-next {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 4rem;
                height: 4rem;
                background-color: var(--gray200);
                border-radius: 50%;
                border: none;
                transition: var(--transition);
                cursor: pointer;

                &:hover {
                    background-color: var(--gray300);
                }

                & > :global(svg) {
                    font-size: 1.6rem;
                    fill: var(--black700);
                }
            }

            &-prev {
                & > :global(svg) {
                    margin-left: -0.2rem;
                }
            }

            &-next {
                & > :global(svg) {
                    margin-left: 0.2rem;
                }
            }
        }

        &__items {
            display: flex;
            gap: 1.5rem;
            scroll-snap-type: x mandatory;
            overflow-x: auto;
            padding-bottom: 1rem;
            scroll-behavior: smooth;

            &::-webkit-scrollbar-thumb{
                background: var(--gray800);
                border-radius: 1.2rem;

                &:hover {
                    background: green;
                }
            }

            &::-webkit-scroll-track{
                // background: red;
            }

            &::-webkit-scrollbar {
                height: 0.6rem;
            }
        }
    }

    @media screen and (max-width: 450px) {
        .suggestedSlider {
            &__header {
                flex-direction: column;
            }

            &__controls {
                justify-content: flex-end;
            }
        }
    }
</style>