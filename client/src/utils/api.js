import axios from 'axios'

const searchLocation = (query) => {
    const queryOptions = {
        method: "POST",
        url: "https://travel-advisor.p.rapidapi.com/locations/v2/search",
        params: {currency: 'USD', lang: 'en_US', units: 'mi'},
        headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '9f55da74bcmshb7d12ef53f0f861p1f085ajsn57c0c7ea6fae',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            },
            data: `{"query": "${query}", "updateToken": ""}`
      }
    
    const response = axios.request(queryOptions)
    const locationSections = response.data.data.AppPresentation_queryAppSearch.sections;
    const cardSections = []
    for(let i = 0; i < locationSections.length; i ++){
        if(locationSections[i].__typename === "AppPresentation_SingleCard"){
            cardSections.push(locationSections[i].appSearchCardContent)
        }
    }

    const cardData = cardSections.map((result) =>{
        return{
            cardName: result.cardTitle.string,
            cardInfo: result.primaryInfo.text,
            cardId: result.saveId.id
        }
    })
    return cardData;
}

export default searchLocation;