import type { PageServerLoad } from './$types';
import { of, map, concatMap, from, filter, toArray, firstValueFrom, tap } from 'rxjs';
import { array, coerce, date, pattern, string, type } from 'superstruct';
import { findIndex, reverse, sortBy } from 'lodash-es';

export const load = (async () => {
  const glob_res = import.meta.glob('./blogs/*/+page.md');
  const paths = await firstValueFrom(
    of(glob_res).pipe(
      map(Object.entries),
      concatMap(o => from(o)),
      filter(([path]) => !path.includes('_')),
      concatMap(async ([path, module]) => {
        try {
          const { metadata } = await module();
          return {
            url: `${path}`.replace(/\/\+page\.md$/g, '').replace(/^\.\//, '/'),
            metadata: type({
              slug: pattern(string(), /^[0-9a-z-]+$/),
              title: string(),
              description: string(),
              date: coerce(date(), string(), d => new Date(d)),
              keywords: array(string())
            }).create(metadata)
          };
        } catch (err) {
          throw new Error(`metadata at ${path}: ${err?.message}`);
        }
      }),
      toArray(),
      map(arr => reverse(sortBy(arr, 'metadata.data'))),
      tap(arr => {
        const slugs = arr.map(o => o.metadata.slug);
        new Set(slugs).forEach(s => {
          slugs.splice(findIndex(slugs, s), 1);
        });
        if (slugs.length > 0) {
          throw new Error(`slug is not unique at ${JSON.stringify(slugs)}`);
        }
      })
    )
  );

  return {
    paths: paths
  };
}) satisfies PageServerLoad;
