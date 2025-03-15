import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      navigate(`/results?query=${encodeURIComponent(query)}`); // Passando query na URL
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">Search</h1>
      <form
        onSubmit={handleSearch}
        className="w-full max-w-md flex bg-gray-800 rounded-lg p-2"
      >
        <input
          type="text"
          className="flex-1 p-2 bg-transparent border-none outline-none text-lg"
          placeholder="Search something..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Search
        </button>
      </form>
    </div>
  );
}
