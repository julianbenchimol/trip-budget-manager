import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import Trip from '../components/Trip'

function MyTrips(){
    return(
        <div>
        <h2>My Trips</h2>
        <Trip/>
        </div>
    )
}
export default MyTrips;