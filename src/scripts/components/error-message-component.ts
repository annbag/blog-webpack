const generalMessage = 'Upss.. coś poszło nie tak ☹';

function displayError(message = generalMessage): void {
    const template = `
        <p>${message}</p>`
    const $outlet = document.querySelector('.outlet');
    if (!$outlet) { return }
    $outlet.innerHTML = template;
    console.error(message);
}

export {
    displayError
}
