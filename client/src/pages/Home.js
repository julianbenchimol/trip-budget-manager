import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

const Home = () => {
   
    return (
        <div className = "container">
            <h2>Start your next trip here</h2>
        <div>
            <label className= "form-label"></label>
            <input className= "form-control" placeholder="Search here"></input>
            <button type="submit" className="btn btn-primary">Search</button>
        </div>
        <div>
            <h3>Welcome to ____ conveniently plan and budget for you trip</h3>
        </div>

        </div>

    )
}
export default Home