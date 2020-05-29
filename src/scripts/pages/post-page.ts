const { renderPage } = require('../helpers/page-helper');
const { fetchPost } = require('../services/posts-service');
const { renderPostPanel } = require('../components/post-panel-component');
const { displayError } = require('../components/error-message-component');

async function renderPostPage({ postId }) {
    const template = `
        <div class="posts"></div>`
    renderPage(template);
    try {
        const post = await fetchPost(postId);
        renderPostPanel(post);
    } catch {
        const message = 'Prezentacja posta się nie powiodła'
        displayError(message);
    }
}

module.exports = {
    renderPostPage
}
