
import React from 'react';

const FormEntry = ({ entry, onRemove }) => {
    return (
        <>
            <div className="col-lg-4">
                <div className='cours-card'>
                    <h2 className='title'>{entry.title}</h2>
                    <img src={entry.image} alt={entry.image} className='img-fluid image' />
                    <div className='card-text'>
                        <a href={entry.link} className='headline'>{entry.headline}</a>
                        <h6>{entry.description}</h6>
                        <ul>
                            <li>{entry.name}</li>
                            <li><a href={`mailto:${entry.email}`}>
                                {entry.email}
                            </a></li>
                            <li><a href={entry.website}>
                                {entry.website}
                            </a></li>
                            <li>{entry.date}</li>
                        </ul>
                        <button className='watch' onClick={onRemove}>remove</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FormEntry;
