"use client";
import { Syne } from "next/font/google";
import Title from "../ui/Title";
import TimelineItem from "./TimelineItem";

const syne = Syne({ subsets: ["latin"] });

const TimelineData = [
  {
    companyImg: "/bluechip.svg",
    jobTitle: "Science Innovation",
    company: "Hospital",
    jobType: "Automation",
    duration: "July 2024 - Feb 2025",
    stuffIDid: [
      "Science Innovation – Park College (Nov 2024) Secured a First Prize with Cash Prize of ₹25,000 at the Science Innovation event held on November 29, 2024, at Park College.",
      "Inovation - RVS Collage (Nob 2024) Secured the Second Prize with Cash Prize of ₹1,500 in the Innovation competition at RVS College, showcasing creativity and innovation in the field of technology.",
      "Galaxy'24 Phase 2 Robotics Competition (Oct 2024) Secured Second Prize in the Galaxy'24 Phase 2 Robotics Competition, held on October 24-25, 2024, showcasing innovation and problem-solving in robotics.",
      "Innovate Project – Avarar X-Stream (Oct 2024) Participated in the Innovate Project event at Avarar X-Stream, an inter-school cultural fest hosted by Nehru Institute of Engineering and Technology, showcasing innovative ideas and collaborative problem-solving.",
      "Best Innovator Award – World Youth Skills Day (June 2024) Honored with the Best Innovator Award during the World Youth Skills Day 2024 celebration on June 15, 2024, at Jansons Institute of Technology, Coimbatore.",
    ],
  },
  {
    companyImg: "/nnpc.svg",
    jobTitle: "Hackathon",
    company: "Coding",
    jobType: "Debugging",
    duration: "Dec 2023 - Feb 2025",
    stuffIDid: [
      "Hackathon - SNS Hackathon (Oct 2023) Secured Third Prize in the SNS Hackathon, a national design thinking contest and festival, held on October 28, 2023, at SNS Colors Institution.",
      "Hackathon - Nehru Institute of Technology Selected and Participated in the Nehru Hackathon by selecting in the ideathon previous event held on January 16, 2025 at Nehru Institute of Technology In kerala. ",
    ],
  },
];

export default function Timeline() {
  return (
    <div className="mt-10 md:mt-[110px]">
      <Title> Milestone</Title>

      {/* THE THING, AFTER WHICH I WOULD DETERMINE THE HEIGHT */}
      <div className="flex mt-6 gap-4 pl-3">
        <div className="w-3 h-auto bg-gradient-to-b from-white to-transparent" />

        <div className="flex flex-col gap-10">
          {TimelineData.map((item, index) => (
            <TimelineItem
              key={index}
              companyImg={item.companyImg}
              jobTitle={item.jobTitle}
              company={item.company}
              jobType={item.jobType}
              duration={item.duration}
              stuffIDid={item.stuffIDid}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
