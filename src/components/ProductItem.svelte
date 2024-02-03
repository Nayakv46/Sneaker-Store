<script>
    import AddToCartButton from "./AddToCartButton.svelte";

    export let product;
    let { id, name, description, price } = product;
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

  <AddToCartButton id={id} />
</div>

<style>
    .product {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        border: 0.1rem solid var(--green200);
    }
</style>