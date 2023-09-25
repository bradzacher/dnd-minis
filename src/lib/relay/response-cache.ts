import { QueryResponseCache } from 'relay-runtime';

import { IS_SERVER } from './is-server';

const CACHE_TTL = 5 * 1000; // 5 seconds, to resolve preloaded results
export const responseCache = IS_SERVER
  ? null
  : new QueryResponseCache({
      size: 100,
      ttl: CACHE_TTL,
    });
