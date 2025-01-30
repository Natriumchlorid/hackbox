<script>
    import {itemList} from "./sidebar.js";
</script>
<main>
    <div class="container">
        {#each itemList as item}
            {item}
        {/each}
    </div>
</main>
<style>
    div.container{
        height: 80%;
        width: 20em;
        right: 0;
        top: 15%;
        text-align: right;
        z-index: 999;
        position: absolute;
        color: white;
    }
</style>