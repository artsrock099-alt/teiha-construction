"use client";

import * as React from "react";
import { Section, SectionHeader } from "@/components/ui/section";
import { TeamCard } from "@/components/cards/team-card";
import { Stagger } from "@/lib/animations";

const TEAM_MEMBERS = [
  {
    name: "Bwanika Shafiiki",
    position: "Managing Director & Civil Engineer",
    bio: "Leading with vision and 8+ years of engineering excellence, Bwanika drives TEI-HA's strategic initiatives to deliver world-class construction and architecture solutions across Africa and beyond.",
    avatarSrc: "/tei ha pics/Shafik.jpeg",
    imageStyle: { objectPosition: "center calc(50% - 8.5px)" } // Move image up by 2.5px
  },
  {
    name: "Anand Chokis",
    position: "Technical Director",
    bio: "Seasoned Technical Director with 38+ years of industry expertise, Anand oversees the technical excellence and innovation that defines every TEI-HA project.",
    avatarSrc: "/tei ha pics/Anand Chokis.jpg"
  },
  {
    name: "Buyondo Nelson",
    position: "Operational Manager",
    bio: "With 4+ years of experience, Nelson ensures seamless project execution and operational efficiency, keeping our teams aligned with client expectations.",
    avatarSrc: "/tei ha pics/Buyondo Nelson.jpg",
    imageStyle: { objectPosition: "center calc(50% + 10px)" } // Move image down by 2px
  },
  {
    name: "Bayiga Daphine Ssambwa",
    position: "Company Manager & Architect",
    bio: "Expert architect with 4+ years of innovative design experience, Daphine brings creative vision and technical precision to our architectural portfolio.",
    avatarSrc: "/tei ha pics/Bayiga Daphine Ssambwa.jpg"
  },
  {
    name: "Ocatre Norman",
    position: "Company Project Manager",
    bio: "Expert with 19+ years of experience, Norman leads our project management efforts, ensuring every initiative is delivered on time, within budget, and to the highest standards.",
    avatarSrc: "/tei ha pics/Ocatre Norman.jpg",
    imageStyle: { objectPosition: "center calc(50% + 10px)" } // Move image down by 2px
  }
];

export function LeadershipTeam() {
  return (
    <Section size="xl">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="Meet the Leadership Behind TEI-HA"
          subtitle="Behind every exceptional project is a team of experienced professionals committed to innovation, precision, and excellence. Meet the leaders driving TEI-HA Construction Services forward."
          align="center"
          className="mb-8 mx-auto"
        />
        <Stagger>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {TEAM_MEMBERS.map((member, idx) => (
              <TeamCard
                key={member.name}
                name={member.name}
                position={member.position}
                bio={member.bio}
                avatarSrc={member.avatarSrc}
                imageStyle={member.imageStyle}
                delay={idx * 0.1}
              />
            ))}
          </div>
        </Stagger>
      </div>
    </Section>
  );
}
