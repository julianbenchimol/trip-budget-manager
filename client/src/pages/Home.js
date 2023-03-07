import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import searchLocation from '../utils/api'
import axios from 'axios';


const Home = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const submitHandler = function(event){
        event.preventDefault();
        console.log(query)
        const options = {
            method: "POST",
            url: "https://travel-advisor.p.rapidapi.com/locations/v2/search?currency=USD&units=km&lang=en_US",
            params: {currency: 'USD', lang: 'en_US', units: 'mi'},
            headers: {
                    'content-type': 'application/json',
                    'X-RapidAPI-Key': '9f55da74bcmshb7d12ef53f0f861p1f085ajsn57c0c7ea6fae',
                    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            },
            data: `{"query": "${query}", "updateToken": ""}`
        }
        axios.request(options)
        .then(function(response){
             setResults(response.data.data.AppPresentation_queryAppSearch.sections)
             console.log(results)
        })
        .catch((err) => console.log(err))
    }

    const queryHandler = function(event){
        setQuery(event.target.value)
    }

    return (
    <div className = "container-fluid">
        <h2 className='text-center mb-4 mt-5'>Start your next trip here!</h2>
            <div className='d-flex mb-4' role='search'>
                    <form onSubmit={submitHandler}>
                        <input className= "form-control" placeholder="Search" onChange={queryHandler}></input>
                        <button type="submit" className="btn btn-primary ms-2">Search</button>
                    </form>
            </div>
        <div className='mb-4 text-center'>
            <h3>Welcome to ____ conveniently plan and budget for you trip</h3>
        </div>
        <div id='results-list'>
            <ul className='list-group'>
                {/* {results.map(result =>{
                    <li>{result}</li>
                })} */}
            </ul>
        </div>
    </div>

    )
}
export default Home