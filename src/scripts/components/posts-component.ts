import { renderPostPanel } from '../components/post-panel-component';
import { renderAddPostForm } from '../components/add-post-form-component';
import { savePost } from '../services/posts-service';

function renderPosts(posts) {
    posts.forEach(renderPostPanel);
    renderAddPostForm((post) => {
        renderPostPanel(post);
        savePost(post);
    });
}

export {
    renderPosts
}
