"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, Variants, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

// Featured projects data
const FEATURED_PROJECTS = [
  {
    title: "Zembo",
    description: "Tei-ha has constructed various stations such as Nakawa total zembo Outdoor swap station, Mengo RUBIS, Nateete at Bairus Mall, Nakasero at Yujo etc. and station branding and upgrading across various locations in uganda. Around 50 indoor stations Branded and upgraded by TEI-HA CONSTRUCTION SERVICES LIMITED.",
    imageUrl: "/tei ha pics/Zembo4.jpeg",
    isPdf: false,
    size: "large",
  },
  {
    title: "Soleil Power Showroom Renovation",
    description: "Upgrading Soleil Power showroom at SMS HOUSE 7th Street industrial area",
    imageUrl: "/tei ha pics/Upgrading-Soleil-Power2.jpeg",
    isPdf: false,
    size: "small",
  },
  {
    title: "Residential House in Namulonge -Buso.",
    description: "Design and Build residential house in Namulonge -Buso trading center, Nansana Municipality of Mr. Anaku Patrick built on Plot 2490, Block 155.",
    imageUrl: "/tei ha pics/Residential-house-of-MrAnaku1.jpeg",
    isPdf: false,
    size: "small",
  },
  {
    title: "Cottage Design",
    description: "Master plan and cottage design",
    imageUrl: "/tei ha pics/CottageDesign.jpeg",
    isPdf: false,
    size: "small",
  },
  {
    title: "Kiwanuka Mosque Plan",
    description: "UMSC Mega project Kyazanga town council, Nakateete Ward",
    imageUrl: "/tei ha pics/MosquePlan.jpeg",
    isPdf: false,
    size: "small",
  },
  {
    title: "3D Master Plan",
    description: "3D design of A Commercial Building built on Plot 52 Block 134, opposite Busukuma Division headquarters along Gayaza - Zirobwe road in Busukuma Town, Nansana Municipality.",
    imageUrl: "/tei ha pics/hero17.jpeg",
    isPdf: false,
    size: "large",
  },
];

// Category projects
const RESIDENTIAL_PROJECTS = [
  { imageUrl: "/tei ha pics/Residential-house-of-MrAnaku2.jpeg" },
  { imageUrl: "/tei ha pics/AnakuREsidencePlan.jpeg" },
  { imageUrl: "/tei ha pics/Mr. Eyotre-JuliasPlan2.jpeg" },
  { imageUrl: "/tei ha pics/Naume-Residential1.jpeg" },
  { imageUrl: "/tei ha pics/Kato's-site7.jpeg" },
  { imageUrl: "/tei ha pics/Kato's-site5.jpeg" },
  { imageUrl: "/tei ha pics/Residential-Obed-Ben3.jpeg" },
  { imageUrl: "/tei ha pics/residential9.jpeg" },
  { imageUrl: "/tei ha pics/WhatsApp Image 2026-07-12 at 9.46.02 AM (3).jpeg" },
];

const COMMERCIAL_PROJECTS = [
  { imageUrl: "/tei ha pics/Commercial-Building-Busukuma1.jpeg" },
  { imageUrl: "/tei ha pics/Kintintale-delivered3.jpeg" },
  { imageUrl: "/tei ha pics/Ntake-Oil-mills.jpeg" },
  { imageUrl: "/tei ha pics/REnnovation5.jpeg" },
  { imageUrl: "/tei ha pics/Innovation-Works2.jpeg" },
  { imageUrl: "/tei ha pics/Zembo3.jpeg" },
  { imageUrl: "/tei ha pics/Commercial-Building-Busukuma9.jpeg" },
  { imageUrl: "/tei ha pics/Innovation-of-MIAU-showroom3.jpeg" },
  { imageUrl: "/tei ha pics/DEsign10.jpeg" },
];

const HOSPITALITY_PROJECTS = [
  { videoUrl: "/tei ha pics/Mukono-Resort.mp4" },
  { imageUrl: "/tei ha pics/hero12.jpeg" },
  { imageUrl: "/tei ha pics/hero11.jpeg" },
  { imageUrl: "/tei ha pics/Design-and-Build-of-KA-Building-of-MrKitonsa-Alexander1.jpeg" },
  { videoUrl: "/tei ha pics/Mukono-Resort5.mp4" },
  { imageUrl: "/tei ha pics/hospitality3.jpeg" },
  { imageUrl: "/tei ha pics/plan2.jpeg" },
];

