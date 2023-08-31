import React from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md';

function Comic({ comic, onEdit, onDelete }) {
    return (
        <tr>
            <td>{comic.title}</td>
            <td>{comic.year}</td>
            <td>{comic.language}</td>
            <td><MdDeleteForever onClick={() => onDelete(comic._id)} /></td>
            <td><MdEdit onClick={() => onEdit(comic)} /></td>
        </tr>
    );
}

export default Comic;