<script>
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import FaPlus from 'svelte-icons-pack/fa/FaSolidPlus';
    import FaMinus from 'svelte-icons-pack/fa/FaSolidMinus';
    import FaTwitter from 'svelte-icons-pack/fa/FaBrandsTwitter';
    import FaFacebook from 'svelte-icons-pack/fa/FaBrandsFacebookF';
    import FaYoutube from 'svelte-icons-pack/fa/FaBrandsYoutube';
    import FaInstagram from 'svelte-icons-pack/fa/FaBrandsInstagram';

    const handleActive = (id) => {
        let element = document.querySelector(`#${id}`);

        if ( element.classList.contains('activeAccordeon')){
            element.classList.remove('activeAccordeon');
        } else {
            element.classList.add('activeAccordeon');
        }
    }
</script>

<footer class="footer">
    <div class="footer__content">
        <div class="footer__links">
            <div class="footer__links-left">

                <div class="footer__links-group">
                    <a href="/" class="footer__links-link--uppercase">
                        RESOURCES
                    </a>
                    <a href="/" class="footer__links-link--uppercase">
                        GIFT CARDS
                    </a>
                    <a href="/" class="footer__links-link--uppercase">
                        FIND A STORE
                    </a>
                    <a href="/" class="footer__links-link--uppercase">
                        BECOME A MEMBER
                    </a>
                    <a href="/" class="footer__links-link--uppercase">
                        NIKE X NBA
                    </a>
                    <a href="/" class="footer__links-link--uppercase">
                        NIKE JOURNAL
                    </a>
                    <a href="/" class="footer__links-link--uppercase">
                        Site Feedback
                    </a>
                </div>

                <div class="footer__links-group">
                    <a href="/" class="footer__links-link--uppercase">
                        HELP
                    </a>

                    <a href="/" class="footer__links-link--capitalize">
                        Get Help
                    </a>

                    <a href="/" class="footer__links-link--capitalize">
                        Order Status
                    </a>

                    <a href="/" class="footer__links-link--capitalize">
                        Shipping and Delivery
                    </a>

                    <a href="/" class="footer__links-link--capitalize">
                        Returns
                    </a>

                    <a href="/" class="footer__links-link--capitalize">
                        Order Cancellation
                    </a>

                    <a href="/" class="footer__links-link--capitalize">
                        Payment Options
                    </a>

                    <a href="/" class="footer__links-link--capitalize">
                        Gift Card Balance
                    </a>

                    <a href="/" class="footer__links-link--capitalize">
                        Contact Us
                    </a>
                </div>

                <div class="footer__links-group">
                    <a href="/" class="footer__links-link--uppercase">
                        COMPANY
                    </a>

                    <a href="/" class="footer__links-link--capitalize">
                        About SneakerStore
                    </a>

                    <a href="/" class="footer__links-link--capitalize">
                        News
                    </a>

                    <a href="/" class="footer__links-link--capitalize">
                        Careers
                    </a>

                    <a href="/" class="footer__links-link--capitalize">
                        Investors
                    </a>

                    <a href="/" class="footer__links-link--capitalize">
                        Purpose
                    </a>

                    <a href="/" class="footer__links-link--capitalize">
                        Sustainability
                    </a>
                </div>

                <div class="footer__links-group">
                    <a href="/" class="footer__links-link--uppercase">
                        PROMOTIONS & DISCOUNTS
                    </a>

                    <a href="/" class="footer__links-link--capitalize">
                        Student
                    </a>

                    <a href="/" class="footer__links-link--capitalize">
                        Military
                    </a>

                    <a href="/" class="footer__links-link--capitalize">
                        Teacher
                    </a>

                    <a href="/" class="footer__links-link--capitalize">
                        First Responders & Medical
                    </a>

                    <a href="/" class="footer__links-link--capitalize">
                        Professionals
                    </a>

                    <a href="/" class="footer__links-link--capitalize">
                        Birthday
                    </a>
                </div>

                <div
                    id="accord1"
                    class="footer__links-accordeon"
                >
                    <button
                        type="button" class="footer__links-link--uppercase footer__links-accordeon-title"
                        on:click={() => handleActive('accord1')}
                    >
                        HELP <Icon src={FaPlus} /> <Icon src={FaMinus} />
                    </button>

                    <div class="footer__links-folding">

                        <a href="/" class="footer__links-link--capitalize">
                            Get Help
                        </a>
                        
                        <a href="/" class="footer__links-link--capitalize">
                            Order Status
                        </a>
                        
                        <a href="/" class="footer__links-link--capitalize">
                            Shipping and Delivery
                        </a>
                        
                        <a href="/" class="footer__links-link--capitalize">
                            Returns
                        </a>
                        
                        <a href="/" class="footer__links-link--capitalize">
                            Order Cancellation
                        </a>
                        
                        <a href="/" class="footer__links-link--capitalize">
                            Payment Options
                        </a>
                        
                        <a href="/" class="footer__links-link--capitalize">
                            Gift Card Balance
                        </a>
                        
                        <a href="/" class="footer__links-link--capitalize">
                            Contact Us
                        </a>
                    </div>
                </div>

                <div
                    id="accord2"
                    class="footer__links-accordeon"
                >
                    <button
                        type="button" class="footer__links-link--uppercase footer__links-accordeon-title"
                        on:click={() => handleActive('accord2')}
                    >
                        COMPANY <Icon src={FaPlus} /> <Icon src={FaMinus} />
                    </button>

                    <div class="footer__links-folding">

                        <a href="/" class="footer__links-link--capitalize">
                            About SneakerStore
                        </a>

                        <a href="/" class="footer__links-link--capitalize">
                            News
                        </a>

                        <a href="/" class="footer__links-link--capitalize">
                            Careers
                        </a>

                        <a href="/" class="footer__links-link--capitalize">
                            Investors
                        </a>

                        <a href="/" class="footer__links-link--capitalize">
                            Purpose
                        </a>

                        <a href="/" class="footer__links-link--capitalize">
                            Sustainability
                        </a>
                    </div>
                </div>

                <div
                    id="accord3"
                    class="footer__links-accordeon"
                >
                    <button
                        type="button" class="footer__links-link--uppercase footer__links-accordeon-title"
                        on:click={() => handleActive('accord3')}
                    >
                        PROMOTIONS & DISCOUNTS <Icon src={FaPlus} /> <Icon src={FaMinus} />
                    </button>

                    <div class="footer__links-folding">

                        <a href="/" class="footer__links-link--capitalize">
                            Student
                        </a>

                        <a href="/" class="footer__links-link--capitalize">
                            Military
                        </a>

                        <a href="/" class="footer__links-link--capitalize">
                            Teacher
                        </a>

                        <a href="/" class="footer__links-link--capitalize">
                            First Responders & Medical
                        </a>

                        <a href="/" class="footer__links-link--capitalize">
                            Professionals
                        </a>

                        <a href="/" class="footer__links-link--capitalize">
                            Birthday
                        </a>
                    </div>
                </div>
            </div>

            <div class="footer__links-right">
                <a href="/" class="footer__links-rounded">
                    <Icon src={FaTwitter} />
                </a>

                <a href="/" class="footer__links-rounded">
                    <Icon src={FaFacebook} />
                </a>

                <a href="/" class="footer__links-rounded">
                    <Icon src={FaYoutube} />
                </a>

                <a href="/" class="footer__links-rounded">
                    <Icon src={FaInstagram} />
                </a>
            </div>
        </div>

        <div class="footer__copyright">
            <span class="footer__copyright-text">© 2023 SneakerStore, Inc. All Rights Reserved</span>

            <div class="footer__copyright-terms">
                <a class="footer__copyright-link" href="/">Terms of Sale</a>
                <a class="footer__copyright-link" href="/">Terms of Use</a>
                <a class="footer__copyright-link" href="/">Privacy Policy</a>
            </div>
        </div>
    </div>
