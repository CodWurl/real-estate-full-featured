
export interface Property {
  id: string;
  address: string;
  price: number;
  beds: number;
  baths: number;
  imageUrl: string;
  propertyType?: string;
  squareFeet?: number;
  yearBuilt?: number;
  lotSize?: number;
}
