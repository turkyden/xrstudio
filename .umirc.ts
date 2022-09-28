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
    'https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.7.2/min/dropzone.min.js',
    'https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.5/dist/mindar-image.prod.js',
  ],
  styles: [
    'https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.7.2/dropzone.min.css',
  ],
  antd: {
    dark: true,
    compact: false,
  },
});
