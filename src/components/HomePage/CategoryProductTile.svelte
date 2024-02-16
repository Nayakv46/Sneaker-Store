<script>
    export let category;

    // let category;

</script>


<a href={`/category/${category.name}`} class="categoryTile">
    <!-- <img class="categoryTile__image" src={itemImage} alt={item.name} /> -->

    <div class="categoryTile__info">

        <div class="categoryTile__description">

            <p class="categoryTile__description-name">
                {category.name}
            </p>

            <!-- <span class="categoryTile__description-text">
                {item.description}
            </span> -->
        </div>

        <!-- <p class="categoryTile__info-price">
            ${item.price}
        </p> -->

    </div>
</a>

<style lang="scss">
      .categoryTile{
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

        &__description {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;

            &-name {
                font-size: 2rem;
                // font-weight: 500;
                text-transform: capitalize;
            }
        }

    }

    @media screen and (max-width: 850px){
        .categoryTile {
            flex: 0 0 calc(33.33% - (1rem));
        }
    }

    @media screen and (max-width: 600px) {
        .categoryTile {
            flex: 0 0 calc(50% - 0.75rem);
        }
    }

    @media screen and (max-width: 450px){
        .categoryTile{
            flex: 0 0 calc(66.66% - 1rem);
        }
    }
</style>