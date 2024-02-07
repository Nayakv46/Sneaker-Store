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
    <a href={`/product/${id}`}>
      {name}
    </a>
  </div>

  <div class="product__description">
    {description}
  </div>

  <div class="product__price">
    {price}
  </div>

  Add Multiple Items: <AddMultipleToCart item={product} numberOfItems={numberOfItems} />
  <input type="number" bind:value={numberOfItems} min="0"/>
<!-- 
    Add Single Item: <AddToCartButton item={product}  />
    Remove All:  <RemoveAllFromCartButton item={product} />
    Remove Single: <RemoveFromCartButton item={product} />
    Input: <UpdateProductNumber item={product} /> -->
</div>

<style>
    .product {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        border: 0.1rem solid var(--green200);
    }
</style>