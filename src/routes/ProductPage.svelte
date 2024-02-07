<script>

    export let id;

    import Products from "../assets/Products";
  import AddToCartButton from "../components/ProductPage/AddToCartButton.svelte";
  import ImagePicker from "../components/ProductPage/ImagePicker.svelte";
  import SizePicker from "../components/ProductPage/SizePicker.svelte";

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
                <p>Choose your size</p>

                <div class="sizePicker">
                    {#each product.sizes as size, index (index)}
                        <SizePicker size={size} on:set={handleSet} id={index} name={product.name} />
                    {/each}
                    <!-- <SizePicker size="38" on:set={handleSet} id="1" name={product.name} />
                     -->
                </div>

                <AddToCartButton item={product} size={chosenSize} />
            </form>
        </div>
    </div>
</div>

<style lang="scss">
    .productPage {
        display: flex;
        flex-direction: row;
        justify-content: center;
        // gap: 2rem;
        // height: 50rem;
        // border: 0.2rem solid var(--black500);
        
        
        &__content{
            flex: 1;
            display: flex;
            flex-direction: row;
            justify-content: center;
            gap: 2rem;
            min-height: 100dvh;
            max-width: var(--max-width);
        }
        
        &__view{
            flex: 6;
            // border: 0.2rem solid red;
        }
        
        &__details {
            flex: 4;
            display: flex;
            flex-direction: column;
            gap: 3rem;
            // border: 0.2rem solid blue;
        }

        &__info {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            // border: 0.2rem solid red;
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
            gap: 1rem;
        }

        .sizePicker {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 1rem;
        }
    }
</style>