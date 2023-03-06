import React from "react";
function Trip() {
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4 ms-2 me-2 mt-3 mb-5">
      {" "}
      {/* {trips.map((trip, key) => ( */}
    <div className="card-group mb-3">
          <div className="card text-center">
            {" "}
            {/* trip image */}
            {/* <img
              src={}
              className="card-img-top"
              alt={}
            />{" "} */}

            {/* Trip name and trip budget */}
            <div className="card-body">
              {" "}
              <h5 className="card-title">My Trip to:{}</h5>{" "}
              <p className="card-text">Trip Budget:{}</p>{" "}
            </div>{" "}

            {/* Trip dates and (maybe friends) */}
            <div className="card-body">
              {" "}
              <h5 className="card-title"></h5>{" "}
              <p className="card-text">{}</p>{" "}
            </div>{" "}

            {/* edit and delete button */}
            <div className="card-footer" id="cardBtn">
              <button type="button" className="btn btn-outline-warning text-secondary me-2">Edit trip</button>
              <button type="button" className="btn btn-outline-danger">Cancel trip</button>
            </div>{" "}
          </div>{" "}
        </div>
      
    </div>
  );
}
export default Trip;
