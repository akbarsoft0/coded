import React from 'react'
import CardHead from './CardHead'
import CoursCard from './CoursCard'

const Courses = () => {

    return (
        <>
            <CardHead />
            <section className='courses'>
                <div className="container">
                    <div className="row">
                        <h2>browse courses you like.</h2>
                        <CoursCard />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Courses