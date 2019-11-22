const attractions = [
    {name: "Eltham Palace", coords: [0.048400, 51.446989],
        desc: "A 1930s art-deco marvel with original medieval architecture, set in 19 acres of award-winning gardens.", website: "https://www.english-heritage.org.uk/visit/places/eltham-palace-and-gardens/", address: "Court Yard, Eltham, Greenwich, SE9 5QE" },

    {name: "Oxleas Wood", coords: [0.06332, 51.46599],
        desc: "Escape London and enjoy 130 acres of ancient woodland and meadows.", website: "http://oxleaswoodlands.uk" },

    {name: "Severndroog Castle", coords: [0.060037, 51.466584],
        desc: "An 18th century folly with a café and regular events.", website: "https://www.severndroogcastle.org.uk/" },

    {name: "Eltham Centre", coords: [0.057588, 51.451554],
        desc: "Pools, a gym and various sports courses. Participate in lessons like Group Cycle, Yoga and Power Pump.",
        website: "https://www.better.org.uk/leisure-centre/london/greenwich/eltham-centre" },

    {name: "Bob Hope Theatre", coords: [0.049947, 51.450701],
        desc: "Community theatre owned and run by the members of Eltham Little Theatre Company, running approximately 11 shows each year.",
        website: "http://www.bobhopetheatre.co.uk/" },

    {name: "Well Hall Pleasaunce", coords: [0.048810, 51.456089],
        desc: "A haven of formal gardens, ponds and woodland.",
        website: "http://www.wellhall.org.uk/",
    address: "Well Hall Road, SE9 6SN"},

    {name: "Woodlands Farm", coords: [0.079343, 51.467514],
        desc: "A city farm run as a conservation and education project.",
        website: "https://www.thewoodlandsfarmtrust.org/",
        address: "331 Shooters Hill, DA16 3RP"}

    {name: "Eltham Park South", coords: [0.067033, 51.454722],
        desc: "Large, grassy area, good for informal ball games with splendid tree-lined avenues, a children's playground and a picnic area." },

    {name: "Gerald Moore Gallery", coords: [0.039818, 51.438416],
        desc: "A young centre for modern and contemporary art.", website: "https://geraldmooregallery.org" },

    {name: "Tudor Barn", coords: [0.048965, 51.457047],
        desc: "A restaurant in a 16th century barn.", website: "https://www.tudorbarneltham.com"},
    {name: "Shrewsbury House", coords: [0.072817, 51.473214],
        desc: "A community centre on Shooters Hill.", website: "https://shrewsburyhouse.org" },
    {name: "The Rusty Bucket Pub", coords: [0.052095, 51.450422],
        desc: "The best craft beer in town.", website: "https://www.therustybucket.pub/" },
    {name: "The Long Pond", coords: [0.059565, 51.456884],
        desc: "A micropub in the Kent tradition.",
        address: "110 Westmount Road, SE9 1UT"},
    {name: "Oxleas Wood Cafe", coords: [0.06974, 51.4666],
        desc: "A café with stunning views and good value food and drink." },

    {name: "All Saints Church", coords: [0.072072, 51.436021],
        desc: "A church in the heart of New Eltham.",
        address: "Bercta Road, Bishops Close, London, SE9 3UT",
        website: "http://allsaintsneweltham.org.uk/"},

    {name: "New Eltham Methodist Church", coords: [0.073827, 51.436354],
        desc: "A church in the heart of New Eltham.",
        address: "435-439 Footscray Road, London, SE9 3UL",
        website: "http://www.newelthammethodist.org.uk/"},

    {name: "Christchurch Community Centre", coords: [0.060726, 51.451046],
        desc: "A community centre in Eltham.",
        address: "229 Eltham High Street, London, SE9 1TX"},

    {name: "Eltham United Reformed Church", coords: [0.051864, 51.449235],
        desc: "A church.",
        address: "1 Court Road, London, SE9 5AD",
        website: "https://www.elthamurc.org/"},

    {name: "Blackheath Rugby Club", coords: [0.046937, 51.458125],
        desc: "It's a rugby club.",
        address: "Kidbrooke Lane, Eltham, London, SE9 6TE"},

    {name: "Passey Place", coords: [0.054124, 51.450431],
        desc: "A square in the centre of Eltham that hosts markets and events.",
        address: "Passey Place, Eltham",
        website: "https://www.facebook.com/elthampm/"},

    {name: "Eltham GPO", coords: [0.054124, 51.450431],
        desc: "A pub in the old post office with regular live music and quizzes.",
        address: "4 Passey Pl, Eltham, London SE9 5DQ",
        website: "https://elthamgpo.com/"},

    {name: "Harris Academy", coords: [0.039424, 51.451899],
        desc: "A secondary school and sixth form.",
        address: "Middle Park Avenue, Eltham, SE9 5EQ\n",
        website: "https://www.harrisfederation.org.uk/175/our-academies/academy/18/harris-academy-greenwich"},

    {name: "Capital Art Gallery", coords: [0.050933, 51.456538],
        desc: "An art gallery with regularly changing pieces of art from both local and international artists.",
        address: "13 Well Hall Parade, Well Hall Road, London, SE9 6SP",
        website: "https://www.capitalartgallery.co.uk/our_story"},


];

// https://www.freshgroundeltham.co.uk/ ?

const jan = 0;
const feb = 1;
const mar = 2;
const apr = 3;
const may = 4;
const jun = 5;
const jul = 6;
const aug = 7;
const sep = 8;
const oct = 9;
const nov = 10;
const dec = 11;

