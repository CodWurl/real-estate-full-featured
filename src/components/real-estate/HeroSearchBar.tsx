import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Search } from "lucide-react";

export function HeroSearchBar() {
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    // Navigate to homes page with search query
    const params = new URLSearchParams();
    if (location.trim()) {
      params.set('q', location.trim());
    }
    navigate(`/homes?${params.toString()}`);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-2xl p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Find Your Dream Home
        </h2>
        <div className="flex gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Enter city, state, or ZIP code"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onKeyPress={handleKeyPress}
              className="pl-10 h-12 text-lg border-0 bg-gray-50 focus:bg-white transition-colors"
            />
          </div>
          <Button
            onClick={handleSearch}
            size="lg"
            className="px-8 h-12 bg-pink hover:bg-pink-dark text-white font-semibold"
          >
            Search Homes
          </Button>
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Search millions of homes for sale across Texas
          </p>
        </div>
      </div>
    </div>
  );
}