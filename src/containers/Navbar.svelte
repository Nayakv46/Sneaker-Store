<script>
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import RiShoppingCartLine from 'svelte-icons-pack/ri/RiFinanceShoppingCartLine';

    import Logo from '../assets/images/Sneaker-store-logo.png';
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

        <div class="navbar__cta">
            <Icon src={RiShoppingCartLine} color="black" size="32" className="navbar__cta-cart" />
        </div>
    </div>
</nav>


<style lang="scss">
    .navbar {
        display: flex;
        justify-content: center;
        border: 0.1rem solid red;
        
        &__content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            max-width: var(--max-width);
            border: 0.1rem solid blue;
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
            cursor: pointer;
        }
    }
</style>