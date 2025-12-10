import profilePic from "../../../images/profilePic.jpg";
import { Github, Linkedin, Mail, FileDown } from "lucide-react";
import { Button } from "./ui/button";

function Hero() {
    return (
        <section className="min-h-[80vh] flex flex-col items-center justify-center px-6 py-20 gap-8">
            <div>
                <img src={profilePic} alt="Profile Picture" className="h-56 w-56 rounded-full " />
            </div>
            <div className="text-center mb-2">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance text-primary mb-4">Hi, I am Matias Dure</h1>
                <p className="text-xl md:text-2xl text-white max-w-2xl text-pretty leading-relaxed">I build solutions across web platforms, mobile applications, embedded systems, and gaming experiences.</p>
            </div>
            <div className="flex gap-4 flex-wrap justify-center">
                <Button 
                    size="lg"
                    className="gap-2 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/50 hover:brightness-110 cursor-pointer"
                >
                    <Mail className="h-4 w-4"/> Get in touch
                </Button>
                <Button 
                    size="lg" 
                    className="gap-2 bg-[rgb(0,214,197)] hover:bg-[rgb(0,194,177)] text-black border-transparent font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[rgb(0,214,197)]/50 hover:text-white cursor-pointer">
                    <Github className="h-4 w-4"/> Github
                </Button>
                <Button 
                    className="gap-2 bg-[rgb(0,214,197)] hover:bg-[rgb(0,194,177)] text-black border-transparent font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[rgb(0,214,197)]/50 hover:text-white cursor-pointer"
                    size="lg">
                    <Linkedin className="h-4 w-4"/> LinkedIn
                </Button>
                <Button 
                    className="gap-2 bg-[rgb(0,214,197)] hover:bg-[rgb(0,194,177)] text-black border-transparent font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[rgb(0,214,197)]/50 hover:text-white cursor-pointer"
                    size="lg"
                >
                    <FileDown className="h-4 w-4"/> Download CV
                </Button>
            </div>
        </section>
    );
}

export default Hero;