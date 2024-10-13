import Navbar from "@/components/shared/Navbar"
import "./globals.css"
import { sectionStyle } from "@/lib/styles"

export const metadata = {
  title: "Md Suny Shaikh | MDSSK",
  description:
    "I am Md Suny Shaikh. I am a web developer. MDSSK is my personal portfolio website.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased ${sectionStyle} bg-black`}>
        <div>
          <Navbar />
        </div>
        <div>{children}</div>
      </body>
    </html>
  )
}
