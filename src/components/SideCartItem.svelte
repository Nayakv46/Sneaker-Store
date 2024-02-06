<script>
    export let product;

    import { removeSingleProduct, updateProductCount, addProduct } from "../stores/store";
  import AddMultipleToCart from "./AddMultipleToCart.svelte";
  import AddToCartButton from "./AddToCartButton.svelte";
  import RemoveFromCartButton from "./RemoveFromCartButton.svelte";
  import UpdateProductNumber from "./UpdateProductNumber.svelte";
    let { productId, name, description, price } = product;

    let itemsInStore;
</script>

<div class="sideCartItem">
    <div class="sideCartItem__image">
        image will be here i guess later when i add
    </div>

    <div class="sideCartItem__content">
        <div class="sideCartItem__content-top">
            <p>{name}</p>
        </div>

        <div class="sideCartItem__content-bottom">
            <div class="sideCartItem__content-controls">
                <RemoveFromCartButton item={product} />

                <UpdateProductNumber item={product} />

                <AddToCartButton item={product} />
            </div>

            <div class="sideCartItem__content-total">
                ${(product.price * product.numberOfItems).toFixed(2)}
            </div>

        </div>
    </div>
</div>

<style lang="scss">
    .sideCartItem {
        display: flex;
        gap: 1rem;
        // padding: 1rem;
        border: 0.2rem solid var(--black600);
        border-radius: 1rem;

        &__image {
            flex: 1;
        }

        &__content {
            flex: 3;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            // padding: 1rem;
            border: 0.1rem solid red;

            &-top{
                border: 0.1rem solid red;
            }

            &-bottom {
                display: flex;
                justify-content: space-between;
                align-items: center;
                border: 0.1rem solid red;
            }

            &-controls {
                display: flex;
            }

            &-total {
                display: flex;
                font-size: 1.6rem;
                font-weight: 500;
            }
        }
    }
</style>