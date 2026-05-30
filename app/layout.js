import "./globals.css";

export const metadata = {
  title: "Jannatul Ferdouse | MERN Stack Developer",
  description:
    "Professional MERN Stack Developer portfolio showcasing projects, skills, and modern web development expertise.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
