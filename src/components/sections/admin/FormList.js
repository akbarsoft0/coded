import React from 'react';
import FormEntry from './FormEntry';

const FormList = ({ entries, onRemove }) => {
    return (
        <div className='row'>
            {entries.map((entry, index) => (
                <FormEntry key={index} entry={entry} onRemove={() => onRemove(index)} />
            ))}
        </div>
    );
};

export default FormList;
