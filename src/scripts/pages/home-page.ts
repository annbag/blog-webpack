import { renderPage } from '../helpers/page-helper';
import { renderPosts } from '../components/posts-component';
import { displayError } from '../components/error-message-component';
import { fetchPosts } from '../services/posts-service';

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

export {
    renderHomePage
}
