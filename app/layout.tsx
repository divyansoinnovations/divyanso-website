import "./globals.css";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "DIVYANSO INNOVATIONS PRIVATE LIMITED",
  description: "Telecom Infrastructure & Maintenance Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#050816] text-white">
        <nav className="flex justify-between items-center px-10 py-5 border-b border-white/10 bg-[#050816]">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.jpeg"
              alt="Divyanso Innovations Logo"
              width={55}
              height={55}
            />
            <span className="text-[#D4AF37] font-bold tracking-widest text-sm md:text-lg">
              DIVYANSO INNOVATIONS PRIVATE LIMITED
            </span>
          </Link>

          <div className="flex gap-6 text-sm text-gray-300">
            <Link href="/" className="hover:text-[#D4AF37]">
              Home
            </Link>
            <Link href="/about" className="hover:text-[#D4AF37]">
              About
            </Link>
            <Link href="/services" className="hover:text-[#D4AF37]">
              Services
            </Link>
            <Link href="/projects" className="hover:text-[#D4AF37]">
              Projects
            </Link>
            <Link href="/contact" className="hover:text-[#D4AF37]">
              Contact
            </Link>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}