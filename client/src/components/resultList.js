import React from "react";

function ResultList(props){
    return(
        <ul className="list-group">
            {/* {props.results.map((result) => (
                <li className="list-group" key = {result.id}>
                    <h1>{result.cardName}</h1>
                    <p>{result.cardInfo}</p>
                </li>
            ))} */}
        </ul>
    )
}

export default ResultList;