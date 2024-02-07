<script>
    import { ProductsStore } from '../stores/store';

    import { Router, Link, Route } from 'svelte-routing';

    import Index from "../routes/index.svelte";

    import Icon from 'svelte-icons-pack/Icon.svelte';
    import RiShoppingCartLine from 'svelte-icons-pack/ri/RiFinanceShoppingCartLine';

    import Logo from '../assets/images/Sneaker-store-logo.png';
    import SideCart from './SideCart.svelte';

    let showCart = false;

    const toggleCart = () => {
        showCart = !showCart;
    }

    let itemsNumber;

    $: itemsNumber = $ProductsStore.reduce((accumulator, object) => {
        return accumulator + object.numberOfItems;
    }, 0);

</script>

<nav class="navbar">
    <div class="navbar__content">
        <a href="/" class="navbar__logo">
            <img src={Logo} alt="logo" class="navbar__logo-image" />
        </a>

        <ul class="navbar__links">
            <li>
                <a href="/featured" class="navbar__links-link">Featured</a>
            </li>
            <li>
                <a href="/men" class="navbar__links-link">Men</a>
            </li>
            <li>
                <a href="/women" class="navbar__links-link">Women</a>
            </li>
        </ul>

        <button type="button" on:click={() => toggleCart()} class="navbar__cta">
            <Icon src={RiShoppingCartLine}
                color="black"
                size="32"
                class="navbar__cta-cart"
            />
            <span class="navbar__cta-itemsNo">{itemsNumber}</span>
        </button>
    </div>
</nav>

<SideCart toggleCart={toggleCart} {showCart} />

<style lang="scss">
    .navbar {
        position: fixed;
        left: 0;
        top: 0;
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 1rem 2rem;
        background-color: var(--white600);
        border-bottom: 0.4rem solid var(--black600);


        &__content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            max-width: var(--max-width);
        }

        &__logo {
            display: flex;
            width: 15rem;

            &-image {
                max-width: 100%;
                height: auto;
            }
        }

        &__links {
            display: flex;
            gap: 2.5rem;
            list-style: none;

            &-link {
                position: relative;
                font-size: 1.8rem;
                font-weight: 600;
                color: var(--black600);
                text-decoration: none;

                &:after {
                    content: '';
                    position: absolute;
                    left: 0;
                    bottom: -0.3rem;
                    width: 100%;
                    height: 0.2rem;
                    background-color: var(--black600);
                    transition: var(--transition);

                    -webkit-transform: scaleX(0);
                    transform: scaleX(0);
                    -webkit-transform-origin: 100% 50%;
                    transform-origin: 100% 50%;
                    transition: -webkit-transform .2s ease;
                    transition: transform .2s ease;
                    transition: transform .2s ease,-webkit-transform .2s ease;
                }

                &:hover {
                    &:after {
                        -webkit-transform: scaleX(1);
                        transform: scaleX(1);
                        -webkit-transform-origin: 0 50%;
                        transform-origin: 0 50%;
                    }
                }
            }
        }

        &__cta {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0.7rem;
            background-color: rgba(0,0,0,0);
            border: none;
            border-radius: 50%;
            cursor: pointer;
            transition: var(--transition);

            &:hover {
                background-color: rgba(0,0,0,0.1);
            }

            &-itemsNo {
                position: absolute;
                top: 0.2rem;
                right: 0.4rem;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 2.2rem;
                height: 2.2rem;
                background-color: var(--red400);
                color: var(--white400);
                font-weight: 500;
                border-radius: 50%;
            }
        }
    }
</style>