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
    return <a href={props.link} className="group">
        <Card className="h-full transition-all hover:shadow-xl hover:shadow-accent/20 bg-card/80 backdrop-blur-sm border-0">
            <CardHeader>
                <div className="flex justify-between items-center">
                    <CardTitle className="text-xl group-hover:text-accent transition-colors">{props.title}</CardTitle>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"/>
                </div>
                <CardDescription className="text-base">{props.description}</CardDescription>
            </CardHeader>
            <CardContent>
                {props.tags.map((tag) => (
                    <Badge variant="secondary" key={tag} className="mr-2 mb-2 font-robotoMono">{tag}</Badge>
                ))}
            </CardContent>
        </Card>
    </a>;
}

export default ProjectCard;