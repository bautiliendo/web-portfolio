import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { MagicButton } from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { socialMedia } from '@/data'

export const Hero = () => {
    return (
        <div className='' id='hero'>
            <div>
                <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
                <Spotlight className='-top-10 left-full h-[80vh] w-[50vw] ' fill='purple' />
                <Spotlight className='-top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
            </div>
            <div className="h-screen w-full dark:bg-black-100 bg-white  
            dark:bg-grid-white/[0.03] bg-grid-black/[0.03] relative 
            flex items-center justify-center top-0 left-0">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex
                 items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
                />
                <div className='flex justify-center relative my-20 z-10'>
                    <div className='max-w-[89vw] md:max-w-2xl 
                    lg:max-w-[60vw] flex flex-col items-center justify-center'>
                        <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-100'>
                            Ecommerce - Sitios corporativos - Sistemas
                        </h2>
                        <TextGenerateEffect
                            className='text-center text-[40px]
                            md:text-5xl lg:text-6xl'
                            words='Creación de Soluciones Web para Potenciar tu negocio'
                        />

                        <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
                            Juan Bautista Liendo - Programador Full Stack
                        </p>
                        <div className='flex gap-2 mb-2'>
                            {socialMedia.map((profile) => (
                                <a href={profile.link} target="_blank" key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center 
                    backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200
                    rounded-lg border border-black-300'>
                                    <img
                                        src={profile.img}
                                        alt='img red social'
                                        width={20}
                                        height={20}
                                    />
                                </a>
                            ))}
                        </div>
                        <a href='#projects'>
                            <MagicButton
                                title="Proyectos realizados"
                                icon={<FaLocationArrow />}
                                position='rigth'
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
