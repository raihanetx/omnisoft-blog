
import React, { useState, useMemo } from 'react';
import { BlogPost, BlogCategory } from '../types';
import BlogCard from './BlogCard';
import { CATEGORIES } from '../constants';

interface MainPageProps {
    posts: BlogPost[];
    onSelectPost: (post: BlogPost) => void;
}

const MainPage: React.FC<MainPageProps> = ({ posts, onSelectPost }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredPosts = useMemo(() => {
        return posts.filter(post => {
            const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
            const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                  post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
            return matchesCategory && matchesSearch;
        });
    }, [posts, searchTerm, selectedCategory]);

    const frontendPosts = filteredPosts.filter(p => p.category === BlogCategory.FRONTEND);
    const backendPosts = filteredPosts.filter(p => p.category === BlogCategory.BACKEND);

    return (
        <main className="container mx-auto px-6 py-16 max-w-7xl">
            <div className="text-center mb-12">
                <h1 className="text-5xl md:text-6xl font-bold mb-4">Omnisoft Blogs</h1>
                <p className="text-lg text-gray-300">Insights, updates, and stories from the world of software & tech.</p>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center mb-16 gap-4">
                <div className="relative w-full md:w-1/2 lg:w-2/5">
                    <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                    <input
                        type="text"
                        placeholder="Search blogs...."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="bg-white text-gray-800 w-full pl-12 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-button-secondary"
                    />
                </div>
                <div className="relative w-full md:w-auto">
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="bg-button-primary appearance-none text-white w-full md:w-auto pl-6 pr-12 py-3 rounded-lg focus:outline-none cursor-pointer"
                    >
                        {CATEGORIES.map(cat => <option key={cat} value={cat}>{cat === 'All' ? 'Filter by category' : cat}</option>)}
                    </select>
                    <i className="fas fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-white pointer-events-none"></i>
                </div>
            </div>

            {frontendPosts.length > 0 && (
                <section>
                    <h2 className="text-4xl font-bold mb-8">Frontend</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                        {frontendPosts.map(post => (
                            <BlogCard key={post.id} post={post} onSelectPost={onSelectPost} />
                        ))}
                    </div>
                </section>
            )}

            {backendPosts.length > 0 && (
                <section className="mt-16">
                    <h2 className="text-4xl font-bold mb-8">Backend</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                        {backendPosts.map(post => (
                            <BlogCard key={post.id} post={post} onSelectPost={onSelectPost} />
                        ))}
                    </div>
                </section>
            )}

            {filteredPosts.length === 0 && (
                <div className="text-center py-16">
                    <h2 className="text-2xl text-gray-400">No posts found.</h2>
                    <p className="text-gray-500">Try adjusting your search or filter.</p>
                </div>
            )}

            <section className="text-center mt-24">
                <h2 className="text-4xl font-bold mb-6">Ready to build your next project with Omnisoft?</h2>
                <button className="bg-button-primary hover:bg-button-secondary text-white font-bold py-4 px-10 rounded-lg text-lg transition-colors">
                    Contact Us
                </button>
            </section>
        </main>
    );
};

export default MainPage;
