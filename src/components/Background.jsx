// import React from 'react'
import { useEffect, useState } from "react";

function Background() {

    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);
    const generateStars = () =>{
        const numberOfStars = Math.floor(
            (window.innerWidth*window.innerHeight)/1000
        );

        const newStars = [];

        for(let i = 0; i<numberOfStars; i=i+1){
            newStars.push({
                id:i,
                size: Math.random()*3+1,
                x: Math.random()*100,
                y: Math.random() *100,
                opacity: Math.random()*0.5*0.5,
                animationDuration: Math.random() *4+2,
            })
        }
        setStars(newStars);
    }

    const generateMeteor = () =>{
        const numberOfMeteors = 4;

        const newMeteors = [];

        for(let i = 0; i<numberOfMeteors; i=i+1){
            newMeteors.push({
                id:i,
                size: Math.random()*2+1,
                x: Math.random()*100,
                y: Math.random() *20,
                opacity: Math.random()*15,
                animationDuration: Math.random()*3+3,
            })
        }
        setMeteors(newMeteors);
    }

    useEffect(()=>{
        generateStars();
        generateMeteor();

        const handleResize = () =>{
            generateStars();
            
        };
        window.addEventListener('resize',handleResize);

        return () => window.removeEventListener("resize",handleResize);


    },[])
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {stars.map((star)=>{
            return (
            <div key={star.id} className="star animate-pulse-subtle" style={{
                width: star.size + "px",
                height: star.size + "px" ,
                left: star.x + "%" ,
                top: star.y + "%",
                opacity:star.opacity ,
                animationDuration: star.animationDuration + "s",
            }} />
        )
        })}

        {meteors.map((meteor)=>(
            
            <div key={meteor.id} className="meteor animate-meteor" style={{
                width: meteor.size*50 + "px",
                height: meteor.size*2 + "px" ,
                left: meteor.x + "%" ,
                top: meteor.y + "%",
                opacity:meteor.opacity ,
                animationDuration: meteor.animationDuration + "s",
            }} />
        ))}
    </div>
  )
}

export default Background