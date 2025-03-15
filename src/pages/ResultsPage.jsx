import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { fetchResults } from "../services/api";
import TimelineItem from "../components/TimelineItem";

export default function ResultsPage() {
    const [data, setData] = useState([]);
    const [searchParams] = useSearchParams();
    const query = searchParams.get("query") || "";
    const navigate = useNavigate();

    useEffect(() => {
        if (query) {
            fetchResults().then((results) => {
                setData(results);
            });
        }
    }, [query]); // O useEffect será acionado sempre que a query mudar

    return (
        <div className="min-h-screen bg-gray-900 text-white p-8 relative">
            {/* Botão de voltar */}
            <button 
                onClick={() => navigate("/")} 
                className="absolute top-4 left-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
            >
                ← Voltar
            </button>

            <h1 className="text-3xl font-bold text-center mb-8">
                {query ? `Results for "${query}"` : "Results"}
            </h1>

            <VerticalTimeline>
                {data.length > 0 ? (
                    data.map((item, index) => (
                        <TimelineItem key={index} resumo={item.resumo} url={item.url} />
                    ))
                ) : (
                    <p className="text-center text-gray-400">No results found.</p>
                )}
            </VerticalTimeline>
        </div>
    );
}
