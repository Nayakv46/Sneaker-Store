<script>
import { removeAllProduct } from "../stores/store";

import Icon from 'svelte-icons-pack/Icon.svelte';
import IoClose from 'svelte-icons-pack/io/IoClose';


export let item;



</script>

<button class="button-removeFromCart" type="button" on:click={() => removeAllProduct(item)}>
    <Icon src={IoClose} />
</button>

<style lang="scss">
    .button-removeFromCart {
        display: flex;
        height: max-content;
        font-size: 2.4rem;
        background: none;
        border: rgba(0,0,0,0);
        border-radius: 50%;
        transition: var(--transition);
        cursor: pointer;

        &:hover {
            background: rgba(0,0,0,0.15);
        }
    }
</style>