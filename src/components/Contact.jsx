// import React from 'react'

import { Mail } from "lucide-react"
import { FaLinkedinIn} from 'react-icons/fa'

function Contact() {
  return (
    <section className="py-24 px-4 relative bg-secondary/30 ">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Get In <span className="text-primary"> Touch</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6">
                        Contact Information
                    </h3>
                    <div className="space-y-6 justify-center">
                        <div className="flex item-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-10 w-10 text-primary" />

                            </div>
                            <div className="">
                                <h4 className="font-medium">Email</h4>
                                <a href="mailto:adityasinha21024@gmail.com" className="text-muted-foreground hover:text-primary transition-colors"> adityasinha21024@gmail.com</a>

                            </div>

                        </div>
                        <div className="flex item-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <FaLinkedinIn className="h-10 w-10 text-primary" />

                            </div>
                            <div className="">
                                <h4 className="font-medium">LinkedIn</h4>
                                <a href="https://www.linkedin.com/in/aaditya-sinha-90a532328" className="text-muted-foreground hover:text-primary transition-colors"> Aaditya Sinha</a>

                            </div>

                        </div>

                    </div>
                </div>
                <div className="p-8 rounded-lg shadow-xs ">
                    <div className="h-48 overflow-hidden border-3 border-black-300">
                        <img src="/contact/Contact.png" alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Contact