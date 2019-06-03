const attractions = [
    {name: "Eltham Palace", coords: [0.048400, 51.446989], desc: "Fuses 1930s design with original medieval architecture, set in 19 acres of award-winning gardens.", website: "https://www.english-heritage.org.uk/visit/places/eltham-palace-and-gardens/", address: "Court Yard, Eltham, Greenwich, SE9 5QE" },
    {name: "Bob Hope Theatre", coords: [0.049947, 51.450701], desc: "Community theatre owned and run by the members of Eltham Little Theatre Company, running approximately 11 shows each year.", website: "http://www.bobhopetheatre.co.uk/" },
    {name: "Eltham Centre", coords: [0.057588, 51.451554], desc: "Offers pool, gym and various sports activity courses. Participate in lessons like Group Cycle, Yoga and Power Pump.", website: "https://www.better.org.uk/leisure-centre/london/greenwich/eltham-centre" },
    {name: "Severndroog Castle", coords: [0.060037, 51.466584], desc: "An 18th century folly with a café and occasional events.", website: "https://www.severndroogcastle.org.uk/" },
    {name: "Eltham Park South", coords: [0.067033, 51.454722], desc: "Large, grassy area, good for informal ball games with splendid tree-lined avenues, a children's playground and a picnic area." },
    {name: "Tudor Barn", coords: [0.048965, 51.457047], desc: "A restaurant in a 16th century barn.", website: "https://www.tudorbarneltham.com"},
    {name: "Shrewsbury House", coords: [0.072817, 51.473214], desc: "A community centre on Shooters Hill.", website: "https://shrewsburyhouse.org" },
    {name: "Gerald Moore Gallery", coords: [0.039818, 51.438416], desc: "A young centre for modern and contemporary art.", website: "https://geraldmooregallery.org" },
    {name: "The Rusty Bucket Pub", coords: [0.052095, 51.450422], desc: "The best craft beer in town.", website: "https://www.therustybucket.pub/" },
    {name: "The Long Pond", coords: [0.059565, 51.456884], desc: "A micropub in the Kent tradition." },
    {name: "Oxleas Wood Café", coords: [0.06974, 51.4666], desc: "A café with stunning views and good value food and drink." },

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
    {"id": "sc-01", poi: "Severndroog Castle", date: new Date(2019, jun, 21), timeSpecified: 0, title: "A Night of Vintage Jazz"},
    {"id": "sc-02", poi: "Severndroog Castle", date: new Date(2019, jul, 12), timeSpecified: 0, title: "A Theatrical Opera Night"},
    {"id": "sc-03", poi: "Severndroog Castle", date: new Date(2019, jul, 18), timeSpecified: 0, title: "Production of Nell Gwyn"},
    {"id": "sc-04", poi: "Severndroog Castle", date: new Date(2019, aug, 11), timeSpecified: 0, title: "A Selection of Shakespeare Plays"},
    {"id": "sc-05", poi: "Severndroog Castle", date: new Date(2019, sep, 13), timeSpecified: 0, title: "A Screening of Hitchcock"},

    {"id": "tb-01", poi: "Tudor Barn", date: new Date(2019, may, 31, 19), timeSpecified: 1, title: "Wine and Dine", shortDesc: "Try wines from around the world"},
    {"id": "tb-02", poi: "Tudor Barn", date: new Date(2019, jun,  2, 10), timeSpecified: 1, title: "Family Fun Day", shortDesc: "June family fun day"},
    {"id": "tb-03", poi: "Tudor Barn", date: new Date(2019, jun, 16, 12), timeSpecified: 1, title: "Father's Day"},
    {"id": "tb-04", poi: "Tudor Barn", date: new Date(2019, jul, 22, 11), timeSpecified: 1, title: "Wedding Fair"},

    {"id": "sh-01", poi: "Shrewsbury House", date: new Date(2019, may, 18, 12), timeSpecified: 1, title: "Kid's Crafternoon", shortDesc: "Come along and join us for another Kid’s Crafternoon!  ", url: "https://shrewsburyhouse.org/events/events/kids-crafternoon/"},
    {"id": "sh-02", poi: "Shrewsbury House", date: new Date(2019, may, 20, 12), timeSpecified: 1, title: "Time Team on Shooters Hill", shortDesc: "Local archaeologist Andy Brockman talks us through the making of a Time Team episode on Shooters Hill.", url: "https://shrewsburyhouse.org/events/events/get-together-mondays-time-team-on-shooters-hill/"},
    {"id": "sh-03", poi: "Shrewsbury House", date: new Date(2019, may, 31, 19), timeSpecified: 1, title: "Murder Mystery dinner party", shortDesc: "Whodunnit? Can you solve the Mystery? Join us for a fabulous 1930's themed Murder Mystery Dinner party.", url: "https://shrewsburyhouse.org/events/events/kids-crafternoon/"},

    {"id": "gmg-01", poi: "Gerald Moore Gallery", date: new Date(2019, may, 23, 18,30), timeSpecified: 1, title: "Introduction to Casting", shortDesc: "Learn some simple casting techniques inspired by our exhibition 'The Oval Window'.", url: "https://bookwhen.com/geraldmooregallery#focus=ev-s34j-20190523183000"},
    {"id": "gmg-02", poi: "Gerald Moore Gallery", date: new Date(2019, jun, 5, 10,  0), timeSpecified: 1, title: "Introduction to Drawing", shortDesc: "Come learn to draw in a friendly warm environment.", url: "https://bookwhen.com/geraldmooregallery%20#focus=ev-sg9c-20190501100000"},

    {"id": "bht-01", poi: "Bob Hope Theatre", date: new Date(2019, may, 16, 19,45), timeSpecified: 1, title: "Ruddigore", shortDesc: "A Gilbert & Sullivan play running for three days.", url: "http://www.bobhopetheatre.co.uk/ruddigore.html"},
    {"id": "bht-02", poi: "Bob Hope Theatre", date: new Date(2019, may, 22, 19,45), timeSpecified: 1, title: "London Suite", shortDesc: "A mixture of comedy and heart-warming drama running until the 25th.", url: "http://www.bobhopetheatre.co.uk/londonsuite.html"},
    {"id": "bht-03", poi: "Bob Hope Theatre", date: new Date(2019, may, 27, 19,45), timeSpecified: 1, title: "Young Herbert", shortDesc: "A swashbuckling pirate adventure with a twist!", url: "http://www.bobhopetheatre.co.uk/youngherbert.html"},
    {"id": "bht-04", poi: "Bob Hope Theatre", date: new Date(2019, may, 28, 11, 0), timeSpecified: 1, title: "John Hegley: Morning Wordship", shortDesc: "Cross-generational guffaws, comedy word play and song with the legendary performance poet.", url: "http://www.bobhopetheatre.co.uk/hegley.html"},

    {"id": "rb-01", poi: "The Rusty Bucket Pub", date: new Date(2019, may, 19), timeSpecified: 0, title: "Steve Boltz – Live Music (Rock)"},
    {"id": "rb-02", poi: "The Rusty Bucket Pub", date: new Date(2019, may, 26), timeSpecified: 0, title: "The Mason Dixon Brothers – Live Music (Country/Western)"},

    {"id": "owc-01", poi: "Oxleas Wood Café", date: new Date(2019, aug, 4, 15), timeSpecified: 1, title: "Live Music - Gambler"},
    {"id": "owc-02", poi: "Oxleas Wood Café", date: new Date(2019, aug, 11, 15), timeSpecified: 1, title: "Live Music - Gordon Webber & Steve Mac", shortDesc: "Harmony vocals and acoustic guitars."},
    {"id": "owc-03", poi: "Oxleas Wood Café", date: new Date(2019, aug, 25, 15), timeSpecified: 1, title: "Oxlea Hill Carnival: Marie Dawn & JJBand", shortDesc: "Classic reggae.  BBQ jerk chicken.  Beers, ales and gins."},
    {"id": "owc-04", poi: "Oxleas Wood Café", date: new Date(2019, aug, 26, 15), timeSpecified: 1, title: "Oxlea Hill Carnival: Al Keval", shortDesc: "Ska and reggae band.  BBQ jerk chicken.  Beers, ales and gins."},
    {"id": "owc-05", poi: "Oxleas Wood Café", date: new Date(2019, sep, 1, 15), timeSpecified: 1, title: "Live Music - Shawthing"},
    {"id": "owc-06", poi: "Oxleas Wood Café", date: new Date(2019, sep, 8, 15), timeSpecified: 1, title: "Live Music - Marilyn Gentle Trio", shortDesc: "Acoustic soul, jazz, latin and pop... re-imagined."},

];