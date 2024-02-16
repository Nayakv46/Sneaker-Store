<script>
  // import Products from "./assets/Products";
  // import ProductItem from "./components/ProductItem.svelte";

  // import { ProductsStore } from "./stores/store";

  import Navbar from "./containers/Navbar.svelte";

  import { Router, Link, Route } from 'svelte-routing'
  import Index from "./routes/index.svelte";
  import Featured from "./routes/category/Featured.svelte";
  import Men from "./routes/category/Men.svelte";
  import Women from "./routes/category/Women.svelte";
  import ProductPage from "./routes/ProductPage.svelte";
  import Footer from "./containers/Footer.svelte";
  import CheckoutPage from "./routes/CheckoutPage.svelte";
  import Basketball from "./routes/category/Basketball.svelte";
  import Running from "./routes/category/Running.svelte";
  import Style from "./routes/category/Style.svelte";
  import Training from "./routes/category/Training.svelte";
  import Golf from "./routes/category/Golf.svelte";
  import Tennis from "./routes/category/Tennis.svelte";
  import Skateboarding from "./routes/category/Skateboarding.svelte";
</script>

<Navbar />

<Router>
  <Route path="/" component={Index} />

  <Route path="/category/featured" component={Featured} />
  <Route path="/category/men" component={Men} />
  <Route path="/category/women" component={Women} />
  <Route path="/category/basketball" component={Basketball} />
  <Route path="/category/running" component={Running} />
  <Route path="/category/style" component={Style} />
  <Route path="/category/training" component={Training} />
  <Route path="/category/golf" component={Golf} />
  <Route path="/category/tennis" component={Tennis} />
  <Route path="/category/skating" component={Skateboarding} />


  <Route path="/product/:id" let:params>
    <ProductPage id="{params.id}" />
  </Route>

  <Route path="/checkout" component={CheckoutPage} />
</Router>

<Footer />
