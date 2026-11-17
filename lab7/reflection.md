# Lab 7 reflection

Harry Sheikh · GEOG 458

## Story and example

My question is how Ballard Locks and Fremont Bridge keep the water route between Seattle's lakes and Puget Sound open to boats. The locks handle different water levels, while the bridge handles clearance where a road crosses the canal.

I read [Saving the Nile](https://interactive.aljazeera.com/aje/2020/saving-the-nile/index.html). Its central question is how dams affect water access and people along the river. Moving from the whole Nile Basin to Lake Tana and the Renaissance Dam connects a large river system to particular structures. The text tells readers what to notice, such as the meeting of two rivers at Khartoum. I used a similar change from an overview to individual structures in my story.

## 1. From configuration to sections

`config.chapters` is an array containing the four chapters. In `forEach((chapter, index) => ...)`, `chapter` is the current object and `index` is its position, starting at zero. The script creates a section for each object. `chapter.id` becomes the section's unique HTML ID and the destination of its navigation link. `section.dataset.index` stores the position as `data-index`. The observer reads it and converts it to a number so the section connects back to the correct configuration object.

## 2. Activation and observation

`activateChapter()` changes the active card and navigation link, then calls `moveMap()` to use that chapter's location. It does not detect scrolling. `observeChapters()` creates an IntersectionObserver and registers the sections. Later, its callback chooses a section and calls `activateChapter()` with its index. The first chapter can be selected before observation because `activateChapter(0, true)` directly supplies that index. The `true` argument places the initial camera without a flight.

## 3. The detection band

`root: null` uses the browser viewport. The code calculates 45% of its height, rounds down to whole pixels, and uses that negative margin at the top and bottom. About the middle 10% remains as the detection band. `threshold: 0` reports entry and exit, not 50% overlap. A set tracks intersecting sections. If two are candidates when the callback runs, it chooses the section center closest to the viewport center. Merely crossing the exact center does not trigger a new callback. Resizing rebuilds the observer and recalculates the margins.

## 4. Camera and layout choices

`center` uses longitude and latitude to locate the view. `zoom` controls scale, `pitch` controls tilt, and `bearing` controls rotation from north. I used Mapbox Location Helper for the views. The opening zoom of 11 shows the wider water connection; zoom 15 makes the locks and bridge visible; zoom 12 reconnects them in the conclusion. Keeping pitch and bearing at zero makes comparisons easier. The locks card is on the right and the bridge card on the left, leaving each centered structure visible. The map flights use `flyTo` and a 2000-millisecond duration.

## References

- [Mapbox Storytelling README](https://github.com/mapbox/storytelling#readme): configuration fields and map views.
- [MDN Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#creating_an_intersection_observer): observer options and callbacks.
- Evidence sources and the historical image credit are in the story footer. The image shows construction around 1915, not present conditions.