const events = [

    // 4th Sunday of the month
    {"id": "pp-01", poi: "Passey Place", when: new Date(2019, jun, 23, 10), timeSpecified: 1, title: "Eltham Producers Market", shortDesc: "We have fruit and veg, honey, bread and cakes, olives, personalised gifts, craft beers and chilli sauces, chutneys, jams and marmalades, fruit infused liqueurs and The Brothers will be busking.", price: "Free entry"},
    {"id": "pp-01b", poi: "Passey Place", when: new Date(2019, jul, 27, 10), timeSpecified: 1, title: "Eltham Producers Market", shortDesc: "We have fruit and veg, honey, bread and cakes, olives, personalised gifts, craft beers and chilli sauces, chutneys, jams and marmalades, fruit infused liqueurs and The Brothers will be busking.", price: "Free entry"},
    {"id": "pp-01c", poi: "Passey Place", when: new Date(2019, nov, 24, 10), timeSpecified: 1, title: "Eltham Producers Market", shortDesc: "A range of produce for sale.", price: "Free entry", website: "https://www.royalgreenwich.gov.uk/directory_record/2682/eltham_producers_market"},

    // Every Monday
    {"id": "ha-01", poi: "Harris Academy", when: new Date(2019, jul, 1, 19, 30), timeSpecified: 1, title: "Ceroc Dance Class", shortDesc: "Every Monday at Harris Academy, Middle Park Avenue. No experience or partner needed.", url: "https://www.facebook.com/ceroceltham/"},
    {"id": "ha-01b", poi: "Harris Academy", when: new Date(2019, jul, 8, 19, 30), timeSpecified: 1, title: "Ceroc Dance Class", shortDesc: "Every Monday at Harris Academy, Middle Park Avenue. No experience or partner needed.", url: "https://www.facebook.com/ceroceltham/"},
    {"id": "ha-01c", poi: "Harris Academy", when: new Date(2019, jul, 15, 19, 30), timeSpecified: 1, title: "Ceroc Dance Class", shortDesc: "Every Monday at Harris Academy, Middle Park Avenue. No experience or partner needed.", url: "https://www.facebook.com/ceroceltham/"},
    {"id": "ha-01d", poi: "Harris Academy", when: new Date(2019, aug, 5, 19, 30), timeSpecified: 1, title: "Ceroc Dance Class", shortDesc: "Every Monday at Harris Academy, Middle Park Avenue. No experience or partner needed.", url: "https://www.facebook.com/ceroceltham/"},
    {"id": "ha-01e", poi: "Harris Academy", when: new Date(2019, aug, 12, 19, 30), timeSpecified: 1, title: "Ceroc Dance Class", shortDesc: "Every Monday at Harris Academy, Middle Park Avenue. No experience or partner needed.", url: "https://www.facebook.com/ceroceltham/"},
    {"id": "ha-01f", poi: "Harris Academy", when: new Date(2019, aug, 19, 19, 30), timeSpecified: 1, title: "Ceroc Dance Class", shortDesc: "Every Monday at Harris Academy, Middle Park Avenue. No experience or partner needed.", url: "https://www.facebook.com/ceroceltham/"},
    {"id": "ha-01g", poi: "Harris Academy", when: new Date(2019, aug, 26, 19, 30), timeSpecified: 1, title: "Ceroc Dance Class", shortDesc: "Every Monday at Harris Academy, Middle Park Avenue. No experience or partner needed.", url: "https://www.facebook.com/ceroceltham/"},
    {"id": "ha-01h", poi: "Harris Academy", when: new Date(2019, nov, 4, 19, 30), timeSpecified: 1, title: "Ceroc Dance Class", shortDesc: "Every Monday at Harris Academy, Middle Park Avenue. No experience or partner needed.", url: "https://www.facebook.com/ceroceltham/"},
    {"id": "ha-01i", poi: "Harris Academy", when: new Date(2019, nov, 11, 19, 30), timeSpecified: 1, title: "Ceroc Dance Class", shortDesc: "Every Monday at Harris Academy, Middle Park Avenue. No experience or partner needed.", url: "https://www.facebook.com/ceroceltham/"},
    {"id": "ha-01j", poi: "Harris Academy", when: new Date(2019, nov, 18, 19, 30), timeSpecified: 1, title: "Ceroc Dance Class", shortDesc: "Every Monday at Harris Academy, Middle Park Avenue. No experience or partner needed.", url: "https://www.facebook.com/ceroceltham/"},
    {"id": "ha-01k", poi: "Harris Academy", when: new Date(2019, nov, 25, 19, 30), timeSpecified: 1, title: "Ceroc Dance Class", shortDesc: " Monday at Harris Academy, Middle Park Avenue. No experience or partner needed.", url: "https://www.facebook.com/ceroceltham/"},

    //Every Wednesday
    {"id": "brc-01", poi: "Blackheath Rugby Club", when: new Date(2019, jul, 10, 20), timeSpecified: 1,
        title: "Folk Mob Open-Mic Night", shortDesc: "An open-mic night with the Folk Mob - come and play or just watch and listen.",
        url: "https://sites.google.com/site/folkmobonline/folkmob-calendar-1?authuser=0", price: "Free entry"},
    {"id": "brc-02", poi: "Blackheath Rugby Club", when: new Date(2019, jul, 17, 20), timeSpecified: 1,
        title: "Folk Mob Open-Mic Night", shortDesc: "An open-mic night with the Folk Mob - come and play or just watch and listen.",
        url: "https://sites.google.com/site/folkmobonline/folkmob-calendar-1?authuser=0", price: "Free entry"},
    {"id": "brc-03", poi: "Blackheath Rugby Club", when: new Date(2019, nov, 6, 20), timeSpecified: 1,
        title: "Folk Mob Open-Mic Night", shortDesc: "An open-mic night with the Folk Mob - come and play or just watch and listen.",
        url: "https://sites.google.com/site/folkmobonline/folkmob-calendar-1?authuser=0", price: "Free entry"},
    {"id": "brc-04", poi: "Blackheath Rugby Club", when: new Date(2019, nov, 13, 20), timeSpecified: 1,
            title: "Folk Mob Open-Mic Night", shortDesc: "An open-mic night with the Folk Mob - come and play or just watch and listen.",
            url: "https://sites.google.com/site/folkmobonline/folkmob-calendar-1?authuser=0", price: "Free entry"},
    {"id": "brc-04a", poi: "Blackheath Rugby Club", when: new Date(2019, nov, 20, 20), timeSpecified: 1,
        title: "Folk Mob Open-Mic Night", shortDesc: "An open-mic night with the Folk Mob - come and play or just watch and listen.",
        url: "https://sites.google.com/site/folkmobonline/folkmob-calendar-1?authuser=0", price: "Free entry"},
    {"id": "brc-04b", poi: "Blackheath Rugby Club", when: new Date(2019, nov, 27, 20), timeSpecified: 1,
        title: "Folk Mob Open-Mic Night", shortDesc: "An open-mic night with the Folk Mob - come and play or just watch and listen.",
        url: "https://sites.google.com/site/folkmobonline/folkmob-calendar-1?authuser=0", price: "Free entry"},
    {"id": "brc-04c", poi: "Blackheath Rugby Club", when: new Date(2019, dec, 4, 20), timeSpecified: 1,
        title: "Folk Mob Open-Mic Night", shortDesc: "An open-mic night with the Folk Mob - come and play or just watch and listen.",
        url: "https://sites.google.com/site/folkmobonline/folkmob-calendar-1?authuser=0", price: "Free entry"},
    {"id": "brc-04c", poi: "Blackheath Rugby Club", when: new Date(2019, dec, 11, 20), timeSpecified: 1,
        title: "Folk Mob Open-Mic Night", shortDesc: "An open-mic night with the Folk Mob - come and play or just watch and listen.",
        url: "https://sites.google.com/site/folkmobonline/folkmob-calendar-1?authuser=0", price: "Free entry"},


    {"id": "asc-01", poi: "All Saints Church", when: new Date(2019, jul, 6, 11), timeSpecified: 1, title: "Family Fun Day",
        shortDesc: "Fun for all the family: Games, bouncy castle, craft and cake stalls, face painting, children’s colouring competition. All are welcome. ", url: "https://www.facebook.com/events/382254675719310/", price: "Free entry"},
    {"id": "asc-02", poi: "All Saints Church", when: new Date(2019, nov, 2, 10), timeSpecified: 1, until: {h:14}, title: "NSPCC Craft Fair",
        shortDesc: "Variety of craft stalls, plus NSPCC stalls, including Homemade Cakes & raffle.  Light lunches available.", price: "Free entry"},

    {"id": "sc-01", poi: "Severndroog Castle", when: new Date(2019, jun, 21, 18, 30), timeSpecified: 1, title: "A Night of Vintage Jazz", shortDesc: "Explore and enjoy the Castle after hours, listening to the soulful tones of vintage jazz singer Jess DeGiudici at one of our summer late night openings.  Be sure to book ahead.", url: "https://www.severndroogcastle.org.uk/VintageJazzLatesEvent.html"},
    {"id": "sc-02", poi: "Severndroog Castle", when: new Date(2019, jul, 12, 18, 30), timeSpecified: 1, until: {h: 22},
        title: "A Theatrical Opera Night",
        shortDesc: "Explore and enjoy the Castle after hours whist listening to enticing Opera arias at one of our summer late night openings.  Book ahead.",
        url: "https://www.severndroogcastle.org.uk/OperaLate.html", price: "From £6.50 + booking fee"},
    {"id": "sc-03", poi: "Severndroog Castle", when: new Date(2019, jul, 18), timeSpecified: 0, title: "Production of Nell Gwyn.",
        url: "https://www.severndroogcastle.org.uk/NellGwynn.html", price: "£25. Book ahead."},
    // {"id": "sc-04", poi: "Severndroog Castle", when: new Date(2019, aug, 11), timeSpecified: 0, title: "A Selection of Shakespeare Plays"},
    {"id": "sc-05", poi: "Severndroog Castle", when: new Date(2019, sep, 13), timeSpecified: 0, title: "A Screening of Hitchcock"},
    {"id": "sc-06", poi: "Severndroog Castle", when: new Date(2019, aug, 4, 10), until: {h: 11}, timeSpecified: 1, title: "Family Craft Activity - Make and decorate a windmill flower.", url: "https://www.severndroogcastle.org.uk/Family_Craft_Activity_June-1.html", shortDesc: "With the help of our volunteer, we will be helping you create your very own Flower Windmill decorate your child's bedroom or garden with!", price: "£2.50 per child, £3.50 per adult or £9 for a family ticket (2 adults, 2 children)"},
{"id": "sc-07", poi: "Severndroog Castle", when: new Date(2019, oct,  27, 9, 30), until: {h: 10, m: 30}, timeSpecified: 1, title: "Family Craft Activity - Make and decorate a lantern.", url: "https://www.severndroogcastle.org.uk/Family_Craft_Activity_Oct27.html", shortDesc: "We are hosting a Family Craft Activity at Severndroog Castle for anyone who would like to join in. With the help of our volunteer, we will be helping you create your very own Paper Lantern to hang!", price: "£2.50 per child, £3.50 per adult or £9 for a family ticket."},

    {"id": "tb-02", poi: "Tudor Barn", when: new Date(2019, jun,  2, 10), timeSpecified: 1, title: "Family Fun Day", shortDesc: "June family fun day"},
    {"id": "tb-04", poi: "Tudor Barn", when: new Date(2019, jul, 22, 11), timeSpecified: 1, title: "Wedding Fair", shortDesc: "Over 30 suppliers of err... wedding stuff.", url: "http://www.tudorbarneltham.com/event/10009", price: "Free - book ahead"},
    {"id": "tb-05", poi: "Tudor Barn", when: new Date(2019, dec, 8, 11), until: {h: 13}, timeSpecified: 1, title: "Kids Christmas Disco with Santa", shortDesc: "A kids Christmas party for your little ones! The kids will be able to dance away whilst being entertained by the very popular Funky Chicks.", url: "https://www.robovoucher.com/buy/view/dn1lnlmeuh/", price: "£8"},
    {"id": "tb-06", poi: "Tudor Barn", when: new Date(2019, dec, 31, 20), timeSpecified: 1, title: "New Years Eve - Dinner & Party Ticket", shortDesc: "Includes 3-course dinner, DJ, Casino Tables, LED Dancefloor, Photobooth & Midnight Snack.", url: "https://www.robovoucher.com/buy/view/txzdaw1fzu/", price: "£68.50"},

    {"id": "sh-03", poi: "Shrewsbury House", when: new Date(2019, may, 31, 19), timeSpecified: 1, title: "Murder Mystery dinner party", shortDesc: "Whodunnit? Can you solve the Mystery? Join us for a fabulous 1930's themed Murder Mystery Dinner party.", url: "https://shrewsburyhouse.org/events/events/kids-crafternoon/"},
    {"id": "sh-04", poi: "Shrewsbury House", when: new Date(2019, jun, 14, 18, 30), timeSpecified: 1, title: "The Travelling Shrewsburys Return", shortDesc: "Join Jim Radford, Keith Ferris and friends for some fabulous folk music and an evening of entertainment.", url: "https://shrewsburyhouse.org/events/events/the-travelling-shrewsburys-return/"},
    {"id": "sh-05", poi: "Shrewsbury House", when: new Date(2019, jun, 15, 10), timeSpecified: 1, title: "Father's day card making and craft morning", shortDesc: "Come along and join us for a fun card making and craft morning, lots of crafts to choose from.", url: "https://shrewsburyhouse.org/events/events/fathers-day-card-making-and-craft-morning/"},
    {"id": "sh-06", poi: "Shrewsbury House", when: new Date(2019, jun, 28, 19), timeSpecified: 1, title: "Clare Portman Live at Shrewsbury House", shortDesc: "Clare performs live with her band.", url: "https://shrewsburyhouse.org/events/events/clare-portman-live-at-shrewsbury-house/"},
    {"id": "sh-07", poi: "Shrewsbury House", when: new Date(2019, jun, 30, 11), timeSpecified: 1, title: "Do You Vintage?", shortDesc: "Vintage and Craft Fair.", url: "https://shrewsburyhouse.org/events/events/do-you-vintage/"},
    {"id": "sh-08", poi: "Shrewsbury House", when: new Date(2019, jul, 20, 12), timeSpecified: 1, title: "Summer Fete and Craft Fair", shortDesc: "Lots to see and do for the whole family plus a wide range of stall holders selling all sorts of handmade goods.", url: "https://shrewsburyhouse.org/events/events/summer-fete-and-craft-fair/", price: "Free entry"},

    {"id": "gmg-01", poi: "Gerald Moore Gallery", when: new Date(2019, may, 23, 18,30), timeSpecified: 1, title: "Introduction to Casting", shortDesc: "Learn some simple casting techniques inspired by our exhibition 'The Oval Window'.", url: "https://bookwhen.com/geraldmooregallery#focus=ev-s34j-20190523183000"},
    {"id": "gmg-02", poi: "Gerald Moore Gallery", when: new Date(2019, jun, 5, 10,  0), timeSpecified: 1, title: "Introduction to Drawing", shortDesc: "Come learn to draw in a friendly warm environment.  Held at Eltham College.", url: "https://bookwhen.com/geraldmooregallery%20#focus=ev-sg9c-20190501100000"},
    {"id": "gmg-03", poi: "Gerald Moore Gallery", when: new Date(2019, jul, 10, 9,  30), timeSpecified: 1, title: "Kids Summer Art Day: Paint!", shortDesc: "Explore the world of paint in this jam packed day of colours. For ages 6-10. ", price: "£50 for the day.", url: "https://bookwhen.com/geraldmooregallery%20#focus=ev-socb-20190710093000"},
    {"id": "gmg-04", poi: "Gerald Moore Gallery", when: new Date(2019, nov, 13, 9,  30), timeSpecified: 1, until: {h: 11, m: 30}, title: "Painting from Beginning to End", shortDesc: "Learn how to prime boards, stretch canvas and paint from life in this friendly class suitable for all abilities.", price: "£25 for the day.", url: "https://geraldmooregallery.org/adults-art-classes/"},

    {"id": "bht-04", poi: "Bob Hope Theatre", when: new Date(2019, may, 28, 11, 0), timeSpecified: 1, title: "John Hegley: Morning Wordship", shortDesc: "Cross-generational guffaws, comedy word play and song with the legendary performance poet.", url: "http://www.bobhopetheatre.co.uk/hegley.html"},

    {"id": "rb-02", poi: "The Rusty Bucket Pub", when: new Date(2019, may, 26, 18), timeSpecified: 1, title: "Live Music: The Mason Dixon Brothers (country/eestern)"},
    {"id": "rb-03", poi: "The Rusty Bucket Pub", when: new Date(2019, jun, 2, 18), timeSpecified: 1, title: "Live Music: Stephen leonard - acoustic rock"},
    {"id": "rb-04", poi: "The Rusty Bucket Pub", when: new Date(2019, jun, 9, 18), timeSpecified: 1, title: "Live Music: JD Springfield", shortDesc: "Live acoustic blues."},
    {"id": "rb-05", poi: "The Rusty Bucket Pub", when: new Date(2019, jun, 16, 18), timeSpecified: 1, title: "Live Music: Marco Buono project - dirty southern blues", shortDesc: "Featuring a Delta/Chicago style, this an acoustic duo, but inviting guests into the blues circle at every gig."},
    {"id": "rb-06", poi: "The Rusty Bucket Pub", when: new Date(2019, jun, 23, 18), timeSpecified: 1, title: "Little Talks"},
    {"id": "rb-07", poi: "The Rusty Bucket Pub", when: new Date(2019, jun, 30, 18), timeSpecified: 1, title: "Live Music: Harvey Montague", shortDesc: "Local lad Harvey plays classic 70, 80 & 90 acoustic indie & rock."},
    {"id": "rb-08", poi: "The Rusty Bucket Pub", when: new Date(2019, jul, 7, 18), timeSpecified: 1, title: "Live Music: Eva & Nino", price: "Free entry"},
    {"id": "rb-09", poi: "The Rusty Bucket Pub", when: new Date(2019, jul, 14, 18), timeSpecified: 1, title: "Live Music: Sound Refuge",
        shortDesc: `An eclectic mix of performers playing thoughtful jazz. See their site at <a href="https://www.soundrefugemusic.com/" target="_blank" >www.soundrefugemusic.com</a>`,
        price: "Free entry"},
    {"id": "rb-11", poi: "The Rusty Bucket Pub", when: new Date(2019, jul, 21, 18), timeSpecified: 1, title: "Live Music: Marco Piccioni Trio - blues, jazz & Rock", price: "Free entry"},
    {"id": "rb-12", poi: "The Rusty Bucket Pub", when: new Date(2019, jul, 28, 18), timeSpecified: 1, title: "Live Music: Dom & James", shortDesc:"Local band playing 90's acoustic indie rock", price: "Free entry"},

    {"id": "rb-13", poi: "The Rusty Bucket Pub", when: new Date(2019, jul, 16), timeSpecified: 0, title: "Bottleshare Night",    price: "Free entry"},
    {"id": "rb-14", poi: "The Rusty Bucket Pub", when: new Date(2019, jul, 18, 10), timeSpecified: 1, title: "Instagram for Business Workshop.", shortDesc: "Hosted by Westmount Social.", price: "£25"},
    {"id": "rb-15", poi: "The Rusty Bucket Pub", when: new Date(2019, jul, 23, 20), timeSpecified: 1, title: "General Knowledge Quiz", price: " £2 per person."},
    {"id": "rb-16", poi: "The Rusty Bucket Pub", when: new Date(2019, jul, 30), timeSpecified: 0, title: "Boardgame Night", price: "Free entry"},
    {"id": "rb-17", poi: "The Rusty Bucket Pub", when: new Date(2019, aug, 4), timeSpecified: 0, title: "Live Music - Missouri Gutts (band)", price: "Free entry", shortDsc: "A folk trio - read more at http://www.missourigutts.co.uk/"},
    {"id": "rb-18", poi: "The Rusty Bucket Pub", when: new Date(2019, aug, 6, 20), timeSpecified: 1, title: "Music Quiz.", price: "£2 entry per person."},
    {"id": "rb-19", poi: "The Rusty Bucket Pub", when: new Date(2019, oct, 27, 18), timeSpecified: 1, title: "Live Music - Doubleshot.", price: "Free"},
    {"id": "rb-20", poi: "The Rusty Bucket Pub", when: new Date(2019, nov, 3, 18), timeSpecified: 1, title: "Live Music - Frances McKevitt  ", shortDesc: "London-based singer-songwriter. See http://francesmckevitt.com", price: "Free"},


    {"id": "rb-19", poi: "The Rusty Bucket Pub", when: new Date(2019, sep, 3, 20), timeSpecified: 1, title: "Music Quiz.", price: "£2 entry per person."},
    {"id": "rb-20", poi: "The Rusty Bucket Pub", when: new Date(2019, sep, 8, 18), timeSpecified: 1, title: "Gillywood + Andrew the sound guy (Folk)", price: "Free"},
    {"id": "rb-21", poi: "The Rusty Bucket Pub", when: new Date(2019, sep, 10), timeSpecified: 0, title: "Anspach & Hobday Tutored Beer Tasting", price: "£20"},
    {"id": "rb-22", poi: "The Rusty Bucket Pub", when: new Date(2019, sep, 15, 18), timeSpecified: 1, title: "JD Singfield ( Blues)", price: "Free"},
    {"id": "rb-23", poi: "The Rusty Bucket Pub", when: new Date(2019, sep, 17, 20), timeSpecified: 1, title: "General Knowledge Quiz.", price: "£2 entry per person."},
    {"id": "rb-24", poi: "The Rusty Bucket Pub", when: new Date(2019, sep, 22, 18), timeSpecified: 1, title: "Jamie Strange & The off Beats (Covers in their own style)", price: "Free"},
    {"id": "rb-25", poi: "The Rusty Bucket Pub", when: new Date(2019, sep, 24, 20), timeSpecified: 1, title: "Open Mic Night", price: "Free"},
    {"id": "rb-26", poi: "The Rusty Bucket Pub", when: new Date(2019, sep, 29, 18), timeSpecified: 1, title: "Rockoustic (Covers)", price: "Free"},
    {"id": "rb-27", poi: "The Rusty Bucket Pub", when: new Date(2019, oct, 6, 18), timeSpecified: 1, title: "Carrandines Cockney sing-a-long", price: "Free"},
    {"id": "rb-28", poi: "The Rusty Bucket Pub", when: new Date(2019, nov, 12), timeSpecified: 0, title: "Beer tasting with The Kernel Brewery 😃", price: "£20 inc. drinks", website: "https://www.facebook.com/events/the-rusty-bucket-pub/beer-tasting-with-the-kernel/561741501298793/"},

    {"id": "gpo-01", poi: "Eltham GPO", when: new Date(2019, nov, 30), timeSpecified: 0, title: "HIT 'N' MIX - popular cover band.", website: "https://www.facebook.com/events/hit-n-mix/party-time-live-band-hit-n-mix-at-eltham-gpo/646337795871474/"},

    {"id": "owc-01", poi: "Oxleas Wood Cafe", when: new Date(2019, aug, 4, 15), timeSpecified: 1, title: "Live Music - Gambler", price: "Free entry"},
    {"id": "owc-02", poi: "Oxleas Wood Cafe", when: new Date(2019, aug, 11, 15), timeSpecified: 1, title: "Live Music - Gordon Webber & Steve Mac", shortDesc: "Harmony vocals and acoustic guitars.", price: "Free entry"},
    {"id": "owc-03", poi: "Oxleas Wood Cafe", when: new Date(2019, aug, 25, 15), timeSpecified: 1, title: "Oxlea Hill Carnival: Marie Dawn & JJBand", shortDesc: "Classic reggae.  BBQ jerk chicken.  Beers, ales and gins.", price: "Free entry"},
    {"id": "owc-04", poi: "Oxleas Wood Cafe", when: new Date(2019, aug, 26, 15), timeSpecified: 1, title: "Oxlea Hill Carnival: Al Keval", shortDesc: "Ska and reggae band.  BBQ jerk chicken.  Beers, ales and gins.", price: "Free entry"},
    {"id": "owc-05", poi: "Oxleas Wood Cafe", when: new Date(2019, sep, 1, 15), timeSpecified: 1, title: "Live Music - Shawthing", price: "Free entry"},
    {"id": "owc-06", poi: "Oxleas Wood Cafe", when: new Date(2019, sep, 8, 15), timeSpecified: 1, title: "Live Music - Marilyn Gentle Trio", shortDesc: "Acoustic soul, jazz, latin and pop... re-imagined.", price: "Free entry"},
    {"id": "owc-07", poi: "Oxleas Wood Cafe", when: new Date(2019, jul, 7, 15), timeSpecified: 1, title: "Live Music - Marco Meloni - acoustic guitar", price: "Free entry"},
    {"id": "owc-08", poi: "Oxleas Wood Cafe", when: new Date(2019, jul, 14, 15), timeSpecified: 1, title: "Live Music - Gambler", shortDesc: "A highly recommended rock and soul band of first-class musicians.", price: "Free entry"},
    {"id": "owc-09", poi: "Oxleas Wood Cafe", when: new Date(2019, jul, 21, 15), timeSpecified: 1, title: "Live Music - American \"Hot Rod\" - Detonators Rockabilly Band", price: "Free entry"},
    {"id": "owc-10", poi: "Oxleas Wood Cafe", when: new Date(2019, jul, 28, 15), timeSpecified: 1, title: "Live Music - Be Sharp", shortDesc: "A steaming guitar-based trio.  And a BBQ!", price: "Free entry"},

    {"id": "ep-01", poi: "Eltham Palace", when: new Date(2019, jun, 15, 11), timeSpecified: 1, title: "Blooming Gardens Weekend", shortDesc: "Explore Eltham Palace's beautiful historic gardens at their blooming best with tours, demonstrations and stalls.", url: "https://www.english-heritage.org.uk/visit/whats-on/eltham-palace-blooming-gardens-15-16-jun-2019/"},
    {"id": "ep-01a", poi: "Eltham Palace", when: new Date(2019, jun, 16, 11), timeSpecified: 1, title: "Blooming Gardens Weekend", shortDesc: "Explore Eltham Palace's beautiful historic gardens at their blooming best with tours, demonstrations and stalls.", url: "https://www.english-heritage.org.uk/visit/whats-on/eltham-palace-blooming-gardens-15-16-jun-2019/"},
    {"id": "ep-02", poi: "Eltham Palace", when: new Date(2019, jun, 21, 19), timeSpecified: 1, title: "Exploring LGBTQ History", shortDesc: "During Pride month, join us for an evening of Art Deco decadence and 1930s entertainment as we explore LGBTQ histories at Eltham Palace.", url: "https://www.english-heritage.org.uk/visit/whats-on/eltham-queer-walls-21-june-2019/"},
    {"id": "ep-03", poi: "Eltham Palace", when: new Date(2019, jul, 7, 12), timeSpecified: 1, title: "Lazy Jazz Sunday", shortDesc: "A lazy Sunday of jazz music in the stunning surroundings of Eltham Palace and Gardens.  Performances at 12, 1, 2 and 3pm.", url: "https://www.english-heritage.org.uk/visit/whats-on/eltham-palace-lazy-jazz-sundays-14-jul-2019/", price: "Eltham Palace ticket required."},
    {"id": "ep-04", poi: "Eltham Palace", when: new Date(2019, jul, 14, 12), timeSpecified: 1, title: "Lazy Jazz Sunday", shortDesc: "A lazy Sunday of jazz music in the stunning surroundings of Eltham Palace and Gardens.  Performances at 12, 1, 2 and 3pm.", url: "https://www.english-heritage.org.uk/visit/whats-on/eltham-palace-lazy-jazz-sundays-14-jul-2019/", price: "Eltham Palace ticket required."},
    {"id": "ep-05", poi: "Eltham Palace", when: new Date(2019, jul, 21, 12), timeSpecified: 1, title: "Lazy Jazz Sunday", shortDesc: "A lazy Sunday of jazz music in the stunning surroundings of Eltham Palace and Gardens.  Performances at 12, 1, 2 and 3pm.", url: "https://www.english-heritage.org.uk/visit/whats-on/eltham-palace-lazy-jazz-sundays-14-jul-2019/", price: "Eltham Palace ticket required."},
    {"id": "ep-06a", poi: "Eltham Palace", when: new Date(2019, jul, 21, 11), until: {h: 17}, timeSpecified: 1, title: "Get Hands On with History", shortDesc: "Join us as we travel through time from the Medieval Manor House, to the Tudor Palace and the millionaires home of the 1930’s. Try your hand at being a servant, or enjoying the high life of being a Lord or Lady.", url: "https://www.english-heritage.org.uk/visit/whats-on/ghowh-eltham-palace/", price: "Eltham Palace ticket required."},
    {"id": "ep-06b", poi: "Eltham Palace", when: new Date(2019, jul, 26, 11), until: {h: 17}, timeSpecified: 1, title: "Get Hands On with History", shortDesc: "Join us as we travel through time from the Medieval Manor House, to the Tudor Palace and the millionaires home of the 1930’s. Try your hand at being a servant, or enjoying the high life of being a Lord or Lady.", url: "https://www.english-heritage.org.uk/visit/whats-on/ghowh-eltham-palace/", price: "Eltham Palace ticket required."},
    {"id": "ep-06c", poi: "Eltham Palace", when: new Date(2019, jul, 28, 11), until: {h: 17}, timeSpecified: 1, title: "Get Hands On with History", shortDesc: "Join us as we travel through time from the Medieval Manor House, to the Tudor Palace and the millionaires home of the 1930’s. Try your hand at being a servant, or enjoying the high life of being a Lord or Lady.", url: "https://www.english-heritage.org.uk/visit/whats-on/ghowh-eltham-palace/", price: "Eltham Palace ticket required."},
    {"id": "ep-07", poi: "Eltham Palace", when: new Date(2019, aug, 4, 12), timeSpecified: 1, title: "Lazy Jazz Sunday", shortDesc: "A lazy Sunday of jazz music in the stunning surroundings of Eltham Palace and Gardens.  Performances at 12, 1, 2 and 3pm.", url: "https://www.english-heritage.org.uk/visit/whats-on/eltham-palace-lazy-jazz-sundays-14-jul-2019/", price: "Eltham Palace ticket required."},
    {"id": "ep-08", poi: "Eltham Palace", when: new Date(2019, aug, 5, 11), until: {h: 17}, timeSpecified: 1, title: "Get Hands On with History (Mon to Fri this week)", shortDesc: "Join us as we travel through time from the Medieval Manor House, to the Tudor Palace and the millionaires home of the 1930’s. Try your hand at being a servant, or enjoying the high life of being a Lord or Lady.", url: "https://www.english-heritage.org.uk/visit/whats-on/ghowh-eltham-palace/", price: "Eltham Palace ticket required."},
    {"id": "ep-09", poi: "Eltham Palace", when: new Date(2019, aug, 10, 10, 30), until: {h: 17}, timeSpecified: 1, title: "Legendary Joust (Sat and Sun)", shortDesc: "Experience the exhilarating spectacle of speed and skill as four legendary knights compete for honour and glory in the Legendary Joust.", url: "https://www.english-heritage.org.uk/visit/whats-on/eltham-palace-legendary-joust-10--11-aug-2019/", price: "Eltham Palace ticket required."},
    {"id": "ep-10", poi: "Eltham Palace", when: new Date(2019, aug, 10, 11), until: {h: 17}, timeSpecified: 1, title: "Keeping Up With the Courtaulds (Subn and Mon)", shortDesc: "Join the Courtaulds in their home to discover what life was like for this high society couple who contributed to the war effort locally and by helping to finance the SOE organisation.", url: "https://www.english-heritage.org.uk/visit/whats-on/eltham-palace-keeping-up-with-the-courtaulds-25---26-aug-2019/", price: "Eltham Palace ticket required."},
    {"id": "ep-11", poi: "Eltham Palace", when: new Date(2019, oct, 20, 11), timeSpecified: 1, title: "Spooky Eltham Palace with Creepy Critters", shortDesc: "Sun 20 to Fri 25, and Sun 27. Get hands-on with creepy crafts and a wicked witch-themed quest. There’s a fancy dress competition every day.", url: "https://www.english-heritage.org.uk/visit/whats-on/eltham-spooky-eltham-palace-5-8--dec-2019/", price: "Eltham Palace entry ticket required."},
    {"id": "ep-12", poi: "Eltham Palace", when: new Date(2019, dec, 5), timeSpecified: 0, title: "Enchanted Eltham Palace", shortDesc: "Running 5-22 December. Make the most of winter evenings with an enchanting experience of light, colour and sound as our grounds are transformed into an illuminated world.", url: "https://www.english-heritage.org.uk/visit/whats-on/eltham-enchanted-5-8-dec-2019/", price: "Eltham Palace entry ticket required."},
{"id": "ep-13", poi: "Eltham Palace", when: new Date(2019, nov, 26, 19, 30), timeSpecified: 1, title: "Nell Gwynn", shortDesc: "Runs from Tues 26 - Fri 29. ", price: "Adults £15.  Members £12.", url: "https://www.english-heritage.org.uk/visit/whats-on/eltham-palace-nell-gwynne-26-29-nov-2019/"},

    {"id": "whp-01", poi: "Well Hall Pleasaunce", when: new Date(2019, jun, 9, 15), timeSpecified: 1, title: "Summer Sunday Music", url: "http://parksfest.org/calendar.html", price: "Free entry"},
    {"id": "whp-02", poi: "Well Hall Pleasaunce", when: new Date(2019, jun, 16, 15), timeSpecified: 1, title: "Summer Sunday Music", url: "http://parksfest.org/calendar.html", price: "Free entry"},
    {"id": "whp-03", poi: "Well Hall Pleasaunce", when: new Date(2019, jun, 23, 15), timeSpecified: 1, title: "Summer Sunday Music", url: "http://parksfest.org/calendar.html", price: "Free entry"},
    {"id": "whp-04", poi: "Well Hall Pleasaunce", when: new Date(2019, jun, 30, 15), timeSpecified: 1, title: "Summer Sunday Music", url: "http://parksfest.org/calendar.html", price: "Free entry"},
    {"id": "whp-05", poi: "Well Hall Pleasaunce", when: new Date(2019, jul, 7, 15), timeSpecified: 1, title: "Summer Sunday Music", url: "http://parksfest.org/calendar.html", price: "Free entry"},
    //future
    {"id": "whp-06", poi: "Well Hall Pleasaunce", when: new Date(2019, jul, 14, 15), timeSpecified: 1, title: "Summer Sunday Music", url: "http://parksfest.org/calendar.html", price: "Free entry"},
    {"id": "whp-07", poi: "Well Hall Pleasaunce", when: new Date(2019, jul, 21, 15), timeSpecified: 1, title: "Summer Sunday Music", url: "http://parksfest.org/calendar.html", price: "Free entry"},
    {"id": "whp-08", poi: "Well Hall Pleasaunce", when: new Date(2019, jul, 28, 15), timeSpecified: 1, title: "Summer Sunday Music", url: "http://parksfest.org/calendar.html", price: "Free entry"},

    {"id": "eps-01", poi: "Eltham Park South", when: new Date(2019, jun, 30, 15), timeSpecified: 1, title: "Concert in the Park", url: "http://parksfest.org/calendar.html", price: "Free entry"},
    {"id": "eps-02", poi: "Eltham Park South", when: new Date(2019, jul, 7, 15), timeSpecified: 1, title: "Concert in the Park", url: "http://parksfest.org/calendar.html", price: "Free entry"},
    {"id": "eps-03", poi: "Eltham Park South", when: new Date(2019, jul, 21, 15), timeSpecified: 1, title: "Concert in the Park", url: "http://parksfest.org/calendar.html", price: "Free entry"},

    {"id": "nem-01", poi: "New Eltham Methodist Church", when: new Date(2019, jun, 22, 19, 30), timeSpecified: 1, title: "\"Strictly Come Dancing\" Evening", shortDesc: "Come along and our champion dance teachers Hilary and Ann will teach you a variety of latin and ballroom dances step by step.", url: "http://www.necp.org.uk/next-event-1/4590253811"},
    {"id": "nem-02", poi: "New Eltham Methodist Church", when: new Date(2019, jul, 6, 19, 30), timeSpecified: 1, title: "Barn Dance", price: "£10 for adults, £2.50 for kids - including a ploughman's lunch!", url: "http://www.necp.org.uk/next-event-1/4590253811"},


    {"id": "wf-01", poi: "Woodlands Farm", when: new Date(2019, jun, 29, 11), timeSpecified: 1, title: "South East London Wool and Textile Festival", shortDesc: "Featuring Emily Tull internationally recognised embroiderer and contestant on Sky Portrait Artist of the Year.  Also workshops in Textile crafts , kids art tables, upcycling, makers market.", url: "https://tockify.com/woodlands.farm/detail/127/1561802400000"},
    {"id": "wf-02", poi: "Woodlands Farm", when: new Date(2019, sep, 14, 11), timeSpecified: 1, until: {h: 16}, title: "Hedgerow Liqueurs Course", shortDesc: "Forage around Woodlands Farm for sloes before making your own sloe gin to take home.", url: "https://tockify.com/woodlands.farm/detail/147/1568455200000", price: "£10/person, £6 for farm members"},
    {"id": "wf-03", poi: "Woodlands Farm", when: new Date(2019, sep, 21, 11), timeSpecified: 1, until: {h: 16}, title: "Hedgerow Liqueurs Course", shortDesc: "Forage around Woodlands Farm for sloes before making your own sloe gin to take home.", url: "https://tockify.com/woodlands.farm/detail/147/1568455200000", price: "£10/person, £6 for farm members"},
    {"id": "wf-04", poi: "Woodlands Farm", when: new Date(2019, sep, 28, 10), timeSpecified: 1, until: {h: 17}, title: "London Harvest Festival", shortDesc: "Celebrate London’s outdoor heritage at the 21st London Harvest Festival.", url: "https://tockify.com/woodlands.farm/detail/145/1569661200000", price: "£10/person, £6 for farm members"},

    {"id": "ccc-01", poi: "Christchurch Community Centre", when: new Date(2019, jun, 27), timeSpecified: 0, title: "Hartbeeps South London", shortDesc: "Magical multi-sensory adventures for babies and toddlers.  Different times for different ages - check the website.", url: "https://www-251b.bookeo.com/bookeo/b_hartbeepssouthlondon_start.html?ctlsrc2=bYZONUX%2B3ct5r3T366BBfNcBa8R5MmX%2FIl3O1eLVSvU%3D&src=03n"},
    {"id": "ccc-02", poi: "Christchurch Community Centre", when: new Date(2019, jul, 4), timeSpecified: 0, title: "Hartbeeps South London", shortDesc: "Magical multi-sensory adventures for babies and toddlers.  Different times for different ages - check the website.", url: "https://www-251b.bookeo.com/bookeo/b_hartbeepssouthlondon_start.html?ctlsrc2=bYZONUX%2B3ct5r3T366BBfNcBa8R5MmX%2FIl3O1eLVSvU%3D&src=03n"},
    {"id": "ccc-03", poi: "Christchurch Community Centre", when: new Date(2019, jul, 6, 10), timeSpecified: 1, title: "Eltham Producers Market", shortDesc: "Stalls offering a wide range of fresh produce from the South East.", url: "https://www.royalgreenwich.gov.uk/directory_record/2682/eltham_producers_market"},


    {"id": "cag-01", poi: "Capital Art Gallery", when: new Date(2019, jul, 6, 12), timeSpecified: 1, title: "Summer Open Art Exhibition", shortDesc: "A 2-day event showcasing local and international artists.  Hundreds of pieces of art available to purchase.", url: "https://www.capitalartgallery.co.uk/upcoming-events"},

    {"id": "tlp-01", poi: "The Long Pond", when: new Date(2019, oct, 21, 19), timeSpecified: 0, title: "Wine Tasting", shortDesc: "A 2-day event showcasing local and international artists.  Hundreds of pieces of art available to purchase.", url: "https://www.capitalartgallery.co.uk/upcoming-events", price: "£10. Book in person in advance. Limited spaces."},

    {"id": "eurc-01", poi: "Eltham United Reformed Church", when: new Date(2019, oct, 26, 10, 30), timeSpecified: 0, until: {h: 16, m: 30}, title: "Meccano Show 2019", shortDesc: "London’s most popular Meccano Show returns to Eltham for its 41st year!",
     url: "https://selmec.org.uk/events/meccano-show-2019", price: "£5.  Accompanied children free."},

];