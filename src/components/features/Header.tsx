"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useState } from "react"
import { FaHeartbeat } from "react-icons/fa"
import { BgStar } from "./BgStar"


const Header = () => {

    useGSAP( () => {
        gsap.to('#hero', { opacity: 1 ,delay: 0.3, y: 30  })
        gsap.to('#hero2', { opacity: 1 ,delay: 0.3, y: -10  })
        gsap.to('#yoru', { opacity: 1, duration: 2, zoom: 2, ease: "bounce.out" })
        gsap.to('#heart', { color: 'white', delay: 0.3, repeat:-1 })
    }, [])

    const [img, setImg] = useState(true)

    const yoruSage = "https://i.pinimg.com/originals/77/0d/e3/770de375017565781a008653b064e703.jpg"
    const sage = "https://pbs.twimg.com/media/E8pVNZCVUAMykxa.jpg:large"

    
    
    const handleImg = () => {
      if (!event) {
        yoruSage
      } else {
        sage
      }
    }


  return (

   
    <div>
      <h1 className=" flex justify-center items-center text-center text-[#c8094c] font-bold text-4xl font-montserrat my-4 font-mont opacity-0 border border-b-[#c8094c] border-t-[#ff7b6f] p-2 rounded-full top-20" id="hero">
        <FaHeartbeat className=" mr-5 ml-2" height={500} width={500} id="heart"/>
        FELIZ SEGUNDO ANIVERSARIO CHIKITA
        <FaHeartbeat className=" ml-5 mr-2" height={500} width={500} id="heart"/>
      </h1>
      <div className="flex justify-center items-center">
      
        {
          img ? 
            <img
              onClick={() => setImg(false)}
              id="yoru"
              src={yoruSage}
              width={500} 
              height={500} 
              className="mt-12 rounded-lg border border-[#ff7b6f]  shadow-black transition-shadow hover:shadow-white shadow-lg mb-10 opacity-0 cursor-pointer"
            />
          :
            <img
              onClick={() => setImg(true)}
              id="yoru"
              src={sage}
              width={500} 
              height={500} 
              className="mt-12 rounded-lg border border-[#ff7b6f]  shadow-black transition-shadow hover:shadow-white shadow-lg mb-10 opacity-0 cursor-pointer"
            />
        }
      </div>
        <h1 className="text-center text-[#c8094c] font-bold text-4xl font-montserrat my-4 font-mont opacity-0 border border-b-[#ff7b6f] border-t-[#c8094c] p-2 rounded-full top-20" id="hero2">
          La Mejor Pocket Sage
        </h1>
    </div>
    
  )
}

export default Header