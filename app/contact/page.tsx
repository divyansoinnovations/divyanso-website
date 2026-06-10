"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  const contactDetails = [
    {
      title: "Phone",
      value: "+91 9490146895",
      link: "tel:+919490146895",
      icon: "☎",
    },
    {
      title: "Email",
      value: "divya.innnovations@gmail.com",
      link: "mailto:divya.innnovations@gmail.com",
      icon: "✉",
    },
    {
      title: "Website",
      value: "www.divyansoinnovations.com",
      link: "https://www.divyanso.com",
      icon: "🌐",
    },
  ];

  return (
    <main className="min-h-screen bg-[#050816] text-white overflow-hidden">
      <section className="relative px-6 py-24 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1B33] via-[#050816] to-black" />
        <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-[#3B82F6]/20 blur-3xl" />
        <div className="absolute bottom-10 right-20 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <p className="text-[#60A5FA] tracking-[6px] uppercase text-sm mb-5">
            Connect With Us
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-8">
            Contact Us
          </h1>

          <p className="max-w-4xl mx-auto text-lg md:text-xl text-slate-300 leading-8">
            Reach out to Divyanso Innovations Private Limited for telecom
            infrastructure services, OFC maintenance, field support, and
            project execution enquiries.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
        <div className="grid md:grid-cols-3 gap-6">
          {contactDetails.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.link}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="group rounded-3xl bg-white/10 border border-white/10 backdrop-blur-xl p-8 text-center shadow-2xl hover:border-[#60A5FA]/70 transition-all duration-300"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#3B82F6]/15 text-3xl text-[#60A5FA]">
                {item.icon}
              </div>

              <h2 className="text-2xl font-bold text-white mb-3">
                {item.title}
              </h2>

              <p className="text-slate-300 group-hover:text-[#93C5FD] transition break-words">
                {item.value}
              </p>
            </motion.a>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-[2rem] bg-gradient-to-r from-[#2563EB] to-[#60A5FA] p-[1px]"
        >
          <div className="rounded-[2rem] bg-[#0f172a] p-10 md:p-14 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-[#60A5FA] tracking-[5px] uppercase text-sm mb-4">
                Corporate Communication
              </p>

              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                Let’s Build Reliable Connectivity Together
              </h2>

              <p className="text-slate-300 leading-8 text-lg">
                Our team is available for business enquiries, telecom
                infrastructure support, OFC-related works, maintenance
                requirements, and manpower deployment discussions.
              </p>
            </div>

            <div className="rounded-3xl bg-white/5 border border-white/10 p-8">
              <h3 className="text-2xl font-bold text-[#60A5FA] mb-6">
                Divyanso Innovations Private Limited
              </h3>

              <div className="space-y-5 text-slate-300">
                <p>
                  <span className="text-white font-semibold">Phone:</span>{" "}
                  +91 9490146895
                </p>

                <p>
                  <span className="text-white font-semibold">Email:</span>{" "}
                  divya.innnovations@gmail.com
                </p>

                <p>
                  <span className="text-white font-semibold">Website:</span>{" "}
                  www.divyanso.com
                </p>

                <p>
                  <span className="text-white font-semibold">Location:</span>{" "}
                  Hyderabad, Telangana, India
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="tel:+919490146895"
                  className="rounded-full bg-[#3B82F6] px-6 py-3 font-semibold text-white hover:bg-[#60A5FA] transition"
                >
                  Call Now
                </a>

                <a
                  href="mailto:divya.innnovations@gmail.com"
                  className="rounded-full border border-[#60A5FA] px-6 py-3 font-semibold text-[#93C5FD] hover:bg-[#60A5FA] hover:text-black transition"
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}