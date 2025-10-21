import { ArrowUp } from "lucide-react"

export const FooterSection = () => {
    return <footer  className=" flex justify-center py-12 px-4 bg-card relative border-t border-border mt-12 pt-8  items-center">
        <p className="text-sm text-muted-foregruond"> {" "}
            &copy ; {new Date().getFullYear()} Abhishek.co. All Right Reserved.
            </p>

            <a href="#hero" 
            className="absolute bottom-8 right-4 p-2 rounded-full bg-primary/20 hover:bg-primary/40 text-primary transition-colors">
                <ArrowUp size={20} strokeWidth={3.5} className="h-7 text-primary font-bold"/>
            </a>
    </footer>
}