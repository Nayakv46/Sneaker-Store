<script>
    import featuredProducts from "../../assets/FeaturedProducts";
    import { fly, fade } from "svelte/transition";
    import { quintInOut } from "svelte/easing";
    import { onMount } from "svelte";

    let shownIndex = 0;

    onMount(() => {
      startInterval();
    });

    let timeoutId = null;

    const stopInterval = () => {
        clearInterval(timeoutId);
    }

    const startInterval = () => {
        timeoutId = setInterval(() => {
            if(shownIndex < featuredProducts.length - 1){
                shownIndex++;

            } else {
                shownIndex = 0;
            }
        }, 5000);
    }

    const manualChange = (id) => {
        shownIndex = id;
    }

    $: shownIndex;

</script>

<div class="featured__wrapper"
    role="slider"
    on:mouseenter={() => stopInterval()}
    on:mouseleave={() => startInterval()}
    tabindex="0"
    aria-valuenow={shownIndex}
>

    {#each featuredProducts as item, index (index)}
    {#if index == shownIndex}
    <div class="featured__background"
      transition:fade={{ duration: 1000,  easing: quintInOut }}
      style="background-image: url('{item.background}'); background-position: {item.backgroundPosition};"
    >

    </div>

    <a href="/product/{item.id}"
        class="featured__link"
    >
        <img src={item.image}
        alt={item.name}
        class="featured__image"
        in:fly={{ duration: 1000, x: '100%', easing: quintInOut }}
        out:fly={{ duration: 1000, x: '100%', easing: quintInOut }}
        />
    </a>

    <div class="featured__info"
        in:fade={{ duration: 1000,  easing: quintInOut, }}
        out:fade={{ duration: 1000, easing: quintInOut, }}
        style="{item.descriptionBackground} {item.descriptionColor}"
    >

        <a href="/product/{item.id}"
        class="featured__name"
        >
            {item.name}
        </a>

        <p class="featured__description">
            {item.description}
        </p>

    </div>
    {/if}

    {/each}

    <div class="featured__navigation">
        {#each featuredProducts as item, index (index)}
            <button type="button"
                class={`featured__navigation-dot ${shownIndex === index ? "featured__navigation-dot--active" : null}`}
                on:click={() => manualChange(index)}
                >
            </button>
        {/each}
    </div>

</div>

<style lang="scss">
  .featured {
    &__wrapper {
      position: relative;
      display: flex;
      width: 100%;
      aspect-ratio: 2/1;
      max-height: 50rem;
      border-radius: 4rem;
      // border: 0.5rem solid red;
      box-shadow: 0 0 2rem 0.2rem rgba(0,0,0,0.3);
      overflow: hidden;
    }

    &__background {
      $border: 2rem;
      $blur: blur(1rem);
      $rect: inset(0 round var(--r));
      --r: 4rem;

      position: absolute;
      width: 100%;
      height: 100%;
      // border: $border solid rgba(0,0,0,0.05);
      border-radius: var(--r);
      background-size: cover;
      // background-position: 50% 40%;
      // background-origin: border-box;
      // background-clip: padding-box;

      // &:before {
      //   content: '';
      //   position: absolute;
      //   top: -$border;
      //   right: -$border;
      //   left: -$border;
      //   bottom: -$border;
      //   border-color: transparent;
      //   border-radius: inherit;
      //   background: inherit;
      //   background-clip: border-box;
      //   -webkit-filter: $blur;
      //   filter: $blur;
      //   -webkit-clip-path: $rect;
      //   clip-path: $rect;
      //   z-index: -1;
      // }
    }

    &__link {
        z-index: 1;
    }

    &__image {
      position: absolute;
      right: 5rem;
      bottom: 5rem;
      width: 50%;
      max-height: 25rem;
      height: auto;
      object-fit: contain;
      // border: 0.1rem solid red;
      // clip-path:margin-box;
      // box-shadow: 0 0 1rem 1rem rgba(0,0,0,1);
      filter: drop-shadow(0.5rem 1rem 1.5rem rgba(0,0,0,0.8));
      transform: rotate(-15deg);
    }

    &__info {
        position: absolute;
        left: 2rem;
        top: 50%;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        max-width: calc(50% - 2rem);
        height: max-content;
        padding: 2rem;
        border-radius: 2rem;
        color: var(--black600);
        /* fallback for old browsers */
        // background: #12c2e9; 
        // /* Chrome 10-25, Safari 5.1-6 */
        // background: -webkit-linear-gradient(to right, #12c2e9, #c471ed, #f64f59); 
        // /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        // background: linear-gradient(to right, #12c2e940, #c471ed40, #f64f5940); 
        // background: #b92b27;  /* fallback for old browsers */
        // background: -webkit-linear-gradient(to right, #1565C0, #b92b27);  /* Chrome 10-25, Safari 5.1-6 */
        // background: linear-gradient(to right, #1565C040, #b92b2740); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        // background: #009FFF;  /* fallback for old browsers */
        // background: -webkit-linear-gradient(to right, #ec2F4B, #009FFF);  /* Chrome 10-25, Safari 5.1-6 */
        // background: linear-gradient(to right, #ec2F4B40, #009FFF40); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        // background: #23074d;  /* fallback for old browsers */
        // background: -webkit-linear-gradient(to right, #cc5333, #23074d);  /* Chrome 10-25, Safari 5.1-6 */
        // background: linear-gradient(to right, #cc533340, #23074d40); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        // background: #1a2a6c;  /* fallback for old browsers */
        // background: -webkit-linear-gradient(to right, #fdbb2d, #b21f1f, #1a2a6c);  /* Chrome 10-25, Safari 5.1-6 */
        // background: linear-gradient(to right, #fdbb2d40, #b21f1f40, #1a2a6c40); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        // background: #C33764;  /* fallback for old browsers */
        // background: -webkit-linear-gradient(to right, #1D2671, #C33764);  /* Chrome 10-25, Safari 5.1-6 */
        // background: linear-gradient(to right, #1D267140, #C3376440); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        // background: #ef32d9;  /* fallback for old browsers */
        // background: -webkit-linear-gradient(to right, #89fffd, #ef32d9);  /* Chrome 10-25, Safari 5.1-6 */
        // background: linear-gradient(to right, #89fffd40, #ef32d940); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */




        transform: translate(0, -50%);
        backdrop-filter: blur(0.4rem);
    }

    &__name {
        color: inherit;
        transition: var(--transition);

        &:hover {
            color: var(--gray800);
        }
    }

    &__description {
        font-weight: 500;
        // color: var(--black800);

    }

    &__navigation {
        position: absolute;
        bottom: 2rem;
        left: calc(25% + 1rem);
        display: flex;
        gap: 1.5rem;
        transform: translate(-50%,0%);
        z-index: 2;

        &-dot {
            width: 1.3rem;
            height: 1.3rem;
            border-radius: 50%;
            border: none;
            background-color: rgba(240,240,240,0.5);
            border: 0.2rem solid var(--white600);
            transition: var(--transition);
            cursor: pointer;

            &--active {
                background-color: var(--white600);
            }
        }
    }
  }

  @media screen and (max-width: 800px) {
    .featured {
        &__info {
            top: 2rem;
            max-width: calc(65% - 3rem);
            transform: translate(0,0);
        }
    }
  }

  @media screen and (max-width: 650px) {
    .featured {

        &__wrapper {
            border-radius: 2rem;
        }

        &__background {
            border-radius: 2rem;
        }
        &__info {
            padding: 1rem 2rem;
            max-width: 100%;
            border-radius: 1rem;
        }
        
        &__description {
            display: none;
        }

        // &__image {
        //     right: 0rem;
        //     width: 75%;
        //     max-height: 15rem;
        // }

        &__navigation {
            flex-direction: column;
            left: 2rem;
            top: calc(50%);
            transform: translate(0%, -50%);
            height: max-content;
        }
    }
  }

  @media screen and (max-width: 550px) {
    .featured {
        &__wrapper {
            aspect-ratio: 10/6;
        }
        &__image {
            bottom: 4rem;
            right: 4rem;
            width: calc(65% - 2 * 2rem);
            transform: rotate(0);
        }

        &__navigation {
            left: 50%;
            top: auto;
            right: auto;
            flex-direction: row;
            transform: translate(-50%, 0);
        }
    }
  }

  @media screen and (max-width: 400px) {
    .featured{

        
        &__info {
            top: 1rem;
            left: 1rem;
        }

        // &__image {
            // bottom: 2.5rem;
            // right: 2.5rem;
        // }

        &__navigation {
            bottom: 1rem;

            &-dot {
                width: 1.2rem;
                height: 1.2rem;
            }
        }
    }
  }
</style>