import { useState } from "react";
import ProjectCard from "./project-card";
import { Button } from "./ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { 
    GAME_DEVELOPMENT_TITLE, 
    EMBEDDED_SYSTEMS_TITLE,
    WEB_DEVELOPMENT_TITLE,
    APP_DEVELOPMENT_TITLE,
} from "@/constants/texts"

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

const iconStyles: Record<string, string> = {
    [EMBEDDED_SYSTEMS_TITLE]: "bg-orange-500 shadow-lg shadow-orange-500/50",
    [WEB_DEVELOPMENT_TITLE]: "bg-[rgb(0,214,197)] shadow-lg shadow-[rgb(0,214,197)]/50",
    [APP_DEVELOPMENT_TITLE]: "bg-blue-500 shadow-lg shadow-blue-500/50",
    [GAME_DEVELOPMENT_TITLE]: "bg-purple-500 shadow-lg shadow-purple-500/50"
}

function CategorySection(
    {
        icon: Icon,
        categoryName,
        description,
        projects,
        initialShowCount,
    } : CategorySectionProps
) {
    const [showAll, setShowAll] = useState<boolean>(false);
    const displayedProjects: Project[] = showAll ? projects : projects.slice(0, initialShowCount ?? 3);
    const hasMore: boolean = projects.length > (initialShowCount ?? 3);

    return <section>
        <div className="flex flex-col gap-8">
            <div className="text-white flex gap-4 items-center">
                <div className={`p-3 rounded-lg ${iconStyles[categoryName] ?? 'bg-amber-300'}`}>
                    <Icon className="h-8 w-8 " />
                </div>
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold">{categoryName}</h2>
                    <p className="text-gray-300 mt-2">{description}</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedProjects.map((project, index) => (
                    <ProjectCard 
                    key={index}
                    title={project.title}
                    description={project.description}
                    link={project.link}
                    tags={project.tags}
                    />
                ))}
            </div>
            { hasMore &&
                <div className="flex justify-center">
                    <Button onClick={() => setShowAll(!showAll)} className="cursor-pointer gap-2 text-white hover:bg-accent/20 hover:border-accent border-card border-none opacity-100 bg-[rgba(255,255,255,0.25)]">
                        { showAll ? <><ChevronUp size={20} /> Show Less</> : 
                        <><ChevronDown size={20} /> View All {projects.length} Projects</>}
                    </Button>
                </div>
            }
        </div>
    </section>;
}

export default CategorySection;