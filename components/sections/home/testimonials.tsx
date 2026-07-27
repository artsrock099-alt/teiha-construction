"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/section";
import { Quote } from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────
interface TestimonialData {
  name: string;
  position?: string;
  company?: string;
  project?: string;
  testimonial: string;
  image?: string;
  useLogo?: boolean;
}

// ─── Data ────────────────────────────────────────────────────────────────
const TESTIMONIALS: TestimonialData[] = [
  {
    name: "James Obarowski",
    position: "Chief Executive Officer",
    company: "Zembo Uganda",
    testimonial:
      "TEI-HA Construction Services has consistently delivered exceptional workmanship across our battery swap station expansion projects. Their professionalism, attention to detail, and ability to deliver quality civil works on schedule have made them a trusted construction partner. We confidently recommend TEI-HA for projects that demand reliability, precision, and excellence.",
    image: "/tei ha pics/James-Obarowski-testimonial.jpeg",
  },
  {
    name: "Hon. Kiwanuka Ahmed Ali",
    position: "LC V Chairman \u2013 Lwengo District",
    company: "UMSC Project",
    testimonial:
      "I hereby certify that TEI-HA Construction Services Ltd is the sole design and project consultant for the Uganda Muslim Supreme Council (UMSC) development planned on Plot 18, Nakateete Playground. Their professionalism, technical expertise, and commitment to quality give us complete confidence in their ability to deliver this important project.",
    image: "/tei ha pics/Hon-Kiwanuka-Ahmed-Ali.jpeg",
  },
  {
    name: "Hon. Mubiru James",
    project: "Residential House \u2013 Baaka",
    testimonial:
      "Building our family home required a company we could trust completely. TEI-HA guided us through every stage of the project with professionalism, transparency, and exceptional workmanship. The final result exceeded our expectations, and we are proud to recommend their services.",
    image: "/tei ha pics/Hon-Mubiru-James-testimonial.jpeg",
  },
  {
    name: "Mr. Anaku Patrick",
    project: "Residential House \u2014 Namulonge, Buso Trading Centre",
    testimonial:
      "From the initial architectural design to the final construction works, TEI-HA handled every aspect of our project with remarkable professionalism. Their team remained committed to quality, timely execution, and excellent communication throughout the entire journey.",
    image: "/tei ha pics/Mr-Anaku-Patrick.jpeg",
  },
  {
    name: "Mr. Kato Umar",
    project: "Residential House \u2014 Mabwombwe Njovu Estate",
    testimonial:
      "Building a home is one of life's greatest achievements, and choosing TEI-HA Construction Services was one of our best decisions. Their patience, craftsmanship, attention to detail, and commitment to quality transformed our vision into reality. We sincerely appreciate the outstanding work delivered by the entire team.",
    image: "/tei ha pics/MrKato-Umar.jpeg",
  },
  {
    name: "Mr. Eyotre Julias",
    project: "Residential House \u2014 Busukuma Town",
    testimonial:
      "TEI-HA demonstrated professionalism from the planning stage through project completion. Their engineers and construction team paid close attention to every detail while maintaining excellent workmanship and project management. We are delighted with our new home.",
    image: "/tei ha pics/MrEyotre-Julias.jpeg",
  },
  {
    name: "Ms. Nanyunja Ceria Zara",
    position: "Operations Manager",
    company: "Soleil Power",
    testimonial:
      "The TEI-HA team successfully upgraded our showroom with impressive efficiency and attention to detail. Their professionalism, quality workmanship, and ability to complete the project with minimal disruption exceeded our expectations. We look forward to working with them again.",
    image: "/tei ha pics/Nanyunja-Ceria-Zara.jpeg",
  },
  {
    name: "Mr. Gareeba Alosysious",
    project: "Commercial Building \u2014 Busukuma",
    testimonial:
      "TEI-HA assumed full responsibility for both the design and construction of our commercial building, delivering outstanding quality and professionalism throughout the project. Their expertise has given us complete confidence in the successful completion of this investment.",
  },
  {
    name: "Mr. Bayo Joseph",
    project: "Residential House \u2014 Kayanja Village, Mukono District",
    testimonial:
      "Our experience with TEI-HA was exceptional from start to finish. Their team demonstrated technical expertise, professionalism, and genuine dedication to delivering a home that perfectly reflects our vision.",
  },
  {
    name: "Mr. Kitonsa Alexander",
    position: "Director",
    company: "DT Solar",
    project: "K.A Building \u2014 Nabweru",
    testimonial:
      "The TEI-HA team combined innovative design with quality construction to deliver a commercial building that exceeded our expectations. Their professionalism, commitment to excellence, and project management made the entire experience seamless.",
    image: "/tei ha pics/DT-solar-logo.jpeg",
    useLogo: true,
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────────
function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part.charAt(0))
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

const INITIALS_COLORS = [
  "from-amber-500 to-orange-600",
  "from-emerald-500 to-teal-600",
  "from-blue-500 to-indigo-600",
  "from-violet-500 to-purple-600",
  "from-rose-500 to-pink-600",
  "from-cyan-500 to-blue-600",
];

// ─── Star Rating ─────────────────────────────────────────────────────────
function StarRating() {
  return (
    <div className="flex gap-1" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 md:w-5 md:h-5"
          viewBox="0 0 20 20"
          fill="currentColor"
          style={{ color: "#d4a017" }}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

// ─── Avatar Component ────────────────────────────────────────────────────
function ClientAvatar({ testimonial, index }: { testimonial: TestimonialData; index: number }) {
  const size = 80;

  if (testimonial.useLogo && testimonial.image) {
    return (
      <div
        className="relative rounded-full overflow-hidden flex-shrink-0 border-2 border-white/60 shadow-lg"
        style={{ width: size, height: size }}
      >
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          fill
          className="object-contain p-2"
        />
      </div>
    );
  }

  if (testimonial.image) {
    return (
      <div
        className="relative rounded-full overflow-hidden flex-shrink-0 border-2 border-white/60 shadow-lg transition-transform duration-300 group-hover:scale-105"
        style={{ width: size, height: size }}
      >
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          fill
          className="object-cover"
        />
      </div>
    );
  }

  // Initials avatar
  const colorClass = INITIALS_COLORS[index % INITIALS_COLORS.length];
  return (
    <div
      className={`relative rounded-full overflow-hidden flex-shrink-0 border-2 border-white/60 shadow-lg bg-gradient-to-br ${colorClass} flex items-center justify-center transition-transform duration-300 group-hover:scale-105`}
      style={{ width: size, height: size }}
    >
      <span className="text-white font-bold text-xl md:text-2xl">
        {getInitials(testimonial.name)}
      </span>
    </div>
  );
}

// ─── Testimonial Card ────────────────────────────────────────────────────
function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: TestimonialData;
  index: number;
}) {
  return (
    <div className="w-full flex-shrink-0 px-4 md:px-8 flex items-center justify-center">
      <div className="group relative w-full max-w-4xl bg-white/70 backdrop-blur-xl rounded-2xl md:rounded-3xl shadow-lg hover:shadow-xl border border-white/40 transition-all duration-500 overflow-hidden">
        {/* Subtle gradient accent line at top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#d4a017] to-transparent opacity-60" />

        <div className="p-6 md:p-10 lg:p-12 flex flex-col md:flex-row gap-6 md:gap-10 items-start">
          {/* Left: Avatar + Stars */}
          <div className="flex flex-col items-center gap-3 flex-shrink-0 w-full md:w-auto">
            <ClientAvatar testimonial={testimonial} index={index} />
            <StarRating />
          </div>

          {/* Right: Content */}
          <div className="flex-1 min-w-0">
            {/* Quote icon */}
            <div className="mb-3 md:mb-4" style={{ color: "#d4a017" }}>
              <Quote className="w-8 h-8 md:w-10 md:h-10 opacity-60" />
            </div>

            {/* Testimonial text */}
            <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed mb-5 md:mb-6 italic">
              &ldquo;{testimonial.testimonial}&rdquo;
            </p>

            {/* Divider */}
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#d4a017] to-transparent mb-4" />

            {/* Name + Position/Project */}
            <p className="text-base md:text-lg font-bold text-gray-900">
              {testimonial.name}
            </p>
            {testimonial.position && (
              <p className="text-sm text-gray-600 mt-0.5">
                {testimonial.position}
                {testimonial.company && !testimonial.project && (
                  <>
                    {" \u2014 "}
                    <span className="font-medium">{testimonial.company}</span>
                  </>
                )}
              </p>
            )}
            {testimonial.company && testimonial.position && testimonial.project && (
              <p className="text-sm text-gray-600 mt-0.5">
                {testimonial.company}{" "}
                <span className="text-gray-400">\u2014 {testimonial.project}</span>
              </p>
            )}
            {testimonial.project && !testimonial.position && (
              <p className="text-sm text-gray-600 mt-0.5">
                <span className="font-medium">Project:</span> {testimonial.project}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Navigation Arrow ────────────────────────────────────────────────────
function NavArrow({
  direction,
  onClick,
  ariaLabel,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  ariaLabel: string;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className="group/btn absolute top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white/60 backdrop-blur-md border border-white/50 shadow-lg hover:bg-white/80 hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#d4a017]/50"
      style={
        direction === "prev"
          ? { left: "0.5rem" }
          : { right: "0.5rem" }
      }
    >
      <svg
        className="w-5 h-5 text-gray-700 transition-transform duration-300 group-hover/btn:scale-110"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        {direction === "prev" ? (
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        )}
      </svg>
    </button>
  );
}

// ─── Pagination ──────────────────────────────────────────────────────────
function Pagination({
  total,
  current,
  onSelect,
}: {
  total: number;
  current: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="flex items-center justify-center gap-2 mt-8 md:mt-10" role="tablist" aria-label="Testimonial navigation">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          role="tab"
          aria-selected={i === current}
          aria-label={`Go to testimonial ${i + 1}`}
          className={`rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#d4a017]/50 ${
            i === current
              ? "w-8 h-2.5 bg-[#d4a017]"
              : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
          }`}
        />
      ))}
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────
export function Testimonials() {
  const [current, setCurrent] = React.useState(0);
  const [direction, setDirection] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);
  const [isDragging, setIsDragging] = React.useState(false);
  const autoplayRef = React.useRef<ReturnType<typeof setInterval> | null>(null);

  const total = TESTIMONIALS.length;

  // ── Navigation ──────────────────────────────────────────────────────
  const goTo = React.useCallback(
    (index: number) => {
      const target = ((index % total) + total) % total;
      setDirection(target > current ? 1 : -1);
      setCurrent(target);
    },
    [current, total]
  );

  const next = React.useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = React.useCallback(() => goTo(current - 1), [current, goTo]);

  // ── Autoplay ────────────────────────────────────────────────────────
  const startAutoplay = React.useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      setCurrent((prev) => {
        setDirection(1);
        return (prev + 1) % total;
      });
    }, 6000);
  }, [total]);

  const stopAutoplay = React.useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  React.useEffect(() => {
    if (!isHovered && !isDragging) {
      startAutoplay();
    } else {
      stopAutoplay();
    }
    return () => stopAutoplay();
  }, [isHovered, isDragging, startAutoplay, stopAutoplay]);

  // ── Swipe ───────────────────────────────────────────────────────────
  const handleDragEnd = React.useCallback(
    (_: any, info: PanInfo) => {
      setIsDragging(false);
      if (info.offset.x < -50) next();
      if (info.offset.x > 50) prev();
    },
    [next, prev]
  );

  // ── Keyboard ────────────────────────────────────────────────────────
  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev]);

  // ── Variants ────────────────────────────────────────────────────────
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <Section variant="muted" size="xl">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-[#d4a017]/5 to-transparent blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-blue-400/5 to-transparent blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionHeader
            title="What Our Clients Say"
            subtitle="Real feedback from real people who've worked with us."
            className="mb-12 md:mb-16"
          />
        </motion.div>

        {/* Carousel */}
        <div
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Arrows */}
          <NavArrow direction="prev" onClick={prev} ariaLabel="Previous testimonial" />
          <NavArrow direction="next" onClick={next} ariaLabel="Next testimonial" />

          {/* Slide Area */}
          <div
            className="overflow-visible md:overflow-visible cursor-grab active:cursor-grabbing"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 200, damping: 28, mass: 1 },
                  opacity: { duration: 0.35 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.3}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={handleDragEnd}
                className="outline-none"
              >
                <TestimonialCard testimonial={TESTIMONIALS[current]} index={current} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination */}
          <Pagination total={total} current={current} onSelect={goTo} />
        </div>
      </div>
    </Section>
  );
}
