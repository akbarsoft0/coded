import React from 'react'
import CardHead from './CardHead'
import Slider from './Slider'
import slides from '../../../assets/data/coursesData.json'

const Courses = () => {

    return (
        <>
            <CardHead />
            <section className='courses'>
                <div className="container">
                    <Slider slides={slides} />
                </div>
            </section>
        </>
    )
}

export default Courses