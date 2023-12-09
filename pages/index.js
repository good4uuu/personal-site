import React from "react";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import AboutMe from "@/components/AboutMe";
import AchievementsSection from "@/components/AchievementSection";
import EmailSection from "@/components/EmailSection";
import Footer from "@/components/Footer";

export default function Home(){
  return(
    <div className="flex min-h-screen flex-col">
      <main>
      <HeroSection />
      <AchievementsSection />
      <AboutMe />
      <Projects />
      <EmailSection />
      </main>
      <Footer />
      </div>
    );
}