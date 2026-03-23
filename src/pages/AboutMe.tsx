import { useEffect } from "react";
import { experience, projects, type CardData } from "../components/DataTypes";
import ExperienceCard from "../components/ExperienceCard";

function AboutMe() {
    useEffect(() => {
        document.title = "About";
    }, []);

    return (
        <div className="portfolio-container">
            <h1>Andrew Nguyen</h1>

            <section>
                <p className="section-title">About</p>
                <p className="sub-section">CS student at CSUF. I like building tools, competing in ICPC, and figuring out how systems work under the hood.</p>
            </section>

            <section>
                <p className="section-title">Experience</p>
                {experience.map((p: CardData) => (
                    <ExperienceCard key={p.title} card={p} IsLink={false} />
                ))}

            </section>

            <section>
                <p className="section-title">Projects</p>
                {projects.map((p: CardData) => (
                    <ExperienceCard key={p.link} card={p} IsLink={true} />
                ))}
            </section>
        </div>
    )
}

export default AboutMe;
