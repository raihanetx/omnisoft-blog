
import React, { useState, useEffect } from 'react';
import { BlogPost } from './types';
import MainPage from './components/MainPage';
import BlogPostPage from './components/BlogPostPage';
import { BLOG_POSTS } from './constants';
import BlogPostPageSkeleton from './components/skeletons/BlogPostPageSkeleton';

const App: React.FC = () => {
    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        if (selectedPost) {
            window.scrollTo(0, 0);
        }
    }, [selectedPost]);

    const handleSelectPost = (post: BlogPost) => {
        if (selectedPost?.id === post.id) return;

        setIsTransitioning(true);
        // If on a post page, deselect first to ensure a clean transition
        if (selectedPost) {
            setSelectedPost(null);
        }

        setTimeout(() => {
            setSelectedPost(post);
            setIsTransitioning(false);
        }, 500); // Simulate loading time, reduced for better responsiveness
    };

    const handleGoBack = () => {
        setSelectedPost(null);
    };

    const renderContent = () => {
        if (isTransitioning) {
            return <BlogPostPageSkeleton />;
        }
        if (selectedPost) {
            return (
                <BlogPostPage 
                    post={selectedPost} 
                    allPosts={BLOG_POSTS}
                    onGoBack={handleGoBack}
                    onSelectPost={handleSelectPost}
                />
            );
        }
        return <MainPage posts={BLOG_POSTS} onSelectPost={handleSelectPost} />;
    };

    return (
        <div className="min-h-screen">
            <div className="w-full">
                {renderContent()}
            </div>
        </div>
    );
};

export default App;
