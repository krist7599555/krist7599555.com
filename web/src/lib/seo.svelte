<script lang="ts">
  import SvelteSeo from 'svelte-seo';
  export let title: string;
  export let description: string;
  export let image = 'https://krist7599555.com/og.jpg';
  export let keywords: string[] = [];
  export let authors: string[] = ['Krist Ponpairin'];
  export let publishedTime: string | null = null;
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
      tags: keywords,
      publishedTime
    }
  }}
  twitter={{
    image,
    title,
    description
  }}
/>
