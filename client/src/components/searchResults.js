import { useState, useEffect } from "react";
import ResultList from "./ResultList";
import searchLocation from '../utils/api'


const SearchResults = () =>{
      
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])

  const getLocationData = (query) =>{
    //event.preventDefault();
    const response = searchLocation(query)
    setResults(response)
  }

  const queryHandler = function(event){
    setQuery(event.target.value)
    console.log(query)
  }

  const handleFormSubmit = function(event){
    event.preventDefault();
    getLocationData(query)
  }

console.log(query)
  return(
    <div>
      <div className="container-fluid">
        <div className="d-flex mb-4" role='search'>
          <form onSubmit={handleFormSubmit}>
            <input name="query" value={query} onChange={queryHandler} id = "location-value" className="form-control" placeholder="Search"/>
            <button type = "submit" className="btn btn-primary ms-2">Search</button>
          </form>
        </div>
      </div>
      <ResultList results = {results}/>
    </div>
  )
}

export default SearchResults