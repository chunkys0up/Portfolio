import { projects, type CardData } from "../components/DataTypes";
import ExperienceCard from "../components/ExperienceCard";

function AboutMe() {
    return (
        <div className="portfolio-container">
            <h1>Andrew Nguyen</h1>

            <section>
                <p className="section-title">About</p>
                <p className="sub-section">akldjflas jdfl aksjdf las sdlfjds dslfjdksfl lsdkjfdslkjf fdksljfds. dslkjfdlskfj. adlfkjadslfkjdas. adslkjfadslkjf ds. alsdkfjasdlkfjsadlk. flkadjlfakdsjflkds. fldskjfdls.</p>
            </section>

            <section>
                <p className="section-title">Experience</p>
            </section>

            <section>
                <p className="section-title">Projects</p>
                {projects.map((p: CardData) => (
                    <ExperienceCard key={p.link} card={p} />
                ))}
            </section>
        </div>
    )
}

export default AboutMe;
