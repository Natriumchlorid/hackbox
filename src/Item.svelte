<main>
    <span class="item">
        <slot></slot>
    </span>
</main>

<style>
    span.item {
        font-size: 120%;
        background: linear-gradient(199deg, #55CEC8, #55A1CE, #556FCE);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }
</style>