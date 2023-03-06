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

     if (itemClicked.id.startsWith("band")) {

         const [,bandId] = itemClicked.id.split("--")

         let matchingBand=null
         for (const band of bands) {
             if (band.id === parseInt(bandId)) {
                 matchingBand=band
             }
         }

         let matchingBooking=[]
         for (const booking of bookings) {
             if(booking.bandId===matchingBand.id) { 
             matchingBooking.push(booking)
             
         }
        }

        let matchingVenues=[]
        for (const venue of venues) {
            for(const oneBooking of matchingBooking)
            if(oneBooking.venueId===venue.id) {
                matchingVenues.push(venue.name)

            }

        }

        
             window.alert(`Are playing at ${matchingVenues}`)
         }

     }
    
)
export const Bands = () => {
    let html = "<ul>"

    for (const band of bands) {
        html += `<li id="band--${band.id}">${band.name}</li>`
    }

    html += "</ul>"

    return html
}