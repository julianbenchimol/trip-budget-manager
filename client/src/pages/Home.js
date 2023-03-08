import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import SearchResults from '../components/SearchResults'


const Home = () => {
    return (
    <div className = "container-fluid">
        <div className='mb-4 text-center'>
            <h3>Welcome to ____ conveniently plan and budget for you trip</h3>
        </div>
        <h2 className='text-center mb-4 mt-5'>Start your next trip here!</h2>
        <div id='results-list'>
            <ul className='list-group'>
                <SearchResults/>
            </ul>
        </div>
    </div>
    )
}
export default Home