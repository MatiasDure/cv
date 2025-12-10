import CategorySection, {type Project, type CategorySectionProps} from "./category-section";
import { Cpu, Smartphone, Globe, Gamepad2 } from "lucide-react";

const embeddedSystemsProjects: Project[]  = [
    {
        title: "Simon Says Game",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempus sem vitae elit tristique pellentesque. Morbi porta, neque in tempus.",
        link: `/projects/simon-says-game`,
        tags: ["C", "STM32", "FSM", "PWM", "Bare-metal"]
    },
    {
        title: "Simon Says Game",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempus sem vitae elit tristique pellentesque. Morbi porta, neque in tempus.",
        link: `/projects/simon-says-game`,
        tags: ["C", "STM32", "FSM", "PWM", "Bare-metal"]
    },
    {
        title: "Simon Says Game",
        description: "Some description",
        link: `/projects/simon-says-game`,
        tags: ["C", "STM32", "FSM", "PWM", "Bare-metal"]
    },
    {
        title: "Simon Says Game",
        description: "Some description",
        link: `/projects/simon-says-game`,
        tags: ["C", "STM32", "FSM", "PWM", "Bare-metal"]
    },
];

const webDevelopmentProjects: Project[]  = [
    {
        title: "Simon Says Game",
        description: "Some description",
        link: `/projects/simon-says-game`,
        tags: ["C", "STM32", "FSM", "PWM", "Bare-metal"]
    },
    {
        title: "Simon Says Game",
        description: "Some description",
        link: `/projects/simon-says-game`,
        tags: ["C", "STM32", "FSM", "PWM", "Bare-metal"]
    },
    {
        title: "Simon Says Game",
        description: "Some description",
        link: `/projects/simon-says-game`,
        tags: ["C", "STM32", "FSM", "PWM", "Bare-metal"]
    },
    {
        title: "Simon Says Game",
        description: "Some description",
        link: `/projects/simon-says-game`,
        tags: ["C", "STM32", "FSM", "PWM", "Bare-metal"]
    },
];

const appDevelopmentProjects: Project[]  = [
    {
        title: "Simon Says Game",
        description: "Some description",
        link: `/projects/simon-says-game`,
        tags: ["C", "STM32", "FSM", "PWM", "Bare-metal"]
    },
    {
        title: "Simon Says Game",
        description: "Some description",
        link: `/projects/simon-says-game`,
        tags: ["C", "STM32", "FSM", "PWM", "Bare-metal"]
    },
    {
        title: "Simon Says Game",
        description: "Some description",
        link: `/projects/simon-says-game`,
        tags: ["C", "STM32", "FSM", "PWM", "Bare-metal"]
    },
    {
        title: "Simon Says Game",
        description: "Some description",
        link: `/projects/simon-says-game`,
        tags: ["C", "STM32", "FSM", "PWM", "Bare-metal"]
    },
];

const gameDevelopmentProjects: Project[]  = [
    {
        title: "Simon Says Game",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempus sem vitae elit tristique pellentesque. Morbi porta, neque in tempus.",
        link: `/projects/simon-says-game`,
        tags: ["C", "STM32", "FSM", "PWM", "Bare-metal"]
    },
    {
        title: "Simon Says Game",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempus sem vitae elit tristique pellentesque. Morbi porta, neque in tempus.",
        link: `/projects/simon-says-game`,
        tags: ["C", "STM32", "FSM", "PWM", "Bare-metal"]
    },
    {
        title: "Simon Says Game",
        description: "Some description",
        link: `/projects/simon-says-game`,
        tags: ["C", "STM32", "FSM", "PWM", "Bare-metal"]
    },
    {
        title: "Simon Says Game",
        description: "Some description",
        link: `/projects/simon-says-game`,
        tags: ["C", "STM32", "FSM", "PWM", "Bare-metal"]
    },
];

const categories: CategorySectionProps[] = [
    {
        categoryName: "Embedded Systems",
        description: "Low-level programming with C and hardware integration",
        icon: Cpu,
        projects: embeddedSystemsProjects,
    }, 
    {
        categoryName: "Web Development",
        description: "Fullstack and frontend web application projects",
        icon: Globe,
        projects: webDevelopmentProjects,
    },
    {
        categoryName: "App Development",
        description: "Cross-platform and native mobile applications",
        icon: Smartphone,
        projects: appDevelopmentProjects,
    },
    {
        categoryName: "Game Development",
        description: "Interactive experiences and gaming projects",
        icon: Gamepad2,
        projects: gameDevelopmentProjects,
    },
]

function ProjectsSection() {
    return <section className="py-20 space-y-16 max-w-7xl mx-auto">
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