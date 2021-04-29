import React, { Component } from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'

export default class About extends Component {
    render() {
        return (
            <Hero>
                <Banner title='About' subtitle=''>
                    <Link to='/' className='btn-primary'>Back to Home</Link>
                </Banner>
            </Hero>
        )
    }
}
// export default About