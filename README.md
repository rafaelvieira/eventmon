# Eventmon
Super simple event notification monitor built with MERN stack.

## Tech stack

### Frontend

* React JS
* Redux

### Backend

* Node.js + Express.js
* MongoDB


### Application folder structure

src/index.js - Application and modules wiring
src/app - Main application component module
src/common - Common utilities and components
src/<feature>/<redux folders or app layers> - Where specific funcionalities goes

<feature> - Set of funcionalities grouped by a directly related theme.
<redux folders or app layers> - The basic Redux "actions", "components", "reducers" structure plus usual app layers like "services".