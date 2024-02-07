<script>
    export let item;

    let chosenImage = 0;

    const handleImageChange = (id) => {
        chosenImage = id;
    }

</script>


<div class="imagePicker">
    <div class="imagePicker__list">

            {#each item.images as image, id (image+id)}
                <div class="imagePicker__list-item" on:mouseenter={() => handleImageChange(id)}>
                    <img src={image} alt={image} class="imagePicker__smallImage" />
                    <div class="imagePicker__list-overlay"></div>
                </div>
            {/each}

    </div>

    <div class="imagePicker__showcase">
        <img src={item.images[chosenImage]} alt={item.name} class="imagePicker__bigImage" />
    </div>
</div>

<style lang="scss">
    .imagePicker {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        max-height: 50rem;
        max-width: 100%;

        &__list{
            position: relative;
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            overflow-y: auto;
            overflow-x: hidden;
            box-shadow: inset 0px 20px 20px -20px rgba(255,255,255,1), inset 0px -20px 20px -20px rgba(255,255,255,1);

            // &:before {
            //     content: '';
            //     position: absolute;
            //     width: 100%;
            //     height: 3rem;
            //     background: linear-gradient(0deg, rgba(255, 255, 255, 0), rgba(255,0,0, 1));
            // }

            &::-webkit-scrollbar{
                display: none;
            }

            &-item {
                position: relative;
                display: flex;
                border-radius: 0.4rem;
                overflow: hidden;
                width: 6rem;
                min-height: 6rem;

                &:hover {
                    & .imagePicker__list-overlay {
                        background-color: rgba(0,0,0,0.3);
                    }
                }
            }

            &-overlay{
                position: absolute;
                top: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0,0,0,0);
                transition: var(--transition);
            }
        }

        &__smallImage {
            display: flex;
            width: 6rem;
            max-width: 100%;
            height: auto;
            z-index: -1;

            &:hover {
                filter: rgba(0,0,0,1);
            }
        }

        &__showcase {
            flex: 9;
            display: flex;
        }

        &__bigImage {
            max-width: 100%;
            width: 100%;
            // width: auto;
            // height: auto;
            object-fit: cover;
        }
    }
</style>