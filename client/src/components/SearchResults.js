import { useState, useEffect } from "react";
import ResultList from "./ResultList";
import searchLocation from '../utils/api'


const SearchResults = () =>{
      
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])

  const getLocationData = (query) =>{
    const response = searchLocation(query)
    setResults(response)
  }

  const queryHandler = function(event){
    setQuery(event.target.value)
  }

  const handleFormSubmit = function(event){
    event.preventDefault();
    getLocationData(query)
  }

  return(
    <div>
      <div className="container-fluid">
        <div className="mb-4" role='search'>
          <form onSubmit={handleFormSubmit} className='d-flex'>
            <input name="query" value={query} onChange={queryHandler} id = "location-value" className="form-control" placeholder="Start your search here"/>
            <button type = "submit" className="btn btn-primary ms-2">Search</button>
          </form>
        </div>
      </div>
      <ResultList results = {results}/>
    </div>
  )
}

export default SearchResults