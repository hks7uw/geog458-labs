# Lab 6: Smart Dashboard

Harry Sheikh

Hover to preview a county. Click to pin it, and click empty map space or the sidebar to unpin it. Search accepts part of a name and ignores uppercase and lowercase. Multiple matches are summed in the population number and annual graph.

The default map shows the supplied 2020 population classes. Choose **Population growth, 2000–2020 (%)** for the independent indicator. Growth is `(POP2020 - POP2000) / POP2000 * 100`, using the supplied county data. Its legend uses fixed percentage classes. The graph continues to show annual population in people.

The hover popup shows the county name, 2000 and 2020 populations, and percentage growth. One popup is reused and removed when the pointer leaves.

Source: [Lab 6 WAcounties.geojson](https://canvas.uw.edu/courses/1918791/files/152783058?wrap=1). The HTML uses the instructor's Starter and Steps 2–4, with the two independent tasks added.
