import { BlogPost } from "./types";

// A single, theme-consistent color for all placeholders.
// Using 'card-gradient-to' color from tailwind.config
export const getPlaceholderColor = (): string => {
    return '#6347ab'; 
};

const getInitialsFromTitle = (title: string): string => {
    return title
        .split(' ')
        .map(word => word[0])
        .filter(char => char && char.match(/[a-zA-Z0-9]/))
        .slice(0, 3)
        .join('')
        .toUpperCase();
};

const TOPIC_MAP: Record<string, string> = {
    'react': 'React',
    'typescript': 'TS',
    'tailwind': 'TW',
    'zustand': 'Zstd',
    'framer motion': 'FM',
    'sveltekit': 'Svelte',
    'svelte': 'Svelte',
    'node.js': 'Node',
    'express.js': 'Express',
    'microservices': 'MS',
    'graphql': 'GQL',
    'nestjs': 'NestJS',
    'go': 'Go',
    'jwt': 'JWT',
    'aws': 'AWS',
    'lambda': 'Lambda',
};

export const getTopicAbbreviation = (post: BlogPost): string => {
    // Check tags first for a strong match
    for (const tag of post.tags) {
        const lowerTag = tag.toLowerCase();
        if (TOPIC_MAP[lowerTag]) {
            return TOPIC_MAP[lowerTag];
        }
    }

    // Check title for keywords as a fallback
    const lowerTitle = post.title.toLowerCase();
    for (const keyword in TOPIC_MAP) {
        // Use regex for whole word matching to avoid partial matches
        const regex = new RegExp(`\\b${keyword}\\b`);
        if (regex.test(lowerTitle)) {
            return TOPIC_MAP[keyword];
        }
    }
    
    // Final fallback to initials
    return getInitialsFromTitle(post.title);
};