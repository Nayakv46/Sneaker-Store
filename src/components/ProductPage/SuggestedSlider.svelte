<script>
    import Products from "../../assets/Products";

    export let sex;

    let filteredProducts = Products.filter((item) => item.sex === sex || item.sex === 'unisex')

    const randomInt = (min, max) => {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);

        return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
    }

    const randomNumber = randomInt(0, filteredProducts.length - 1);

    const lowerIndex = randomNumber - 1;

    const upperIndex = randomNumber + 4 + 1;

    const diffrenceForSecond = upperIndex - filteredProducts.length;

</script>

<div>
    <p>You might also like</p>

    {#each filteredProducts as item, index (index)}
        <!-- {index} -->
        <!-- {item} -->
        {#if index > lowerIndex && index < upperIndex}
            <!-- {JSON.stringify(item)} -->
            {index}. {item.name}
            <br/>
        {/if}
    {/each}

    {#if diffrenceForSecond > 0}
        {#each filteredProducts as item, index (index)}
            {#if index < diffrenceForSecond}
                {index}. {item.name}
                <br />
            {/if}
        {/each}
    {/if}
    <br />
    RandomNumber: {randomNumber}
    <p>First Each: [{lowerIndex+1}, {upperIndex}] </p>

    <br />

    Second Each: [0, {diffrenceForSecond}]
</div>

<style>

</style>