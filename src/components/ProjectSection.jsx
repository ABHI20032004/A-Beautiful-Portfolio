import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
    {
        id:1,
        title:"A task Management System.",
        Description:"A beautiful landing page using React and tailwind.",
        image:"/projects/LP1.png",
        tags:["React" , "Tailwind" , "Figma"],
        demoUrl:"#",
        githubUrl:"#"
    },
    {
        id:2,
        title:"A UI Based project.",
        Description:"A project used to learn UIUX  using React and tailwind.",
        image:"/projects/LP2.png",
        tags:["React" , "Tailwind" , "Figma"],
        demoUrl:"#",
        githubUrl:"#"
    },
    {
        id:3,
        title:"A Skin Care Website.",
        Description:"A beautiful skin caring website  using React and tailwind.",
        image:"/projects/LP3.png",
        tags:["React" , "Tailwind" , "Figma"],
        demoUrl:"#",
        githubUrl:"#"
    },
]


export const ProjectSection = () => {
    return (
    <section id="projects" 
            className="py-24 px-4 relative">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                        Featured <span className="text-primary">Projects</span>
                    </h2>
                    <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                        Here are some of my recent projects. Each project was carefully
                        crafted with attention to detail, performance, and user experience.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project ) => (
                            <div key={project.id}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                              <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title}
                                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                              </div> 
                                <div className="p-6">
                                    <div className="flex flex-wrap gap-2 mb-0 justify-center">
                                        {project.tags.map((tag,i)=> (
                                            <span 
                                            key={`${project.id}-${i}`}
                                            className="px-3 py-1 text-sm font-medium rounded-xl text-secondary-foreground bg-primary/10">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div> 
                                <h3 className=" text-xl font-semibold mb-1.5">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4"> {project.Description}</p>
                                
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-5 mx-3 mb-1.5">
                                        <a href={project.demoUrl} target="_blank"
                                         className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <ExternalLink size={30}/>
                                        </a>
                                        <a href={project.githubUrl} target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <Github size={30}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-20">
                        <a href="#" target="_blank"
                            className=" cosmic-button w-fit flex items-center mx-auto gap-2">
                            Check My Github<ArrowRight size={17}/>
                        </a>
                    </div>
                </div>
    </section>
    )
}