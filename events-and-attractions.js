var attractions = [
    {name: "Eltham Palace", coords: [0.048400, 51.446989], desc: "Fuses 1930s design with original medieval architecture, set in 19 acres of award-winning gardens." },
    {name: "Bob Hope Theatre", coords: [0.049947, 51.450701], desc: "Community theatre owned and run by the members of Eltham Little Theatre Company, running approximately 11 shows each year." },
    {name: "Eltham Centre", coords: [0.057588, 51.451554], desc: "Offers pool, gym and various sports activity courses. Participate in lessons like Group Cycle, Yoga and Power Pump." },
    {name: "Severndroog Castle", coords: [0.060037, 51.466584], desc: "An 18th century folly with a café and occasional events." },
    {name: "Eltham Park South", coords: [0.067033, 51.454722], desc: "Large, grassy area, good for informal ball games with splendid tree-lined avenues, a children's playground and a picnic area." },
    {name: "Tudor Barn", coords: [0.048965, 51.457047], desc: "A restaurant in a 16th century barn." },
    {name: "Shrewsbury House", coords: [0.072817, 51.473214], desc: "A community centre on Shooters Hill.", website: "https://shrewsburyhouse.org" },
    {name: "Gerald Moore Gallery", coords: [0.039818, 51.438416], desc: "A young centre for modern and contemporary art.", website: "https://geraldmooregallery.org" },
    {name: "The Rusty Bucket Pub", coords: [0.052095, 51.450422], desc: "The best craft beer in town.", website: "https://geraldmooregallery.org" },
    {name: "The Long Pond", coords: [0.059565, 51.456884], desc: "A micropub in the Kent tradition." },

];

var jan = 0;
var feb = 1;
var mar = 2;
var apr = 3;
var may = 4;
var jun = 5;
var jul = 6;
var aug = 7;
var sep = 8;
var oct = 9;
var nov = 10;
var dec = 11;

var events = [
    {poi: "Severndroog Castle", date: new Date(2019, jun, 21), timeSpecified: 0, title: "A Night of Vintage Jazz"},
    {poi: "Severndroog Castle", date: new Date(2019, jul, 12), timeSpecified: 0, title: "A Theatrical Opera Night"},
    {poi: "Severndroog Castle", date: new Date(2019, jul, 18), timeSpecified: 0, title: "Production of Nell Gwyn"},
    {poi: "Severndroog Castle", date: new Date(2019, aug, 11), timeSpecified: 0, title: "A Selection of Shakespeare Plays"},
    {poi: "Severndroog Castle", date: new Date(2019, sep, 13), timeSpecified: 0, title: "A Screening of Hitchcock"},

    {poi: "Tudor Barn", date: new Date(2019, may, 31, 19), timeSpecified: 1, title: "Wine and Dine", shortDesc: "Try wines from around the world"},
    {poi: "Tudor Barn", date: new Date(2019, jun, 02, 10), timeSpecified: 1, title: "Family Fun Day", shortDesc: "June family fun day"},
    {poi: "Tudor Barn", date: new Date(2019, jun, 16, 12), timeSpecified: 1, title: "Father's Day"},
    {poi: "Tudor Barn", date: new Date(2019, jul, 22, 11), timeSpecified: 1, title: "Wedding Fair"},

    {poi: "Shrewsbury House", date: new Date(2019, may, 18, 12), timeSpecified: 1, title: "Kid's Crafternoon", shortDesc: "Come along and join us for another Kid’s Crafternoon!  ", url: "https://shrewsburyhouse.org/events/events/kids-crafternoon/"},
    {poi: "Shrewsbury House", date: new Date(2019, may, 20, 12), timeSpecified: 1, title: "Time Team on Shooters Hill", shortDesc: "Local archaeologist Andy Brockman talks us through the making of a Time Team episode on Shooters Hill.", url: "https://shrewsburyhouse.org/events/events/kids-crafternoon/"},
    {poi: "Shrewsbury House", date: new Date(2019, may, 31, 19), timeSpecified: 1, title: "Murder Mystery dinner party", shortDesc: "Whodunnit? Can you solve the Mystery? Join us for a fabulous 1930's themed Murder Mystery Dinner party.", url: "https://shrewsburyhouse.org/events/events/kids-crafternoon/"},

    {poi: "Gerald Moore Gallery", date: new Date(2019, may, 23, 18,30), timeSpecified: 1, title: "Introduction to Casting", shortDesc: "Learn some simple casting techniques inspired by our exhibition 'The Oval Window'.", url: "https://bookwhen.com/geraldmooregallery#focus=ev-s34j-20190523183000"},
    {poi: "Gerald Moore Gallery", date: new Date(2019, jun, 5, 10,00), timeSpecified: 1, title: "Introduction to Drawing", shortDesc: "Come learn to draw in a friendly warm environment.", url: "https://bookwhen.com/geraldmooregallery%20#focus=ev-sg9c-20190501100000"},

    {poi: "Bob Hope Theatre", date: new Date(2019, may, 16, 19,45), timeSpecified: 1, title: "Ruddigore", shortDesc: "A Gilbert & Sullivan play running for three days.", url: "http://www.bobhopetheatre.co.uk/ruddigore.html"},
    {poi: "Bob Hope Theatre", date: new Date(2019, may, 22, 19,45), timeSpecified: 1, title: "London Suite", shortDesc: "A mixture of comedy and heart-warming drama running until the 25th.", url: "http://www.bobhopetheatre.co.uk/londonsuite.html"},
    {poi: "Bob Hope Theatre", date: new Date(2019, may, 27, 19,45), timeSpecified: 1, title: "Young Herbert", shortDesc: "A swashbuckling pirate adventure with a twist!", url: "http://www.bobhopetheatre.co.uk/youngherbert.html"},
    {poi: "Bob Hope Theatre", date: new Date(2019, may, 28, 11,00), timeSpecified: 1, title: "John Hegley: Morning Wordship", shortDesc: "Cross-generational guffaws, comedy word play and song with the legendary performance poet.", url: "http://www.bobhopetheatre.co.uk/hegley.html"},

    {poi: "The Rusty Bucket Pub", date: new Date(2019, may, 19), timeSpecified: 0, title: "Steve Boltz – Live Music (Rock)"},
    {poi: "The Rusty Bucket Pub", date: new Date(2019, may, 26), timeSpecified: 0, title: "The Mason Dixon Brothers – Live Music (Country/Western)"},


];