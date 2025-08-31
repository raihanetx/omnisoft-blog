import React from 'react';
import { BlogPost } from '../types';
import { getPlaceholderColor, getTopicAbbreviation } from '../utils';

interface SuggestedPostCardProps {
    post: BlogPost;
    onSelectPost: (post: BlogPost) => void;
}

const SuggestedPostCard: React.FC<SuggestedPostCardProps> = ({ post, onSelectPost }) => {
    const bgColor = getPlaceholderColor();
    const topic = getTopicAbbreviation(post);
    
    return (
        <div className="bg-gradient-to-br from-card-gradient-from to-card-gradient-to rounded-3xl p-6 flex flex-col transition-transform hover:scale-105 duration-300 border-4 border-button-secondary">
            <div 
                style={{ backgroundColor: bgColor }} 
                className="rounded-2xl mb-4 aspect-[16/9] flex items-center justify-center font-serif"
            >
                <span className="text-4xl font-bold text-white/80 tracking-widest">{topic}</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
            <div className="text-sm text-gray-300 flex flex-col items-start gap-1 mb-4">
                <span className="flex items-center gap-2"><i className="far fa-user w-4 text-center"></i> {post.author}</span>
                <span className="flex items-center gap-2"><i className="far fa-calendar-alt w-4 text-center"></i> {post.date}</span>
            </div>
            <div className="flex flex-row flex-wrap items-center gap-2 mb-6">
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

export default SuggestedPostCard;