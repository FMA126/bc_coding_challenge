export interface Customer {
    customer_id: string,
    first_name: string,
    last_name: string,
    email: string,
    phone: string,
    address: string,
    city: string,
    state: string,
    zip: string,
    year: number,
    make: string,
    model: string,
    license_plate: string,
    vin: string,
    date: string,
    time: string
}

export const MOCK_DATA = [
    {
        customer_id: "19284758",
        first_name: "Ulla",
        last_name: "Saunders",
        email: "lacus.mauris.non@yahoo.edu",
        phone: "(647) 715-2769",
        address: "725-4921 Ac St.",
        city: "Zamość",
        state: "Piura",
        zip: "36894",
        year: 2008,
        make: "erat semper",
        model: "luctus",
        license_plate: "D7U4R2",
        vin: "OLC15XLZ2KS",
        date: "10/22/2022",
        time: "10:41 PM"
    },
    {
        customer_id: "5472937",
        first_name: "Phoebe",
        last_name: "Ellis",
        email: "sed.neque.sed@protonmail.com",
        phone: "(633) 834-4764",
        address: "Ap #104-5529 Ut Av.",
        city: "Zwolle",
        state: "Saarland",
        zip: "45162",
        year: 2002,
        make: "ornare egestas",
        model: "placerat",
        license_plate: "V1W7B8",
        vin: "LPW15NZH2HJ",
        date: "12/03/2021",
        time: "11:16 AM"
    },
    {
        customer_id: "0298374",
        first_name: "Demetrius",
        last_name: "Bentley",
        email: "felis.donec@icloud.net",
        phone: "(352) 885-2514",
        address: "Ap #109-8081 Non, St.",
        city: "Essene",
        state: "Balochistan",
        zip: "155994",
        year: 1994,
        make: "mi lorem,",
        model: "ac",
        license_plate: "M4Y4D4",
        vin: "UMB16LWS3GO",
        date: "10/07/2022",
        time: "9:12 PM"
    },
    {
        customer_id: "112947",
        first_name: "Bernard",
        last_name: "Neal",
        email: "dictum.eu@google.org",
        phone: "(759) 741-3618",
        address: "Ap #528-1862 Urna Road",
        city: "Mexico City",
        state: "Brandenburg",
        zip: "26387",
        year: 1995,
        make: "mi fringilla",
        model: "Nam",
        license_plate: "I4C5X3",
        vin: "MXW84TTV3SV",
        date: "06/14/2022",
        time: "4:31 AM"
    },
    {
        customer_id: "8836742",
        first_name: "Odessa",
        last_name: "Cantu",
        email: "ut@hotmail.edu",
        phone: "(512) 155-9674",
        address: "400-6447 Dolor Ave",
        city: "Kano",
        state: "Khyber Pakhtoonkhwa",
        zip: "748945",
        year: 2004,
        make: "ultrices posuere",
        model: "elementum,",
        license_plate: "K1B5X6",
        vin: "FGC65SLT2SY",
        date: "06/19/2022",
        time: "3:41 AM"
    }
];