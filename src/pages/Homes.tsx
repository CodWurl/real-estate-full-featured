
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { HomeSearch } from "../components/real-estate/HomeSearch";

export default function Homes() {
  const [searchParams] = useSearchParams();
  const [initialQuery, setInitialQuery] = useState("");

  useEffect(() => {
    const query = searchParams.get('q') || '';
    setInitialQuery(query);
  }, [searchParams]);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Find Homes</h1>
      <HomeSearch initialQuery={initialQuery} />
    </div>
  );
}
