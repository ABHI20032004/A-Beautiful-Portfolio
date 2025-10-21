import { useState } from "react"
import { cn } from "@/lib/utils";

const skills  = [
    //frontend
    {name: "HTML" , levels:"95" ,category:"Frontend"},
    {name: "CSS" , levels:"92" ,category:"Frontend"},
    {name: "Java Script" , levels:"87" ,category:"Frontend"},
    {name: "React" , levels:"85" ,category:"Frontend"},
    {name: "Tailwind" , levels:"80" ,category:"Frontend"},
    //Backend
    {name: "Node JS" , levels:"90" ,category:"Backend"},
    {name: "Epress JS" , levels:"70" ,category:"Backend"},
    {name: "Mongo DB" , levels:"55" ,category:"Backend"},
    {name: "MYSQL" , levels:"65" ,category:"Backend"},
    //Tools
    {name: "VS Code" , levels:"95" ,category:"Tools"},
    {name: "Github" , levels:"85" ,category:"Tools"},
]

const Category = ["all" , "Frontend" , "Backend" , "Tools"]

export const SkillsSection = ()=> {
    const [activeCategory ,  setActiveCategory] = useState("all")

    const filtered_skills =  skills.filter(
        (skill) => activeCategory === "all"|| skill.category === activeCategory
    )
    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        My <span className="text-primary">Skills</span>
                    </h2>

                    <div className=" flex flex-wrap justify-center gap-4 mb-12">
                        {Category.map((category,key) => (
                            <button key={key}
                            onClick={()=>setActiveCategory(category)}
                            className={cn(
                            "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                            activeCategory===category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary" )}>
                                    {category}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filtered_skills.map((skill,key) => (
                            <div key={key}
                            className="bg-card p-6 rounded-lg shadow-xs card-hover">
                                    <div className="text-left mb-4">
                                        <h3 className="font-semibold text-lg"> {skill.name}</h3>
                                    </div>
                                    <div className="w-full bg-secondar/50 h-2 rounded-full overflow-hidden">
                                        <div className="bg-primary h-2 rounded-full origin-left animate-[glow_1.5s_ease-out"
                                        style={{width:skill.levels + "%"}}/>

                                    </div>

                                    <div className="text-right mt-1">
                                        <span className="text-sm font-bold text-muted-foreground">
                                            {skill.levels}%
                                        </span>
                                    </div>
                            </div>
                        ))}
                    </div>
                </div>
        </section>
    )
}