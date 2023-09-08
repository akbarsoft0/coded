import React, { useState } from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const Form = ({ onSubmit, user }) => {
    let date = new Date().toLocaleDateString();
    const [item, setItem] = useState({
        title: "",
        image: null,
        headline: "",
        description: "",
        link: "",
        date: date
    });
    //handleInput
    function handleInput(e) {
        const { name, type, value, files } = e.target;
        if (type === 'file') {
            if (files[0]) {
                setItem({
                    ...item,
                    [name]: URL.createObjectURL(files[0]),
                });
            }
        } else {
            setItem({
                ...item,
                [name]: value,
            });
        }
    }

    //handleSubmit
    const handleSubmit = (e) => {
        e.preventDefault();

        let Item = {
            ...item,
            ...user
        };
        onSubmit(Item);

        console.log(Item)

        setItem({
            title: "",
            image: null,
            headline: "",
            description: "",
            link: ""
        });

    };

    return (
        <div className='add-card'>
            <form className='row' onSubmit={handleSubmit}>
                <div className='col-lg-4'>
                    <small>(max characters: 45)</small>
                    <input
                        type="text"
                        placeholder='title'
                        name="title"
                        onChange={handleInput}
                        value={item.title}
                        maxLength={45}
                    />
                    <input
                        type="text"
                        placeholder='headline'
                        name="headline"
                        onChange={handleInput}
                        value={item.headline}
                        maxLength={45}
                    />
                    <input
                        type="text"
                        placeholder='video link'
                        name="link"
                        onChange={handleInput}
                        value={item.link}
                    />
                    <label htmlFor="img">
                        <CloudUploadIcon />
                        upload image
                    </label>
                </div>
                <div className='col-lg-4'>
                    <small>(max characters: 200)</small>
                    <textarea
                        name="description"
                        id="description"
                        cols="30"
                        rows="7"
                        placeholder='description..(max characters: 200)'
                        maxLength={200}
                        onChange={handleInput}
                        value={item.description}
                    ></textarea>
                    <button type="submit" className='mybtn float-end'>
                        submit
                    </button>
                </div>
                <div className='col-lg-4 pre'>
                    <input
                        className='d-none'
                        type="file"
                        name="image"
                        id="img"
                        onChange={handleInput}
                        accept="image/*"
                    />
                    <small>(image preview)</small>
                    {item.image && (
                        <img
                            src={item.image}
                            alt="Uploaded Image"
                            className='img-fluid uploaded-image'
                        />
                    )}
                </div>
            </form>
        </div>
    );
};

export default Form;
