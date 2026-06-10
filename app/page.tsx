"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HomePage() {
  const highlights = [
    "Telecom Infrastructure",
    "OFC Deployment",
    "Network Maintenance",
    "Technical Manpower",
  ];

  return (
    <main className="min-h-screen bg-[#050816] text-white overflow-hidden">
      <section className="relative px-6 py-28 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#071120] via-[#050816] to-black" />
        <div className="absolute top-20 left-20 h-72 w-72 bg-[#D4AF37]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-24 h-80 w-80 bg-blue-500/10 rounded-full blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <div className="flex justify-center mb-8">
            <Image
              src="/logo.jpeg"
              alt="Divyanso Innovations Logo"
              width={220}
              height={220}
              priority
              className="drop-shadow-2xl"
            />
          </div>

          <p className="text-[#D4AF37] tracking-[6px] uppercase text-sm mb-5">
            DPIIT Recognized Startup | MSME Registered
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold text-[#D4AF37] uppercase">
            Divyanso Innovations
          </h1>

          <h2 className="mt-4 text-2xl md:text-4xl tracking-[5px] uppercase text-white">
            Private Limited
          </h2>

          <p className="max-w-4xl mx-auto mt-8 text-xl md:text-3xl text-slate-300 leading-relaxed">
            Building Reliable Telecom Infrastructure for a Connected Future
          </p>

          <p className="mt-8 text-[#F5D78E] italic text-lg">
            Innovating Connectivity. Ensuring Reliability.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              href="/services"
              className="bg-[#D4AF37] text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
            >
              Explore Services
            </Link>

            <Link
              href="/projects"
              className="border border-[#D4AF37] text-[#D4AF37] px-8 py-3 rounded-full font-semibold hover:bg-[#D4AF37] hover:text-black transition"
            >
              View Projects
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 -mt-8 relative z-20">
        <div className="grid md:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12 }}
              viewport={{ once: true }}
              className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-3xl p-7 text-center shadow-2xl"
            >
              <h3 className="text-[#D4AF37] font-bold text-lg">{item}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[2rem] bg-gradient-to-r from-[#D4AF37] to-[#F5D78E] p-[1px]"
        >
          <div className="rounded-[2rem] bg-[#0f172a] p-10 md:p-14">
            <h2 className="text-4xl font-bold text-[#D4AF37] mb-6">
              Who We Are
            </h2>

            <p className="text-slate-300 leading-8 text-lg">
              Divyanso Innovations Private Limited is a DPIIT-recognized startup
              and MSME-registered company established in 2024, headquartered in
              Hyderabad, India. We provide telecom infrastructure, optical fiber
              deployment, network maintenance, field support, and skilled
              manpower services with a strong focus on quality, reliability, and
              timely execution.
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}