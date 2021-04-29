import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'

export default function Home() {
    return (
        <>
            <Hero hero='defaultHero'>
                <Banner title='Thematic rooms' subtitle='Come to our special rooms from $299CAD'>
                    <Link to='/rooms' className='btn-primary'>Dive in</Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms/>

        </>
    )
}
