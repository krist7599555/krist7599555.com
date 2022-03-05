import { defineMDSveXConfig as defineConfig } from 'mdsvex';

const config = defineConfig({
  extensions: ['.svelte.md', '.md', '.svx'],

  smartypants: {
    dashes: 'oldschool'
  },
  layout: {
    blog: './src/mdsvex-layout/blog.svelte',
    _: './src/mdsvex-layout/default.svelte'
  },
  // layout: {
  //   // two: './src/helpers/MDXLayout2.svelte',
  //   _: './src/helpers/MDXLayout.svelte'
  // },
  // layout: './src/routes/blogs/_mdsvex_layout_default.svelte',
  // layout: {
  //   // blog: "/path/to/layout/blog.svelte",
  //   // blog: './src/routes/blogs/layout.svelte'
  //   _: './src/routes/blogs/_mdsvex_layout_default.svelte',
  //   blog: './src/routes/blogs/_mdsvex_layout_default.svelte'
  // },

  remarkPlugins: [],
  rehypePlugins: []
});

export default config;
