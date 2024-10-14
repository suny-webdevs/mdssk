"use client"
import MainPage from "@/components/MainPage/MainPage"
import aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    // initialize AOS
    aos.init({ duration: 1000 })

    // cleanup function
    // return () => {
    //   aos.destroy()
    // }
  }, [])

  return (
    <div>
      <MainPage />
    </div>
  )
}
