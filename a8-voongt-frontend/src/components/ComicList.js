import React from 'react';
import Comic from './Comic';

function ComicList({ comics, onDelete, onEdit }) {
    return (
        <table id="comics">
            <caption>Add and Edit Comic Books</caption>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Year</th>
                    <th>Language</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {comics.map((comic, i) => 
                    <Comic 
                        comic={comic} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default ComicList;