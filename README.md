# Restaurant Reviews App
---
## Running the app
   * In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.
   * Note -  For Windows systems, Python 3.x is installed as `python` by default. To start a Python 3.x server, you can simply enter `python -m http.server 8000`.
   * With your server running, visit the site: `http://localhost:8000`

## Leaflet.js and Mapbox:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). You need to replace `<your MAPBOX API KEY HERE>` with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information.

## Changes made

The base code for this project has been adopted to make it responsive, accessible and
converted to be offline first.

For responsiveness, flexbox and media queries have been used to change the layout 
from a rows first approach at lower screen sizes and adding more columns as can be fit.

Accessibility changes involve adding tabindex to make reviews focusable, and 
adding aria-labels and semantic roles to elements.

Finally, a service worker has been added to cache all assets of the website, and 
to serve from cache if available and to refresh the cache on every service worker
activation.

