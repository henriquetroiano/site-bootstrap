import positioning from './positions.js'; /* import data from other module*/
import dimensions from './dimensions.js'

positioning(); /* run the import */

setInterval(function() { // create a responsive layout with javascript
    dimensions();
}, 200)



