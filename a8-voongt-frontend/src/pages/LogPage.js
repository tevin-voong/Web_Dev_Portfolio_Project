import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import ComicList from '../components/ComicList';
// import Navigation from './components/Navigation';

function LogPage({ setComic }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [comics, setComics] = useState([]);

    // RETRIEVE the entire list of comics
    const loadComics = async () => {
        const response = await fetch('/comics');
        const comics = await response.json();
        setComics(comics);
    } 
    

    // UPDATE a single comic
    const onEditComic = async comic => {
        setComic(comic);
        redirect("/update");
    }


    // DELETE a single comic  
    const onDeleteComic = async _id => {
        const response = await fetch(`/comics/${_id}`, { method: 'DELETE' });
        if (response.status === 204) {
            const getResponse = await fetch('/comics');
            const comics = await getResponse.json();
            setComics(comics);
        } else {
            console.error(`Failed to delete comic with _id = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the comics
    useEffect(() => {
        loadComics();
    }, []);

    // DISPLAY the comics
    return (
        <>
            
            <h2>List of Comic Books</h2>
            <p>Please log the name of the comic that you read.</p>
            
            <ComicList 
                comics={comics} 
                onEdit={onEditComic} 
                onDelete={onDeleteComic} 
            />
        </>
    );
}

export default LogPage;