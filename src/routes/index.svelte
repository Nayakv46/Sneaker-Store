<script>
    import Products from "../assets/Products";
    import FeaturedProducts from "../components/HomePage/FeaturedProducts.svelte";


    import { ProductsStore } from "../stores/store";


</script>

<main class="hero">

  <div class="hero__content">
    <FeaturedProducts />
    
  </div>


</main>

<style lang="scss">
  .hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    // min-height: 100svh;
    // min-height: 100vh;
    padding: var(--wrapper-padding);

    &__content {
      flex: 1;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      max-width: var(--max-width);
    }

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