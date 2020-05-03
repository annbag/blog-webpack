const { renderPost } = require('../components/post-component');
const { renderAddCommentForm } = require('../components/add-comment-form-component');
const { renderComment, renderComments } = require('../components/comment-component');
const { removeComment, editPost } = require('../services/posts-service');

function renderPostPanel(post) {
    const $post = renderPost(post);
    renderAddCommentForm(post, $post, (comment) => {
        post.comments.push(comment);
        const $ul = $post.querySelector('.comments ul');
        renderComment($ul, post, comment, ($comment) => {
            removeComment(post, comment, $comment);
        });
        editPost(post);
    });
    renderComments(post, $post);
}

module.exports = {
    renderPostPanel
}
