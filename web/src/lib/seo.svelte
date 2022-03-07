<script lang="ts">
  import { flatMap } from 'lodash-es';

  import SvelteSeo from 'svelte-seo';
  export let title: string;
  export let description: string;
  export let image = 'https://krist7599555.com/og.jpg';
  export let keywords: string[] = [];
  export let authors: string[] = ['Krist Ponpairin'];
</script>

<SvelteSeo
  {title}
  {description}
  keywords={keywords.join(', ')}
  openGraph={{
    title,
    description,
    images: [
      {
        url: image
      }
    ],
    article: {
      authors: ['Krist Ponpairin', ...authors],
      tags: keywords
    }
  }}
  twitter={{
    image,
    title,
    description
  }}
/>
