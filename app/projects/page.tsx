"use client";

import { motion } from "framer-motion";

export default function ProjectsPage() {
  const projects = [
    ["GEM/2025/B/5945348", "Bangalore East", "BGBA Copper", "₹22,32,586.56"],
    ["GEM/2025/B/6072226", "Chandra Layout", "BGBA Copper", "₹15,82,283.04"],
    ["GEM/2025/B/6072226", "Hosakerehalli", "BGBA Copper", "₹33,19,491.60"],
    ["GEM/2025/B/5945348", "Jaya Nagar", "BGBA Copper", "₹25,72,224.00"],
    ["GEM/2025/B/5945348", "HSR KOR", "BGBA Copper", "₹21,90,716.88"],
    ["GEM/2025/B/5945954", "Hubballi", "ROK Copper", "₹14,10,943.68"],
    ["GEM/2025/B/5945954", "Hubballi", "ROK Copper", "₹8,24,960.64"],
    ["GEM/2025/B/5945954", "Hubballi", "ROK Copper", "₹8,29,400.16"],
    ["GEM/2025/B/5945723", "Mysore District", "ROK Copper", "₹11,47,215.12"],
    ["GEM/2025/B/5945723", "Mysore District", "ROK Copper", "₹26,01,284.16"],
    ["GEM/2025/B/5945723", "Kolar District", "ROK Copper", "₹5,78,144.16"],
    ["GEM/2025/B/6731928", "Kolar", "OFC", "₹56,03,943.27"],
    ["GEM/2025/B/6804572", "Tumkuru", "OFC Maintenance", "₹67,95,784.00"],
    ["GEM/2025/B/6804747", "Hassan", "OFC Maintenance", "₹50,20,998.00"],
    ["GEM/2025/B/6817071", "Shivamogga", "OFC Maintenance", "₹45,13,268.40"],
    ["GEM/2025/B/6804572", "Chikkamagaluru", "OFC Maintenance", "₹67,40,022.60"],
    ["GEM/2025/B/6935453", "All Over Karnataka", "Rehabilitation Work", "₹2,33,00,000.00"],
  ];

  const stats = [
    ["17+", "Ongoing Projects"],
    ["Karnataka", "Operational Region"],
    ["₹7 Cr+", "Active Work Portfolio"],
    ["Telecom", "Infrastructure Domain"],
  ];

  return (
    <main className="min-h-screen bg-[#050816] text-white overflow-hidden">
      <section className="relative px-6 py-24 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1B33] via-[#050816] to-black" />
        <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />
        <div className="absolute bottom-10 right-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <p className="text-[#D4AF37] tracking-[6px] uppercase text-sm mb-5">
            Project Portfolio
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-8">
            Ongoing Works
          </h1>

          <p className="max-w-4xl mx-auto text-lg md:text-xl text-slate-300 leading-8">
            Divyanso Innovations Private Limited is actively executing telecom
            infrastructure, OFC maintenance, copper network maintenance, and
            rehabilitation projects across Karnataka with a focus on quality,
            reliability, and timely delivery.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
        <div className="grid md:grid-cols-4 gap-6">
          {stats.map(([number, label], index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-white/10 border border-white/10 backdrop-blur-xl p-7 text-center shadow-2xl"
            >
              <h2 className="text-3xl font-extrabold text-[#D4AF37]">
                {number}
              </h2>
              <p className="text-slate-300 mt-2">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-4xl font-bold text-[#D4AF37] mb-4">
            Active Project Details
          </h2>
          <p className="text-slate-400 max-w-3xl">
            A consolidated overview of ongoing telecom works undertaken across
            Karnataka under various GeM tender engagements.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {projects.map(([tenderId, area, type, value], index) => (
            <motion.div
              key={`${tenderId}-${index}`}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="group rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-7 hover:border-[#D4AF37]/70 transition-all duration-300 shadow-xl"
            >
              <div className="flex justify-between items-start gap-4 mb-6">
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-widest">
                    Tender ID
                  </p>
                  <h3 className="text-lg font-semibold text-white mt-1">
                    {tenderId}
                  </h3>
                </div>

                <span className="rounded-full bg-[#D4AF37]/15 text-[#D4AF37] px-4 py-2 text-sm font-semibold">
                  {type}
                </span>
              </div>

              <div className="border-t border-white/10 pt-6">
                <p className="text-slate-400 text-sm mb-1">Project Area</p>
                <h2 className="text-2xl font-bold group-hover:text-[#D4AF37] transition">
                  {area}
                </h2>

                <div className="mt-6 flex justify-between items-center">
                  <p className="text-slate-400">Karnataka</p>
                  <p className="text-xl font-bold text-[#F5D78E]">{value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto rounded-[2rem] bg-gradient-to-r from-[#D4AF37] to-[#F5D78E] p-[1px]"
        >
          <div className="rounded-[2rem] bg-[#0f172a] p-10 md:p-14">
            <h2 className="text-4xl font-bold text-[#D4AF37] mb-6">
              Project Execution Focus
            </h2>

            <p className="text-slate-300 leading-8 text-lg">
              Our ongoing works cover copper network maintenance, OFC
              maintenance, telecom infrastructure support, and rehabilitation
              activities across multiple districts of Karnataka. Each project is
              managed through structured planning, field coordination, technical
              supervision, manpower deployment, and timely execution to ensure
              dependable network performance.
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}