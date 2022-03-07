<script>
  import Seo from '$lib/seo.svelte';
  /** @type {import('../routes/blogs/index.json').BlogMetadataType} */
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  $: metadata = $$props;
</script>

<Seo
  title={metadata.title}
  description={metadata.description}
  keywords={metadata.keywords}
  publishedTime={(metadata.date || '').toString()}
/>

<div class="dark:bg-dark">
  <article class="prose mx-auto py-16 dark:prose-invert">
    <slot />
    <hr />
    <a href="/">กลับหน้าแรก</a>
  </article>
</div>

<style>
  /* mobile */
  @media only screen and (max-width: 85ch) {
    .prose > :global(:not(figure)) {
      margin-left: 2rem;
      margin-right: 2rem;
    }
  }

  .prose :global(img) + :global(figcaption) {
    text-align: center;
    position: relative;
    top: -1rem;
  }
  .prose > :global(figure) > :global(img) {
    margin-left: auto;
    margin-right: auto;
  }
  .prose > :global(blockquote) > :global(p::before),
  .prose > :global(blockquote) > :global(p::after) {
    content: '';
  }
</style>
