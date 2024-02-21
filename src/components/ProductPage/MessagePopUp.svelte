<script>
    import { fly } from "svelte/transition";

    import Icon from 'svelte-icons-pack/Icon.svelte';
    import TiTick from 'svelte-icons-pack/ti/TiTick'
    import IoClose from 'svelte-icons-pack/io/IoClose';

    export let type;

    $: type;
</script>

<div
    class={`popUp popUp--${type === 'confirm' ? 'confirm' : 'error'}`}
    transition:fly={{ y: '-5rem', duration: 500,  }}>

    {#if type === 'confirm'}
        <span class="popUp__text">
            Item has been added to your cart.
            <Icon src={TiTick} />
        </span>
    {:else if type === 'error'}
        <span class="popUp__text">
            Please select your size.
            <Icon src={IoClose} className="popUp__text-icon" />
        </span>
    {/if}

</div>

<style lang="scss">
    .popUp {
        position: fixed;
        top: 15rem;
        left: 50%;
        display: flex;
        justify-content: center;
        width: max-content;
        padding: 1rem 1.3rem 1rem 2rem;
        background-color: var(--black700);
        text-align: center;
        transform: translate(-50%, -50%);

        &__text {
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        &--confirm {
            & .popUp__text {
                color: var(--white600);

                & > :global(svg) {
                    fill: var(--green500);
                    font-size: 2.4rem;
                }
            }
        }

        &--error {
            & .popUp__text {
                color: var(--white600);

                & > :global(svg){
                    fill: var(--red300);
                    font-size: 2.4rem;
                }
            }
        }
    }

    @media screen and (max-width: 450px) {
        .popUp{
            width: auto;
        }
    }
</style>