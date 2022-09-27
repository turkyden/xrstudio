import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  headScripts: [
    'https://cdn.tailwindcss.com',
    `
    tailwind.config = {
      theme: {
        extend: {},
      },
      plugins: [],
      corePlugins: {
        preflight: false,
      },
    }
    `,
  ],
  scripts: [
    'https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.5/dist/mindar-image.prod.js',
  ],
  antd: {
    dark: true,
    compact: false,
  },
});
