// import React from 'react'
// import {Briefcase, Code, User } from 'lucide-react'
function AboutMe() {
  return (
    <section id="about" className="py-24 px-4 relative"> 
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 ">
            <h3 className="text-2xl font-semibold"> Computer Science Engineer</h3>

            <p className="text-muted-foreground  text-left">
              My full name is Aaditya Sinha and I am currently an undergraduate student at GNDEC, Ludhiana.
            </p>
            <p className="text-muted-foreground text-left">
               I enjoy building responsive web applications, solving programming challenges, and learning by creating real-world projects.
            </p>
            <p className="text-muted-foreground text-left">
               I'm continuously improving my knowledge of Data Structures & Algorithms while exploring backend development and full-stack application design.

              
            </p>
            <p className="text-muted-foreground text-left">
              Beyond coding, I'm curious about AI, cloud technologies, and open-source software, and I enjoy learning new tools that help me grow as a developer.
            </p>
            
          </div>

          <div className="p-8 rounded-lg shadow-xs ">
                    <div className="h-68 overflow-hidden border-3 border-black-200">
                        <img src="/aboutMe/AboutMe.png" alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

                    </div>
                </div>
          </div>
        
      </div> 
    </section>
  )
}

export default AboutMe