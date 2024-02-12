<script>

    export let id;

    import Products from "../assets/Products";
    import AddToCartButton from "../components/ProductPage/AddToCartButton.svelte";
    import ImagePicker from "../components/ProductPage/ImagePicker.svelte";
    import SizePicker from "../components/ProductPage/SizePicker.svelte";
  import SuggestedSlider from "../components/ProductPage/SuggestedSlider.svelte";

    const product = Products.find((product) => {
        return product.id === Number(id);
    });

    let chosenSize;

    function handleSet(event) {
        chosenSize = event.detail;
    }
</script>

<div class="productPage">

    <div class="productPage__content">
        <div class="productPage__content-main">

            <div class="productPage__view">
                <ImagePicker item={product} />
            </div>

            <div class="productPage__details">

                <div class="productPage__info">
                    <p class="productPage__name">
                        {product.name}
                    </p>

                    <p class="productPage__description">
                        {product.description}
                    </p>

                </div>

                <p class="productPage__price">
                    ${product.price}
                </p>

                <form on:submit|preventDefault class="productPage__sizes">

                    {#if product.sizes}
                        <p>Choose your size</p>

                        <div class="sizePicker">
                            {#each product.sizes as size, index (index)}
                                <SizePicker size={size} on:set={handleSet} id={index} name={product.name} />
                            {/each}
                        </div>

                        <AddToCartButton item={product} size={chosenSize} />
                    {:else}
                        <div class="comingSoon">Coming Soon</div>
                    {/if}
                </form>

                {#if product.descriptionLong}
                <div class="productPage__additionalInfo">
                    <p class="productPage__additionalInfo-text">{product.descriptionLong.text}</p>
                    {#if product.descriptionLong.listed}
                    <!-- <hr />
                        <p>{product.descriptionLong.listed.shown}</p>
                        <hr />
                        <p>{product.descriptionLong.listed.style}</p> -->
                        <ul class="productPage__additionalInfo-ul">
                            {#each Object.entries(product.descriptionLong.listed) as [listItemKey, listItemValue]}
                            <li class="productPage__additionalInfo-li">{`${listItemKey}: ${listItemValue}`}</li>
                            {/each}
                        </ul>
                    {/if}
                </div>
                {/if}
            </div>
        </div>

        <SuggestedSlider sex={product.sex} />

    </div>
</div>

<style lang="scss">
    .productPage {
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: var(--wrapper-padding);

        &__content{
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 4rem;
            width: 100%;
            max-width: var(--max-width);

            &-main {
                display: flex;
                flex-direction: row;
                justify-content: center;
                gap: 2rem
            }
        }

        &__view{
            flex: 6;
        }

        &__details {
            flex: 4;
            display: flex;
            flex-direction: column;
            gap: 3rem;
        }

        &__info {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }

        &__name {
            font-size: 2rem;
        }

        &__description {
            font-size: 1.5rem;
        }

        &__sizes {
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }

        .sizePicker {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 1rem;
        }

        .comingSoon {
            display: flex;
            justify-content: center;
            padding: 2rem;
            color: var(--black700);
            background-color: var(--gray200);
        }

        &__additionalInfo {
            display: flex;
            flex-direction: column;
            gap: 3rem;
            font-weight: 500;
            line-height: 1.5em;

            // &-text {
            //     // color: var(--black800);
            // }

            &-ul {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                text-transform: capitalize;
            }

            &-li {
                margin-left: 1.6rem;
            }
        }
    }

    @media screen and (max-width: 991px) {
        .productPage {
            &__content {
                &-main {
                    flex-direction: column;
                }
            }
        }
    }
</style>