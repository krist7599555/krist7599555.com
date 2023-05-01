import type { LayoutServerLoad } from './$types';
import { load as sload } from '../+page.server';

export const load = (async ({ request, url }) => {
  const { paths } = await sload();
  const idx = paths.findIndex(p => p.url === url.pathname);
  return {
    newer: idx > 0 ? paths[idx - 1] : null,
    older: idx + 1 < paths.length ? paths[idx + 1] : null
  };
}) satisfies LayoutServerLoad;
