import { useState, useEffect } from "react";
import ResultList from "./ResultList";
import axios from "axios";


const SearchResults = () =>{
      
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])

  // const getLocationData = (query) =>{
  //   setResults(searchLocation(query))
  // }

  const queryHandler = function(event){
    setQuery(event.target.value)
  }

  const handleFormSubmit = function(event){
    event.preventDefault();
    searchLocation(query)
  }

  const searchLocation = (query) => {
    const queryOptions = {
        method: "POST",
        url: "https://travel-advisor.p.rapidapi.com/locations/v2/search",
        params: {currency: 'USD', lang: 'en_US', units: 'mi'},
        headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': "9f55da74bcmshb7d12ef53f0f861p1f085ajsn57c0c7ea6fae",
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            },
            data: {"query": `"${query}"`, "updateToken": ""}
    }
    
    axios.request(queryOptions)
    .then(function(response){
        console.log("Basic Response: ", response)
        const locationSections = response.data.data.AppPresentation_queryAppSearch.sections;
        console.log("Location Sections: ", locationSections)
        const cards = []

        for(let card in locationSections){
            if(locationSections[card].__typename === "AppPresentation_SingleCard"){
                cards.push(locationSections[card].appSearchCardContent)
            }
        }
        console.log("Location Cards: ", cards);

        const cardData = cards.map((card) =>{
            return(
                {
                    cardName: card.cardTitle.string,
                    cardInfo: card.primaryInfo.text,
                    cardId: card.saveId
                }
            )
        })
        console.log("Card Data: ", cardData)
        setResults(cardData)
    })
}

  return(
    <div>
      <div className="container-fluid mt-5">
        <div className="mb-4 " role='search'>
          <form onSubmit={handleFormSubmit} className='d-flex'>
            <input name="query" value={query} onChange={queryHandler} id = "location-value" className="form-control" placeholder="Start your search here!"/>
            <button type = "submit" className="btn btn-primary ms-2">Search</button>
          </form>
        </div>
      </div>
      {results.length > 0 ? <ResultList results = {results}/> : null}
    </div>
  )
}

export default SearchResults