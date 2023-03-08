import React from "react";

function ResultList(props){
    console.log(props.results);
    return(
    // Map through props and render an <li> for each item
    <div>
        <ul>
            {props.results.map(function(card, i){
                return (
                <li key = {i}>
                    <h3>{card.cardName}</h3>
                    <p>{card.cardInfo}</p>
                    <button className="btn btn-primary">Choose Location</button>
                </li>
                )
            })}
        </ul>
    </div>
    )
}

export default ResultList;