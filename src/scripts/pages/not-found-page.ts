const { renderPage } = require('../helpers/page-helper');

function renderNotFoundPage() {
    const template = `
        <p>Strona nie odnaleziona</p>`
    renderPage(template);
}

module.exports = {
    renderNotFoundPage
}
