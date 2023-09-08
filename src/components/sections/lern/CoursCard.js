import React from 'react'
import "./cours-card.css"
import data from '../../../assets/data/coursesData.json'



const CoursCard = () => {
    let card = data;

    return (
        <>
            {card.map((item, id) => {
                return (
                    <div key={id} className='col-lg-6 col-xl-4'>

                        <div className='cours-card'>
                            <h2 className='title'>{item.title}</h2>
                            <img src={item.thumbnail} alt={item.thumbnail} className='img-fluid image' />
                            <div className='card-text'>

                                <a href={item.video_link} className='headline'>{item.headline}</a>
                                <h6>{item.description}</h6>
                                <ul>
                                    <li>{item.author.name}</li>
                                    <li><a href={`mailto:${item.author.email}`}>
                                        {item.author.email}
                                    </a></li>
                                    <li><a href={item.author.website}>
                                        {item.author.website}
                                    </a></li>
                                    <li>{item.date_published}</li>
                                </ul>
                                <a href={item.video_link} className='watch'>watch</a>
                            </div>
                        </div>
                    </div >
                )
            })}
        </ >
    )
}

export default CoursCard