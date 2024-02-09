<script>

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

            </div>

            <div class="footer__links-right">
                <a href="/" class="footer__links-rounded">
                    T
                </a>

                <a href="/" class="footer__links-rounded">
                    F
                </a>

                <a href="/" class="footer__links-rounded">
                    Y
                </a>

                <a href="/" class="footer__links-rounded">
                    I
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
        padding: 3rem 3rem 0rem 3rem;
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
            border: 0.1rem solid blue;

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
                border: 0.1rem solid red;
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
                border: 0.1rem solid red;
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

                &:hover {
                    background-color: var(--white600);
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

    @media screen and (max-width: 777px) {
        .footer {

            &__copyright {
                flex-direction: column;
            }
        }
    }
</style>