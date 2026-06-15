"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

interface LightboxProps {
  imageUrl: string | null;
  onClose: () => void;
}

export default function Lightbox({ imageUrl, onClose }: LightboxProps) {
  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (imageUrl) {
      document.documentElement.classList.add("lenis-stopped");
    } else {
      document.documentElement.classList.remove("lenis-stopped");
    }
    return () => {
      document.documentElement.classList.remove("lenis-stopped");
    };
  }, [imageUrl]);

  return (
    <AnimatePresence>
      {imageUrl && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 w-full h-screen z-[999] bg-[#111111]/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8 cursor-pointer select-none"
        >
          {/* Close Button overlay */}
          <div className="absolute top-6 right-6 z-50">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="w-12 h-12 rounded-full border border-[#F4EFE7]/15 flex items-center justify-center bg-black/40 backdrop-blur-sm text-[#F4EFE7] hover:bg-[#F4EFE7] hover:text-[#111111] transition-all duration-300 active:scale-90"
              data-cursor="close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Interactive Zoom Label */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#1C1C1C]/80 border border-[#F4EFE7]/10 px-4 py-2 rounded-full flex items-center space-x-2 text-[#F4EFE7]/70 text-[9px] uppercase tracking-widest font-sans pointer-events-none">
            <ZoomIn className="w-3.5 h-3.5 text-[#9D8B74]" />
            <span>High-Resolution Staged Capture</span>
          </div>

          {/* Content Container (Image or Video) */}
          <motion.div
            initial={{ scale: 0.95, y: 15 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 180 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] max-w-[95vw] rounded-sm bg-[#1C1C1C] shadow-2xl border border-[#F4EFE7]/5 flex items-center justify-center"
          >
            {imageUrl.endsWith(".mp4") ? (
              <video
                src={imageUrl}
                controls
                autoPlay
                playsInline
                className="max-h-[85vh] max-w-[90vw] object-contain select-none"
              />
            ) : (
              <img
                src={imageUrl}
                alt="High-resolution gallery capture"
                className="max-h-[85vh] w-auto object-contain select-none pointer-events-none"
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
