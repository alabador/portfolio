import Card from "./Card"

const projects = [
    {
        projectName: "Nutrifax",
        projectUrl: "https://github.com/alabador/nutrifax",
        tech: ["TypeScript", "React"],
        desc: "A web app to search for nutritional values of foods"
    },
    {
        projectName: "WeWatch",
        projectUrl: "https://github.com/alabador/wewatch",
        tech: ["JavaScript", "Node.js", "Express.js", "MongoDB"],
        desc: "A web app to keep track of TV shows and progress"
    },
    {
        projectName: "PyGame Pong",
        projectUrl: "https://github.com/alabador/pygame_pong",
        tech: ["Python", "PyGame"],
        desc: "A simple pong game made using the PyGame framework."
    },
    {
        projectName: "Solitude",
        projectUrl: "https://github.com/alabador/solitude",
        tech: ["TypeScript", "NextJS", "TailwindCSS"],
        desc: "A web app for Solitude, a guild in the Minecraft MMORPG, Wynncraft."
    }
]

const CardSection = () => {
    
    return (
        <section className="flex flex-col w-full">
            <h1 className="text-4xl pt-24 pb-8 font-bold">Projects</h1>
            {projects.map((project) => {
                return(
                    <Card 
                        projectName={project.projectName}
                        projectUrl={project.projectUrl}
                        tech={project.tech}
                        desc={project.desc}
                        key={project.projectName}
                    />
                )
            })}
        </section>
    )
}

export default CardSection