<script>
  import AddMultipleToCart from "./AddMultipleToCart.svelte";
    import AddToCartButton from "./AddToCartButton.svelte";
  import RemoveAllFromCartButton from "./RemoveAllFromCartButton.svelte";
  import RemoveFromCartButton from "./RemoveFromCartButton.svelte";
  import UpdateProductNumber from "./UpdateProductNumber.svelte";

    export let product;
    let { id, name, description, price } = product;

    let numberOfItems = 1;
</script>

<div class="product">
  <div class="product__name">
    {name}
  </div>

  <div class="product__description">
    {description}
  </div>

  <div class="product__price">
    {price}
  </div>

  Add Multiple Items: <AddMultipleToCart id={id} numberOfItems={numberOfItems} />
  <input type="number" bind:value={numberOfItems} />

    Add Single Item: <AddToCartButton id={id}  />
    Remove All:  <RemoveAllFromCartButton id={id} />
    Remove Single: <RemoveFromCartButton id={id} />
    Input: <UpdateProductNumber id={id} />
</div>

<style>
    .product {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        border: 0.1rem solid var(--green200);
    }
</style>