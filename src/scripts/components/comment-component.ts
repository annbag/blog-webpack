import { editPost } from '../services/posts-service';
import { renderConfirmDeletionPopup } from '../components/confirm-deletion-popup-component';
import { Post } from '../interfaces/post.interface';
import { Comment } from '../interfaces/comment.interface';

let isEditEnabled = false;
const ENTER_KEY_CODE = 13;

function renderComments(post: Post, $post: HTMLElement): void {
    const $ul = document.createElement('ul');
    $ul.classList.add('list-group');
    $ul.classList.add('mt-3');
    post.comments.forEach((comment) => {
        renderComment($ul, post, comment, ($comment: HTMLElement) => {
            removeComment(post, comment, $comment);
        });
    })
    const $comments = $post.querySelector('.comments');
    if (!$comments) { return }
    $comments.appendChild($ul);
}

function renderComment($ul: HTMLUListElement, post: Post, comment: Comment, cb: Function): void {
    const $li = document.createElement('li');
    $li.classList.add('media');
    $li.classList.add('list-group-item');
    $li.classList.add('d-flex');
    const template = `
        <div class="avatar mr-3 d-flex align-item-start"><span class="fas fa-user-circle"></span></div>
        <p class="media-body comment-body mb-0">${comment.body}</p>
        <div class="comment-btns row justify-content-end">
            <button class="edit-comment-btn"><i class="fas fa-pen"></i></button>
            <div class="w-100"></div>
            <button class="del-comment-btn"><i class="fas fa-trash-alt"></i></button>
        </div>`;
    $li.innerHTML = template;

    const $editBtn = $li.querySelector('.edit-comment-btn');
    if (!$editBtn) { return }
    $editBtn.addEventListener('click', (e: Event) => {
        if (isEditEnabled) {
            isEditEnabled = false;
            saveEditComment(post, comment, $li);
        } else {
            isEditEnabled = true;
            renderEditComment(post, comment, $li);
        }
    });
    const $delBtn = $li.querySelector('.del-comment-btn');
    if (!$delBtn) { return }
    $delBtn.addEventListener('click', () => {
        renderConfirmDeletionPopup(() => {
            cb($li);
        });
    });

    $ul.appendChild($li);
}

function removeComment(post: Post, comment: Comment, $comment: HTMLElement): void {
    const filteredComments = post.comments.filter(x => x.id !== comment.id);
    post.comments = filteredComments;
    $comment.remove();
    editPost(post);
}

function saveEditComment(post: Post, comment: Comment, $li: HTMLLIElement): void {
    const $input = $li.querySelector<HTMLInputElement>('.comment-body-edit');
    if (!$input) { return }
    comment.body = $input.value;
    $input.remove();
    const $commentBody = $li.querySelector('.comment-body');
    if (!$commentBody) { return }
    $commentBody.textContent = comment.body;
    $commentBody.classList.remove('hidden');
    editPost(post);
}

function renderEditComment(post: Post, comment: Comment, $li: HTMLLIElement): void {
    const $commentBody = $li.querySelector('.comment-body');
    if (!$commentBody) { return }
    $commentBody.classList.add('hidden');
    const $input = document.createElement('input');
    $input.addEventListener('keypress', (e) => {
        if (e.keyCode === ENTER_KEY_CODE) {
            isEditEnabled = false;
            saveEditComment(post, comment, $li);
        }
    })
    $input.classList.add('comment-body-edit');
    $input.value = comment.body;
    $li.insertBefore($input, $commentBody);
}

export {
    renderComments,
    renderComment,
    removeComment
}
