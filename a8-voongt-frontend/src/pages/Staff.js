import React, { useState } from 'react';

import StaffRow from "../components/StaffRow.js"

function Staff() {

    const [staffResults, setStaffResults] = useState([]);
    const getStaffResults = () => {
        fetch("https://randomuser.me/api/?results=10")
        .then((response) => response.json())
        .then((response) => {setStaffResults(response.results);})
        .catch(() => {
            alert("The Random User Generator might be down right now")
        });
    };

    
    return (
        <>
    <h2>Staff Page</h2>
        <article>
            <p>
                <button id="fromServer" onClick={getStaffResults}>Add</button>
                &nbsp;ten staff members, from the 
                <a href ="https://randomuser.me/" target="_blank"> Random User Generator</a>
            </p>
            
            <h3>Staff Results</h3>
            <table>
                <caption>
                    Name, email, phone number, and location
                </caption>
                <thead>
                    <tr>
                        <th>Portrait</th>
                        <th>Name/Email</th>
                        <th>Telephone</th>
                        <th>City</th>
                    </tr>
                </thead>

                <tbody>
                    {staffResults.map((staff, index) => <StaffRow person={staff} key={index} />)}
                </tbody>
            </table>
        </article>
        </>
    );
}

export default Staff;