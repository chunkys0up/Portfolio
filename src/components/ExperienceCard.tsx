import type { Project } from "./DataTypes";

export default function ExperienceCard({ project }: { project: Project }) {
    return (
        <div className="card">
            <p className="date-column">{project.date}</p>
            <div className="project-card-col">
                <a href={project.link} className="card-link" target="_blank">{project.title}↗</a>
                <p className="project-description">description</p>
            </div>
        </div>
    );
}
