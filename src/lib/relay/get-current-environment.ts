import { getClientEnvironment } from './client';
import { IS_SERVER } from './is-server';
import { getServerEnvironment } from './server';

export function getCurrentEnvironment() {
  if (IS_SERVER) {
    return getServerEnvironment();
  }

  return getClientEnvironment();
}
