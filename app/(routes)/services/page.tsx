import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
    return (
        <>

            <TransitionPage />
            <CircleImage />
            <AvatarServices />
            <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
                <div className="max-w-[450px] z-10">

                    <h1 className="text-2xl leading-tight text-center mt-[140px] md:mt-0 md:text-center md:text-3xl  md:ml-20">Mis <span className="font-bold text-secondary"> servicios.</span></h1>
                    <p className="mt-2 md:mt-0 md:mb-4 px-1 text-sm text-gray-300 md:text-base md:ml-20">Ofrezco servicios de desarrollo web frontend especializados en la creación de sitios web y aplicaciones atractivas y funcionales. Utilizando las últimas tecnologías, como HTML, CSS y JavaScript, diseño interfaces de usuario intuitivas y responsivas que reflejan la identidad de marca de mis clientes y mejoran su presencia en línea.</p>
                    <button className=" mt-5 px-3 py-2 ml-[100px] md:ml-[200px] rounded-lg bg-secondary hover:bg-secondary/65">Contacta conmigo</button>
                </div>

                {/* SLIDER */}
                <div>
                    <SliderServices />
                </div>
            </div>
        </>
    );
}

export default ServicesPage;