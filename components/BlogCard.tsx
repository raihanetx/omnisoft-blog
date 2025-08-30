import React from 'react';
import { BlogPost } from '../types';

interface BlogCardProps {
    post: BlogPost;
    onSelectPost: (post: BlogPost) => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, onSelectPost }) => {
    return (
        <div className="bg-gradient-to-br from-card-gradient-from to-card-gradient-to rounded-xl p-6 flex flex-col transition-transform hover:scale-105 duration-300">
            <img src={post.image} alt={post.title} className="rounded-lg mb-4 aspect-[16/9] object-cover" />
            <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
            <div className="text-sm text-gray-300 flex items-center gap-4 mb-4 flex-wrap">
                <span><i className="far fa-user mr-1"></i> {post.author}</span>
                <span><i className="far fa-calendar-alt mr-1"></i> {post.date}</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag) => (
                    <span key={tag} className="bg-black/20 text-xs px-2 py-1 rounded">
                        {tag}
                    </span>
                ))}
            </div>
            <button
                onClick={() => onSelectPost(post)}
                className="mt-auto self-center text-center bg-white hover:bg-gray-200 text-button-primary font-bold py-2 px-6 rounded-lg w-fit transition-colors"
            >
                Read More »
            </button>
        </div>
    );
};

export default BlogCard;