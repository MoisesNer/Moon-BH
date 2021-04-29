import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import RoomsContainer from '../components/RoomsContainer'

export const Rooms = () => {
    return (
        <>
            <Hero hero='roomsHero'>
                <Banner title='Thematic rooms' >
                    <Link to='/' className='btn-primary'>Back to Home</Link>
                </Banner>
            </Hero>
            <RoomsContainer />
        </>
    )
}
export default Rooms