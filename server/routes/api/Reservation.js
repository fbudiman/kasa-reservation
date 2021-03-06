
// mock reservation data
const reservations = [{
        confirmationCode: 'AAAAAA',
        checkInDate: '2020-02-10',
        checkOutDate: '2020-02-14',
        city: 'San Francisco, CA',
        rating: null,
        location: {
            address: 'San Francisco City Apartments',
            unit: 'Unit 15A'
        },
        cityImage: 'https://cdn.pixabay.com/photo/2013/11/13/21/14/san-francisco-210230_960_720.jpg'
    }, {
        confirmationCode: 'BBBBBB',
        checkInDate: '2020-03-10',
        checkOutDate: '2020-03-14',
        city: 'Los Angeles, CA',
        rating: 3,
        location: {
            address: 'Los Angeles City Apartments',
            unit: 'Unit 51B'
        },
        cityImage: 'https://cdn.pixabay.com/photo/2016/10/25/12/28/los-angeles-1768743_960_720.jpg'
    }, {
        confirmationCode: 'CCCCCC',
        checkInDate: '2020-04-10',
        checkOutDate: '2020-04-14',
        city: 'New York City, NY',
        rating: 5,
        location: {
            address: 'New York City Apartments',
            unit: 'Unit 21C'
        },
        cityImage: 'https://cdn.pixabay.com/photo/2016/01/19/18/00/city-1150026_960_720.jpg'
    }
];

module.exports = (app) => {

    // list of all the user's reservations
    app.get('/reservations', (req, res) => {
        res.send({ reservations });
    });

    // get one reservation
    app.get('/reservation/:id', (req, res) => {
        const { id } = req.params;
        const reservation = reservations.find((res) => res.confirmationCode === id);
        if (reservation) {
            res.send({ data: reservation });
        } else {
            res.status(404).send({ errorMessage: 'Reservation not found.' });
        }
    });

    // search for reservation using keywords (either by location or confirmation code)
    app.get('/search', (req, res) => {
        const { keywords } = req.query;
        const keywordsUpperCase = keywords.toLocaleUpperCase();
        const result = reservations.filter(({ confirmationCode, city }) => (
            keywordsUpperCase === confirmationCode || city.toLocaleUpperCase().includes(keywordsUpperCase)
        ));
        res.send({ data: result });
    });
};