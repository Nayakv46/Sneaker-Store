<script>
    import { createEventDispatcher } from "svelte";

    let dispatch = createEventDispatcher();

    const onSet = (size) => {
        dispatch('set', size);
    }

    export let size;
    export let id;
    export let name;
</script>

<input type="radio"  id={id} name={name} on:click={() => onSet(size)} />
<label for={id} class="sizePicker__tile">
    EU {size}
</label>

<style lang="scss">
    .sizePicker {

        &__tile {
            display: flex;
            justify-content: center;
            width: 100%;
            max-width: calc(33.33% - 1rem);
            background: var(--white700);
            padding: 1.4rem 0;
            border-radius: 0.4rem;
            border: 0.2rem solid var(--gray400);
            font-size: 1.4rem;
            font-weight: 600;
            transition: var(--transition);
            cursor: pointer;

            &:hover,
            &:checked {
                border: 0.2rem solid var(--black500);
            }
        }

    }
    input[type="radio"] {
       position: absolute;
       width: 0.1rem;
       height: 0.1rem;
       overflow: hidden;
       clip: rect(0.1rem,0.1rem,0.1rem,0.1rem);


       &:checked+label {
           border: 0.2rem solid var(--black500);
       }
   }
</style>