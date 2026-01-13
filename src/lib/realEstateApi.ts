
import { Property } from "../components/real-estate/types";

const BASE_URL = "/mock";

export interface SearchFilters {
  minPrice?: number;
  maxPrice?: number;
  minBeds?: number;
  maxBeds?: number;
  minBaths?: number;
  maxBaths?: number;
  propertyType?: string;
  minSquareFeet?: number;
  maxSquareFeet?: number;
  minYearBuilt?: number;
}

export async function searchHomes(
  query: string,
  filters: SearchFilters,
  page: number,
  limit: number
): Promise<{ data: Property[]; total: number }> {
  const res = await fetch(`${BASE_URL}/homes.json`);
  const all: Property[] = await res.json();

  const filtered = all.filter(h => {
    // Location search
    if (query && !h.address.toLowerCase().includes(query.toLowerCase())) {
      return false;
    }

    // Price filters
    if (filters.minPrice && h.price < filters.minPrice) return false;
    if (filters.maxPrice && h.price > filters.maxPrice) return false;

    // Bedroom filters
    if (filters.minBeds && h.beds < filters.minBeds) return false;
    if (filters.maxBeds && h.beds > filters.maxBeds) return false;

    // Bathroom filters
    if (filters.minBaths && h.baths < filters.minBaths) return false;
    if (filters.maxBaths && h.baths > filters.maxBaths) return false;

    // Property type filter
    if (filters.propertyType && filters.propertyType !== "any" && h.propertyType !== filters.propertyType) return false;

    // Square footage filters
    if (filters.minSquareFeet && (!h.squareFeet || h.squareFeet < filters.minSquareFeet)) return false;
    if (filters.maxSquareFeet && (!h.squareFeet || h.squareFeet > filters.maxSquareFeet)) return false;

    // Year built filter
    if (filters.minYearBuilt && (!h.yearBuilt || h.yearBuilt < filters.minYearBuilt)) return false;

    return true;
  });

  const start = (page - 1) * limit;
  const end = start + limit;

  return {
    data: filtered.slice(start, end),
    total: filtered.length
  };
}
