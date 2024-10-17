import Navbar from "@/components/shared/Navbar"
import "./globals.css"

export const metadata = {
  title: "Md Suny Shaikh | Suny-webDevs",
  description:
    "I am Md Suny Shaikh. I am a web developer. Suny-webDevs is my personal portfolio website.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-black text-white font-outfit selection:bg-white selection:text-black`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  )
}
