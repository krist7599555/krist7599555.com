import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import rehypeFigure from 'rehype-figure';

const config = defineConfig({
  extensions: ['.svelte.md', '.md', '.svx'],

  smartypants: {
    dashes: 'oldschool'
  },
  layout: {
    blog: './src/mdsvex-layout/blog.svelte',
    _: './src/mdsvex-layout/default.svelte'
  },
  remarkPlugins: [],
  rehypePlugins: [rehypeFigure]
});

export default config;
