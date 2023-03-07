import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

const Home = () => {
    return (
        <div className = "container-fluid">
            <h2 className='text-center mb-4 mt-5 fs-1'>Start your next trip here!</h2>
            
            {/* Search Bar */}
                <div className='d-flex mb-4' role='search'>
                    <input className= "form-control" placeholder="Search here" aria-label='Search'></input>
                    <button type="submit" className="btn btn-primary ms-2">Search</button>
                
                </div>
            {/* Welcome Text */}
            <div className='mb-4 text-center mt-5'>
                <h3 className='fs-3'>Welcome to the one stop shop for trip planing! We are here to help you conveniently plan and budget for your next trip.</h3>
            </div>
        </div>
    )
}
export default Home