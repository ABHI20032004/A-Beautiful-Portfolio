import { useState , useEffect } from "react"
/// id size ,x,y ,opacity , animationDuration  -> stars
/// id size ,x,y ,delay, animationDuration  -> meteors
export const StarBackground = () => {
    const [stars , setStars] = useState([])

    const [meteors , setMeteors] = useState([])

    useEffect(() => {
      generateStars() ;
      generateMeteors();

      const handleResize = ()=> {
        generateStars();
      }
      window.addEventListener("resize",handleResize)
      return ()=> window.removeEventListener("resize",handleResize)
    }, [])
    

    const generateStars = ()=>{
        const numberofStars = Math.floor(
            (window.innerWidth * window.innerHeight)/10000
        )
        const newStars = []

        for(let i = 0;i < numberofStars; i++){
            newStars.push({
                id:i,
                size: Math.random() * 4 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random * 0.5 + 0.5,
                animationDuration: Math.random * 4 + 2,

            })
        }
        setStars(newStars)
    }

    
    const generateMeteors = ()=>{
        const numberofMeteors = 4
        const newMeteors = []

        for(let i = 0;i < numberofMeteors; i++){
            newMeteors.push({
                id:i,
                size: Math.random() * .5 + 1.4,
                x: Math.random() * 120,
                y: Math.random() * 90,
                delay: Math.random() * 8 ,
                animationDuration: Math.random() * 2 + 3,

            })
        }
        setMeteors(newMeteors)
    }
    return <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {stars.map((star) => (
            <div key={star.id} className="star animate-pulse-subtle twinkle"
              style={{
                width: star.size + "px",
                height: star.size + "px",
                left: star.x + "%",
                top: star.y + "%",
                opacity: Math.random(),
                animationDuration: star.animationDuration + "s"
            }}/>
        ))}

         {meteors.map((meteor) => (
            <div key={meteor.id} className="meteor animate-meteor"
              style={{
                width: meteor.size * 25 + "px",
                height: meteor.size * 2.5 + "px",
                left: meteor.x + "%",
                top: meteor.y + "%",
                animationDelay : meteor.delay,
                animationDuration: meteor.animationDuration + "s"
            }}/>
        ))}
        </div>
}