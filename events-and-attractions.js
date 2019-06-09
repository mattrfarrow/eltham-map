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

    // vue cinema
    // eltham escape rooms

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
    {"id": "sc-01", poi: "Severndroog Castle", date: new Date(2019, jun, 21), timeSpecified: 0, title: "A Night of Vintage Jazz", shortDesc: "Explore and enjoy the Castle after hours, listening to the soulful tones of vintage jazz singer Jess DeGiudici at one of our summer late night openings.", url: "https://www.severndroogcastle.org.uk/VintageJazzLatesEvent.html"},
    {"id": "sc-02", poi: "Severndroog Castle", date: new Date(2019, jul, 12), timeSpecified: 0, title: "A Theatrical Opera Night", shortDesc: "Explore and enjoy the Castle after hours whist listening to enticing Opera arias at one of our summer late night openings.", url: "https://www.severndroogcastle.org.uk/OperaLate.html"},
    {"id": "sc-03", poi: "Severndroog Castle", date: new Date(2019, jul, 18), timeSpecified: 0, title: "Production of Nell Gwyn"},
    {"id": "sc-04", poi: "Severndroog Castle", date: new Date(2019, aug, 11), timeSpecified: 0, title: "A Selection of Shakespeare Plays"},
    {"id": "sc-05", poi: "Severndroog Castle", date: new Date(2019, sep, 13), timeSpecified: 0, title: "A Screening of Hitchcock"},

    {"id": "tb-02", poi: "Tudor Barn", date: new Date(2019, jun,  2, 10), timeSpecified: 1, title: "Family Fun Day", shortDesc: "June family fun day"},
    // {"id": "tb-03", poi: "Tudor Barn", date: new Date(2019, jun, 16, 12), timeSpecified: 1, title: "Father's Day"},
    {"id": "tb-04", poi: "Tudor Barn", date: new Date(2019, jul, 22, 11), timeSpecified: 1, title: "Wedding Fair", shortDesc: "Over 30 suppliers of err... wedding stuff.", url: "http://www.tudorbarneltham.com/event/10009"},

    {"id": "sh-03", poi: "Shrewsbury House", date: new Date(2019, may, 31, 19), timeSpecified: 1, title: "Murder Mystery dinner party", shortDesc: "Whodunnit? Can you solve the Mystery? Join us for a fabulous 1930's themed Murder Mystery Dinner party.", url: "https://shrewsburyhouse.org/events/events/kids-crafternoon/"},
    {"id": "sh-04", poi: "Shrewsbury House", date: new Date(2019, jun, 14, 18, 30), timeSpecified: 1, title: "The Travelling Shrewsburys Return", shortDesc: "Join Jim Radford, Keith Ferris and friends for some fabulous folk music and an evening of entertainment.", url: "https://shrewsburyhouse.org/events/events/the-travelling-shrewsburys-return/"},
    {"id": "sh-05", poi: "Shrewsbury House", date: new Date(2019, jun, 15, 10), timeSpecified: 1, title: "Father's day card making and craft morning", shortDesc: "Come along and join us for a fun card making and craft morning, lots of crafts to choose from.", url: "https://shrewsburyhouse.org/events/events/fathers-day-card-making-and-craft-morning/"},
    {"id": "sh-06", poi: "Shrewsbury House", date: new Date(2019, jun, 28, 19), timeSpecified: 1, title: "Clare Portman Live at Shrewsbury House", shortDesc: "Clare performs live with her band.", url: "https://shrewsburyhouse.org/events/events/clare-portman-live-at-shrewsbury-house/"},
    {"id": "sh-07", poi: "Shrewsbury House", date: new Date(2019, jun, 30, 11), timeSpecified: 1, title: "Do You Vintage?", shortDesc: "Vintage and Craft Fair.", url: "https://shrewsburyhouse.org/events/events/do-you-vintage/"},
    {"id": "sh-08", poi: "Shrewsbury House", date: new Date(2019, jul, 20, 12), timeSpecified: 1, title: "Summer Fete and Craft Fair", shortDesc: "Lots to see and do for the whole family plus a wide range of stall holders selling all sorts of handmade goods.", url: "https://shrewsburyhouse.org/events/events/summer-fete-and-craft-fair/"},

    {"id": "gmg-01", poi: "Gerald Moore Gallery", date: new Date(2019, may, 23, 18,30), timeSpecified: 1, title: "Introduction to Casting", shortDesc: "Learn some simple casting techniques inspired by our exhibition 'The Oval Window'.", url: "https://bookwhen.com/geraldmooregallery#focus=ev-s34j-20190523183000"},
    {"id": "gmg-02", poi: "Gerald Moore Gallery", date: new Date(2019, jun, 5, 10,  0), timeSpecified: 1, title: "Introduction to Drawing", shortDesc: "Come learn to draw in a friendly warm environment.  Held at Eltham College.", url: "https://bookwhen.com/geraldmooregallery%20#focus=ev-sg9c-20190501100000"},

    {"id": "bht-04", poi: "Bob Hope Theatre", date: new Date(2019, may, 28, 11, 0), timeSpecified: 1, title: "John Hegley: Morning Wordship", shortDesc: "Cross-generational guffaws, comedy word play and song with the legendary performance poet.", url: "http://www.bobhopetheatre.co.uk/hegley.html"},

    {"id": "rb-02", poi: "The Rusty Bucket Pub", date: new Date(2019, may, 26, 18), timeSpecified: 1, title: "Live Music: The Mason Dixon Brothers (country/eestern)"},
    {"id": "rb-03", poi: "The Rusty Bucket Pub", date: new Date(2019, jun, 2, 18), timeSpecified: 1, title: "Live Music: Stephen leonard - acoustic rock"},
    {"id": "rb-04", poi: "The Rusty Bucket Pub", date: new Date(2019, jun, 9, 18), timeSpecified: 1, title: "Live Music: JD Springfield", shortDesc: "Live acoustic blues."},
    {"id": "rb-05", poi: "The Rusty Bucket Pub", date: new Date(2019, jun, 16, 18), timeSpecified: 1, title: "Live Music: Marco Buono project - dirty southern blues"},
    {"id": "rb-06", poi: "The Rusty Bucket Pub", date: new Date(2019, jun, 23, 18), timeSpecified: 1, title: "Little Talks"},
    {"id": "rb-07", poi: "The Rusty Bucket Pub", date: new Date(2019, jun, 30, 18), timeSpecified: 1, title: "Live Music: Harvey Montague", shortDesc: "Local lad Harvey plays classic 70, 80 & 90 acoustic indie & rock."},
    {"id": "rb-08", poi: "The Rusty Bucket Pub", date: new Date(2019, jul, 7, 18), timeSpecified: 1, title: "Live Music: Eva & Nine"},
    {"id": "rb-09", poi: "The Rusty Bucket Pub", date: new Date(2019, jul, 14, 18), timeSpecified: 1, title: "Live Music: Sound Refuge"},
    {"id": "rb-11", poi: "The Rusty Bucket Pub", date: new Date(2019, jul, 21, 18), timeSpecified: 1, title: "Live Music: Marcopiccioni Trio - blues, jazz & Rock"},
    {"id": "rb-12", poi: "The Rusty Bucket Pub", date: new Date(2019, jul, 28, 18), timeSpecified: 1, title: "Live Music: Dom & James - local band - 90's acoustic indie rock"},

    {"id": "owc-01", poi: "Oxleas Wood Cafe", date: new Date(2019, aug, 4, 15), timeSpecified: 1, title: "Live Music - Gambler"},
    {"id": "owc-02", poi: "Oxleas Wood Cafe", date: new Date(2019, aug, 11, 15), timeSpecified: 1, title: "Live Music - Gordon Webber & Steve Mac", shortDesc: "Harmony vocals and acoustic guitars."},
    {"id": "owc-03", poi: "Oxleas Wood Cafe", date: new Date(2019, aug, 25, 15), timeSpecified: 1, title: "Oxlea Hill Carnival: Marie Dawn & JJBand", shortDesc: "Classic reggae.  BBQ jerk chicken.  Beers, ales and gins."},
    {"id": "owc-04", poi: "Oxleas Wood Cafe", date: new Date(2019, aug, 26, 15), timeSpecified: 1, title: "Oxlea Hill Carnival: Al Keval", shortDesc: "Ska and reggae band.  BBQ jerk chicken.  Beers, ales and gins."},
    {"id": "owc-05", poi: "Oxleas Wood Cafe", date: new Date(2019, sep, 1, 15), timeSpecified: 1, title: "Live Music - Shawthing"},
    {"id": "owc-06", poi: "Oxleas Wood Cafe", date: new Date(2019, sep, 8, 15), timeSpecified: 1, title: "Live Music - Marilyn Gentle Trio", shortDesc: "Acoustic soul, jazz, latin and pop... re-imagined."},

    {"id": "ep-01", poi: "Eltham Palace", date: new Date(2019, jun, 15, 11), timeSpecified: 1, title: "Blooming Gardens Weekend", shortDesc: "Explore Eltham Palace's beautiful historic gardens at their blooming best with tours, demonstrations and stalls.", url: "https://www.english-heritage.org.uk/visit/whats-on/eltham-palace-blooming-gardens-15-16-jun-2019/"},
    {"id": "ep-01a", poi: "Eltham Palace", date: new Date(2019, jun, 16, 11), timeSpecified: 1, title: "Blooming Gardens Weekend", shortDesc: "Explore Eltham Palace's beautiful historic gardens at their blooming best with tours, demonstrations and stalls.", url: "https://www.english-heritage.org.uk/visit/whats-on/eltham-palace-blooming-gardens-15-16-jun-2019/"},
    {"id": "ep-02", poi: "Eltham Palace", date: new Date(2019, jun, 21, 19), timeSpecified: 1, title: "Exploring LGBTQ History", shortDesc: "During Pride month, join us for an evening of Art Deco decadence and 1930s entertainment as we explore LGBTQ histories at Eltham Palace.", url: "https://www.english-heritage.org.uk/visit/whats-on/eltham-queer-walls-21-june-2019/"},
    {"id": "ep-03", poi: "Eltham Palace", date: new Date(2019, jul, 7, 12), timeSpecified: 1, title: "Lazy Jazz Sunday", shortDesc: "Join us for a lazy Sunday and enjoy jazz music in the stunning surroundings of Eltham Palace and Gardens.  Performances at 12pm, 1pm, 2pm & 3pm", url: "https://www.english-heritage.org.uk/visit/whats-on/eltham-queer-walls-21-june-2019/"},
    {"id": "ep-04", poi: "Eltham Palace", date: new Date(2019, jul, 14, 12), timeSpecified: 1, title: "Lazy Jazz Sunday", shortDesc: "Join us for a lazy Sunday and enjoy jazz music in the stunning surroundings of Eltham Palace and Gardens.  Performances at 12pm, 1pm, 2pm & 3pm", url: "https://www.english-heritage.org.uk/visit/whats-on/eltham-queer-walls-21-june-2019/"},
    {"id": "ep-05", poi: "Eltham Palace", date: new Date(2019, jul, 21, 12), timeSpecified: 1, title: "Lazy Jazz Sunday", shortDesc: "Join us for a lazy Sunday and enjoy jazz music in the stunning surroundings of Eltham Palace and Gardens.  Performances at 12pm, 1pm, 2pm & 3pm", url: "https://www.english-heritage.org.uk/visit/whats-on/eltham-queer-walls-21-june-2019/"},

];