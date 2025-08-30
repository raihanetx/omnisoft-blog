
import React, { useState, useEffect } from 'react';
import { BlogPost } from './types';
import MainPage from './components/MainPage';
import BlogPostPage from './components/BlogPostPage';
import { BLOG_POSTS } from './constants';

const App: React.FC = () => {
    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

    useEffect(() => {
        if (selectedPost) {
            window.scrollTo(0, 0);
        }
    }, [selectedPost]);

    const handleSelectPost = (post: BlogPost) => {
        setSelectedPost(post);
    };

    const handleGoBack = () => {
        setSelectedPost(null);
    };

    return (
        <div className="flex items-center min-h-screen">
            <div className="w-full">
                {selectedPost ? (
                    <BlogPostPage post={selectedPost} onGoBack={handleGoBack} />
                ) : (
                    <MainPage posts={BLOG_POSTS} onSelectPost={handleSelectPost} />
                )}
            </div>
        </div>
    );
};

export default App;
