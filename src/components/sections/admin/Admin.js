import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './admin.css'
import Form from './Form';
import FormList from './FormList';

const Admin = () => {
    const { state } = useLocation();
    const user = state.Admin

    const [formEntries, setFormEntries] = useState([]);

    useEffect(() => {
        // Load data from localStorage when the component mounts
        const savedData = JSON.parse(localStorage.getItem('formEntries')) || [];
        setFormEntries(savedData);
    }, []);

    const addEntry = (entry) => {
        const newEntries = [...formEntries, entry];
        saveDataToLocalStorage(newEntries); // Save data to localStorage
        setFormEntries(newEntries);
    };

    const removeEntry = (index) => {
        const updatedEntries = formEntries.filter((_, i) => i !== index);
        saveDataToLocalStorage(updatedEntries); // Save data to localStorage
        setFormEntries(updatedEntries);
    };

    const saveDataToLocalStorage = (data) => {
        localStorage.setItem('formEntries', JSON.stringify(data));
    };

    return (
        <section id="admin">
            <div className="container">
                <div className="row">
                    <h2>welcome back admin {user.name}</h2>
                    <Link to="/">Back to Login</Link>
                    <Form onSubmit={addEntry} user={user} />
                    <FormList entries={formEntries} onRemove={removeEntry} user={user} />
                </div>
            </div>
        </section>
    )
}

export default Admin