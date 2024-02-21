<script>
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import FaChevronLeft from 'svelte-icons-pack/fa/FaSolidChevronLeft';
    import FaChevronRight from 'svelte-icons-pack/fa/FaSolidChevronRight';

    export let item;

    let chosenImage = 0;

    const handleImageChange = (id) => {
        chosenImage = id;
    }
    const handleNextImage = () => {
        if(chosenImage < item.images.length - 1){
            chosenImage++;
        } else {
            chosenImage = 0;
        }
    }

    const handlePrevImage = () => {
        if(chosenImage < 1) {
            chosenImage = item.images.length - 1;
        } else {
            chosenImage--;
        }
    }

    const handleByKeyChange = (event) => {
        if(event.key == "n") {
            handleNextImage();
        }
    }

</script>


<div class="imagePicker">
    <div class="imagePicker__list">

            {#each item.images as image, id (image+id)}
                <div class="imagePicker__list-item"
                    on:click={() => handleImageChange(id)}
                    on:keydown={(event) => handleByKeyChange(event)}
                    on:mouseenter={() => handleImageChange(id)}
                    role="switch"
                    aria-checked="mixed"
                    tabindex="0"
                >
                    <img src={image} alt={image} class="imagePicker__smallImage" />
                    <div class="imagePicker__list-overlay"></div>
                </div>
            {/each}

    </div>

    <div class="imagePicker__showcase">
        <img src={item.images[chosenImage]} alt={item.name} class="imagePicker__bigImage" />

        <div class="imagePicker__controls">
            <button
                class="imagePicker__prevImage"
                type="button"
                on:click={handlePrevImage}
            >
                <Icon src={FaChevronLeft} />
            </button>

            <button
                class="imagePicker__nextImage"
                type="button"
                on:click={handleNextImage}
            >
                <Icon src={FaChevronRight} />
            </button>
        </div>
    </div>
</div>

<style lang="scss">
    .imagePicker {
        position: sticky;
        top: 9.8rem;
        display: flex;
        flex-direction: row;
        gap: 1rem;
        max-height: 50rem;
        max-width: 100%;

        &__list{
            position: relative;
            // flex: 1;
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
                min-width: 6rem;

                &:hover {
                    & .imagePicker__list-overlay {
                        background-color: rgba(0,0,0,0.08);
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
            position: relative;
            flex: 1;
            display: flex;
        }

        &__bigImage {
            max-width: 100%;
            width: 100%;
            // width: auto;
            // height: auto;
            object-fit: cover;
            border-radius: 1rem;
        }

        &__controls {
            position: absolute;
            bottom: 2rem;
            right: 2rem;
            display: flex;
            gap: 1rem;

        }

        &__nextImage,
        &__prevImage {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
            border: none;
            background-color: var(--white700);
            transition: var(--transition);
            cursor: pointer;

            & > :global(svg) {
                position: absolute;
                left: 50%;
                right: 50%;
                transform: translate(-50%, 0);
                font-size: 1.4rem;

            }

            &:hover {
                background-color: var(--gray200);
            }
        }

        &__nextImage > :global(svg) {
            margin-left: 0.1rem;
        }

        &__prevImage > :global(svg) {
            margin-left: -0.1rem;
        }
    }

    @media screen and (max-width: 991px) {
        .imagePicker {
            max-height: 60rem;
            
        }
    }

    @media screen and (max-width: 750px) {
        .imagePicker {
            max-height: 50rem;
        }
    }

    @media screen and (max-width: 500px) {
        .imagePicker {
            max-height: none;
            flex-direction: column-reverse;

            &__list {
                flex-direction: row;
                overflow-x: auto;
            }
        }
    }
</style>