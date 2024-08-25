import React from 'react'
import { MagicButton } from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

export const Footer = () => {
    return (
        <footer className='w-full mb-[100px] md:mb-5 pb-10' id='contact'>
            <div className='flex flex-col items-center'>
                <h1 className="heading lg:max-w-[45vw]">
                    Llevá tu <span className="text-[#1C7AD9]">presencia digital</span> al siguiente nivel.
                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center">
                    Contactame hoy mismo y conversemos sobre cómo puedo ayudarte a alcanzar tus objetivos.
                </p>
                <a href='mailto:juanbautistaliendo1@gmail.com'>
                    <MagicButton
                        title='Contactame'
                        icon={<FaLocationArrow />}
                        position='right'
                    />
                </a>
            </div>
            <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>

                <p className='md:text-base 
                 text-sm md:font-normal font-light'>Copyright © 2024 Juan Bautista Liendo</p>
                <div className='flex items-center gap-2 mt-2'>
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
            </div>
        </footer>
    )
}
