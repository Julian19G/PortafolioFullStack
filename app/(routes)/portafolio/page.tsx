"use client"

import AvatarPortafolio from "@/components/avatar-portafolio";
import CircleImage from "@/components/circle-image";
import ContainerPage from "@/components/container";
import PortafolioBox from "@/components/portafolio-box";
import TransitionPage from "@/components/transition-page";
import { dataPortfolio } from "@/data";

const PortafolioPage = () => {
    return (
        
        <ContainerPage>
            <TransitionPage />


            <div className="flex flex-col justify-center h-full">
            <h1 className="text-2xl leading-tight text-center md:text-4xl md:md-5">
                Mis ultimos trabajos <span className="text-blue-500 font-bold"> realizados </span>
            </h1>
            <div className="relative z-10 grid max-w-5xl gap-6 mx-auto mt-4 sm:grid-cols-2 md:grid-cols-4">
                {dataPortfolio.map((data) =>(
                <PortafolioBox key={data.id} data={data} />
                ))}
               

            </div>
            </div>
        </ContainerPage>

    );
    
}

export default PortafolioPage;