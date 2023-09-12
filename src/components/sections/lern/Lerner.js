import React from 'react'
import CoursCard from './CoursCard'
import CardHead from './CardHead'

const Lerner = () => {
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

export default Lerner