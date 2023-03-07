import axios from 'axios'

const searchLocation = (query) => {

    const options = {
        method: "POST",
        url: "https://travel-advisor.p.rapidapi.com/locations/v2/search?currency=USD&units=km&lang=en_US",
        params: {currency: 'USD', lang: 'en_US', units: 'mi'},
        headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '9f55da74bcmshb7d12ef53f0f861p1f085ajsn57c0c7ea6fae',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        },
        data: `{"query": "${query}", "updateToken": ""}`
    }

    axios.request(options).then(function(response){
        const locationData = response.data.data.AppPresentation_queryAppSearch.sections
        //console.log(locationData)
        return locationData;
    })
    .catch((err) => console.log(err))
}

export default searchLocation;