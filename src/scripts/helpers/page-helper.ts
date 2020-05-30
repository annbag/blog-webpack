//wzorzec kompozycja
function renderPage(template: string) {
    const $outlet = document.querySelector('.outlet')
    if (!$outlet) { return }
    $outlet.innerHTML = template;
}

export {
    renderPage
}
