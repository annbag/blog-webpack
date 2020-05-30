import { renderPage } from '../helpers/page-helper';

function renderNotFoundPage() {
    const template = `
        <p>Strona nie odnaleziona</p>`
    renderPage(template);
}

export {
    renderNotFoundPage
}
