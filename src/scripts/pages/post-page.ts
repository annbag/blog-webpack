import { renderPage } from '../helpers/page-helper';
import { fetchPost } from '../services/posts-service';
import { renderPostPanel } from '../components/post-panel-component';
import { displayError } from '../components/error-message-component';

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

export {
    renderPostPage
}
