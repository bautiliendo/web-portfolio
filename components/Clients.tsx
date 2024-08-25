import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { companies, testimonials } from '@/data'

export const Clients = () => {
    return (
        <div className='py-20' id='testimonials'>
            <h1 className='heading'>
                Testimonios de {' '}
                <span className='text-[#1C7AD9]'> clientes</span>
            </h1>
            <div className='flex flex-col items-center my-20'>
                <InfiniteMovingCards
                    items={testimonials}
                    speed='slow'
                    direction='right'
                />
            </div>
        </div>

    )
}
