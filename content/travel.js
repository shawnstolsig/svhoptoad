import circumnavigationRoute from './circumnavigation.json'

export const aboardHoptoadArticles = {
    title: 'Aboard Hoptoad',
    description: 'A series of newsletters written by our kids (Jeff and Shawn) during our circumnavigation, between the ages 10 and 15.',
    previewImage: `https://res.cloudinary.com/svhoptoad/image/upload/v1628738900/travel/aboard-hoptoad/5-sep-1997_laeuym.jpg`,
    articles: [
        {title: 'September 5, 1997', pages: 1, path: 'https://res.cloudinary.com/svhoptoad/image/upload/v1628738900/travel/aboard-hoptoad/5-sep-1997_laeuym.jpg'},
        {title: 'November 30, 1997', pages: 1, path: 'https://res.cloudinary.com/svhoptoad/image/upload/v1628738902/travel/aboard-hoptoad/30-nov-1997_ptbknq.jpg'},
        {title: 'December 8, 1998', pages: 2, path: 'https://res.cloudinary.com/svhoptoad/image/upload/v1628738903/travel/aboard-hoptoad/8-dec-1998_qg6xm2.jpg'},
        {title: 'July 15, 1999', pages: 2, path: 'https://res.cloudinary.com/svhoptoad/image/upload/v1628738902/travel/aboard-hoptoad/15-jul-1999_jo1up0.jpg'},
        {title: 'December 6, 1999', pages: 2, path: 'https://res.cloudinary.com/svhoptoad/image/upload/v1628738902/travel/aboard-hoptoad/6-dec-1999_acm6p8.jpg'},
    ]
}

