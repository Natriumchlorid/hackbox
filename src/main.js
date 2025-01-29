import { mount } from 'svelte';
import App from './App.svelte';
import './getCore.js';
import './function.js';

const app = mount(App, {
    target: (() => {
        const app = document.createElement('div');
        document.body.append(app);
        return app;
    })(),
});

export default app;
