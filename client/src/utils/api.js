import axios from 'axios'

const headers = {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '9f55da74bcmshb7d12ef53f0f861p1f085ajsn57c0c7ea6fae',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
}

const searchLocation = (query) => {
    const data = {
       "query": `"${query}"`,
       "updateToken": ""
    }

    axios.post(`https://travel-advisor.p.rapidapi.com/locations/v2/search?currency=USD&units=km&lang=en_US`, data, {
        headers: headers
    })
    .then(({data}) => console.log(data))
    .catch(err => console.log(err))
}

const searchHotels = ({hotelInfo}) => {
    const queryData = {
        "geoId": hotelInfo.geoId,
        "checkIn": hotelInfo.checkIn,
        "checkOut": hotelInfo.checkOut,
        "sort": "PRICE_LOW_TO_HIGH",
        "sortOrder": "asc",
        "updateToken": "" 
    }
axios.post(`'https://travel-advisor.p.rapidapi.com/hotels/v2/list?currency=USD&units=km&lang=en_US'`, queryData, {
    headers: headers
    })
    .then(({data}) => console.log(data))
    .catch(err => console.log(err))
}

module.exports = {searchLocation, searchHotels};