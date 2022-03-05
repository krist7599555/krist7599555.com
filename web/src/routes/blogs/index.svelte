<script lang="ts">
  export let paths: Awaited<ReturnType<typeof import('./index').get>>['body']['paths'];
</script>

<section class="container mx-auto w-[min(100%,400px)] py-12">
  {#each paths as path}
    <a class="block border-b border-primary pb-4" href={path.url}>
      <h1 class="font-bold text-2xl">{path.metadata.title}</h1>
      <p>{path.metadata.description}</p>
      <p class="text-sm opacity-50">Post on {path.metadata.date}</p>
    </a>
  {/each}
</section>
