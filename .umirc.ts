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
  antd: {
    dark: true,
    compact: false,
  },
});
