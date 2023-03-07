import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import ResultList from '../components/resultList';


const Home = () => {

    return (
    <div className = "container-fluid">
        <h2 className='text-center mb-4 mt-5'>Start your next trip here!</h2>
            <div className='d-flex mb-4' role='search'>
                <form>
                    <input className= "form-control" placeholder="Search"></input>
                    <button type="submit" className="btn btn-primary ms-2">Search</button>
                </form>
            </div>
        <div className='mb-4 text-center'>
            <h3>Welcome to ____ conveniently plan and budget for you trip</h3>
        </div>
        <div id='results-list'>
            <ul className='list-group'>
                <ResultList/>
            </ul>
        </div>
    </div>

    )
}
export default Home