// app/blog-details/page.tsx

import { fetchPostById } from '../../services/ghostService';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const BlogDetailsPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [post, setPost] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            const getPost = async () => {
                try {
                    const postData = await fetchPostById(id as string);
                    setPost(postData);
                } catch (error) {
                    console.error(error);
                } finally {
                    setLoading(false);
                }
            };

            getPost();
        }
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!post) {
        return <p>Post not found</p>;
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
    );
};

export default BlogDetailsPage;
