<script>
    import {itemStore} from "./sidebar.js";
    import Item from "./Item.svelte";
</script>
<main>
    <div class="container">
        {#each $itemStore as item}
            <Item>{item}</Item>
        {/each}
    </div>
</main>
<style>
    div.container{
        height: 85%;
        width: 20em;
        right: 0;
        top: 15%;
        text-align: right;
        z-index: 999;
        position: absolute;
        color: white;
    }
</style>