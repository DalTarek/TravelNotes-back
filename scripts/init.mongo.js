/**
 * This script is to insert initial data inside the collection people of the database nwt
 * You can use it with mongo-shell or a tool like Robo3T
 */

// Insert people array
db.getCollection('travels').insertMany([
    {
        "photo": "http://www.coastalfamilyhealth.com.au/wp-content/uploads/2018/04/coastal-family-health-travel-clinic.jpg",
        "departure": ISODate("1974-01-01T23:00:00.000Z"),
        "arrival": ISODate("1974-01-01T23:00:00.000Z"),
        "country": "Espagne",
        "city": "Barcelone",
        "numberPerson": 2,
        "hotel": "Ibis",
        "price": "1000",
        "description": "Voyage scolaire année de première"
    },
    {
        "photo": "http://www.coastalfamilyhealth.com.au/wp-content/uploads/2018/04/coastal-family-health-travel-clinic.jpg",
        "departure": ISODate("1974-01-01T23:00:00.000Z"),
        "arrival": ISODate("1974-01-01T23:00:00.000Z"),
        "country": "Norvège",
        "city": "Trondheim",
        "numberPerson": 1,
        "hotel": "N/A",
        "price": "0",
        "description": "Voyage chez ma soeur année 2016"
    },
    {
        "photo": "http://www.coastalfamilyhealth.com.au/wp-content/uploads/2018/04/coastal-family-health-travel-clinic.jpg",
        "departure": ISODate("1974-01-01T23:00:00.000Z"),
        "arrival": ISODate("1974-01-01T23:00:00.000Z"),
        "country": "Florence",
        "city": "Italie",
        "numberPerson": 3,
        "hotel": "Novotel",
        "price": "1500",
        "description": "Voyage scolaire année de seconde"
    }
]);

// display the final initial data
db.getCollection('travels').find({});
