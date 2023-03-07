import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import Trip from '../components/Trip'

function MyTrips(){
    return (
      <div
        className="bg-success p-2 text-dark bg-opacity-50 mt-5 container-fluid"
        id="myTripsCard"
      >
        <h2 className="text-center mt-4 fst-italic fw-bold">My Trips</h2>
        <Trip />
      </div>
    );
}
export default MyTrips;