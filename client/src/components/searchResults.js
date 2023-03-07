import {useState, useEffect} from 'react';
import ResultList from './resultList'
import {searchLocation} from '../utils/api'

const SearchResultContainer = () => {
    const [results, setResults] = useState([])

    const getLocations = async (query) =>{
        const response = await searchLocation(query)
        setResults(response.data)
    }

    useEffect(() => {
      searchLocation()
    }, [])
    
}