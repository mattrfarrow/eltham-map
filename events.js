
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


    {"id": "asc-02", poi: "All Saints Church", when: new Date(2019, nov, 2), startTime: {h:10}, endTime: {h:14}, title: "NSPCC Craft Fair",
        shortDesc: "Variety of craft stalls, plus NSPCC stalls, including Homemade Cakes & raffle.  Light lunches available.", price: "Free entry"},

    {"id": "sc-07", poi: "Severndroog Castle", when: new Date(2019, oct,  27), startTime: {h:9, m:30}, endTime: {h:10, m:30},
        title: "Family Craft Activity - Make and decorate a lantern.", url: "https://www.severndroogcastle.org.uk/Family_Craft_Activity_Oct27.html", shortDesc: "We are hosting a Family Craft Activity at Severndroog Castle for anyone who would like to join in. With the help of our volunteer, we will be helping you create your very own Paper Lantern to hang!", price: "£2.50 per child, £3.50 per adult or £9 for a family ticket."},

    {"id": "tb-05", poi: "Tudor Barn", when: new Date(2019, dec, 8), startTime: {h:11}, endTime: {h:13},
        title: "Kids Christmas Disco with Santa", shortDesc: "A kids Christmas party for your little ones! The kids will be able to dance away whilst being entertained by the very popular Funky Chicks.", url: "https://www.robovoucher.com/buy/view/dn1lnlmeuh/", price: "£8"},
    {"id": "tb-06", poi: "Tudor Barn", when: new Date(2019, dec, 31), startTime: {h:20},
        title: "New Years Eve - Dinner & Party Ticket", shortDesc: "Includes 3-course dinner, DJ, Casino Tables, LED Dancefloor, Photobooth & Midnight Snack.", url: "https://www.robovoucher.com/buy/view/txzdaw1fzu/", price: "£68.50"},

    {"id": "sh-08", poi: "Shrewsbury House", when: new Date(2019, jul, 20), startTime: {h:12},
        title: "Summer Fete and Craft Fair", shortDesc: "Lots to see and do for the whole family plus a wide range of stall holders selling all sorts of handmade goods.", url: "https://shrewsburyhouse.org/events/events/summer-fete-and-craft-fair/", price: "Free entry"},

    {"id": "gmg-04", poi: "Gerald Moore Gallery", when: new Date(2019, nov, 13), startTime: {h:9, m:30}, endTime: {h:11, m:30},
        title: "Painting from Beginning to End", shortDesc: "Learn how to prime boards, stretch canvas and paint from life in this friendly class suitable for all abilities.", price: "£25 for the day.", url: "https://geraldmooregallery.org/adults-art-classes/"},

    {"id": "bht-04", poi: "Bob Hope Theatre", when: new Date(2019, may, 28), startTime: {h:11},
        title: "John Hegley: Morning Wordship", shortDesc: "Cross-generational guffaws, comedy word play and song with the legendary performance poet.", url: "http://www.bobhopetheatre.co.uk/hegley.html"},

    {"id": "rb-28", poi: "The Rusty Bucket Pub", when: new Date(2019, nov, 12),
        title: "Beer tasting with The Kernel Brewery 😃", price: "£20 inc. drinks", website: "https://www.facebook.com/events/the-rusty-bucket-pub/beer-tasting-with-the-kernel/561741501298793/"},

    {"id": "gpo-01", poi: "Eltham GPO", when: new Date(2019, nov, 30),
        title: "HIT 'N' MIX - popular cover band.", website: "https://www.facebook.com/events/hit-n-mix/party-time-live-band-hit-n-mix-at-eltham-gpo/646337795871474/"},

    {"id": "owc-10", poi: "Oxleas Wood Cafe", when: new Date(2019, jul, 28), startTime: {h:15},
        title: "Live Music - Be Sharp", shortDesc: "A steaming guitar-based trio.  And a BBQ!", price: "Free entry"},

    {"id": "ep-12", poi: "Eltham Palace", dateRange: {startDate: new Date(2019, dec, 5), endDate: new Date(2019, dec, 22) },
        title: "Enchanted Eltham Palace", shortDesc: "Running 5-22 December. Make the most of winter evenings with an enchanting experience of light, colour and sound as our grounds are transformed into an illuminated world.", url: "https://www.english-heritage.org.uk/visit/whats-on/eltham-enchanted-5-8-dec-2019/", price: "Eltham Palace entry ticket required."},
    {"id": "ep-13", poi: "Eltham Palace", dateRange: {startDate: new Date(2019, nov, 26), endDate: new Date(2019, nov, 29) }, startTime: {h:19, m:30},
        title: "Nell Gwynn", shortDesc: "Runs from Tues 26 - Fri 29. ", price: "Adults £15.  Members £12.",
        url: "https://www.english-heritage.org.uk/visit/whats-on/eltham-palace-nell-gwynne-26-29-nov-2019/"},

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

    {"id": "tlp-01", poi: "The Long Pond", when: new Date(2019, oct, 21), startTime: {h:19},
        title: "Wine Tasting", shortDesc: "A 2-day event showcasing local and international artists.  Hundreds of pieces of art available to purchase.", url: "https://www.capitalartgallery.co.uk/upcoming-events", price: "£10. Book in person in advance. Limited spaces."},

    {"id": "eurc-01", poi: "Eltham United Reformed Church", when: new Date(2019, oct, 26), startTime: {h:10, m:30}, endTime: {h:16, m:30},
        title: "Meccano Show 2019", shortDesc: "London’s most popular Meccano Show returns to Eltham for its 41st year!",
        url: "https://selmec.org.uk/events/meccano-show-2019", price: "£5.  Accompanied children free."},

];