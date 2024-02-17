<script>
    import categories from '../../assets/Categories';
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import FaChevronLeft from 'svelte-icons-pack/fa/FaSolidChevronLeft';
    import FaChevronRight from 'svelte-icons-pack/fa/FaSolidChevronRight';
  import CategoryProductTile from './CategoryProductTile.svelte';

    const handleScroll = (side) => {
        const slider = document.querySelector(".categorySlider__items");

        if(side === 'prev') {
            slider.scrollLeft = slider.scrollLeft - 200;
        } else {
            slider.scrollLeft = slider.scrollLeft + 200;
        }
    }
</script>

<div class="categorySlider">
    <div class="categorySlider__header">
        <p class="categorySlider__title">Shop by Category</p>

        <div class="categorySlider__controls">
            <button
                class="categorySlider__controls-prev"
                type="button"
                on:click={() => handleScroll('prev')}
            >
                <Icon src={FaChevronLeft} />
            </button>
            <button
                class="categorySlider__controls-next"
                type="button"
                on:click={() => handleScroll('next')}
                >
                <Icon src={FaChevronRight} />
            </button>
        </div>
    </div>

    <div class="categorySlider__items">
        {#each categories as category, index (index)}
            <CategoryProductTile {category} />
        {/each}
    </div>

</div>

<style lang="scss">
    .categorySlider{
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
            padding-bottom: 2rem;
            scroll-behavior: smooth;

            &::-webkit-scrollbar-thumb{
                background: var(--gray800);
                border-radius: 1.2rem;

            }

            &::-webkit-scrollbar {
                height: 0.6rem;
            }
        }
    }

    @media screen and (max-width: 450px) {
        .categorySlider {
            &__header {
                flex-direction: column;
            }

            &__controls {
                justify-content: flex-end;
            }
        }
    }
</style>