export const boats = [
    {
        name: `Hoptoad`,
        design: `Moody 46`,
        href: `moody-46`,
        header: `Our current boat`,
        length: 46,
        beam: 12.5,
        draft: 6,
        speed: {
            cruising: `6 knots (6.9 mph)`,
            max: `8.5 knots (9.8 mph)`,
        },
        material: `Fiberglass`,
        rig: `Ketch`,
        years: {
            built: 1974,
            start: 2003,
            end: `Present`
        },
        photos: [
            {
                url: `https://res.cloudinary.com/svhoptoad/image/upload/v1628738602/boat/boats/moody46-portrait_vmy5oq.jpg`,
                title: `Cruising the Puget Sound`,
                alt: `Portrait photo of Hoptoad: Moody 46`
            },
        ],
        description: [
            `Our Moody 46 was designed by Laurent Giles. Originally Giles’s design was a 44' sailing yacht, later extended by 2 feet. A total of 32 Carbineers (44s and 46s) were built in Southampton, England by the Moody Brothers in the early to mid 70s.`,
            `We carry 230 gallons of diesel, 200 gallons of fresh water powered by a 356 Perkins. She weighs approximately 40,000 pounds loaded and is ready to go cruising.`,
            `She is our 3rd sailboat by this name which comes from the children’s story book Pippi Longstock, by Astrid Lindgren. The Pippi stories were a popular favorite back when the boys were young sailors.`,
        ],
        gallery: [
            {
                title: 'Light wind day returning from Blake Island',
                subtitle: 'Seattle, WA',
                source: 'https://res.cloudinary.com/svhoptoad/image/upload/v1629668057/boat/boats/moody-46-1_h9vjf2.jpg',
            },
            {
                title: 'Anchored in the San Juans',
                subtitle: 'San Juan Islands, WA',
                source: 'https://res.cloudinary.com/svhoptoad/image/upload/v1629671173/boat/boats/moody-46-2_dzlly2.jpg',
            },
            {
                title: 'New Bottom Paint March 2021',
                subtitle: 'Canal Boat Yard, Seattle WA',
                source: 'https://res.cloudinary.com/svhoptoad/image/upload/v1629671173/boat/boats/moody-46-3_wuzrvq.jpg',
            },
            {
                title: 'Winter weekend getaway',
                subtitle: 'Blake Island, WA',
                source: 'https://res.cloudinary.com/svhoptoad/image/upload/v1629671172/boat/boats/moody-46-4_maeo6u.jpg',
            },
        ],
        gear: [
            {
                type: 'AIS',
                name: 'Vesper Cortex AIS',
                description: 'Functionality',
                image: 'https://res.cloudinary.com/svhoptoad/image/upload/v1629769229/boat/gear/ais_pbpvyj.jpg',
                url: 'https://www.vespermarine.com/cortex/ais'
            },
            {
                type: 'Anchor',
                name: 'Bruce 44 lbs',
                description: 'Good Holding',
                image: 'https://res.cloudinary.com/svhoptoad/image/upload/v1629771755/boat/gear/anchor_d4z0xv.jpg',
                url: 'https://www.westmarine.com/buy/lewmar--high-tensile-steel-claw-anchors--P005_153_002_004'
            },
            {
                type: 'Autopilot',
                name: 'Raymarine',
                description: 'Gets along with other instruments',
                image: 'https://res.cloudinary.com/svhoptoad/image/upload/v1629771129/boat/gear/autopilot_ncxtr9.jpg',
                url: 'https://www.raymarine.com/autopilot/'
            },
            {
                type: 'Drogue',
                name: 'Jordon Series Drogue',
                description: 'Because we are scared and smart',
                image: 'https://res.cloudinary.com/svhoptoad/image/upload/v1629771330/boat/gear/drogue_c6b7fh.gif',
                url: 'https://www.jordanseriesdrogue.com/'
            },
            {
                type: 'Generator & Watermaker',
                name: 'AquaMarine',
                description: '',
                image: 'https://res.cloudinary.com/svhoptoad/image/upload/v1629770856/boat/gear/generator-watermaker_zln412.jpg',
                url: 'https://www.aquamarineinc.net/index.php'
            },
            {
                type: 'GPS',
                name: 'Garmin GPS 740',
                description: 'Was a gift',
                image: 'https://res.cloudinary.com/svhoptoad/image/upload/v1629769009/boat/gear/gps_d87vyg.jpg',
                url: 'https://buy.garmin.com/en-US/US/p/37721'
            },
            {
                type: 'HAM Radio',
                name: 'ICOM 735',
                description: 'From previous Hoptoad',
                image: 'https://res.cloudinary.com/svhoptoad/image/upload/v1629770087/boat/gear/ham-radio_e62uar.jpg',
                url: 'https://www.universal-radio.com/catalog/hamhf/735.html'
            },
            {
                type: 'Ice Maker',
                name: 'Avalon Bay AB-ICE26B',
                description: 'Counter top icemaker, because we like rum and coke with ice',
                image: 'https://res.cloudinary.com/svhoptoad/image/upload/v1629772506/boat/gear/ice-maker_adliiu.jpg',
                url: 'https://www.amazon.com/gp/product/B00IY7B5CS/'
            },
            {
                type: 'Internet',
                name: 'Iridium GO!',
                description: 'Best available for the price',
                image: 'https://res.cloudinary.com/svhoptoad/image/upload/v1628739798/boat/gear/iridium-go_svlwk8.png',
                url: 'https://www.iridium.com/products/iridium-go/'

            },
            {
                type: 'Multifunction Display',
                name: 'Raymarine Axiom 9+',
                description: 'Wanted a display behind the outside steering station',
                image: 'https://res.cloudinary.com/svhoptoad/image/upload/v1629769853/boat/gear/multifunction-display_o3tovr.png',
                url: 'https://www.raymarine.com/multifunction-displays/axiom/axiom9.html'
            },
            {
                type: 'Solar Panels',
                name: 'SunPower Flex 110',
                description: 'Power density, price point',
                image: 'https://res.cloudinary.com/svhoptoad/image/upload/v1629770315/boat/gear/solar-panel_e4zaim.jpg',
                url: 'https://us.sunpower.com/sites/default/files/110w-flexible-panel-spec-sheet.pdf'
            },
            {
                type: 'Solar Panel Controller',
                name: 'Solar Boost 1524iX',
                description: '24 Volt, MFPT',
                image: 'https://res.cloudinary.com/svhoptoad/image/upload/v1629770373/boat/gear/solar-controller_lohxku.png',
                url: 'https://sunforgellc.com/solar-boost-1524ix/'
            },
            {
                type: 'Tender',
                name: 'Achilles Inflatable Dinghy HB 310',
                description: 'Liked the folding transom and Hypalon construction material',
                image: 'https://res.cloudinary.com/svhoptoad/image/upload/v1629771411/boat/gear/tender_roeut6.jpg',
                url: 'https://www.achillesboats.com/boatmodels.php/rigidhulls/hb/?page=boatmodels.php&class=rigidhulls&series=hb'
            },
            {
                type: 'VHF Radio',
                name: 'Sailor VHF',
                description: 'Came with the boat, it’s cool and it works, circa 1974',
                image: 'https://res.cloudinary.com/svhoptoad/image/upload/v1629769467/boat/gear/vhf_t7wtfg.jpg',
                url: 'https://www.radiomuseum.org/r/sp_radio_sailor_rt144b_wand_geraet.html'
            },
            {
                type: 'Windvane',
                name: 'Monitor Top Hat',
                description: 'New TopHat Monitor because we wanted to keep our davits',
                image: 'https://res.cloudinary.com/svhoptoad/image/upload/v1629880391/boat/gear/windvane_dsflw5.jpg',
                url: 'https://www.scanmarinternational.com/monitor-windvance-hp'
            },
        ]
    },
    {
        name: `Hoptoad`,
        design: `Roberts 38`,
        href: `roberts-38`,
        header: `A veteran circumnavigator`,
        length: 38,
        beam: 12,
        draft: 5.5,
        speed: {
            cruising: `4 knots (4.6 mph)`,
            max: `6.5 knots (7.5 mph)`,
        },
        material: `Steel`,
        rig: `Cutter`,
        years: {
            built: '?',
            start: 1994,
            end: 2003
        },
        photos: [
            {
                url: `https://res.cloudinary.com/svhoptoad/image/upload/v1628742741/boat/boats/roberts-38-portrait_jdpvba.jpg`,
                title: `Sailing under spinnaker`,
                alt: `Portrait photo of Hoptoad: Roberts 38`
            },
        ],
        description: [
            `After reading all the classic sailing book of sailing around the world we were convinced we need a metal sailboat to venture out on our first blue water adventure.`,
            `We purchased this home built steel Roberts 38 out of Bellingham, WA. She needed a ton of work!!`,
            `Sonny went to town gutting the interior painting and insulating the haul. Most of gear was bought at a bargain at the Fisheries bi-annual swap meets.`,
            `A 38 foot steel sailboat proved to be reliable but SLOW. Powered by a 20 HP tractor diesel motor made in China.`,
            `We would count on 100 mile days at sea and it occasionally met our expectations.  From then on we often say, “Friends don’t let friends buy steel boats."`,
        ],
        gallery: [
            {
                title: 'Swinging from the jib pole at anchor',
                subtitle: "Taha'a, French Polynesia",
                source: 'https://res.cloudinary.com/svhoptoad/image/upload/v1629669941/boat/boats/roberts-38-1_kmmcr2.jpg',
            },
            {
                title: 'A much needed sandblasting',
                subtitle: 'Vuda Marina, Fiji',
                source: 'https://res.cloudinary.com/svhoptoad/image/upload/v1628743341/boat/boats/roberts-38-2_v6yaf1.jpg',
            },
            {
                title: 'An uncommon glamor shot',
                subtitle: 'San Blas Islands, Panama',
                source: 'https://res.cloudinary.com/svhoptoad/image/upload/v1629863836/boat/boats/roberts-38-3_cjsmfo.jpg',
            },
            {
                title: 'Quarantined upon arrival',
                subtitle: 'Cairns, Australia',
                source: 'https://res.cloudinary.com/svhoptoad/image/upload/v1629669964/boat/boats/roberts-38-4_t6vqkp.jpg',
            },
        ],
    },
    {
        name: `Hoptoad`,
        design: `Cal 3-30`,
        href: `cal-3-30`,
        header: `The original Hoptoad`,
        length: 30,
        beam: 10,
        draft: 5.5,
        speed: {
            cruising: `6 knots (6.9 mph)`,
            max: `8 knots (9.2 mph)`,
        },
        material: `Fiberglass`,
        rig: `Sloop`,
        years: {
            built: `Early '70s`,
            start: '1989',
            end: '2004'
        },
        photos: [
            {
                url: `https://res.cloudinary.com/svhoptoad/image/upload/v1628740903/boat/boats/cal-3-30-portrait_vttckq.jpg`,
                title: `Summer vacation in the San Juans`,
                alt: `Portrait photo of Hoptoad: Cal 3-30`
            },
        ],
        description: [
            `Our Original Hoptoad was a Cal 330 built in the early 70s.`,
            `A Bill Lapworth design was an awesome boat. We have lots of fond memories cruising the San Juan’s the Canadian Gulf Islands and Barkley Sound.`,
            `A solid fast sailing vessel with 50% ballast to displacement ratio.  This means ½ the weight of the boat was in the keel. `,
        ],
    },
    {
        name: `Air Freight`,
        design: `San Juan 23`,
        href: `san-juan-23`,
        header: `First family sailboat`,
        length: 23,
        beam: 8,
        draft: 4.75,
        speed: {
            cruising: `5 knots (5.8 mph)`,
            max: `65 mph (on the trailer)`,
        },
        material: `Fiberglass`,
        rig: `Sloop`,
        years: {
            built: `Late '70s`,
            start: '1987',
            end: '1989'
        },
        photos: [
            {
                url: `https://res.cloudinary.com/svhoptoad/image/upload/v1628740977/boat/boats/san-juan-portrait_au79dz.jpg`,
                title: `Keeping out of trouble in Elliott Bay, Seattle`,
                alt: `Portrait photo of Hoptoad: San Juan 23`
            },
        ],
        description: [
            `This is where is all began. Jeff 2 years old and Shawn 2 months old, we decided to buy a 23 foot sailboat on a trailer. The San Juan 23 was a perfect starter boat. The San Juan 23s were designed with a swing keel built by the Clark Boat Company in Kent, WA.`,
            `First thing we did is join the San Juan 23 Fleet Club. We did many trips from West Seattle to Blake Island but also towed her with our 1965 Dodge van to Lake Chelan, up to Nanaimo, BC and many trips launching at Washington Park in Anacortes, WA to explore the San Juan Islands.`,
        ],
    },
]