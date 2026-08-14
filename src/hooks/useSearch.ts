import { useMemo, useState } from "react";
import { searchService, type SearchResult } from "@/services/search/SearchService";

/** Debounce-free (dataset is tiny) global search hook. */
export function useSearch() {
  const [query, setQuery] = useState("");
  const results: SearchResult[] = useMemo(() => searchService.search(query), [query]);
  return { query, setQuery, results };
}
