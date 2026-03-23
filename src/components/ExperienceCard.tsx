import type { CardData } from "./DataTypes";

export default function ExperienceCard({ card, IsLink }: { card: CardData; IsLink: boolean }) {
    return (
        <div className="card">
            <p className="card-date-column">{card.date}</p>
            <div className="card-col">
                {IsLink ? <a href={card.link} className="card-title-link" target="_blank">{card.title}</a>
                    : <p className="card-title">{card.title}</p>}
                <p className="card-description">{card.description}</p>
                {card.tags.length > 0 && (
                    <p className="card-tags">{card.tags.join(" · ")}</p>
                )}
                {card.image && <img className="card-thumbnail" src={card.image} alt={card.title} />}
            </div>
        </div>
    );
}
