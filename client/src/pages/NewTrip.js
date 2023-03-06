
import Calendar from '../components/Calendar'
function newTrip(){
    return(
        <div className = "container">
            <h2 className='text-center mt-4 mb-5'>Plan A New Trip</h2>

            <div className = "row">
                <div className = "col-6"></div>
            <Calendar />
            </div>
        </div>
    )
}
export default newTrip