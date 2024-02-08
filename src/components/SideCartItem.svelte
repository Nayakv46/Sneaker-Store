<script>
    export let product;

    import Products from "../assets/Products";

    import { removeSingleProduct, updateProductCount, addProduct } from "../stores/store";
    import AddMultipleToCart from "./AddMultipleToCart.svelte";
    import AddToCartButton from "./AddToCartButton.svelte";
    import RemoveFromCartButton from "./RemoveFromCartButton.svelte";
    import UpdateProductNumber from "./UpdateProductNumber.svelte";
  import RemoveAllFromCartButton from "./RemoveAllFromCartButton.svelte";

    let { id, size, name, description, price } = product;

    let item = Products.find((item) => item.id === id)
    
</script>

<div class="sideCartItem">
    <div class="sideCartItem__image">
        <img class="sideCartIem__image" src={item.images[0]} alt={item.name} />
    </div>

    <div class="sideCartItem__content">
        <div class="sideCartItem__content-top">
            <div class="sideCartItem__content-details">
                <a href={`/product/${id}`} class="sideCartItem__content-name">{name}</a>

                <p>Size: {size}</p>
            </div>

            <RemoveAllFromCartButton item={product} />
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
        border: 0.2rem solid var(--black600);
        border-radius: 1rem;

        &__image {
            flex: 1;
            overflow: hidden;
            border-top-left-radius: 1rem;
            border-bottom-left-radius: 1rem;

            & > img {
                display: flex;
                max-width: 100%;
                height: auto;
                object-fit: cover;
            }
        }

        &__content {
            flex: 3;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 1rem;
            background-color: var(--white500);
            border-top-right-radius: 1rem;
            border-bottom-right-radius: 1rem;
            // border: 0.1rem solid red;

            &-top{
                display: flex;
                justify-content: space-between;
                // align-items: flex-start;
                // border: 0.1rem solid red;
            }

            &-name {
                color: var(--black700);
                font-weight: 600;
            }

            &-bottom {
                display: flex;
                justify-content: space-between;
                align-items: center;
                // border: 0.1rem solid red;
            }

            &-controls {
                display: flex;
            }

            &-total {
                color: var(--black500);
                font-weight: 600;
            }
        }
    }
</style>