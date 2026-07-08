// import React from 'react'

import { ArrowRight, ExternalLink } from "lucide-react"
import {  FaGithub } from "react-icons/fa"

const projects = [
    {
        id:1,
        title: "Hyperframe",
        description: "It is a AI video generation platform.",
        image: "/projects/hyperframe.png",
        tags: ["React","Node.js","Express.js","JavaScript","Docker"],
        demoUrl: "https://hyperframe-app-1.onrender.com",
        githubUrl: "https://github.com/AadityaSinha24/Hyperframe-app"

    },
    {
        id:2,
        title: "Manatyping",
        description: "Privacy-first writing analytics that tracks writing effort and thinking patterns without storing or reading content.",
        image: "/projects/Manatyping.png",
        tags: ["React","Node.js","Express.js","JavaScript"],
        githubUrl: "https://github.com/AadityaSinha24/Manatyping"
    }
]

function Project() {
  return (
    <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured <span className="text-primary">Projects</span></h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my projects.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project,key)=>(
                    <div
                    key= {key}
                    className=" group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                    >
                        <div className="h-48 overflow-hidden border-3 border-amber-400">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

                        </div>
                        <div className="p-6 ">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag)=>(
                                    <span 
                                    key={tag}
                                    className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground ">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                        </div>
                        <h3 className="text-xl font-semibold mb-1">
                            {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4">
                            {project.description}
                        </p>
                        <div className="flex justify-between items-center">
                            <div className="flex space-x-3">
                                {project.demoUrl && (
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    >
                                        <ExternalLink size={20} />
                                    </a>
                                    )}
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300 "
                                >
                                    <FaGithub size={20} />
                                </a>

                            </div>

                        </div>

                    </div>
                ))}
            </div>
            <div className="text-center mt-12">
                <a
                    className="cosmic-button w-fit flex items-center mx-auto gap-2"
                    target="_blank"
                    href="https://www.github.com/AadityaSinha24"
                >
                    Check My Github <ArrowRight size={20} />
                </a>

            </div>
        </div>
    </section>
  )
}

export default Project