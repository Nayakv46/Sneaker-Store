<script>
    import { onMount } from "svelte";
    import Products from "../../assets/Products";
  import RemoveFromBag from "./RemoveFromBag.svelte";
  import UpdateInBag from "./UpdateInBag.svelte";

    export let item

    let productInfo = Products.find((product) => product.id === item.id )


    onMount(() => {
        console.log(productInfo)
    })


</script>

<div class="checkoutTile">
    <img src={productInfo.images[0]} alt={item.name} class="checkoutTile__image" />

    <div class="checkoutTile__content">
        <div class="checkoutTile__info">

            <div class="checkoutTile__header">
                <p>{item.name}</p>
                <p>${(item.price*item.numberOfItems).toFixed(2)}</p>
            </div>

            <span>{productInfo.description}</span>

            <span>{productInfo.descriptionLong.listed.shown}</span>

            <div class="checkoutTile__row">
                <span>Size {item.size}</span>

                <span>Quantity <UpdateInBag {item} /></span>
            </div>
        </div>

        <div class="checkoutTile__controls">
            <RemoveFromBag {item} />
        </div>
    </div>
</div>


<style lang="scss">
    .checkoutTile {
        flex: 1;
        display: flex;
        flex-direction: row;
        gap: 1rem;

        &__image {
            max-width: 100%;
            max-height: 20rem;
        }

        &__content {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 1rem;
        }

        &__info {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        &__header {
            display: flex;
            justify-content: space-between;
            gap: 2rem;
        }

        &__row {
            display: flex;
            align-items: center;
            gap: 2rem;
        }
    }
</style>