import { Bands } from "./bands.js"
import { Venues } from "./venues.js"
import { Bookings } from "./bookings.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<article class="titleContainer">
<h1>Tour Some Sugar On Me</h1>
 </article>
<article class="bookingsContainer">
    <img src="../photos/Top-10-Four-Piece.jpg" class='photo'>
    <section class="bookingList">
        <h2>Bookings</h2>
        ${Bookings()}
    </section>
</article>

<article class="details">
    <section class="venuesList">
    <h2>Venues</h2>
    ${Venues()}
    </section>
    <section class='bandsList'>
    <h2>Bands</h2>
    ${Bands()}
    </section>
</article>
`

mainContainer.innerHTML = applicationHTML
