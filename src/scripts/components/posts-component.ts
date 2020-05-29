const { renderPostPanel } = require('../components/post-panel-component');
const { renderAddPostForm } = require('../components/add-post-form-component');
const { savePost } = require('../services/posts-service');

function renderPosts(posts) {
    posts.forEach(renderPostPanel);
    renderAddPostForm((post) => {
        renderPostPanel(post);
        savePost(post);
    });
}

module.exports = {
    renderPosts
}
