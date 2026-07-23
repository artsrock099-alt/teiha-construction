"use client";

import * as React from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectGalleryProps {
  images: string[];
  projectTitle: string;
}

export function ProjectGallery({ images, projectTitle }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [lightboxOpen, setLightboxOpen] = React.useState(false);

  const handleKeyDown = React.useCallback(
    (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      
      switch (e.key) {
        case "Escape":
          setLightboxOpen(false);
          break;
        case "ArrowLeft":
          setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
          break;
        case "ArrowRight":
          setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
          break;
      }
    },
    [lightboxOpen, images.length]
  );

  React.useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, handleKeyDown]);

  const goToPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (!images.length) return null;

  return (
    <div className="w-full">
      {/* Main Image */}
      <div 
        className="relative aspect-video bg-muted rounded-xl overflow-hidden cursor-pointer group"
        onClick={() => setLightboxOpen(true)}
      >
        <Image
          src={images[activeIndex]}
          alt={`${projectTitle} - Image ${activeIndex + 1}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button size="lg" variant="secondary" className="bg-white/90 hover:bg-white">
              View Fullscreen
            </Button>
          </div>
        </div>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="mt-4 flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`relative flex-shrink-0 w-24 h-16 md:w-32 md:h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                activeIndex === index 
                  ? "ring-2 ring-primary scale-105" 
                  : "opacity-70 hover:opacity-100 hover:scale-105"
              }`}
            >
              <Image
                src={image}
                alt={`${projectTitle} - Thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={() => setLightboxOpen(false)}
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/10"
            onClick={() => setLightboxOpen(false)}
          >
            <X className="h-8 w-8" />
          </Button>

          {images.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10"
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrev();
                }}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10"
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>
            </>
          )}

          <div 
            className="relative w-full max-w-6xl h-[80vh] p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[activeIndex]}
              alt={`${projectTitle} - Image ${activeIndex + 1}`}
              fill
              className="object-contain"
              priority
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm">
              Image {activeIndex + 1} of {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
