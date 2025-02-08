import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Kumbh_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "./components/header-section/Header";
import { ViewProvider } from "@/contexts/ViewContext";

const kumbhSans = Kumbh_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hari Dharanesh SP — Frontend Developer",
  description:
    "I am a passionate UI/UX designer and frontend developer dedicated to crafting seamless and visually compelling digital experiences. As a fresher with a strong foundation in UX research and frontend technologies, I have worked on numerous projects that showcase my ability to create user-friendly, accessible, and high-performance web applications.",
  keywords: [
    "frontend",
    "react",
    "tech",
    "creative developer",
    "UI development",
    "frontend engineer",
    "developer portfolio",
    "creative development",
    "Ux development",
    "UX Research",
    "Wireframing",
    "UI Design",
    "portfolio",
  ],
  openGraph: {
    title: "Hari Dharanesh SP — Frontend Developer",
    description:
      "Frontend Engineer formerly at Bluechip Technologies, passionate about crafting next-gen software and creative websites. I drive growth by crafting user experiences that blend aesthetics with functionality through my design and development skills. I thrive on turning ideas into seamless digital solutions.",
    url: "https://www.haridharanesh.me",
    siteName: "www.haridharanesh.me",
    images: [
      {
        url: "https://i.ibb.co/FKMqc28/adeola-badero.png",
        width: 1200,
        height: 630,
        alt: "Hari Dharanesh SP — Frontend Developer",
      },
      {
        url: "https://i.ibb.co/Y8hBTR4/ade-800.png",
        width: 800,
        height: 800,
        alt: "Hari Dharanesh SP — Frontend Developer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hari Dharanesh SP — Software Engineer",
    description:
      "I am a passionate UI/UX designer and frontend developer dedicated to crafting seamless and visually compelling digital experiences. As a fresher with a strong foundation in UX research and frontend technologies, I have worked on numerous projects that showcase my ability to create user-friendly, accessible, and high-performance web applications. My expertise lies in translating user needs into intuitive and aesthetically pleasing interfaces using modern design tools and frontend frameworks.",
    creator: "@hari_d_04",
    images: ["https://i.ibb.co/FKMqc28/adeola-badero.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      "max-image-preview": "large",
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kumbhSans.className} max-w-[90%] xl:max-w-[1223px] w-full mx-auto overflow-x-hidden`}
      >
        <>
          <ViewProvider>
            <Header />
            {children}
          </ViewProvider>
          <Analytics />
          <SpeedInsights />
        </>
      </body>
    </html>
  );
}
