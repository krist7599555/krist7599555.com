<script lang="ts">
import type { PageData } from './$types';
import Seo from '$lib/seo.svelte';
import { format } from 'date-fns';
import th from 'date-fns/locale/th/index.js';
export let data: PageData;
</script>

<Seo title="Krist Ponpairin" description="Personal Journey of what we See, Think and Believe" />

<section>
  <div class="container mx-auto pt-16 pb-12">
    <div class="container text-center px-8">
      <p class="text-2xl font-bold">Krist Ponpairin</p>
      <p class="text-base mt-2">Personal Journey, See, Think and Believe</p>
    </div>
  </div>
</section>

<section
  class="flex flex-col w-[min(100%,500px)] px-8 pb-24 pt-12 mx-auto divide-y-2 divide-opacity-50"
>
  {#each data.paths as blog}
    <div class="py-6">
      <a class="text-xl font-bold" href={blog.url}>
        {blog.metadata.title}
      </a>
      <p class="mt-4 text-xs opacity-70">
        {format(new Date(blog.metadata.date), 'EEE d MMMM, yyyy', {
          locale: th
        })}
      </p>
      <p class="mt-2">{blog.metadata.description}</p>
      <a
        href={blog.url}
        class="inline-block mt-3 bg-dark bg-opacity-80 hover:bg-opacity-50 text-white px-3 py-1"
      >
        อ่านต่อ
      </a>
    </div>
  {/each}
</section>