export const trips = {
    mapCaption: `Our circumnavigation route`,
    currentTrip: {
        title: 'The Next Adventure',
        subtitle: 'Introducing',
        paragraphs: [
            `Hoptoad will set off down the Pacific coast of the western United States, starting in September of 2021.  No hurry, no plan.  We aren’t interested in a big passage from Seattle to San Diego (been there, done that) so we will take our time and enjoy places we missed on our first trip.  For us, the key is getting into California before the Pacific Northwest wind pattern changes to southerlies.`,
            `The South Pacific island countries are the primary destination on this trip.  Looking back at our first circumnavigation, we remember the South Pacific as having some of the most unique places we visited: wonderful people, fascinating cultures, and excellent snorkeling.  We plan to make a couple of loops around the South Pacific before returning home.  But all this will have to wait until the borders open up.`,
            `Once the weather changes and we have explored NZ, we will head back to Fiji, Vanuatu, Solomon Islands, and Federated States of Micronesia.  Due to the Pacific ocean winds and current, the easiest way home for us is via Japan, Alaska, Canada, and then to our new home in Anacortes WA. `,
            ` At this time (August 2021) most South Pacific Island groups are still CLOSED to foreign yachts, so who knows what will really happen.  They say “the plans of cruisers are written in the sand at low tide” (and last about as long).  We’ll see what lays in store for the Toads.`,
            `Either way, it’s bound to be interesting.`,
            `The earliest we will sail into Mexico is November of 2021 - this is where our plans get fuzzy.  With the world pandemic still in full force, we will most likely hang out in the Sea Of Cortez and/or the west coast of Mexico until spring of 2023.  Once the South Pacific island countries are open, we are headed west.`,
            `After departing Mexico our first stop will be in French Polynesia, then onward to the Cook Islands, America Samoa, and Samoa.  Once cyclone season is upon us we plan to sail northwest to Wallis and Futuna Islands, Tuvalu Islands, and Micronesia.  We hope to avoid the tropical storm season by sailing north towards the equator, rather than south to New Zealand like most other boats. Some of our fondest memories from the last trip were when we sailed “off the beaten path”, visiting places and people that rarely see a cruising sailboat.  We hope Micronesia will be a similar experience for us.  After cyclone season is over, we will point south to Papua New Guinea, down the eastern coast of Australia, and then to New Zealand for 6 months.`
        ]
    },
    previousTrip: {
        subtitle: '1997 - 2002',
        title: `The Original Voyage`,
        paragraphs: [
            `The Stolsig family (known as the "Toads") first started sailing in 1986, aboard our first sailboat - a San Juan 23.  Several Hoptoads later, we left Seattle to circumnavigate the globe from 1997-2002.`,
            `We left Seattle in August of 1997 without a grand plan...but we did carry the navigational charts just in case this trip got big.  We told our family we would be gone 6 weeks or 6 years and off we went.`,
            ` Jeff 12, Shawn 10, Margie 39 and Sonny 41, Sonny’s first retirement or some might have called it a mid-life crisis taking his family on a small boat out on the big ocean.`
        ],
        countries: {
            '1997': [
                { name: 'USA', imageUrl: 'https://res.cloudinary.com/svhoptoad/image/upload/v1629951037/travel/flags/united-states_mmzidx.png' },
                { name: 'Mexico', imageUrl: 'https://res.cloudinary.com/svhoptoad/image/upload/v1629951036/travel/flags/mexico_a6lbnx.png' },
            ],
            '1998': [
                { name: 'French Polynesia', imageUrl: 'https://res.cloudinary.com/svhoptoad/image/upload/v1629951034/travel/flags/french-polynesia_enrwrl.png' },
                { name: 'Cook Islands', imageUrl: 'https://res.cloudinary.com/svhoptoad/image/upload/v1629951034/travel/flags/cook-islands_zq25py.png' },
                { name: 'America Samoa', imageUrl: 'https://res.cloudinary.com/svhoptoad/image/upload/v1629951035/travel/flags/american-samoa_rmy8j5.png' },
                { name: 'Tonga', imageUrl: 'https://res.cloudinary.com/svhoptoad/image/upload/v1629951035/travel/flags/tonga_gzbwhg.png' },
                { name: 'Fiji', imageUrl: 'https://res.cloudinary.com/svhoptoad/image/upload/v1629952785/travel/flags/fiji_ryrsum.png' },
            ],
            '1999': [
                { name: 'Vanuatu', imageUrl: 'https://res.cloudinary.com/svhoptoad/image/upload/v1629951036/travel/flags/vanuatu_gpzznc.png' },
                { name: 'Australia', imageUrl: 'https://res.cloudinary.com/svhoptoad/image/upload/v1629951035/travel/flags/australia_ye9jtz.png' },
                { name: 'Indonesia', imageUrl: 'https://res.cloudinary.com/svhoptoad/image/upload/v1629951036/travel/flags/indonesia_fehobc.png' },
                { name: 'Singapore', imageUrl: 'https://res.cloudinary.com/svhoptoad/image/upload/v1629951036/travel/flags/singapore_tuinjo.png' },
                { name: 'Malaysia', imageUrl: 'https://res.cloudinary.com/svhoptoad/image/upload/v1629951035/travel/flags/malaysia_zntcvl.png' },
                { name: 'Thailand', imageUrl: 'https://res.cloudinary.com/svhoptoad/image/upload/v1629951036/travel/flags/thailand_ndziz1.png' },
            ],
            '2000': [
                { name: 'Sri Lanka', imageUrl: 'https://res.cloudinary.com/svhoptoad/image/upload/v1629951036/travel/flags/sri-lanka_enbmni.png' },
                { name: 'Maldives', imageUrl: 'https://res.cloudinary.com/svhoptoad/image/upload/v1629951035/travel/flags/maldives_ovi4ft.png' },
                { name: 'Yemen', imageUrl: 'https://res.cloudinary.com/svhoptoad/image/upload/v1629951035/travel/flags/yemen_m9gl78.png' },
                { name: 'Eritrea', imageUrl: 'https://res.cloudinary.com/svhoptoad/image/upload/v1629951036/travel/flags/eritrea_nkj8wu.png' },
                { name: 'Sudan', imageUrl: 'https://res.cloudinary.com/svhoptoad/image/upload/v1629951035/travel/flags/sudan_gws5ju.png' },
                { name: 'Egypt', imageUrl: 'https://res.cloudinary.com/svhoptoad/image/upload/v1629951036/travel/flags/egypt_iob9x4.png' },
                { name: 'Cyprus', imageUrl: 'https://res.cloudinary.com/svhoptoad/image/upload/v1629951035/travel/flags/cyprus_vpa5uj.png' },
                { name: 'Turkey', imageUrl: 'https://res.cloudinary.com/svhoptoad/image/upload/v1629951034/travel/flags/turkey_wjtv5a.png' },
                { name: 'Greece', imageUrl: 'https://res.cloudinary.com/svhoptoad/image/upload/v1629951035/travel/flags/greece_qiykf6.png' },
                { name: 'Malta', imageUrl: 'https://res.cloudinary.com/svhoptoad/image/upload/v1629951036/travel/flags/malta_sqd0iz.png' },
                { name: 'Italy', imageUrl: 'https://res.cloudinary.com/svhoptoad/image/upload/v1629951036/travel/flags/italy_f6bssv.png' },
                { name: 'Spain', imageUrl: 'https://res.cloudinary.com/svhoptoad/image/upload/v1629951035/travel/flags/spain_gllah0.png' },
            ],
            '2001': [
                { name: 'Gibraltar', imageUrl: 'https://res.cloudinary.com/svhoptoad/image/upload/v1629951035/travel/flags/gibraltar_zspamw.png' },
                { name: 'Canary Islands', imageUrl: 'https://res.cloudinary.com/svhoptoad/image/upload/v1629951035/travel/flags/canary-islands_hwjlr0.png' },
                { name: 'Trinidad and Tobago ', imageUrl: 'https://res.cloudinary.com/svhoptoad/image/upload/v1629951035/travel/flags/trinidad-and-tobago_sr4upd.png' },
                { name: 'Venezuela', imageUrl: 'https://res.cloudinary.com/svhoptoad/image/upload/v1629951034/travel/flags/venezuela_baw4ue.png' },
                { name: 'Dutch Caribbean', imageUrl: 'https://res.cloudinary.com/svhoptoad/image/upload/v1629951036/travel/flags/dutch-caribbean_yy3kov.png' },
                { name: 'Columbia', imageUrl: 'https://res.cloudinary.com/svhoptoad/image/upload/v1629951034/travel/flags/colombia_x381hl.png' },
                { name: 'Panama', imageUrl: 'https://res.cloudinary.com/svhoptoad/image/upload/v1629951035/travel/flags/panama_jer9yr.png' },
                { name: 'Costa Rica', imageUrl: 'https://res.cloudinary.com/svhoptoad/image/upload/v1629951035/travel/flags/costa-rica_n3aayi.png' },
            ],
            '2002': [
                { name: 'Guatemala', imageUrl: 'https://res.cloudinary.com/svhoptoad/image/upload/v1629951034/travel/flags/guatemala_r0lmoo.png' },
                { name: 'Mexico', imageUrl: 'https://res.cloudinary.com/svhoptoad/image/upload/v1629951036/travel/flags/mexico_a6lbnx.png' },
                { name: 'USA', imageUrl: 'https://res.cloudinary.com/svhoptoad/image/upload/v1629951037/travel/flags/united-states_mmzidx.png' },
            ],
        }
    }
}

export const circumnavigationMap = {
    initLng: -106.5,
    initLat: 23.2,
    initZoom: .2,
    route: circumnavigationRoute
}