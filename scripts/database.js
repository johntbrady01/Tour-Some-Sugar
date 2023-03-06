const database = {
    bands: [{
        id: 1,
        name: "The Beatles",
        memberCount: 4,
        genre: "Rock",
        yearFormed: 1960,

    }, {
        id: 2,
        name: "Led Zeppelin",
        memberCount: 4,
        genre: "Rock",
        yearFormed: 1968,

    }, {
        id: 3,
        name: "Queen",
        memberCount: 4,
        genre: "Rock",
        yearFormed: 1970,
        
    }, {
        id: 4,
        name: "AC/DC",
        memberCount: 5,
        genre: "Rock",
        yearFormed: 1973,
        
    }, {
        id: 5,
        name: "Pink Floyd",
        memberCount: 4,
        genre: "Rock",
        yearFormed: 1965,
        
    }, {
        id: 6,
        name: "The Rolling Stones",
        memberCount: 5,
        genre: "Rock",
        yearFormed: 1962,
        
    }, {
        id: 7,
        name: "Nirvana",
        memberCount: 3,
        genre: "Grunge",
        yearFormed: 1987,
        
    }, {
        id: 8,
        name: "Dirty Mac",
        memberCount: 4,
        genre: "Rock",
        yearFormed: 1968,
        
    }, {
        id: 9,
        name: "Van Halen",
        memberCount: 4,
        genre: "Rock",
        yearFormed: 1972,
        
    }, {
        id: 10,
        name: "Black Sabbath",
        memberCount: 4,
        genre: "Rock",
        yearFormed: 1968,
        
    }],

    venues: [{
        id: 1,
        name: "The Olive Garden",
        address: "756 A Glen St, Queensbury",
        squareFootage: 1000,
        maximumOccupancy:100,

    }, {
        id: 2,
        name: "TGI Fridays",
        address: "3060 NY-50, Saratoga Springs",
        squareFootage: 2000,
        maximumOccupancy:200,


    }, {
        id: 3,
        name: "My Living Room",
        address: "At My House",
        squareFootage: 5000,
        maximumOccupancy:3000,

    }, {
        id: 4,
        name: "Lake George Beach",
        address: "39 Beach Rd, Lake George",
        squareFootage: 10000,
        maximumOccupancy:10000,

    }, {
        id: 5,
        name: "Swimming Pool",
        address: "My Backyard",
        squareFootage: 500,
        maximumOccupancy:10,

    }],

    bookings:[{
        id: 1, bandId: 1, venueId: 1, date:'3/6/23'
    }, {
        id: 2,  bandId: 1, venueId: 2, date:'3/6/23'
    }, {
        id: 3, bandId: 2, venueId: 1, date:'3/6/23'
    }, {
        id: 4, bandId: 2, venueId: 5, date:'3/6/23'
    }, {
        id: 5, bandId: 3, venueId: 3, date:'3/10/23'
    }, {
        id: 6, bandId: 3, venueId: 4, date:'3/10/23'
    }, {
        id: 7, bandId: 4, venueId: 3, date:'3/10/23'
    }, {
        id: 8, bandId: 4, venueId: 2, date:'3/10/23'
    }, {
        id: 9, bandId: 5, venueId: 5, date:'3/14/23'
    }, {
        id: 10, bandId: 5, venueId: 1, date:'3/14/23'
    }, {
        id: 11, bandId: 6, venueId: 5, date:'3/14/23'
    }, {
        id: 12, bandId: 6, venueId: 3, date:'3/14/23'
    },{
        id: 13, bandId: 7, venueId: 1, date:'3/16/23'
    }, {
        id: 14,  bandId: 7, venueId: 2, date:'3/16/23'
    }, {
        id: 15, bandId: 8, venueId: 1, date:'3/16/23'
    }, {
        id: 16, bandId: 8, venueId: 5, date:'3/16/23'
    }, {
        id: 17, bandId: 9, venueId: 3, date:'3/20/23'
    }, {
        id: 18, bandId: 9, venueId: 4, date:'3/20/23'
    }, {
        id: 19, bandId: 10, venueId: 3, date:'3/20/23'
    }, {
        id: 20, bandId: 10, venueId: 2, date:'3/20/23'

}]

}

export const getBands = () => {
    return database.bands.map(band => ({...band}))
}

export const getVenues = () => {
    return database.venues.map(venue => ({...venue}))
}

export const getBookings = () => {
    return database.bookings.map(booking => ({...booking}))
}
