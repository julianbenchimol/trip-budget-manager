import { useState, useEffect } from "react";
import ResultList from "./resultList";
import {searchLocation} from '../utils/api' 

const SearchResults = () =>{
      
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])

  const queryOptionHandler = function(event){
    event.preventDefault();
    setQuery(event.target.value)
  }

  const getLocationData = async(query) =>{
    const response = await searchLocation(query)
    setResults(response)
  }

  useEffect(() =>{
    getLocationData(query)
  })

  return(
    <div>
      <div className="container-fluid">
        <div className="d-flex mb-4" role='search'>
            <input className="form-control" placeholder="Search" onChange={queryOptionHandler}/>
            <button type = "submit" className="btn btn-primary ms-2">Search</button>
        </div>
      </div>
      <ResultList results = {results}/>
    </div>
  )
}

export default SearchResults