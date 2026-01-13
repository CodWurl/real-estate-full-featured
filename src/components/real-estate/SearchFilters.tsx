
import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Slider } from "../ui/slider";
import { Badge } from "../ui/badge";
import { X } from "lucide-react";

interface SearchFiltersProps {
  setQuery: (query: string) => void;
  setFilters: (filters: SearchFilters) => void;
  initialQuery?: string;
}

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

export function SearchFilters({ setQuery, setFilters, initialQuery = "" }: SearchFiltersProps) {
  const [location, setLocation] = useState(initialQuery);
  const [filters, setLocalFilters] = useState<SearchFilters>({});
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  // Update location when initialQuery changes
  useEffect(() => {
    if (initialQuery !== location) {
      setLocation(initialQuery);
    }
  }, [initialQuery]);

  const handleSearch = () => {
    setQuery(location);
    setFilters(filters);
  };

  const updateFilter = (key: keyof SearchFilters, value: SearchFilters[keyof SearchFilters]) => {
    const newFilters = { ...filters, [key]: value };
    setLocalFilters(newFilters);
    setFilters(newFilters);
  };

  const clearFilter = (key: keyof SearchFilters) => {
    const newFilters = { ...filters };
    delete newFilters[key];
    setLocalFilters(newFilters);
    setFilters(newFilters);
  };

  const activeFiltersCount = Object.keys(filters).length;

  return (
    <div className="space-y-4">
      {/* Main Search Bar */}
      <div className="flex gap-2">
        <Input
          placeholder="Enter city, state, or ZIP code"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="flex-1"
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        />
        <Button onClick={handleSearch}>Search</Button>
      </div>

      {/* Filters Row */}
      <div className="flex items-center gap-2 flex-wrap">
        <Popover open={isFiltersOpen} onOpenChange={setIsFiltersOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" className="relative">
              Filters
              {activeFiltersCount > 0 && (
                <Badge variant="secondary" className="ml-2 h-5 w-5 p-0 text-xs">
                  {activeFiltersCount}
                </Badge>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="space-y-4">
              <h4 className="font-medium">Filters</h4>

              {/* Price Range */}
              <div>
                <label className="text-sm font-medium">Price Range</label>
                <div className="flex gap-2 mt-2">
                  <Input
                    placeholder="Min price"
                    type="number"
                    value={filters.minPrice || ""}
                    onChange={(e) => updateFilter("minPrice", e.target.value ? Number(e.target.value) : undefined)}
                  />
                  <Input
                    placeholder="Max price"
                    type="number"
                    value={filters.maxPrice || ""}
                    onChange={(e) => updateFilter("maxPrice", e.target.value ? Number(e.target.value) : undefined)}
                  />
                </div>
              </div>

              {/* Bedrooms */}
              <div>
                <label className="text-sm font-medium">Bedrooms</label>
                <Select value={filters.minBeds?.toString()} onValueChange={(value) => updateFilter("minBeds", value === "any" ? undefined : Number(value))}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Min beds" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="1">1+</SelectItem>
                    <SelectItem value="2">2+</SelectItem>
                    <SelectItem value="3">3+</SelectItem>
                    <SelectItem value="4">4+</SelectItem>
                    <SelectItem value="5">5+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Bathrooms */}
              <div>
                <label className="text-sm font-medium">Bathrooms</label>
                <Select value={filters.minBaths?.toString()} onValueChange={(value) => updateFilter("minBaths", value === "any" ? undefined : Number(value))}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Min baths" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="1">1+</SelectItem>
                    <SelectItem value="2">2+</SelectItem>
                    <SelectItem value="3">3+</SelectItem>
                    <SelectItem value="4">4+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Square Footage */}
              <div>
                <label className="text-sm font-medium">Square Footage</label>
                <div className="flex gap-2 mt-2">
                  <Input
                    placeholder="Min sqft"
                    type="number"
                    value={filters.minSquareFeet || ""}
                    onChange={(e) => updateFilter("minSquareFeet", e.target.value ? Number(e.target.value) : undefined)}
                  />
                  <Input
                    placeholder="Max sqft"
                    type="number"
                    value={filters.maxSquareFeet || ""}
                    onChange={(e) => updateFilter("maxSquareFeet", e.target.value ? Number(e.target.value) : undefined)}
                  />
                </div>
              </div>

              {/* Year Built */}
              <div>
                <label className="text-sm font-medium">Year Built (Minimum)</label>
                <Input
                  placeholder="e.g. 2000"
                  type="number"
                  value={filters.minYearBuilt || ""}
                  onChange={(e) => updateFilter("minYearBuilt", e.target.value ? Number(e.target.value) : undefined)}
                  className="mt-2"
                />
              </div>
            </div>
          </PopoverContent>
        </Popover>

        {/* Active Filters */}
        {Object.entries(filters).map(([key, value]) => {
          if (value === undefined || value === "") return null;

          const label = {
            minPrice: `Min $${value.toLocaleString()}`,
            maxPrice: `Max $${value.toLocaleString()}`,
            minBeds: `${value}+ beds`,
            maxBeds: `Up to ${value} beds`,
            minBaths: `${value}+ baths`,
            maxBaths: `Up to ${value} baths`,
            propertyType: value,
            minSquareFeet: `${value.toLocaleString()}+ sqft`,
            maxSquareFeet: `Up to ${value.toLocaleString()} sqft`,
            minYearBuilt: `Built after ${value}`
          }[key] || `${key}: ${value}`;

          return (
            <Badge key={key} variant="secondary" className="flex items-center gap-1">
              {label}
              <X
                className="h-3 w-3 cursor-pointer"
                onClick={() => clearFilter(key as keyof SearchFilters)}
              />
            </Badge>
          );
        })}
      </div>
    </div>
  );
}
