import React from 'react'
import { useContext } from 'react'
import { RoomContext } from '../context'
import Title from '../components/Title'

// function to get the unique value
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

export default function RoomFilter({ rooms }) {
    const context = useContext(RoomContext)

    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    } = context

    //get unine values
    let types = getUnique(rooms, 'type');

    //adding all 
    types = ['all', ...types];
    types = types.map((item, index) => {
        return <option value={item} key={index}>
            {item}
        </option>
    });

    let people = getUnique(rooms, 'capacity');
    people = people.map((item, index) => {
        return <option key={index} value={item}>
            {item}
        </option>
    })

    return (
        <section className='filter-container'>
            <Title title='search rooms' />
            <form className='filter-form'>

                {/* ROOM TYPE */}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type" id="type" value={type} className='form-control' onChange={handleChange}>
                        {types}
                    </select>
                </div>

                {/* GUEST CAPACITY */}
                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select name="capacity" id="capacity" value={capacity} className='form-control' onChange={handleChange}>
                        {people}
                    </select>
                </div>

                {/* PRICE */}
                <div className="form-group">
                    <label htmlFor="price">
                        Room price ${price}
                    </label>
                    <input type="range" name='price' min={minPrice} max={maxPrice} id='price' value={price} onChange={handleChange} className='form-control' />
                </div>

                {/* SIZE */}
                {/* <div className="form-group">
                    <label htmlFor="size">Room size</label>
                    <div className='size-inputs' >
                        <input name='minSize' type='number' id='size' value={minSize} onChange={handleChange} className='size-input' />
                        <input name='maxSize' type='number' id='size' value={maxSize} onChange={handleChange} className='size-input' />
                    </div>
                </div> */}

                {/* BF & PETS */}
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name='breakfast' id='breakfast' checked={breakfast} onChange={handleChange} />
                        <label htmlFor="breakfast">Breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name='pets' id='pets' checked={pets} onChange={handleChange} />
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
            </form>
        </section>
    )
}
