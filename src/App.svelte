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
</script>

<Navbar />

<Router>
  <Route path="/" component={Index} />
  <Route path="/featured" component={Featured} />
  <Route path="/men" component={Men} />
  <Route path="/women" component={Women} />

  <Route path="/product/:id" let:params>
    <ProductPage id="{params.id}" />
  </Route>
</Router>
