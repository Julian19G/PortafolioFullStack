import Image from "next/image"
import Link from "next/link"

interface portafolioBoxProps {
    data: {
        id: number,
        title: string,
        image: string,
        urlGithub: string,
        urlDemo: String
    }
}


const PortafolioBox = (props: portafolioBoxProps) => {
    const { data } = props 
    const { id, title, image, urlGithub, urlDemo} = data
    return (    
        <div className="p-4 border border-teal-50 rounded-xl">
            <h3 className="mb-4 text-xl">
            {title}
            </h3>
           <Image src={image} alt="Image Product" width={200} height={200} className="w-full md:w-[200] rounded-2xl h-auto" />
           <div className="flex gap-5 mt-5">
            <Link href={urlGithub} target="_blank" className="p-2 transition duration-150 rounded-lg bg-slate-500 hover:bg-slate-500/80">
            Github
            </Link>
            <Link href={urlGithub} target="_blank" className="p-2 transition duration-150 rounded-lg bg-blue-500 hover:bg-blue-500/80">
            Github
            </Link>
            

           </div>
        </div>

    );
}

export default PortafolioBox;