# Lab 5: Seattle and Tacoma vessel traffic

Harry Sheikh

## 1. Study area and dates

I chose the Seattle/Tacoma area of Puget Sound to compare passenger crossings with cargo and tanker traffic. My data comes from [AccessAIS](https://marinecadastre.gov/accessais/) and covers January 1–5, 2023, from 00:00:00 UTC on January 1 to 23:59:59 UTC on January 5. In Seattle, this is December 31, 2022, at 4:00 p.m. through January 5, 2023, at 3:59:59 p.m. PST.

I chose a short winter period to compare several days of traffic. These dates include New Year's Eve in local time and New Year's Day, so holiday travel may affect the patterns. I cannot assume this period represents a normal week.

Limiting the area and time kept the download manageable. The CSV is about 167 MB, and the map's path JSON is about 81 MB. If playback ran slowly, I would reduce the period to one day or use a smaller area. The data contains about 1.64 million reports for 1,043 vessels.

I used the [class notebook](https://colab.research.google.com/drive/1tDjfzKDm-xFKtkNh5hsq2IVD2lT_UOnK) to convert the CSV into `ais_trips.json` and `ais_trips_metadata.json`. It groups reports by vessel and sorts them by time.

Open `HarrySheikh_Lab5.html` with VS Code Live Server. Keep `ais_trips.json` and `ais_trips_metadata.json` beside it. The basemap and libraries need internet access.

## 2. Interpretation

The filters show 41 passenger paths, 38 cargo paths, 4 tanker paths, and 948 other paths. These are counts across all five days, not counts of vessels moving at one time. Other vessels form the largest group. Based on the recorded [AIS type codes](https://www.navcen.uscg.gov/sites/default/files/pdf/AIS/AISGuide.pdf), this group includes 617 pleasure craft, 121 sailing vessels, 92 fishing vessels, and 15 tugs, along with other types. A large path count does not mean all those vessels were active.

Passenger paths show repeated crossings in the Seattle–Bainbridge Island corridor, which [WSDOT identifies as a ferry route](https://wsdot.com/ferries/schedule/ScheduleDetailByRoute.aspx?route=sea-bi). For example, on January 2, from 7:00–8:00 a.m. PST, WSF TACOMA's reports span Bainbridge near [-122.509, 47.622] and Seattle near [-122.340, 47.603]. From 11:00 a.m.–noon PST, it travels back toward Bainbridge. During 1:00–2:00 a.m. PST, it stays near the Bainbridge endpoint. This shows a stationary period followed by movement, but does not prove a schedule.

Cargo traffic also reaches the Tacoma area: 19 of the 38 cargo paths have reports between latitudes 47.24 and 47.30. On January 2, from 7:00–8:00 a.m. PST, MATSON ANCHORAGE stays near [-122.415, 47.267], while CAPE ISLAND stays near [-122.456, 47.274]. These small position changes contrast with WSF TACOMA's crossing during the same hour. Cargo and tanker paths also show north-south travel: BTG DENALI moves south from latitude 47.685 to 47.511 on December 31, from 9:00–10:00 p.m. PST, and tanker-coded FLORIDA moves south from 47.680 to 47.582 during 6:00–7:00 p.m. PST.

These examples come from the CSV positions and times. Pausing and filtering make the routes easier to compare. Drawing all five days at once would hide when overlapping trips happened. Lines connect reports, so they cannot show the exact movement during gaps. This short holiday period also cannot represent traffic in every season.

## 3. Feature proposal for a potential user

A ferry service planner studying repeated passenger crossings needs a clear view of routes in busy areas. I would add a trail-length slider with 5-minute, 15-minute, and 1-hour choices. Short trails would reduce clutter from overlapping paths, while longer trails would show more of each route.

I reviewed the [deck.gl TripsLayer documentation](https://deck.gl/docs/api-reference/geo-layers/trips-layer). Its `trailLength` setting controls how long trails remain visible. This inspired my proposal to let the planner change the visible time window while keeping the selected map time.
