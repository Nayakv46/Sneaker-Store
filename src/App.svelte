<script>
  import Products from "./assets/Products";
  import ProductItem from "./components/ProductItem.svelte";

  import ProductsStore from "./assets/store";
</script>

<main class="hero">
  Shoe store

  <div class="product__wrapper">

    {#each Products as product (product.id)}
      <ProductItem product={product} />
    {/each}
  </div>

  {JSON.stringify($ProductsStore)}

</main>

<style lang="scss">
  .hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    min-height: 100svh;
    min-height: 100vh;
  }

  .product {
    
    &__wrapper {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      border: 0.1rem solid var(--blue400);
    }
  }
</style>
