<div class="dark:bg-[#121212]">
  <article class="prose mx-auto py-16 dark:prose-invert">
    <slot />
  </article>
</div>

<style>
  /* mobile */
  @media only screen and (max-width: 85ch) {
    .prose > :global(:not(img, figure)) {
      margin-left: 2rem;
      margin-right: 2rem;
    }
  }
  /* .prose > :global(img), */
  .prose > :global(figure) > :global(img) {
    margin-left: auto;
    margin-right: auto;
  }
  .prose > :global(figure) > :global(img) + :global(figcaption) {
    text-align: center;
    position: relative;
    top: -1rem;
  }
  .prose > :global(blockquote) {
    /* text-align: center; */
    /* border: none;
    padding: 0; */
  }
  .prose > :global(blockquote) > :global(p::before),
  .prose > :global(blockquote) > :global(p::after) {
    content: '';
  }
</style>
