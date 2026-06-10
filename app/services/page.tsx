"use client";

import { motion } from "framer-motion";

export default function ServicesPage() {
  const services = [
    {
      title: "Optical Fiber Services",
      items: ["OFC Laying", "Fiber Splicing", "OTDR Testing", "Loss Power Meter Testing"],
    },
    {
      title: "Telecom Infrastructure Deployment",
      items: ["BTS Installation", "NodeB Installation", "eNodeB Installation", "gNodeB Installation", "Equipment Integration & Commissioning"],
    },
    {
      title: "Network Maintenance Services",
      items: ["Preventive Maintenance", "Corrective Maintenance", "Fault Identification & Rectification", "Network Performance Monitoring"],
    },
    {
      title: "RF Planning & Network Engineering",
      items: ["RF Planning", "MW Link Engineering", "Transmission Planning"],
    },
    {
      title: "Site Survey & Feasibility",
      items: ["Technical Site Surveys", "Infrastructure Assessment", "Deployment Planning Support"],
    },
    {
      title: "Testing & Optimization",
      items: ["EMF Compliance Testing", "Network Testing & Certification", "RF Optimization Support", "Drive Testing Support"],
    },
    {
      title: "Technical Manpower Services",
      items: ["Skilled Telecom Technicians", "Field Engineers", "Maintenance Personnel", "Project Support Teams", "Field Repair Team Deployment"],
    },
    {
      title: "Enterprise Networking Services",
      items: ["LAN Setup & Configuration", "WAN Setup & Configuration", "Wi-Fi Network Deployment", "Network Performance Assessment"],
    },
  ];

  return (
    <main className="min-h-screen bg-[#050816] text-white overflow-hidden">
      <section className="relative px-6 py-24 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1B33] via-[#050816] to-black" />
        <div className="absolute top-24 left-20 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />
        <div className="absolute bottom-10 right-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10"
        >
          <p className="text-[#D4AF37] tracking-[6px] uppercase text-sm mb-5">
            Service Capabilities
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-8">
            Our Services
          </h1>

          <p className="max-w-4xl mx-auto text-lg md:text-xl text-slate-300 leading-8">
            Comprehensive telecom infrastructure services covering planning,
            deployment, maintenance, testing, optimization, and skilled manpower
            support.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-7">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="group rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-8 hover:border-[#D4AF37]/70 transition-all duration-300 shadow-xl"
            >
              <div className="flex items-start gap-5">
                <div className="h-12 w-12 rounded-2xl bg-[#D4AF37]/15 text-[#D4AF37] flex items-center justify-center font-bold">
                  {index + 1}
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#D4AF37] mb-5">
                    {service.title}
                  </h2>

                  <ul className="space-y-3 text-slate-300">
                    {service.items.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
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
          <div className="rounded-[2rem] bg-[#0f172a] p-10 md:p-14 text-center">
            <h2 className="text-4xl font-bold text-[#D4AF37] mb-6">
              Why Partner With Us
            </h2>

            <p className="text-slate-300 leading-8 text-lg max-w-4xl mx-auto">
              We combine technical expertise, field execution capability, and
              structured project management to deliver reliable telecom
              infrastructure solutions aligned with client requirements and
              operational timelines.
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}