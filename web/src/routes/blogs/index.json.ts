import { of, map, concatMap, from, filter, toArray, firstValueFrom, tap } from 'rxjs';
import { array, coerce, date, pattern, string, type } from 'superstruct';
import { findIndex, reverse, sortBy } from 'lodash-es';

export const get = async () => {
  const paths = await firstValueFrom(
    of(import.meta.glob('./**/*.{svx,md}')).pipe(
      map(Object.entries),
      concatMap(o => from(o)),
      filter(([path]) => !path.includes('_')),
      concatMap(async ([path, module]) => {
        try {
          const { metadata } = await module();
          return {
            url: `/blogs/${path}`
              .replace(/\/\.\//g, '/')
              .replace(/\.(svelte|svx|md)$/, '')
              .replace(/\/index$/, ''),
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
          slugs.splice(findIndex(slugs), 1);
        });
        if (slugs.length > 0) {
          throw new Error(`slug is not unique at ${JSON.stringify(slugs)}`);
        }
      })
    )
  );

  return {
    status: 200,
    body: {
      paths: paths
    }
  };
};
