import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
    title: string;
    description: string;
    link: string;
    tags: string[];
}

function ProjectCard(props: ProjectCardProps) {
    return <a href={props.link}>
        <Card className="hover:shadow-lg transition-shadow h-full">
            <CardHeader>
                <CardTitle>{props.title}</CardTitle>
                <ArrowUpRight className="absolute top-4 right-4 h-4 w-4 text-muted-foreground"/>
                <CardDescription>{props.description}</CardDescription>
            </CardHeader>
            <CardContent>
                {props.tags.map((tag) => (
                    <Badge variant="secondary" key={tag} className="mr-2 mb-2">{tag}</Badge>
                ))}
            </CardContent>
        </Card>
    </a>;
}

export default ProjectCard;