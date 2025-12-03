import profilePic from "../../../images/profilePic.jpg";
import { Github, Linkedin, Mail, FileDown } from "lucide-react";
import { Button } from "./ui/button";

function Hero() {
    return (
        <section className="min-h-[80vh] flex flex-col items-center gap-6 px-6 py-20">
            <div>
                <img src={profilePic} alt="Profile Picture" className="h-50 w-50 rounded-full " />
            </div>
            <div className="text-center mb-8">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance text-primary mb-4">Hi, I am Matias Dure</h1>
                <p className="text-xl md:text-2xl text-white max-w-2xl text-pretty leading-relaxed">I build solutions across web platforms, mobile applications, embedded systems, and gaming experiences.</p>
            </div>
            <div className="flex gap-4 flex-wrap justify-center">
                <Button variant="default" size="lg">
                    <Mail className="h-4 w-4"/> Get in touch
                </Button>
                <Button variant="default" size="lg" className="bg-(--turquoise-color) text-black">
                    <Github className="h-4 w-4"/> Github
                </Button>
                <Button variant="default" size="lg" className="bg-(--turquoise-color) text-black">
                    <Linkedin className="h-4 w-4"/> LinkedIn
                </Button>
                <Button variant="default" size="lg" className="bg-(--turquoise-color) text-black">
                    <FileDown className="h-4 w-4"/> Download CV
                </Button>
            </div>
        </section>
    );
}

export default Hero;