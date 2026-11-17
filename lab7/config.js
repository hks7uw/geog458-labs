// the story text and map views
var config = {
    accessToken: 'pk.eyJ1IjoiaGtzNyIsImEiOiJjbXY1c3E5MGUwOXB6Mnpwd2U5ZTRzb2IyIn0.Q1bfkkPvxjEUYW1EtKObRg',
    style: 'mapbox://styles/mapbox/light-v11',
    theme: 'light',
    showMarkers: true,
    markerColor: '#147d72',
    transitionDuration: 2000,
    title: 'Connecting Seattle by Water',
    subtitle: 'How do the Ballard Locks and Fremont Bridge keep the route between freshwater lakes and Puget Sound open to boats?',
    byline: 'By Harry Sheikh · GEOG 458',
    footer: `By Harry Sheikh · GEOG 458 · Lab 7

Evidence sources:
[1] U.S. Army Corps of Engineers, “Lake Washington Ship Canal and Hiram M. Chittenden Locks.”
https://www.nws.usace.army.mil/Missions/Civil-Works/Locks-and-Dams/Chittenden-Locks/
[2] Seattle Department of Transportation, “Building bridges: The history behind the Fremont, University, and Ballard bridges,” August 15, 2022.
https://sdotblog.seattle.gov/2022/08/15/building-bridges-the-history-behind-the-fremont-university-and-ballard-bridges/

Image credit: Unknown photographer, Ballard Locks under construction, about 1915. From Picturesque Seattle and Puget Sound, Seattle Chamber of Commerce, p. 45. Digitized and cleaned by Jmabel from a Seattle Public Library copy; Wikimedia Commons. Public domain in the United States.
https://commons.wikimedia.org/wiki/File:Seattle_-_Ballard_Locks_under_construction_1915.jpg

Map views selected with Mapbox Location Helper. Basemap: Mapbox and OpenStreetMap. Evidence sources accessed November 16, 2026.`,
    chapters: [
        {
            id: 'water-route',
            label: 'The route',
            alignment: 'left',
            title: '01. A route through Seattle',
            image: '',
            imageAlt: '',
            description: 'Seattle has water on both sides, but a boat route between them depends on more than a channel. How do boats move between the freshwater lakes and tidal Puget Sound? In this broad view, find Puget Sound to the west, Lake Union near the center, and Lake Washington to the east. The Ship Canal links these waters through northern Seattle. The Army Corps of Engineers explains that the canal and locks, completed in 1917, connected the lakes to the Sound for commercial and recreational vessels [1]. The next two stops show how structures along this route deal with different barriers.',
            location: {
                center: [-122.32000, 47.65000],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'ballard-locks',
            label: 'The locks',
            alignment: 'right',
            title: '02. Lifting boats at Ballard Locks',
            image: './images/ballard-locks-1915.jpg',
            imageAlt: 'Black-and-white photograph of concrete lock chambers and construction equipment at Ballard Locks around 1915.',
            description: 'At Ballard Locks, look for the narrow chambers between the canal and the water toward Puget Sound. The Army Corps of Engineers says the locks maintain the lakes at 20–22 feet above sea level, limit saltwater mixing, and move boats between lake and Sound levels [1]. A boat cannot simply cross this height difference: a lock chamber changes its water level to raise or lower the vessel. The photograph shows the concrete chambers under construction around 1915, before the canal project was completed. This is a connection made by changing water levels, rather than removing the difference between them.',
            location: {
                center: [-122.39730, 47.66540],
                zoom: 15,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fremont-bridge',
            label: 'The bridge',
            alignment: 'left',
            title: '03. Lifting a bridge at Fremont',
            image: '',
            imageAlt: '',
            description: 'Follow the canal east to Fremont Bridge, just west of Lake Union. Notice how the road crosses the narrow waterway. Here the barrier is overhead clearance rather than the water-level difference at the locks. Seattle’s transportation department identifies Fremont as a double-leaf bascule bridge, completed in 1917, connecting Fremont and Queen Anne [2]. Its two leaves rotate upward using counterweights, gears, and motors to let boats pass. Both places allow movement along the same water route, but they do it differently: the locks move a vessel vertically, while Fremont Bridge moves the road out of its way.',
            location: {
                center: [-122.34970, 47.64750],
                zoom: 15,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'connected-passage',
            label: 'The connection',
            alignment: 'right',
            title: '04. One route, two kinds of passage',
            image: '',
            imageAlt: '',
            description: 'Zooming back out brings the two stops into one route. Trace the canal from Ballard Locks in the west, past Fremont Bridge, into Lake Union and toward Lake Washington. The answer to the opening question is that the waterway needs different kinds of passage at different places. The locks manage elevation and saltwater separation [1]; the bridge creates clearance where a road crosses the canal [2]. Together, these examples show why a connected line of water is not enough to explain boat access. This map shows where the structures fit, but it does not measure boat delays or show present operating conditions.',
            location: {
                center: [-122.34000, 47.65500],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
