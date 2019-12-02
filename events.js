
first = 1
second = 2
third = 3
fourth = 4

const events = [

    // Repeating
    {"id": "pp-01", poi: "Passey Place", oncePerMonth: {nth: fourth, day: sunday}, startTime: {h:10},
        title: "Eltham Producers Market", shortDesc: "A range of produce for sale.", price: "Free entry", website: "https://www.royalgreenwich.gov.uk/directory_record/2682/eltham_producers_market"},
    {"id": "ha-01", poi: "Harris Academy", weekly: {day: monday}, startTime: {h:19, m:30},
        title: "Ceroc Dance Class", shortDesc: "Every Monday at Harris Academy. No experience or partner needed.", url: "https://www.facebook.com/ceroceltham/"},
    {"id": "brc-01", poi: "Blackheath Rugby Club", weekly: {day: wednesday}, startTime: { h:20},
        title: "Folk Mob Open-Mic Night", shortDesc: "An open-mic night with the Folk Mob - come and play or just watch and listen.",
        url: "https://sites.google.com/site/folkmobonline/folkmob-calendar-1?authuser=0", price: "Free entry"},

    // https://www.elthamenviros.eco/
    // http://www.elthamchoral.org.uk/events.html

    {"id": "epmc-01", poi: "Holy Trinity Church", when: new Date(2019, dec, 14), startTime: {h:19}, title: "The Christmas Concert",
            shortDesc: "By the Eltham Choral Society", price: "Free entry", url: "http://www.elthamchoral.org.uk/events.html", bookAhead: true,
            price: "In advance £10, At the door: £12"},
    {"id": "epmc-01", poi: "Holy Trinity Church", when: new Date(2019, dec, 15), startTime: {h:15}, endTime: {h:17},
            title: "Messy Church",
            shortDesc: "Church with a difference", price: "Free entry", url: "https://twitter.com/knowlesjune5/status/1201219984640430081?ref_src=twsrc%5Etfw%7Ctwcamp%5Eembeddedtimeline%7Ctwterm%5Eprofile%3Ahteltham%7Ctwcon%5Etimelinechrome&ref_url=http%3A%2F%2Fwww.ht-eltham.org.uk%2Fevents-2%2F", bookAhead: true,
            price: "Donations accepted"},
    {"id": "asc-02", poi: "All Saints Church", when: new Date(2019, nov, 2), startTime: {h:10}, endTime: {h:14}, title: "NSPCC Craft Fair",
        shortDesc: "Variety of craft stalls, plus NSPCC stalls, including Homemade Cakes & raffle.  Light lunches available.", price: "Free entry"},

    {"id": "sc-08a", poi: "Severndroog Castle", when: new Date(2019, dec,  14), startTime: {h:11}, endTime: {h:13, m:15},
            title: "Christmas at the Castle.", url: "https://www.severndroogcastle.org.uk/ChristmasAtTheCastle.html",
            shortDesc: "Carolling led by the SE18 Choir, with Christmas crafts for kids and you'll meet Santa too.",
            price: "Adults £7, Children £5, Family Tickets: £20. Pre-booking required.", bookAhead: true},
    {"id": "sc-08b", poi: "Severndroog Castle", when: new Date(2019, dec,  14), startTime: {h:13, m: 30}, endTime: {h:15, m:15},
            title: "Christmas at the Castle.", url: "https://www.severndroogcastle.org.uk/ChristmasAtTheCastle.html",
            shortDesc: "As above." },


    {"id": "tb-05", poi: "Tudor Barn", when: new Date(2019, dec, 8), startTime: {h:11}, endTime: {h:13},
        title: "Kids Christmas Disco with Santa", shortDesc: "A kids Christmas party for your little ones! The kids will be able to dance away whilst being entertained by the very popular Funky Chicks.",
        url: "https://www.robovoucher.com/buy/view/dn1lnlmeuh/", price: "£8", bookAhead: true},
    {"id": "tb-06", poi: "Tudor Barn", when: new Date(2019, dec, 31), startTime: {h:20},
        title: "New Years Eve - Dinner & Party Ticket", shortDesc: "Includes 3-course dinner, DJ, Casino Tables, LED Dancefloor, Photobooth & Midnight Snack.",
        url: "https://www.robovoucher.com/buy/view/txzdaw1fzu/", price: "£68.50", bookAhead: true},

    {"id": "sh-08", poi: "Shrewsbury House", when: new Date(2019, jul, 20), startTime: {h:12},
        title: "Summer Fete and Craft Fair", shortDesc: "Lots to see and do for the whole family plus a wide range of stall holders selling all sorts of handmade goods.", url: "https://shrewsburyhouse.org/events/events/summer-fete-and-craft-fair/", price: "Free entry"},

    {"id": "gmg-04", poi: "Gerald Moore Gallery", when: new Date(2019, dec, 4), startTime: {h:9, m:30}, endTime: {h:11, m:30},
        title: "Painting from Beginning to End", shortDesc: "Learn how to prime boards, stretch canvas and paint from life in this friendly class suitable for all abilities.", price: "£25 for the day.", url: "https://geraldmooregallery.org/adults-art-classes/"},
    {"id": "gmg-05", poi: "Gerald Moore Gallery", when: new Date(2019, dec, 11), startTime: {h:9, m:30}, endTime: {h:11, m:30},
        title: "Painting from Beginning to End", shortDesc: "Learn how to prime boards, stretch canvas and paint from life in this friendly class suitable for all abilities.", price: "£25 for the day.", url: "https://geraldmooregallery.org/adults-art-classes/"},
    {"id": "gmg-06", poi: "Gerald Moore Gallery", when: new Date(2019, dec, 3), startTime: {h:9}, endTime: {h:11},
        title: "Christmas Wreath Making", shortDesc: "Make your own wreath to take home. We will be using a wire frame and moss with a selection of berries, dried fruit, ribbons and more to decorate.", price: "£25 for the day.", url: "https://geraldmooregallery.org/adults-art-classes/"},
    {"id": "gmg-07", poi: "Gerald Moore Gallery", when: new Date(2019, dec, 10), startTime: {h:9}, endTime: {h:11},
        title: "Christmas Bauble Decorating", shortDesc: "Decorate your very own Christmas glass baubles with paint and glitter to hang on your Christmas tree.", price: "£20 for the day.", url: "https://geraldmooregallery.org/adults-art-classes/", bookAhead: true},

    // http://www.bobhopetheatre.co.uk/
    {"id": "bht-05", poi: "Bob Hope Theatre", dateRange: {startDate: new Date(2019, dec, 6), endDate: new Date(2019, dec, 7) },
        title: "Academy Performing Arts Present: Seasons", shortDesc: "At various times.", url: "http://www.bobhopetheatre.co.uk/seasons.html", price: "Tickets £13", bookAhead: true},
    {"id": "bht-06", poi: "Bob Hope Theatre", when: new Date(2019, dec, 9), startTime: {h:19, m:30}, endTime: {h:22, m:30},
        title: "Folk and Blues Nights", shortDesc: "Come and enjoy the music or provide us with some of your own.", url: "http://www.bobhopetheatre.co.uk/folkandblues.html", price: "Admission £2"},
    {"id": "bht-07", poi: "Bob Hope Theatre", when: new Date(2019, dec, 15), startTime: {h:19, m:30},
        title: "Shane Hampsheir's Christmas Swingalong", shortDesc: "Shane and his band will take you through some of the most iconic yuletide tunes ever written AND you can join in!",
         url: "http://www.bobhopetheatre.co.uk/shane.html", price: "Tickets £14", bookAhead: true},
    {"id": "bht-08", poi: "Bob Hope Theatre", when: new Date(2019, dec, 16), startTime: {h:19, m:30},
        title: "Quiz Night", shortDesc: "A quiz night in the theatre bar with some drinks and competitive quiz mastery. Teams of up to 6 people. Email quiz@bobhopetheatre.co.uk to book.",
         url: "http://www.bobhopetheatre.co.uk/quiznights.html", price: "Admission £5", bookAhead: true},

    {"id": "rb-29", poi: "The Rusty Bucket Pub", when: new Date(2019, dec, 1), startTime: {h: 18},
        title: "Live music: Rockustic", price: "Free entry", shortDesc: "Late afternoon/early evening"},
    {"id": "rb-30", poi: "The Rusty Bucket Pub", when: new Date(2019, dec, 8), startTime: {h: 18},
        title: "Live music: Steve Leonard (\"Local Legend\")", price: "Free entry"},
    {"id": "rb-31", poi: "The Rusty Bucket Pub", when: new Date(2019, dec, 15), startTime: {h: 18},
        title: "Live music: The Peas Xmas Special (not too be missed)", price: "Free entry"},
    {"id": "rb-32", poi: "The Rusty Bucket Pub", when: new Date(2019, dec, 29), startTime: {h: 18},
        title: "Live music: Daisy (2018 open mic competition winner)", price: "Free entry"},
    {"id": "rb-32a", poi: "The Rusty Bucket Pub", when: new Date(2019, dec, 31), startTime: {h: 16},
        title: "NYE Party", price: "Free entry"},
    {"id": "rb-33", poi: "The Rusty Bucket Pub", when: new Date(2020, jan, 5), startTime: {h: 18},
        title: "Live music: Harvey Montague", price: "Free entry"},
    {"id": "rb-34", poi: "The Rusty Bucket Pub", when: new Date(2020, jan, 12), startTime: {h: 18},
            title: "Live music: Rida ZM", price: "Free entry"},
    {"id": "rb-35", poi: "The Rusty Bucket Pub", when: new Date(2020, jan, 19), startTime: {h: 18},
            title: "Live music: Nino Maddalena", price: "Free entry"},
    {"id": "rb-36", poi: "The Rusty Bucket Pub", when: new Date(2020, jan, 26), startTime: {h: 18},
                title: "Live music: Marilyn Gentle Trio", price: "Free entry"},
    {"id": "rb-37", poi: "The Rusty Bucket Pub", when: new Date(2020, feb, 2), startTime: {h: 18},
                title: "Live music: Marco Bueno Project", price: "Free entry"},
    {"id": "rb-38", poi: "The Rusty Bucket Pub", when: new Date(2020, feb, 9), startTime: {h: 18},
                title: "Live music: Gillywood + The Sound Guy", price: "Free entry"},
    {"id": "rb-39", poi: "The Rusty Bucket Pub", when: new Date(2020, feb, 16), startTime: {h: 18},
                title: "Live music: Doubleshot", price: "Free entry"},
    {"id": "rb-40", poi: "The Rusty Bucket Pub", when: new Date(2020, feb, 23), startTime: {h: 18},
                title: "Live music: Grant Sharkey", price: "Free entry"},
    {"id": "rb-41", poi: "The Rusty Bucket Pub", when: new Date(2020, mar, 1), startTime: {h: 18},
                title: "Live music: Steve Leonard", price: "Free entry"},

    {"id": "gpo-01", poi: "Eltham GPO", when: new Date(2019, nov, 30),
        title: "HIT 'N' MIX - popular cover band.", website: "https://www.facebook.com/events/hit-n-mix/party-time-live-band-hit-n-mix-at-eltham-gpo/646337795871474/"},

    {"id": "owc-10", poi: "Oxleas Wood Cafe", when: new Date(2019, jul, 28), startTime: {h:15},
        title: "Live Music - Be Sharp", shortDesc: "A steaming guitar-based trio.  And a BBQ!", price: "Free entry"},

    {"id": "ep-13", poi: "Eltham Palace", dateRange: {startDate: new Date(2019, nov, 26), endDate: new Date(2019, nov, 29) }, startTime: {h:19, m:30},
            title: "Nell Gwynn", shortDesc: "A hilarious and heart warming production in the beautiful surroundings of our Great Hall. ", price: "Adults £15.  Members £12.",
            url: "https://www.english-heritage.org.uk/visit/whats-on/eltham-palace-nell-gwynne-26-29-nov-2019/"},
    {"id": "ep-12", poi: "Eltham Palace", dateRange: {startDate: new Date(2019, dec, 5), endDate: new Date(2019, dec, 8) },
        title: "Enchanted Eltham Palace", shortDesc: "Make the most of winter evenings with an enchanting experience of light, colour and sound as our grounds are transformed into an illuminated world.", url: "https://www.english-heritage.org.uk/visit/whats-on/eltham-enchanted-5-8-dec-2019/", price: "From £7.50/child, £12/adult"},
    {"id": "ep-12a", poi: "Eltham Palace", dateRange: {startDate: new Date(2019, dec, 12), endDate: new Date(2019, dec, 15), bookAhead: true },
        title: "Enchanted Eltham Palace", shortDesc: "Make the most of winter evenings with an enchanting experience of light, colour and sound as our grounds are transformed into an illuminated world.", url: "https://www.english-heritage.org.uk/visit/whats-on/eltham-enchanted-5-8-dec-2019/", price: "From £7.50/child, £12/adult"},
    {"id": "ep-12b", poi: "Eltham Palace", dateRange: {startDate: new Date(2019, dec, 19), endDate: new Date(2019, dec, 22), bookAhead: true },
        title: "Enchanted Eltham Palace", shortDesc: "Make the most of winter evenings with an enchanting experience of light, colour and sound as our grounds are transformed into an illuminated world.", url: "https://www.english-heritage.org.uk/visit/whats-on/eltham-enchanted-5-8-dec-2019/", price: "From £7.50/child, £12/adult"},
    {"id": "ep-14", poi: "Eltham Palace", dateRange: {startDate: new Date(2019, feb, 15), endDate: new Date(2019, feb, 23), bookAhead: true },
        title: "Hands-on with History", shortDesc: "Uncover the myths and legends of England's past at our Medieval story telling sessions.", url: "https://www.english-heritage.org.uk/visit/whats-on/eltham-palace-ghowh-15-23-feb-2020/", price: "Eltham Palace entry ticket required."},

    {"id": "whp-08", poi: "Well Hall Pleasaunce", when: new Date(2019, jul, 28), startTime: {h:15},
        title: "Summer Sunday Music", url: "http://parksfest.org/calendar.html", price: "Free entry"},

    {"id": "eps-03", poi: "Eltham Park South", when: new Date(2019, jul, 21), startTime: {h:15},
        title: "Concert in the Park", url: "http://parksfest.org/calendar.html", price: "Free entry"},

    {"id": "nem-02", poi: "New Eltham Methodist Church", when: new Date(2019, jul, 6), startTime: {h:19, m:30},
        title: "Barn Dance", price: "£10 for adults, £2.50 for kids - including a ploughman's lunch!", url: "http://www.necp.org.uk/next-event-1/4590253811"},

    {"id": "wf-04", poi: "Woodlands Farm", when: new Date(2019, sep, 28), startTime: {h:10}, endTime: {h:17},
        title: "London Harvest Festival", shortDesc: "Celebrate London’s outdoor heritage at the 21st London Harvest Festival.",
        url: "https://tockify.com/woodlands.farm/detail/145/1569661200000", price: "£10/person, £6 for farm members"},

    {"id": "ccc-03", poi: "Christchurch Community Centre", when: new Date(2019, jul, 6), startTime: {h:10},
        title: "Eltham Producers Market", shortDesc: "Stalls offering a wide range of fresh produce from the South East.", url: "https://www.royalgreenwich.gov.uk/directory_record/2682/eltham_producers_market"},

    {"id": "cag-01", poi: "Capital Art Gallery", when: new Date(2019, jul, 6), startTime: {h:12},
        title: "Summer Open Art Exhibition", shortDesc: "A 2-day event showcasing local and international artists.  Hundreds of pieces of art available to purchase.", url: "https://www.capitalartgallery.co.uk/upcoming-events"},

    {"id": "tlp-02", poi: "The Long Pond", when: new Date(2019, dec, 5), startTime: {h:18},
        title: "Lights Up!",
        shortDesc: "The Westmount Road lights outside the Long Pond will be switched on at 6pm, following carol singing by the Three Churches Choir.  With mulled wine, burgers and a visit from Santa", price: "Free."},
    {"id": "tlp-03", poi: "The Long Pond", when: new Date(2019, dec, 14), startTime: {h:18, m: 30},
        title: "The Long Pond's 5th Birthday celebration",
        shortDesc: "With music from the Pub Rock Supergroup at 8:30.", price: "Free."},
    {"id": "tlp-04", poi: "The Long Pond", when: new Date(2019, dec, 18),
        title: "Live music: Celtic Hearts",
        shortDesc: "With music from the Pub Rock Supergroup at 8:30.", price: "Free."},

    {"id": "eurc-03", poi: "Eltham United Reformed Church", when: new Date(2019, dec, 12), startTime: {h:18, m:30},
        title: "Christmas Concert", shortDesc: "With music for all ages, refreshments served.",
        price: "Free."},

    {"id": "egh-01", poi: "Eltham Grill House", when: new Date(2020, jan, 13), startTime: {h:10, m:30}, endTime: {h:16, m:30},
        title: "Gala Evening in aid of Cancer Research UK", shortDesc: "Two friezes from the pre-refurbished restaurant will be auctioned for charity!  Tickets available online or from 020 8859 0807.",
        price: "Tickets £17.50", bookAhead: true}

];