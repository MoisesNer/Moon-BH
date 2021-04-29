import React from 'react'
import loadingGif from '../images/gif/loading-arrow.gif'

export default function Loading() {
    return (
        <div className='loading'>
            <h4>data loading, wait please...</h4>
            <img src={loadingGif} alt='loading'/>
        </div>
    )
};