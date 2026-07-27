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
  const [lightboxOpen, setLightboxOpen] = React.useState(false);
  const [lightboxIndex, setLightboxIndex] = React.useState(0);

  const handleKeyDown = React.useCallback(
    (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      
      switch (e.key) {
        case "Escape":
          setLightboxOpen(false);
          break;
        case "ArrowLeft":
          setLightboxIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
          break;
        case "ArrowRight":
          setLightboxIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
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
    setLightboxIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setLightboxIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (!images.length) return null;

  return (
    <div className="w-full">
      {/* 3-Column Grid Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-[4/3] bg-muted rounded-xl overflow-hidden cursor-pointer group"
            onClick={() => {
              setLightboxIndex(index);
              setLightboxOpen(true);
            }}
          >
            <Image
              src={image}
              alt={`${projectTitle} - Image ${index + 1}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                  View Fullscreen
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={() => setLightboxOpen(false)}
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/10 z-10"
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
              src={images[lightboxIndex]}
              alt={`${projectTitle} - Image ${lightboxIndex + 1}`}
              fill
              className="object-contain"
              priority
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm">
              Image {lightboxIndex + 1} of {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
