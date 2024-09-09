// services/ghostService.ts

const GHOST_API_URL = 'https://your-ghost-api-url.com'; // Replace with your Ghost API URL
const GHOST_API_KEY = 'your-ghost-api-key'; // Replace with your Ghost API Key

export async function fetchPosts() {
    const res = await fetch(`${GHOST_API_URL}/ghost/api/v3/content/posts/?key=${GHOST_API_KEY}`);
    if (!res.ok) {
        throw new Error('Failed to fetch posts');
    }
    const data = await res.json();
    return data.posts;
}

export async function fetchPostById(id: string) {
    const res = await fetch(`${GHOST_API_URL}/ghost/api/v3/content/posts/${id}?key=${GHOST_API_KEY}`);
    if (!res.ok) {
        throw new Error('Failed to fetch post');
    }
    const data = await res.json();
    return data.posts[0];
}
