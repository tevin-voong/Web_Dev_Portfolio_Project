import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const AddComicPage = () => {

    const [title, setTitle]       = useState('');
    const [year, setYear]         = useState('');
    const [language, setLanguage] = useState('');
    
    const redirect = useNavigate();

    const addComic = async () => {
        const newComic = { title, year, language };
        const response = await fetch('/comics', {
            method: 'post',
            body: JSON.stringify(newComic),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`document added`);
            redirect("/LogPage");
        } else {
            alert(`document not added status code = ${response.status}`);
            redirect("/LogPage");
        }
    };


    return (
        <>
        <article>
            <h2>Add to the collection</h2>
            <p>Add the name of a comic you read.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Which comic book are you adding?</legend>
                    <label for="title">Comic title</label>
                    <input
                        type="text"
                        placeholder="Title of the comic"
                        value={title}
                        onChange={e => setTitle(e.target.value)} 
                        id="title" />
                    
                    <label for="year">Year released</label>
                    <input
                        type="number"
                        value={year}
                        placeholder="Year of the comic"
                        onChange={e => setYear(e.target.value)} 
                        id="year" />

                    <label for="language">Language</label>
                    <input
                        type="text"
                        placeholder="Primary language of the comic"
                        value={language}
                        onChange={e => setLanguage(e.target.value)} 
                        id="language" />

                    <label for="submit">
                    <button
                        type="submit"
                        onClick={addComic}
                        id="submit"
                    >Add</button> to the collection</label>
                </fieldset>
                </form>
            </article>
        </>
    );
}

export default AddComicPage;