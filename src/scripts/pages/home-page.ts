const { renderPage } = require('../helpers/page-helper');
const { renderPosts } = require('../components/posts-component');
const { displayError } = require('../components/error-message-component');
const { fetchPosts } = require('../services/posts-service');

async function renderHomePage() {
    const template = `
        <div class="add-post"></div>
        <div class="posts"></div>`
    renderPage(template);
    try {
        const posts = await fetchPosts();
        renderPosts(posts)
    } catch {
        displayError();
    }
}

module.exports = {
    renderHomePage
}
