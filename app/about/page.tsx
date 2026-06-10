"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  const values = [
    "People First",
    "Diversity & Inclusion",
    "Integrity",
    "Performance with Purpose",
    "Social Responsibility",
    "Excellence",
  ];

  return (
    <main className="min-h-screen bg-[#050816] text-white overflow-hidden">
      <section className="relative px-6 py-24 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1B33] via-[#050816] to-black" />
        <div className="absolute top-16 left-24 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10"
        >
          <p className="text-[#D4AF37] tracking-[6px] uppercase text-sm mb-5">
            About The Company
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-8">
            Who We Are
          </h1>

          <p className="max-w-4xl mx-auto text-lg md:text-xl text-slate-300 leading-8">
            Divyanso Innovations Private Limited is a DPIIT-recognized startup
            and MSME-registered company established in 2024 and headquartered in
            Hyderabad, India.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-white/10 border border-white/10 p-8"
        >
          <h2 className="text-3xl font-bold text-[#D4AF37] mb-6">
            Our Identity
          </h2>
          <p className="text-slate-300 leading-8">
            At Divyanso Innovations, we redefine digital connectivity through
            telecom infrastructure and networking services. As a telecom
            infrastructure and networking solutions company, we deliver
            end-to-end turnkey services that combine reliability, technical
            excellence, and professional execution.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-white/10 border border-white/10 p-8"
        >
          <h2 className="text-3xl font-bold text-[#D4AF37] mb-6">
            Our Focus
          </h2>
          <p className="text-slate-300 leading-8">
            From project execution and maintenance to skilled manpower
            deployment, we support telecom operators, OEMs, and enterprises with
            reliable telecom solutions designed for long-term operational
            success.
          </p>
        </motion.div>
      </section>

      <section className="px-6 py-20 bg-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {[
            [
              "Vision",
              "To become a trusted leader in telecom infrastructure services by delivering reliable, efficient, and innovative connectivity solutions.",
            ],
            [
              "Mission",
              "To deliver end-to-end telecom infrastructure solutions with precision, skilled manpower support, safety, quality, and professional execution.",
            ],
          ].map(([title, text]) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-[#0f172a] border border-white/10 p-10"
            >
              <h2 className="text-4xl font-bold text-[#D4AF37] mb-6">
                {title}
              </h2>
              <p className="text-slate-300 leading-8">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-[#D4AF37] mb-10">
          Founders & Leadership
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            [
              "Bodlapati Divya Reddy",
              "Founder & Director",
              "Leads Divyanso Innovations with a strong focus on quality, customer-first service, operational excellence, and sustainable business growth.",
            ],
            [
              "Bodlapati Venkata Ramana",
              "Co-Founder & Director",
              "Brings industry experience, operational expertise, and strategic insight to support successful telecom infrastructure projects.",
            ],
          ].map(([name, role, desc], index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-8 hover:border-[#D4AF37]/70 transition"
            >
              <h3 className="text-2xl font-bold">{name}</h3>
              <p className="text-[#D4AF37] mt-2 mb-5">{role}</p>
              <p className="text-slate-300 leading-8">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-[#D4AF37] mb-10">
            Core Ethical Values
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-white/10 border border-white/10 p-6 hover:border-[#D4AF37]/70 transition"
              >
                {value}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}