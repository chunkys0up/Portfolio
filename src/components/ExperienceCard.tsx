import type { CardData } from "./DataTypes";

export default function ExperienceCard({ card }: { card: CardData }) {
    return (
        <div className="card">
            <p className="card-column">{card.date}</p>
            <div className="card-col">
                <a href={card.link} className="card-link" target="_blank">{card.title}</a>
                <p className="card-description">description</p>
                {card.image && <img className="card-thumbnail" src={card.image} alt={card.title} />}
            </div>
        </div>
    );
}
