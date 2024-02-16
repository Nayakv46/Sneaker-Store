<script>
    import Products from "../assets/Products";
  import CategorySlider from "../components/HomePage/CategorySlider.svelte";
    import FeaturedProducts from "../components/HomePage/FeaturedProducts.svelte";
  import SuggestedSlider from "../components/ProductPage/SuggestedSlider.svelte";


    import { ProductsStore } from "../stores/store";


</script>

<main class="hero">

  <div class="hero__content">
    <FeaturedProducts />
    <CategorySlider />
    <SuggestedSlider sex="male" />
  </div>

</main>

<style lang="scss">
  .hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: var(--wrapper-padding);

    &__content {
      display: flex;
      flex-direction: column;
      gap: 4rem;
      max-width: var(--max-width);
      width: 100%;
    }

  }

</style>