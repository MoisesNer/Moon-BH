import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'

export default class Services extends Component {

    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: 'free Cocktails',
                info: "The 50 Most Popular Cocktails in the World in 2021. Manhattan. Whiskey Sour. Espresso Martini. Margarita. Dry Martini. Daiquiri."
            },
            {
                icon: <FaHiking />,
                title: 'for hiking lovers',
                info: "Enjoy awesome hiking trails near Vancouver lead up expansive mountains, to stunning waterfalls and end in panoramic city views."
            },
            {
                icon: <FaShuttleVan />,
                title: 'Transportation included',
                info: "Our complimentary shuttle service to and from YVR Airport runs automatically every 20 minutes, 24/7."
            },
            {
                icon: <FaBeer />,
                title: 'Our selection of beers',
                info: "In a time of limited beer options, it became our mission to craft delicious, locally brewed beer with high quality.."
            },
        ]
    }

    render() {
        return (
            <section className='services'>
                < Title title='services' />
                <div className='services-center'>
                    {this.state.services.map((item, index) => {
                        return (
                            <article key={index} className='service'>
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    })}
                </div>
            </section>
        )
    }
}
