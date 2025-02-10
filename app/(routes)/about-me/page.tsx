import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container";
import Avatar from "@/components/avatar";
import CounterServices from "@/components/counter-services";


const PageAboutMe = () => {
    return (
        <>
            <TransitionPage />
            <ContainerPage>
                <Avatar />
                <h1 className="text-2xl leading-light text-center md:text-left md:text-5xl md:mt-10"> Toda mi {' '}
                    <span className="font-bold text-blue-500">trayectoria profesional</span>
                </h1>

                <CounterServices />
            </ContainerPage>
        </>
    );
}

export default PageAboutMe;