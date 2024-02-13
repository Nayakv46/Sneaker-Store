<script>
    import { createEventDispatcher } from 'svelte';
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import FaChevronUp from 'svelte-icons-pack/fa/FaSolidChevronUp';

    // an attepmt of a function and event listener to  close the sorting options when clicked anywhere on page, but something always seemed off
    // const handleSlide = () => {
    //     const button = document.querySelector(".sorter");
    //     console.log('handleSlide()')

    //     if(button.classList.contains("show")){
    //         handleHide();
    //     } else {
    //         button.classList.add("show");

    //         document.body.addEventListener('click', handleHide, true);
    //     }
    // }

    // const handleHide = () => {
    //     const button = document.querySelector(".sorter");

    //     console.log('handleHide()')
    //     if(button.classList.contains("show")){
    //         button.classList.remove("show");
    //         handleHide();
    //     }

    //     document.body.removeEventListener('click', handleHide, true);
    // }

    const ezClick = () => {
        const DOMelement = document.querySelector('.sorter');

        if(DOMelement.classList.contains('show')){
            DOMelement.classList.remove('show');
        } else {
            DOMelement.classList.add('show');
        }
    }

    const handleSort = (value) => {
        dispatch('changeSort', value)
    }

    let dispatch = createEventDispatcher();
</script>

<div class="sorter">
    <button class="sorter__button" type="button" on:click={ezClick}>
        Sort By <Icon src={FaChevronUp} />
    </button>

    <div class="sorter__options">
        <button class="sorter__option" type="button"
            on:click={() => {
                handleSort('HL');
                ezClick();
            }}
        >Price: High-Low</button>
        <button class="sorter__option" type="button"
            on:click={() => {
                handleSort('LH');
                ezClick();
            }}
        >Price: Low-High</button>
    </div>
</div>

<style lang="scss">
    .sorter{
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        &__button {
            display: flex;
            justify-content: center;
            gap: 1rem;
            padding: 1rem 2rem;
            background-color: var(--white700);
            border: none;
            color: var(--black600);
            fill: var(--black600);
            font-size: 1.6rem;
            font-weight: 600;
            cursor: pointer;

            & > :global(svg) {
                transition: var(--transition);
            }
        }

        &__options {
            position: absolute;
            bottom: 0;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding: 0rem 2rem;
            border-bottom-left-radius: 1rem;
            background-color: var(--white700);
            max-height: 0;
            overflow: hidden;
            transform: translate(0, 100%);
            transition: var(--transition);
        }

        &:is(.show) {
            & .sorter__button {
                & > :global(svg) {
                    transform: rotateX(180deg);
                }
            }

            & .sorter__options {
                padding: 2rem 2rem;
                max-height: 10.4rem;
            }
        }

        &__option {
            padding: 0.5rem 1rem;
            background-color: var(--white700);
            border: none;
            color: var(--black600);
            font-weight: 600;
            cursor: pointer;
            text-wrap: nowrap;
        }
    }
</style>