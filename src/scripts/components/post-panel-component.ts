import { renderPost } from '../components/post-component';
import { renderAddCommentForm } from '../components/add-comment-form-component';
import { renderComment, renderComments, removeComment } from '../components/comment-component';
import { editPost } from '../services/posts-service';
import { Comment } from '../interfaces/comment.interface';
import { Post } from '../interfaces/post.interface';

function renderPostPanel(post: Post): void {
    const $post = renderPost(post);
    renderAddCommentForm($post, (comment: Comment) => {
        post.comments.push(comment);
        const $ul = $post.querySelector<HTMLUListElement>('.comments ul');
        if (!$ul) { return }
        renderComment($ul, post, comment, ($comment: HTMLElement) => {
            removeComment(post, comment, $comment);
        });
        editPost(post);
    });
    renderComments(post, $post);
}

export {
    renderPostPanel
}
