'use client'

import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from 'react-type-animation';
import { socialNetworks } from "@/data";

const ContactPage = () => {
    return (
        <div className="flex flex-col justify-center max-w-md mx-auto mt-[140px]">
            <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">Mi nombre es, <br />
                <TypeAnimation
                    sequence={[
                        'Carlos Malissia',
                        1000,
                        'Genio Total',
                        1000,
                        'Desarrollador web',
                        1000,
                        'Full Stack',
                        1000
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="font-bold text-secondary"
                />
            </h1>

            <p className="mx-auto mb-2 text-lg md:text-lg md:mx-0 md:mb-8">
                Contáctame por: <span className="text-secondary font-bold"> musicarlos72@gmail.com</span>
            </p>
            <p className="mx-auto mb-2 text-lg md:text-lg md:mx-0 md:mb-8">
                O por mis redes sociales
            </p>

            <div className="flex items-center justify-center gap-7">
                {socialNetworks.map(({ logo, src, id }) => (
                    <Link
                        key={id}
                        href={src}
                        target="_blank"
                        className="transition-all duration-300 hover:text-secondary"
                    >
                        {logo}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default ContactPage