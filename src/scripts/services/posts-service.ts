import { CONFIG } from '../config';
import { Posts } from '../interfaces/posts.interface';
import { Post } from '../interfaces/post.interface';

async function fetchPosts(): Promise<Posts> {
    const url = CONFIG.postsUrl;
    const response = await fetch(url);
    const posts = await response.json();
    return posts;
}

async function fetchPost(id: number): Promise<Post> {
    const url = `${CONFIG.postsUrl}/${id}`;
    const response = await fetch(url);
    const post = await response.json();
    return post;
}

function savePost(post: Post): void {
    const url = CONFIG.postsUrl;
    const body = JSON.stringify(post);
    fetch(url, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "post",
        body
    });
}

function removePost(id: number): void {
    const url = `${CONFIG.postsUrl}/${id}`
    fetch(url, {
        method: "delete"
    });
}

function editPost(post: Post): void {
    const url = `${CONFIG.postsUrl}/${post.id}`;
    const body = JSON.stringify(post)
    fetch(url, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: "PATCH",
        body
    });
}

export {
    fetchPosts,
    fetchPost,
    savePost,
    removePost,
    editPost
}