</footer>

<style lang="scss">
    .footer{
        display: flex;
        justify-content: center;
        padding: 3rem 2rem 0rem 2rem;
        background-color: var(--black600);

        &__content {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 2rem;
            max-width: var(--max-width-footer);
        }

        &__links {
            display: flex;
            // padding: 2rem 0;
            gap: 1rem;

            &-left{
                flex: 3;
                display: flex;
                gap: 1rem;
            }

            &-group {
                flex: 1;
                display: flex;
                flex-direction: column;
                gap: 1.5rem;
            }

            &-link{
                &--uppercase {
                    font-size: 1.3rem;
                    color: var(--white600);
                    // text-transform: uppercase;
                    text-decoration: none;
                }

                &--capitalize {
                    font-size: 1.3rem;
                    color: var(--gray700);
                    text-decoration: none;
                    transition: var(--transition);

                    &:hover,
                    &:focus-visible {
                        color: var(--white600);
                    }
                }
            }

            &-right {
                flex: 1;
                display: flex;
                justify-content: flex-end;
                align-items: flex-start;
                gap: 1rem;
            }

            &-rounded {
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: var(--gray700);
                height: 3rem;
                width: 3rem;
                border-radius: 50%;
                color: var(--black700);
                text-decoration: none;
                transition: var(--transition);

                &:hover,
                &:focus-visible {
                    background-color: var(--white600);
                }

                & > :global(svg) {
                    font-size: 1.8rem;
                    fill: var(--black700);
                }
            }

        }

        &__copyright{
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 1rem 2rem;
            padding: 1rem 0;

            &-text {
                font-size: 1.4rem;
            }

            &-terms {
                display: flex;
                gap: 2rem;
            }

            &-link {
                text-decoration: none;
                color: var(--gray700);
                font-size: 1.4rem;
                transition: var(--transition);

                &:hover,
                &:focus-visible {
                    color: var(--white600);
                }
            }
        }
    }

    .footer {

        &__links {

            &-folding,
            &-accordeon {
                flex: 1;
                display: flex;
                flex-direction: column;
            }

            &-accordeon {
                display: none;

                &:nth-of-type(5) {
                    border-top: 0.1rem solid var(--gray800);
                }


                &-title {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 1.5rem;
                    // line-height: 1.231em;
                    padding: 1.5rem 0;
                    background: none;
                    border: 0;
                    font-family: 'Montserrat';
                    font-size: 1.3rem;
                    font-weight: 600;
                    text-align: left;
                    text-rendering: optimizeLegibility;
                    cursor: pointer;

                    & > :global(svg) {
                        display: flex;
                        fill: var(--white600);
                        font-size: 1.2rem;
                    }

                    & > :global(svg:nth-child(2)) {
                        display: none;
                    }
                }

                &:is(.activeAccordeon) {
                    & .footer__links-folding {
                        max-height: 25rem;
                        // line-height: 1em;
                        // gap: 1.5rem;
                    }

                    & .footer__links-accordeon-title > :global(svg:nth-child(1)) {
                        display: none;
                    }

                    & .footer__links-accordeon-title > :global(svg:nth-child(2)) {
                        display: flex;
                    }
                }
            }

            &-folding {
                max-height: 0rem;
                overflow: hidden;
                gap: 1.5rem;
                // gap: 0rem;
                // line-height: 0em;
                transition: var(--transition);
            }
        }
    }


    @media screen and (max-width: 845px) {
        .footer {
            &__links {
                flex-direction: column;

                &-right {
                    justify-content: flex-start;
                }
            }
        }
    }

    @media screen and (max-width: 777px) {
        .footer {

            &__links {
                gap: 3rem;
            }

            &__copyright {
                flex-direction: column;
                text-align: center;
                // flex-wrap: wrap;
                // font-size: 1.1rem;
                &-terms {
                    justify-content: center;
                    flex-wrap: wrap;
                }
                &-text,
                &-link {
                    font-size: 1.2rem;
                }
            }
        }
    }

    @media screen and (max-width: 675px) {
        .footer{

            &__links {

                &-left {
                    flex-direction: column;
                    gap: 2rem;
                }

                &-group {
                    &:nth-child(2),
                    &:nth-child(3),
                    &:nth-child(4) {
                        display: none
                    }
                }

                &-accordeon {
                    display: flex;
                }
            }
        }
    }
</style>