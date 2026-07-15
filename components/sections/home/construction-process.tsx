import * as React from "react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Timeline, TimelineItem } from "@/components/ui/timeline";
import {
  Search,
  Calendar,
  PenTool,
  Sparkles,
  HardHat,
  CheckCircle,
} from "lucide-react";

const PROCESS_STEPS = [
  {
    icon: <Search />,
    date: "01",
    title: "Discovery",
    description: "Understanding your needs, goals and project requirements.",
  },
  {
    icon: <Calendar />,
    date: "02",
    title: "Planning",
    description: "Developing a comprehensive project plan and timeline.",
  },
  {
    icon: <PenTool />,
    date: "03",
    title: "Architectural Design",
    description: "Creating beautiful, functional designs tailored to you.",
  },
  {
    icon: <Sparkles />,
    date: "04",
    title: "AI Optimization",
    description: "Using AI to refine designs, costs and timelines.",
  },
  {
    icon: <HardHat />,
    date: "05",
    title: "Construction",
    description: "Building your project with quality and precision.",
  },
  {
    icon: <CheckCircle />,
    date: "06",
    title: "Delivery",
    description: "Final handover and post-construction support.",
  },
];

export function ConstructionProcess() {
  return (
    <Section variant="muted" size="xl">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="Our Process"
          subtitle="From concept to completion, we guide you every step of the way."
          className="mb-16"
        />
        <Timeline orientation="vertical">
          {PROCESS_STEPS.map((step, idx) => (
            <TimelineItem
              key={step.title}
              icon={step.icon}
              date={step.date}
              title={step.title}
              description={step.description}
              delay={idx * 0.1}
            />
          ))}
        </Timeline>
      </div>
    </Section>
  );
}
