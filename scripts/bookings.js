import { getBookings } from "./database.js";
import { getBands } from "./database.js";
import { getVenues } from "./database.js";

const bookings = getBookings()
const bands = getBands()
const venues = getVenues()


document.addEventListener(
    'click',
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("booking")) {
            const [,bookingId] = itemClicked.id.split("--")

            let matchingBooking = null
            for (const booking of bookings){
                if(booking.id===parseInt(bookingId)) {
                    matchingBooking=booking
                }
            }

            let matchingBand=null
            for (const band of bands) {
                if(band.id === matchingBooking.bandId){
                    matchingBand=band
                }

            }

            window.alert(`${matchingBand.name} \n${matchingBand.genre} \nFormed in ${matchingBand.yearFormed} \n${matchingBand.memberCount} members` )


        }

    })

const findBand = (booking, allBands) => {
    let bookingBand = null

    for (const band of allBands) {
        if (band.id === booking.bandId) {
            bookingBand=band
        }
    }

    return bookingBand
}

const findVenue = (booking, allVenues) => {
    let bookingVenue = null

    for (const venue of allVenues) {
        if (venue.id === booking.venueId) {
            bookingVenue=venue
        }
    }
    return bookingVenue


}

export const Bookings = () => {
    let html = ""
    html = "<ul>"

    for (const booking of bookings) {
        const band = findBand(booking, bands)
        const venue = findVenue(booking, venues)

        html += `<li id="booking--${booking.id}">${band.name} are playing at ${venue.name} on ${booking.date}</li>`
    }

    html += "</ul>"

    return html
}


