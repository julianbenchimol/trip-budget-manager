
import Calendar from '../components/Calendar'
function newTrip(){
    return(
        <div className = "container">
            <h2>My new trips</h2>

            <div className = "row">
                <div className = "col-6"></div>
            <Calendar />
            </div>
        </div>
    )
}
export default newTrip