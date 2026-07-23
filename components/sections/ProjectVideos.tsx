"use client";

import * as React from "react";
import Image from "next/image";
import { X, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectVideo } from "@/lib/constants/projects";

interface ProjectVideosProps {
  videos: ProjectVideo[];
  projectTitle: string;
}

export function ProjectVideos({ videos, projectTitle }: ProjectVideosProps) {
  const [activeVideo, setActiveVideo] = React.useState<ProjectVideo | null>(null);

  if (!videos.length) return null;

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {videos.map((video, index) => (
          <div
            key={index}
            className="relative aspect-video bg-muted rounded-xl overflow-hidden cursor-pointer group"
            onClick={() => setActiveVideo(video)}
          >
            <Image
              src={video.thumbnail}
              alt={`${projectTitle} - ${video.title}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <Play className="h-8 w-8 text-white fill-white ml-1" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <h4 className="text-white font-semibold">{video.title}</h4>
              {video.duration && (
                <p className="text-white/70 text-sm">{video.duration}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={() => setActiveVideo(null)}
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/10"
            onClick={() => setActiveVideo(null)}
          >
            <X className="h-8 w-8" />
          </Button>

          <div 
            className="relative w-full max-w-5xl p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={activeVideo.src}
              controls
              autoPlay
              className="w-full rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
