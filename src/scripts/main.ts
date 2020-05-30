import '../styles/style.css';
import '../index.html';
import '../404.html';

import { isHomePage, redirectToHomePage, routes, routing } from './routing';

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
