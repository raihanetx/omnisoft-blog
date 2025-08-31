
import React, { useState, useMemo, useEffect } from 'react';
import { BlogPost, BlogCategory } from '../types';

import Header from './main/Header';
import FilterControls from './main/FilterControls';
import PostList from './main/PostList';
import PostListSkeleton from './main/PostListSkeleton';
import EmptyState from './main/EmptyState';
import CallToAction from './shared/CallToAction';

interface MainPageProps {
    posts: BlogPost[];
    onSelectPost: (post: BlogPost) => void;
}

const MainPage: React.FC<MainPageProps> = ({ posts, onSelectPost }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500); // Simulate loading
        return () => clearTimeout(timer);
    }, []);

    const filteredPosts = useMemo(() => {
        return posts.filter(post => {
            const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
            const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                  post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
            return matchesCategory && matchesSearch;
        });
    }, [posts, searchTerm, selectedCategory]);

    // Calculate counts for skeleton based on the full, unfiltered list to avoid layout shifts.
    const frontendPostsCount = useMemo(() => posts.filter(p => p.category === BlogCategory.FRONTEND).length, [posts]);
    const backendPostsCount = useMemo(() => posts.filter(p => p.category === BlogCategory.BACKEND).length, [posts]);

    const renderBody = () => {
        if (loading) {
            return <PostListSkeleton frontendCount={frontendPostsCount} backendCount={backendPostsCount} />;
        }
        if (filteredPosts.length > 0) {
            return <PostList posts={filteredPosts} onSelectPost={onSelectPost} />;
        }
        return <EmptyState />;
    };

    return (
        <main className="container mx-auto px-4 py-16 max-w-7xl">
            <Header />
            <FilterControls
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
            />
            
            {renderBody()}

            <CallToAction />
        </main>
    );
};

export default MainPage;
