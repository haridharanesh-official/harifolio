import React, { useEffect } from "react";
import FolioCard from "./FolioCard";
import Title from "../ui/Title";
import { useView } from "@/contexts/ViewContext";

// @ts-ignore
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import Timeline from "./Timeline";

export default function Works() {
  const { setSectionInView } = useView();

  const works = [
    {
      title: "Course Tracking Dashboard",
      liveLink: "https://dashboarddesign.tiiny.site/",
      about:
        "The Course Tracking Dashboard provides an intuitive way to monitor learning progress with graphs, podcasts, and weekly activities. Users can track course completion rates, study time, and performance trends through Visual charts. Integrated Podcasts offer an additional learning medium, while the Weekly planner helps organize lessons, assignments, and quizzes. This dashboard ensures users stay engaged, track progress efficiently, and maintain a structured learning routine.",
      stack: ["UI Development","html5", "css",],
      img: "/offset-folio.svg",
    },
    {
      title: "Fitness Tracker",
      gitLink: "https://github.com/haridharanesh-official/Fitness_Tracker",
      liveLink: "https://celebrated-youtiao-c9b287.netlify.app/",
      about:
        "The Fitness Tracker App for the Arduino Nano BLE Sense 32 smartwatch monitors heart rate, steps, calories, and sleep. With BLE connectivity, it syncs data to the app, displaying insights through graphs and recommendations. It also includes workout tracking, reminders, and goal setting, ensuring a seamless fitness experience.",
      stack: ["html5", "css", "firebase"],
      img: "/shortly.svg",
    },
    {
      title: "Care Pulse",
      gitLink: "https://github.com/haridharanesh-official/Care_Pulse",
      liveLink: "https://carepulse.netlify.app",
      about:
        "The Care Pulse Appointment App offers a secure and seamless booking experience with a top-tier UI/UX design. Built with advanced security measures, it ensures safe data handling and encrypted communication. Users can schedule, manage, and track appointments effortlessly, enhancing accessibility and efficiency in healthcare services. Smooth, intuitive, and reliable.",
      stack: ["react", "react-router", "javascript", "tailwindcss", "Next.js"],
      img: "/witw.svg",
    },
    // {
    //   title: "Yourtodo",
    //   gitLink: "https://github.com/adex-hub/Yourtodo",
    //   liveLink: "https://yourtodo-v1.vercel.app/",
    //   about:
    //     "This task management system lets you customize your name, add, delete, and edit tasks, and celebrates you when tasks are completed. It features built-in notifications and stores data in the browser, allowing you to resume tasks conveniently. Designed and developed by yours truly.",
    //   stack: ["react", "javascript", "figma", "sass"],
    //   img: "/todo.svg",
    // },
    {
      title: "MedRemind",
      gitLink: "https://github.com/haridharanesh-official/MedRemind",
      liveLink: "https://medremind.netlify.app",
      about:
        "The MedRemind Medication Reminder App ensures precise tracking, security, and an intuitive UI/UX for seamless medication management. It features timely reminders, dosage tracking, and encrypted health data storage. With a user-friendly design and advanced security, it helps users stay on track with medications while ensuring safety and efficiency.",
      stack: ["react", "expo", "javascript", "appdevelopment"],
      img: "/multistep.svg",
    },
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("work");
  }, [inView, setSectionInView]);

  return (
    <section
      className="flex flex-col gap-6 md:gap-10 pt-[110px]"
      ref={ref}
      id="work"
    >
      <Title>Projects</Title>
      {works.map((work, index) => (
        <FolioCard
          key={index}
          img={work.img}
          title={work.title}
          gitLink={work.gitLink}
          liveLink={work.liveLink}
          about={work.about}
          stack={work.stack}
        />
      ))}

      <Timeline />
    </section>
  );
}
