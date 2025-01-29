import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import monkey from 'vite-plugin-monkey';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    monkey({
      entry: 'src/main.js',
      userscript: {
        icon: 'https://static.box3.codemao.cn/block/QmPUc7k7cZfa4z4jSTt3yAEsnj5m8vxCdoCCASZ5CLyHdf',
        namespace: 'toiletsweeper/hackbox',
        match: ['https://view.dao3.fun/*'],
      },
    }),
  ],
});
