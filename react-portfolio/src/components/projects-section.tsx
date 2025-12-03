import CategorySection, {type Project, type CategorySectionProps} from "./category-section";
import { Cpu, Smartphone, Globe, Gamepad2 } from "lucide-react";

const embeddedSystemsProjects: Project[]  = [
    
];

const webDevelopmentProjects: Project[]  = [
    
];

const appDevelopmentProjects: Project[]  = [
    
];

const gameDevelopmentProjects: Project[]  = [
    
];

const categories: CategorySectionProps[] = [
    {
        categoryName: "Embedded Systems",
        description: "Low-level programming with C and hardware integration",
        icon: < Cpu />,
        projects: embeddedSystemsProjects,
    }, 
    {
        categoryName: "Web Development",
        description: "Fullstack and frontend web application projects",
        icon: < Globe />,
        projects: webDevelopmentProjects,
    },
    {
        categoryName: "App Development",
        description: "Cross-platform and native mobile applications",
        icon: < Smartphone />,
        projects: appDevelopmentProjects,
    },
    {
        categoryName: "Game Development",
        description: "Interactive experiences and gaming projects",
        icon: < Gamepad2 />,
        projects: gameDevelopmentProjects,
    },
]

function ProjectsSection() {
    return <section>
        {categories.map((category) => (
            <CategorySection
                key={category.categoryName}
                categoryName={category.categoryName}
                description={category.description}
                icon={category.icon}
                projects={category.projects}
            />
        ))}
    </section>;
}

export default ProjectsSection;