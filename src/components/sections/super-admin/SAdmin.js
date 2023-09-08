import React from 'react'
import "./super-admin.css"
import Members from './Members'
const SAdmin = () => {
    return (
        <section className='SAdmin'>
            <div className="container">
                <div className="row">
                    <h2>welcome back mohammad akbar</h2>
                    <Members />
                </div>
            </div>
        </section>
    )
}

export default SAdmin