import React from 'react'
import CoursCard from './CoursCard'
import CardHead from './CardHead'
import Slider from './Slider'
import slides from '../../../assets/data/coursesData.json'

const Courses = () => {

    return (
        <>
            <CardHead />
            <section className='courses'>
                <div className="container">
                    {/* <div className="row"> */}
                    {/* <CoursCard /> */}
                    <Slider slides={slides} />
                    {/* </div> */}
                </div>
            </section>
        </>
    )
}

export default Courses