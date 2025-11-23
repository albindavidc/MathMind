import React, { useState } from 'react';
import { AI_SUGGESTIONS } from '../constants';

interface AIInterfaceProps {
  onSubmit: (prompt: string) => void;
  isLoading: boolean;
}

const AIInterface: React.FC<AIInterfaceProps> = ({ onSubmit, isLoading }) => {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!prompt.trim() || isLoading) return;
    onSubmit(prompt);
    setPrompt('');
  };

  return (
    <div className="flex flex-col h-full space-y-4 p-4">
      <div className="flex-1 overflow-y-auto">
        <p className="text-gray-400 text-sm mb-3">Try asking:</p>
        <div className="flex flex-wrap gap-2">
          {AI_SUGGESTIONS.map((suggestion, idx) => (
            <button
              key={idx}
              onClick={() => {
                setPrompt(suggestion);
              }}
              className="text-xs bg-gray-800 hover:bg-gray-700 border border-gray-700 text-cyan-100 px-3 py-2 rounded-full transition-colors text-left"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="relative">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask a complex math question..."
          className="w-full bg-gray-800 text-white rounded-xl p-4 pr-12 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-neon-purple border border-gray-700"
          onKeyDown={(e) => {
             if (e.key === 'Enter' && !e.shiftKey) {
               e.preventDefault();
               handleSubmit();
             }
          }}
        />
        <button
          type="submit"
          disabled={isLoading || !prompt.trim()}
          className="absolute bottom-3 right-3 p-2 bg-neon-purple rounded-lg text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-purple-500 transition-colors shadow-[0_0_10px_rgba(176,38,255,0.4)]"
        >
          {isLoading ? (
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          )}
        </button>
      </form>
    </div>
  );
};

export default AIInterface;