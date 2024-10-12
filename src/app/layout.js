import "./globals.css"

export const metadata = {
  title: "Md Suny Shaikh | MDSSK",
  description:
    "I am Md Suny Shaikh. I am a web developer. MDSSK is my personal portfolio website.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  )
}
