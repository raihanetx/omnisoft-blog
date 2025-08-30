
import React, { useState } from 'react';

interface CodeBlockProps {
    children: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ children }) => {
    const [copyText, setCopyText] = useState('Copy');

    const handleCopy = () => {
        const codeToCopy = children.trim();
        navigator.clipboard.writeText(codeToCopy).then(() => {
            setCopyText('Copied!');
            setTimeout(() => {
                setCopyText('Copy');
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
            setCopyText('Error');
            setTimeout(() => {
                setCopyText('Copy');
            }, 2000);
        });
    };

    return (
        <div className="relative not-prose my-8">
            <button
                onClick={handleCopy}
                aria-label="Copy code to clipboard"
                className="absolute top-3 right-3 bg-primary-bg border border-gray-600 text-gray-300 text-xs font-semibold py-1 px-3 rounded-md transition-all hover:bg-gray-700 hover:text-white"
            >
                {copyText}
            </button>
            <pre><code>{children.trim()}</code></pre>
        </div>
    );
};

export default CodeBlock;