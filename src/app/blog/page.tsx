
// app/blog/page.tsx

import { fetchPosts } from '../../services/ghostService';
import { Post } from '../../types/blog';
import { useEffect, useState } from 'react';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agnibyte - Emporing your Buisness Journey ",
  description: "Agnibyte Tech BLogs",
  // other metadata
};


const BlogPage = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const posts = await fetchPosts();
                setPosts(posts);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        getPosts();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>Blog</h1>
            <div>
                {posts.map((post) => (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.excerpt}</p>
                        <a href={`/blog/${post.id}`}>Read more</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogPage;
