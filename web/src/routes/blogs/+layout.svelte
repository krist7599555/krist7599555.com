<script lang="ts">
import type { LayoutData } from './$types';

export let data: LayoutData;
</script>

<slot />

<div
  class="prose mx-auto grid grid-cols-2 gap-2 pb-16"
  style="grid-template-columns: repeat(2, minmax(0, 1fr))"
>
  {#if data.older}
    <a href={data.older.url} class="rounded group p-4 w-full block border col-start-1 no-underline">
      <div class="font-semibold text-[0.9rem] leading-6 group-hover:underline">
        {data.older.metadata.title}
      </div>
      <div class="text-sm mt-2">{data.older.metadata.description}</div>
      <div class="text-sm mt-2 text-gray-400 flex items-center gap-2">
        <svg class="h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
          ><!--! Font Awesome Free 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. -->
          <path
            d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
          />
        </svg>
        โพสก่อนหน้า
      </div>
    </a>
  {/if}
  {#if data.newer}
    <a href={data.newer.url} class="rounded group p-4 w-full block border col-start-2 no-underline">
      <div class="font-semibold text-[0.9rem] leading-6 group-hover:underline">
        {data.newer.metadata.title} (ถัดไป)
      </div>
      <div class="text-sm mt-2">{data.newer.metadata.description}</div>
      <div class="text-sm mt-2 text-gray-400 flex items-center gap-2">
        โพสถัดไป
        <svg class="h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
          ><!--! Font Awesome Free 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. -->
          <path
            d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
          />
        </svg>
      </div>
    </a>
  {/if}
</div>
