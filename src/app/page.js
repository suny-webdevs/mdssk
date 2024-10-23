"use client";
import MainPage from "@/components/MainPage/MainPage";
import aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <MainPage />
    </div>
  );
}
