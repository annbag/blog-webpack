import { renderPost } from '../components/post-component';
import { renderAddCommentForm } from '../components/add-comment-form-component';
import { renderComment, renderComments, removeComment } from '../components/comment-component';
import { editPost } from '../services/posts-service';

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

export {
    renderPostPanel
}
