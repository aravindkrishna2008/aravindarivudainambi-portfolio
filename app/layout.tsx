import Image from "next/image";
import "./globals.css";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const roboto_mono = Poppins({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto_mono.variable}`}>
      <body className={inter.className}>
        {" "}
        <img
          src="/bg-r.png"
          alt="Aravindkrishna Arivudainambi"
          className="absolute top-0 right-0 h-full object-cover"
        />
        <img
          src="/bg-l.png"
          alt="Aravindkrishna Arivudainambi"
          className="absolute top-[50vh] left-0 h-full object-cover"
        />
        {children}
      </body>
    </html>
  );
}
