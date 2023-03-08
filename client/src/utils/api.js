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
        return cardData
    })
}

export default searchLocation