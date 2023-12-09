import React from "react";
import ProjectCard from "./ProjectCard";

const projectData = [
    {
        id: 1,
        title: "Project 1",
        description: "This is a project.",
        image: "/projects/project.png",
        gitUrl: "https://github.com/APU-Blockchain-Cryptocurrency-Club/LinkedOutAndAbout"

    },
    {
        id: 2,
        title: "Project 2",
        description: "This is a project.",
        image: "/projects/project.png",
        gitUrl: "https://github.com/0xYudhishthra/ClubDAO"
    },
    {
        id: 3,
        title: "Project 3",
        description: "This is a project.",
        image: "/projects/project.png",
        gitUrl: "https://github.com/0xYudhishthra/ClubDAO"
    },
    {
        id: 4,
        title: "Project 4",
        description: "This is a project.",
        image: "/projects/project.png",
        gitUrl: "https://github.com/0xYudhishthra/ClubDAO"
    },
    {
        id: 5,
        title: "Project 5",
        description: "This is a project.",
        image: "/projects/project.png",
        gitUrl: "https://github.com/0xYudhishthra/ClubDAO"
    },
];

const Projects = () => {
    return(
        <div id="projects">
            <div className="text-4xl font-semibold mb-8">My Project</div>
            <div className="grid grid-cols-l md:grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-x-8 gap-y-4 h-full">
                {projectData.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                    />
                ))}
            </div>
        </div>
    );
}
export default Projects;