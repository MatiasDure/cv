import { useState } from "react";
import ProjectCard from "./project-card";
import { ChevronDown, ChevronUp } from "lucide-react";

export interface Project {
    title: string;
    description: string;
    link: string;
    tags: string[];
}

export interface CategorySectionProps {
    icon: any;
    categoryName: string;
    description: string;
    projects: Project[];
    initialShowCount?: number;
}

function CategorySection(
    props: CategorySectionProps
) {
    const [showAll, setShowAll] = useState<boolean>(false);
    const displayedProjects: Project[] = showAll ? props.projects : props.projects.slice(0, props.initialShowCount ?? 3);
    const hasMore: boolean = props.projects.length > (props.initialShowCount ?? 3);

    return <section>
        <div className="text-white flex">
            {props.icon}
            <div>
                <h2>{props.categoryName}</h2>
                <p>{props.description}</p>
            </div>
        </div>
        <div>
            {displayedProjects.map((project) => (
                <ProjectCard 
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    link={project.link}
                    tags={project.tags}
                />
            ))}
        </div>
        { hasMore &&
            <button onClick={() => setShowAll(!showAll)}>
                { showAll ? <><ChevronUp /> Show Less</> : <><ChevronDown /> View All {props.projects.length} Projects</> }
            </button>
        }
    </section>;
}

export default CategorySection;