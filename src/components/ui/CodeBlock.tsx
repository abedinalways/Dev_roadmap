'use client';

import { useState } from 'react';
import Badge from './Badge';

interface CodeBlockProps {
  title: string;
  language: string;
  code: string;
}

export default function CodeBlock({ title, language, code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl border border-gray-200 overflow-hidden">
      <div className="flex items-center justify-between gap-2 px-3 sm:px-4 py-3 bg-gray-50 border-b border-gray-200">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="flex gap-1.5 flex-shrink-0">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-sm font-medium text-gray-700 truncate">{title}</span>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <Badge variant="info">{language}</Badge>
          <button
            onClick={handleCopy}
            className="text-xs text-gray-500 hover:text-gray-700 transition-colors"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>
      <pre className="p-4 bg-gray-900 overflow-x-auto">
        <code className="text-sm text-gray-100 font-mono">{code}</code>
      </pre>
    </div>
  );
}
