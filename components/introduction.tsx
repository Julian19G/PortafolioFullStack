"use client"
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";


const Introduction = () => {
    return (
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <Image src="/home-4.png" priority width="400" height="400" alt="Profile pic" />

            <div className="flex flex-col justify-center max-w-md">
                <h1 className="mb-5 text-2xl leading-light text-center md:text-left">
                    Si puedes pensarlo, 
                    <TypeAnimation
                    sequence={[
                        "puedes programarlo", 1000,
                        "puedes optimizarlo", 1000,
                        "puedes implemetarlo", 1000,
                        "puedes desarrollarlo", 100 
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="block font-bold text-secondary"
                    />
                </h1>
                <p className="mx-auto mb-2 text-xl md:mx-0 md:mb-8">
                    Como desarrollador full-stack, y mi bootcamp de inteligencia artificial me dedico a resolucion de problemas mediante metodos innovadores que permite a la empresa encontrar soluciones optimizando sus procesos
                </p>

                <div className="flex item-center justify-center gap-3 md:justify-start md:gap-10">
                    <Link
                    href="/projects" className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                        Ver proyectos
                     </Link>

                     <Link
                    href="/contact" className="px-3 py-2 transition-all border-2 cursor-pointer text-blue-500 border-blue-500 w-fit rounded-xl hover:shadow-xl hover:shadow-blue-500">
                        Contactame
                     </Link>

                </div>
            </div>

            </div>
        </div>
    );
}

export default Introduction;