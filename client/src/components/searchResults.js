import { useState, useEffect } from "react";
import ResultList from "./ResultList";
import searchLocation from '../utils/api'
const SearchResults = () =>{
      
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])

  const queryHandler = function(event){
    event.preventDefault();
    const locationQuery = document.getElementById('#location-value').value;
    setQuery(locationQuery)
  }

  const getLocationData = async(query) =>{
    const response = await searchLocation(query)
    setResults(response)
  }

  useEffect(() =>{
    getLocationData(query)
  }, [query])

  return(
    <div>
      <div className="container-fluid">
        <div className="d-flex mb-4" role='search'>
          <form onSubmit={queryHandler}>
            <input id = "#location-value" className="form-control" placeholder="Search"/>
            <button type = "submit" className="btn btn-primary ms-2">Search</button>
          </form>
        </div>
      </div>
      <ResultList results = {results}/>
    </div>
  )
}

export default SearchResults