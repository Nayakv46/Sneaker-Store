<script>
    export let id;

    import Products from "../assets/Products";

    const product = Products.find((product) => {
        return product.id === Number(id);
    });

</script>

Product will be here

ID OF THE PAGE: {id}

<div>
    {product.name}
</div>

<div>
    {product.description}
</div>

<div>
    ${product.price}
</div>

<div>
    {product.id}
</div>

<style lang="scss">

</style>