import { VerticalTimelineElement } from "react-vertical-timeline-component";

export default function TimelineItem({ resumo, url }) {
    return (
        <VerticalTimelineElement
            contentStyle={{ background: "#1E293B", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #1E293B" }}
            iconStyle={{ background: "#3B82F6", color: "#fff" }}
        >
            <h3 className="text-lg font-semibold">{resumo}</h3>
            <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                Ver notícia completa
            </a>
        </VerticalTimelineElement>
    );
}
