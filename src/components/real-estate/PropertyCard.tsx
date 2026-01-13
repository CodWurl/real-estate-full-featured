
import { Property } from "./types";
import { Badge } from "../ui/badge";

export function PropertyCard({ property }: { property: Property }) {
  return (
    <div className="rounded-xl border p-4 shadow-sm hover:shadow-md transition-shadow">
      <img src={property.imageUrl} className="mb-3 h-48 w-full object-cover rounded-lg" alt={property.address} />
      <div className="space-y-2">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold text-lg leading-tight">{property.address}</h3>
          {property.propertyType && (
            <Badge variant="secondary" className="ml-2 capitalize">
              {property.propertyType}
            </Badge>
          )}
        </div>
        <p className="text-2xl font-bold text-green-600">${property.price.toLocaleString()}</p>
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <span>{property.beds} bd</span>
          <span>{property.baths} ba</span>
          {property.squareFeet && <span>{property.squareFeet.toLocaleString()} sqft</span>}
        </div>
        {property.yearBuilt && (
          <p className="text-sm text-gray-500">Built in {property.yearBuilt}</p>
        )}
        {property.lotSize && property.lotSize > 0 && (
          <p className="text-sm text-gray-500">{property.lotSize} acres</p>
        )}
      </div>
    </div>
  );
}
