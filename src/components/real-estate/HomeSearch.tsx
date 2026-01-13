
import { useEffect, useState } from "react";
import { searchHomes } from "../../lib/realEstateApi";
import { PropertyCard } from "./PropertyCard";
import { SearchFilters, type SearchFilters as SearchFiltersType } from "./SearchFilters";
import { Property } from "./types";

const PAGE_SIZE = 6;

interface HomeSearchProps {
  initialQuery?: string;
}

export function HomeSearch({ initialQuery = "" }: HomeSearchProps) {
  const [query, setQuery] = useState(initialQuery);
  const [filters, setFilters] = useState<SearchFiltersType>({});
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [homes, setHomes] = useState<Property[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    searchHomes(query, filters, page, PAGE_SIZE).then(res => {
      setHomes(res.data);
      setTotal(res.total);
      setLoading(false);
    });
  }, [query, filters, page]);

  // Update query when initialQuery changes (from URL params)
  useEffect(() => {
    if (initialQuery !== query) {
      setQuery(initialQuery);
      setPage(1); // Reset to first page when query changes
    }
  }, [initialQuery]);

  const totalPages = Math.ceil(total / PAGE_SIZE);

  return (
    <div className="space-y-6">
      <SearchFilters setQuery={setQuery} setFilters={setFilters} initialQuery={initialQuery} />

      {loading && <p>Loading homes...</p>}

      <div className="grid md:grid-cols-3 gap-4">
        {homes.map(h => <PropertyCard key={h.id} property={h} />)}
      </div>

      <div className="flex justify-center gap-4">
        <button disabled={page === 1} onClick={() => setPage(p => p - 1)}>
          Prev
        </button>
        <span>{page} / {totalPages || 1}</span>
        <button disabled={page === totalPages} onClick={() => setPage(p => p + 1)}>
          Next
        </button>
      </div>
    </div>
  );
}
