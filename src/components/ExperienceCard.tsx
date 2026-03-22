import type { Project } from "./DataTypes";

export default function ExperienceCard({ project }: { project: Project }) {
    return (
        <div className="card">
            <p className="card-column">{project.date}</p>
            <div className="card-col">
                <a href={project.link} className="card-link" target="_blank">{project.title}</a>
                <p className="card-description">description</p>
                {project.image && <img className="card-thumbnail" src={project.image} alt={project.title} />}
            </div>
        </div>
    );
}
