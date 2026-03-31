import React from 'react';
import { X } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageTitle?: string;
}

export const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, imageSrc, imageTitle }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-8" onClick={onClose}>
      <div 
        className="max-w-6xl max-h-[95vh] w-full h-full flex flex-col relative rounded-2xl shadow-2xl overflow-hidden cursor-zoom-out group"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-black/30 backdrop-blur-md">
          <div className="flex items-center gap-3">
            {imageTitle && (
              <div className="bg-indigo-500/20 border border-indigo-500/30 px-3 py-1 rounded-lg">
                <span className="text-sm font-mono uppercase tracking-wider text-indigo-200">{imageTitle}</span>
              </div>
            )}
          </div>
          <button
            className="p-2 hover:bg-white/10 rounded-xl transition-all duration-200 hover:scale-105"
            onClick={onClose}
          >
            <X className="w-5 h-5 text-white/80 hover:text-white" />
          </button>
        </div>

        {/* Image */}
        <div className="flex-1 flex items-center justify-center p-8 bg-gradient-to-b from-black to-gray-900/50">
          <img
            src={imageSrc}
            alt={imageTitle || "Prototype Screen"}
            className="max-w-full max-h-full object-contain rounded-xl shadow-2xl transform-gpu hover:scale-102 transition-transform duration-300"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </div>
  );
};

