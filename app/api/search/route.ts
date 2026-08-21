import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';

// Export the search index at build time for the static documentation site.
export const revalidate = false;

export const { staticGET: GET } = createFromSource(source);
