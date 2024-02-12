<script>
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import IoClose from 'svelte-icons-pack/io/IoClose';

    import { fade } from 'svelte/transition';

    export let showMobileMenu;
    export let toggleMobileMenu;
</script>

<div class={`mobileNavbar mobileNavbar${showMobileMenu ? '--opened' : '--closed'}`}>

    <button type="button" class="mobileNavbar__close"
        on:click={toggleMobileMenu}
    >
        <Icon src={IoClose} />
    </button>

    <ul class="mobileNavbar__links">
        <li>
            <a href="/featured" class="mobileNavbar__links-link">Featured</a>
        </li>
        <li>
            <a href="/men" class="mobileNavbar__links-link">Men</a>
        </li>
        <li>
            <a href="/women" class="mobileNavbar__links-link">Women</a>
        </li>
    </ul>
</div>

{#if showMobileMenu}
    <div class="mobileNavbar__overlay" transition:fade={{ duration: 250 }} on:click={toggleMobileMenu}>
    </div>
{/if}

        
<style lang="scss">
    .mobileNavbar {
        position: fixed;
        right: 0;
        display: flex;
        justify-content: flex-end;
        height: 100dvh;
        width: 20rem;
        padding: 7.8rem 4.2rem 2rem 2rem;
        background-color: var(--white700);
        border-left: 0.4rem solid var(--black600);
        font-size: 1.8rem;
        font-weight: 600;
        fill: var(--black600);
        transition: var(--transition);
        z-index: 1000;

        &--opened {
            right: 0;
        }

        &--closed {
            right: -100%;
        }

        &__close {
            position: absolute;
            top: 2rem;
            right: 3rem;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0.2rem;
            background-color: rgba(0,0,0,0);
            border: none;
            border-radius: 50%;
            font-size: 4rem;
            fill: var(--black600);
            transition: var(--transition);
            cursor: pointer;

            &:hover {
                background-color: rgba(0,0,0,0.1);
            }
        }

        &__links {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 2rem;
            list-style: none;
            
            &-link {
                color: var(--black600);
                text-decoration: none;
            }
        }


        &__overlay {
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(18, 18, 18, 0.36);
            -webkit-backdrop-filter: blur(4px);
            backdrop-filter: blur(4px);
            z-index: 999;
        }
    }

    @media screen and (max-width: 450px) {
        .mobileNavbar {
            &--closed {
                right: -150%;
            }
        }
    }
</style>