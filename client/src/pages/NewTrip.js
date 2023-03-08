
import Calendar from '../components/Calendar'
function newTrip(){
    return(
        <div className = "container">
            <h2 className='text-center mt-4 mb-5 fs-1 fst-italic fw-bold'>Plan A New Trip</h2>

            <div className = "row">

                {/* Calender Section */}
                <div className = "col-6">
                    <Calendar />
                </div>

                {/* Forum Section: */}
                <div className='col-6 bg-success p-2 text-dark bg-opacity-50 mt-5' id='userCard'>
                    <form >
                    <div className='mt-3 fw-bold'>
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
                        <div class="row g-3 mt-2 mb-2 fw-bold">
                            <label className='form-label text-center'>Dates:</label>
                            <div class="col">
                                <input type="text" className="form-control" placeholder="Start Date" aria-label="Start Date" />
                            </div>
                            <div class="col">
                                <input type="text" className="form-control" placeholder="End Date" aria-label="End Date" />
                            </div>
                        </div>

                        {/* Budget */}
                        <div className='mt-3'>
                            <label className='form-label fw-bold'>
                                Budget:
                            </label>
                            <input 
                                className='form-control'
                                type='text'
                                placeholder='$1,000'>
                            </input>
                        </div>

                        {/* Button */}
                        <div className='mt-3 d-flex justify-content-center'>
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