const INDUSTRIAL_PROJECTS = [
  { imageUrl: "/tei ha pics/industrial2.jpeg" },
  { imageUrl: "/tei ha pics/Ntake-Oil-mills4.jpeg" },
  { videoUrl: "/tei ha pics/REnnovation1.mp4" },
  { imageUrl: "/tei ha pics/REnnovation7.jpeg" },
  { imageUrl: "/tei ha pics/Ntake-Oil-mills5.jpeg" },
  { imageUrl: "/tei ha pics/industrial4.jpeg" },
  { imageUrl: "/tei ha pics/industrial3.jpeg" },
  { imageUrl: "/tei ha pics/Ntake-Oil-mills10.jpeg" },
];

// Animation variants
const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

// PDF Viewer Modal
function PdfModal({ pdfUrl, onClose }: { pdfUrl: string; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
        
        {/* Modal Content */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-5xl h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white">
            <h3 className="text-lg font-semibold text-gray-900">Kiwanuka Mosque Plan</h3>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close PDF viewer"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>
          {/* PDF Viewer */}
          <iframe
            src={pdfUrl}
            className="w-full h-[calc(90vh-64px)]"
            title="Kiwanuka Mosque Plan"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// Project card component with hover effects
function ProjectCard({ 
  project, 
  index,
  onPdfClick,
}: { 
  project: typeof FEATURED_PROJECTS[0]; 
  index: number;
  onPdfClick: (url: string) => void;
}) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -20]);

  // Get animation variant based on index
  const getVariant = () => {
    const variants = [slideInLeft, fadeIn, scaleIn, slideInRight, scaleIn, fadeInUp];
    return variants[index % variants.length];
  };

  const handleClick = () => {
    if (project.isPdf) {
      onPdfClick(project.imageUrl);
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.15 }}
      variants={getVariant()}
      onClick={handleClick}
      className={cn(
        "relative overflow-hidden rounded-2xl group cursor-pointer",
        project.size === "large" ? "col-span-1 md:col-span-2 row-span-2 aspect-square" : "col-span-1 aspect-[4/3]"
      )}
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0"
      >
        {project.isPdf ? (
          <div className="w-full h-full bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-16 h-20 bg-red-500 rounded shadow-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xs">PDF</span>
              </div>
              <p className="text-amber-900 font-medium">{project.title}</p>
            </div>
          </div>
        ) : (
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}
      </motion.div>

      {/* Dark gradient always visible for contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

      {/* Title and description always visible */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <span className="block text-2xl md:text-3xl font-bold text-white mb-3 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">{project.title}</span>
        <span className="block text-gray-100 text-sm md:text-base leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{project.description}</span>
      </div>
    </motion.div>
  );
}

// Carousel component
function Carousel({ 
  title, 
  projects 
}: { 
  title: string; 
  projects: Array<{ imageUrl?: string; videoUrl?: string }> 
}) {
  // Duplicate projects for seamless infinite scroll
  const duplicatedProjects = [...projects, ...projects];
  
  return (
    <div className="mb-16">
      <h3 className="text-2xl font-bold mb-6 text-gray-800">{title}</h3>
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-4"
          animate={{ x: [0, -1 * (320 * projects.length)] }} // Scroll exactly one full set's width
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop"
          }}
        >
          {duplicatedProjects.map((project, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-64 group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                {project.videoUrl ? (
                  <video
                    src={project.videoUrl}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <Image
                    src={project.imageUrl!}
                    alt={`${title} project`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export function FeaturedProjects() {
  const [pdfUrl, setPdfUrl] = React.useState<string | null>(null);

  return (
    <>
      {pdfUrl && <PdfModal pdfUrl={pdfUrl} onClose={() => setPdfUrl(null)} />}
      <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Editorial Introduction */}
        <div className="mb-20 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-widest text-primary font-semibold mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Creating spaces that inspire people, communities and businesses.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 leading-relaxed"
          >
            Over the years we've delivered residential, commercial, hospitality and industrial projects across Uganda and beyond.
          </motion.p>
        </div>

        {/* Premium Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {FEATURED_PROJECTS.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} onPdfClick={setPdfUrl} />
          ))}
        </div>

        {/* Category Carousels */}
        <div className="mb-24">
          <Carousel title="Residential" projects={RESIDENTIAL_PROJECTS} />
          <Carousel title="Commercial" projects={COMMERCIAL_PROJECTS} />
          <Carousel title="Hospitality" projects={HOSPITALITY_PROJECTS} />
          <Carousel title="Industrial" projects={INDUSTRIAL_PROJECTS} />
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Explore Our Complete Portfolio
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Discover every project, its story, its challenges, and how we transformed ideas into reality.
          </p>
          <Button size="lg" asChild>
            <Link href="/projects" className="group">
              View All Projects
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
    </>
  );
}
