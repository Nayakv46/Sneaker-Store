<script>
    import { onMount } from "svelte";

    export let item;

    let itemImage;

    onMount(() => {
        if(item.images){
            itemImage = item.images[0];
        } else {
            itemImage = "";
        }
    })
</script>

<a href={`/product/${item.id}`} class="productTile">
    <img class="productTile__image" src={itemImage} alt={item.name} />

    <div class="productTile__info">

        <div class="productTile__description">

            <p class="productTile__description-name">
                {item.name}
            </p>

            <span class="productTile__description-text">
                {item.description}
            </span>
        </div>

        <p class="productTile__info-price">
            ${item.price}
        </p>

    </div>
</a>

<style lang="scss">
      .productTile{
        flex: 0 0 calc(25% - (1.12rem));
        display: flex;
        flex-direction: column;
        gap: 2rem;
        color: var(--black700);
        text-decoration: none;
        scroll-snap-align: start;

        &__image {
            width: 100%;
            height: auto;
        }

        &__info {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }

        &__description {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;

        }

    }

    @media screen and (max-width: 850px){
        .productTile {
            flex: 0 0 calc(33.33% - (1rem));
        }
    }

    @media screen and (max-width: 600px) {
        .productTile {
            flex: 0 0 calc(50% - 0.75rem);
        }
    }

    @media screen and (max-width: 450px){
        .productTile{
            flex: 0 0 calc(66.66% - 1rem);
        }
    }
</style>