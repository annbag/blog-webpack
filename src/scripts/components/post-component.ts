import { renderConfirmDeletionPopup } from '../components/confirm-deletion-popup-component';
import { removePost, editPost } from '../services/posts-service';
import { redirectToHomePage } from '../routing';
import { Post } from '../interfaces/post.interface';
import { Comments } from '../interfaces/comments.interface';

function renderPost(post: Post): HTMLDivElement {
    const $post = document.createElement('div');
    const template = `
        <div class="card mb-3">
            <div class="card-body post-content">
                <p class="card-text post-body">${post.body}</p>
                <button class="btn btn-warning edit">edytuj wpis</button>
                <button class="btn btn-danger del">usuń wpis</button>
            </div>
            <div class="card-footer comments"></div>
        </div>`;
    $post.innerHTML = template;
    const $editBtn = $post.querySelector('.edit')!;
    let isEditEnabled = false;
    $editBtn.addEventListener('click', () => {
        if (isEditEnabled) {
            isEditEnabled = false;
            saveEditPostForm(post, $post);
        } else {
            isEditEnabled = true;
            renderEditPostForm(post, $post);
        }
    });
    const $btnDel = $post.querySelector('.del')!;
    $btnDel.addEventListener('click', () => {
        const id = post.id;
        renderConfirmDeletionPopup(() => {
            $post.remove();
            removePost(id);
            redirectToHomePage();
        })
    })
    const $posts = document.querySelector('.posts')!;
    $posts.insertBefore($post, $posts.firstElementChild);
    displayNumberComments(post.comments, $post);
    displayDate(post, $post);
    return $post;
}

function saveEditPostForm(post: Post, $post: HTMLDivElement): void {
    const $textarea = $post.querySelector<HTMLTextAreaElement>('.post-body-edit');
    if (!$textarea) { return }
    post.body = $textarea.value;
    $textarea.remove();
    const $postBody = $post.querySelector('.post-body');
    if (!$postBody) { return }
    $postBody.textContent = post.body;
    $postBody.classList.remove('hidden');
    editPost(post);
}

function renderEditPostForm(post: Post, $post: HTMLDivElement): void {
    const $postContent = $post.querySelector('.post-content');
    if (!$postContent) { return }
    const $postBody = $post.querySelector('.post-body');
    if (!$postBody) { return }
    $postBody.classList.add('hidden');

    const $textarea = document.createElement('textarea');
    $textarea.classList.add('post-body-edit');
    $textarea.value = post.body;
    $postContent.insertBefore($textarea, $postBody);
}

function displayNumberComments(comments: Comments, $post: HTMLDivElement): void {
    const $div = document.createElement('div');
    const template = `
        <div class="d-flex justify-content-end comments-number">
            <p class="mt-3 mb-0">${comments.length} ${setCorrectFormComment(comments)}</p>
        </div>`;
    $div.innerHTML = template;
    const $postContent = $post.querySelector('.post-content');
    if (!$postContent) { return }
    $postContent.appendChild($div);
}

function setCorrectFormComment(comments: Comments): string {
    if (comments.length === 1) {
        return 'komentarz';
    } else if (comments.length >= 5 || comments.length === 0) {
        return 'komentarzy';
    } else {
        return 'komentarze';
    }
}

function displayDate(post: Post, $post: HTMLDivElement) {
    const $div = document.createElement('div');
    $div.classList.add('date');
    const date1 = displayDate3(post);
    const date2 = displayDate2(post);

    const template = `
        <a href="#/posts/${post.id}">${date1} ${date2}</a>
    `
    $div.innerHTML = template;
    const $postContent = $post.querySelector('.post-content');
    if (!$postContent) { return }
    $postContent.prepend($div);
}

function displayMonthName(monthNumber: number): string {
    const monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return monthArray[monthNumber];
}

function displayDate3(post: Post): string {
    const date = new Date(post.date);
    return date.toLocaleString('pl-pl', { day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' })
}

function displayDate2(post: Post): string {
    const date = new Date(post.date);
    const dayNumber = date.getDate()
    const monthNumber = date.getMonth();
    const monthName = displayMonthName(monthNumber);
    const time = `${date.getHours()}:${date.getMinutes()}`
    return `${dayNumber} ${monthName} ${time}`
}

export {
    renderPost
}
