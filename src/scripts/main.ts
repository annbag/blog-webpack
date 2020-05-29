require('../styles/style.css');
require('../index.html');
require('../404.html');

export {}
const { isHomePage, redirectToHomePage, routes, routing } = require('./routing');

document.addEventListener('DOMContentLoaded', main)
window.addEventListener('hashchange', onHashChange)


function main() {
    const status = isHomePage();

    if (status) {
        redirectToHomePage();
    } else {
        routing(routes);
    }
}

function onHashChange() {
    routing(routes);
}
