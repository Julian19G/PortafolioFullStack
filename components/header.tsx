import Link from "next/link";
import MotionTransition  from "./transition-component";

const Header = () => {
    return (
    <MotionTransition position="bottom" className="absolute z-40 inline-block">
    <header>
        <div className="container justify-between max-w-6xl mx-auto md:flex">
            <Link href="/">
            <h1 className="my-3 text-4xl font-blod text-center md:text-left">

            </h1>
            JulianDev
            </Link>
        </div>
    </header>
   
    </MotionTransition>
    );
}

export default Header;