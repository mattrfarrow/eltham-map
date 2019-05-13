var attractions = [
    {name: "Eltham Palace", coords: [0.048400, 51.446989], desc: "Fuses 1930s design with original medieval architecture, set in 19 acres of award-winning gardens." },
    {name: "Bob Hope Theatre", coords: [0.049947, 51.450701], desc: "Community theatre owned and run by the members of Eltham Little Theatre Company, running approximately 11 shows each year." },
    {name: "Eltham Centre", coords: [0.057588, 51.451554], desc: "Offers pool, gym and various sports activity courses. Participate in lessons like Group Cycle, Yoga and Power Pump." },
    {name: "Eltham Park South", coords: [0.067033, 51.454722], desc: "Large, grassy area, good for informal ball games with splendid tree-lined avenues, a children's playground and a picnic area." },
    {name: "Severndroog Castle", coords: [0.060037, 51.466584], desc: "An 18th century folly with a café and occasional events." },
    {name: "Tudor Barn", coords: [0.048965, 51.457047], desc: "A restaurant in a 16th century barn." },
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
];