import Image from "next/image"
import Link from "next/link"

interface PortafolioBoxProps {
    data: {
        id: number;
        title: string;
        image: string;
        urlGithub: string;
        urlDemo: string; // Cambiado a minúscula
    };
}

const PortafolioBox = ({ data }: PortafolioBoxProps) => {
    const { title, image, urlGithub, urlDemo } = data;

    return (    
        <div className="p-4 border border-teal-50 rounded-xl">
            <h3 className="mb-4 text-xl">{title}</h3>
            <Image 
                src={image} 
                alt="Image Product" 
                width={200} 
                height={200} 
                className="w-full md:w-[200px] rounded-2xl h-auto" 
            />
            <div className="flex gap-5 mt-5">
                <Link 
                    href={urlGithub} 
                    target="_blank" 
                    className="px-6 py-2 transition duration-150 rounded-lg bg-slate-500 hover:bg-slate-500/80"
                >
                    Github
                </Link>
                <Link 
                    href={urlDemo} 
                    target="_blank" 
                    className="px-6 py-2 transition duration-150 rounded-lg bg-blue-500 hover:bg-blue-500/80"
                >
                    Demo
                </Link>
            </div>
        </div>
    );
}

export default PortafolioBox;
