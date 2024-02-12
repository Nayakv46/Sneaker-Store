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
    <!-- <div class="productTile__image" style={`background-image: url("${itemImage}")`}>

    </div> -->

    <div class="productTile__info">

        <div class="productTile__description">
            {#if item.tag && item.tag !== ""}
                <span class="productTile__tag">
                    {item.tag}
                </span>
            {/if}
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
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: calc(33.33% - 1rem);
        color: var(--black700);
        text-decoration: none;

        &__image {
            width: 100%;
            height: auto;
            // height: 30rem;
            // max-width: 100%;
            // background-position: 50% 60%;
            // background-size: cover;
            // height: 25rem;
            // max-width: 100%;
            // background-image: var(--backgroundImage);
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

            // &-text {
                // font-weight: 500;
            // }
        }

        &__tag {
            color: var(--brown300);
        }
    }

    // img {
        // max-width: 100%;
        // max-height: 20rem;
        // object-fit: cover;
        // height: auto;
        // object-position: 50% 60%;
    // }

    @media screen and (max-width: 650px) {
        .productTile {
            width: calc(50% - 1rem);
        }
    }
    @media screen and (max-width: 320px) {
        .productTile {
            width: 100%;
        }
    }
</style>