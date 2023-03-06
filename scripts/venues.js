import { getVenues } from "./database.js";
import { getBands } from "./database.js";
import { getBookings } from "./database.js";

const venues = getVenues()
const bookings = getBookings()
const bands = getBands()

document.addEventListener(
    'click',
    (clickEvent) => {


     const itemClicked = clickEvent.target

     if (itemClicked.id.startsWith("venue")) {

         const [,venueId] = itemClicked.id.split("--")

         let matchingVenue=null
         for (const venue of venues) {
             if (venue.id === parseInt(venueId)) {
                 matchingVenue=venue
             }
         }

         let matchingBooking=[]
         for (const booking of bookings) {
             if(booking.venueId===matchingVenue.id) { 
             matchingBooking.push(booking)
             
         }
        }

        let matchingBand=[]
        for (const band of bands) {
            for(const oneBooking of matchingBooking)
            if(oneBooking.bandId===band.id) {
                matchingBand.push(band.name)

            }

        }

        
             window.alert(`${matchingBand} have booked`)
         }

     }
    
)




export const Venues = () => {
    let html = "<ul>"

    for (const venue of venues) {
        html += `<li id="venue--${venue.id}">${venue.name}</li>`
    }

    html += "</ul>"

    return html
}