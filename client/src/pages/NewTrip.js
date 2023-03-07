
import Calendar from '../components/Calendar'
function newTrip(){
    return(
        <div className = "container-fluid ">
            <h2 className='text-center mt-4 mb-5 fs-1 fst-italic fw-bold'>Plan A New Trip</h2>

            <div className = "row">

                {/* Calender Section */}
                <div className = "col-6">
                    <Calendar />
                </div>

                {/* Forum Section: */}
                <div className='col-6'>
                    <form >
                    <div>
                        {/* Location: */}
                        <label className='form-label'>
                            Location:
                        </label>
                        <input 
                            placeholder='New York City'
                            className='form-control'
                            type='text'>
                            </input>
                    </div>

                        {/* Dates */}
                        <div class="row g-3 mt-3 mb-2">
                            <label className='form-label text-center'>Dates:</label>
                            <div class="col">
                                <input type="text" className="form-control" placeholder="Start Date" aria-label="Start Date" />
                            </div>
                            <div class="col">
                                <input type="text" className="form-control" placeholder="End Date" aria-label="End Date" />
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <div class="form-floating">
                                <textarea className="form-control" placeholder="This will be the best trip ever!" id="floatingTextarea"></textarea>
                                <label for="floatingTextarea">Trip Description:</label>
                            </div>
                        </div>

                        {/* Budget */}
                        <div>
                            <label className='form-label'>
                                Budget:
                            </label>
                            <input 
                                className='form-control'
                                type='text'
                                placeholder='$1,000'>
                            </input>
                        </div>

                        {/* Button */}
                        <div>
                            <button type='submit' className='btn btn-primary'>
                                + Create my trip!
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default newTrip