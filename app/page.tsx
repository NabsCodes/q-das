"use client";

import { motion } from "motion/react";
import {
  HiArrowRight,
  HiOutlineServer,
  HiOutlineShieldCheck,
  HiOutlineGlobe,
  HiOutlineDocumentText,
} from "react-icons/hi";

const services = [
  {
    icon: HiOutlineServer,
    title: "Infrastructure",
    description:
      "Data centers, cloud migration, and hybrid systems. We've built infrastructure that processes over 2 million transactions daily for FIRS.",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Security",
    description:
      "SOC operations, threat monitoring, and compliance. Our systems protect sensitive data across 12 federal ministries.",
  },
  {
    icon: HiOutlineGlobe,
    title: "Digital Services",
    description:
      "Citizen portals, API platforms, and legacy modernization. Lagos State's permit system now processes applications 4x faster.",
  },
  {
    icon: HiOutlineDocumentText,
    title: "E-Government",
    description:
      "Tax systems, records management, and service delivery platforms. We helped increase Kano State's tax collection by 340%.",
  },
];

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="bg-navy-900 px-4 py-24 lg:py-32">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-accent-teal mb-6 text-sm font-medium tracking-wide"
            >
              Government ICT Solutions
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl leading-[1.1] font-bold text-white md:text-5xl lg:text-6xl"
            >
              We build the systems that
              <br />
              run Nigerian government.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-charcoal-300 mt-8 max-w-2xl text-lg leading-relaxed lg:text-xl"
            >
              47 agencies. 12 million citizens served. From tax collection
              systems to citizen service portals, we deliver infrastructure that
              actually works.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <a
                href="#contact"
                className="bg-accent-orange hover:bg-accent-orange-dark inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium text-white transition-colors"
              >
                Start a conversation
                <HiArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#work"
                className="text-charcoal-300 inline-flex items-center gap-2 px-2 py-3 font-medium transition-colors hover:text-white"
              >
                See our work
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Clients strip */}
      <section className="border-charcoal-800 bg-navy-900 border-t px-4 py-8">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center gap-x-12 gap-y-4">
            <span className="text-charcoal-500 text-xs font-medium tracking-wider uppercase">
              Trusted by
            </span>
            {[
              "FIRS",
              "Lagos State",
              "CBN",
              "NITDA",
              "Federal Ministry of Finance",
            ].map((client) => (
              <span key={client} className="text-charcoal-400 text-sm">
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-charcoal-100 px-4 py-20 lg:py-24">
        <div className="container mx-auto">
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <div className="text-navy-900 text-4xl font-bold lg:text-5xl">
                99.97%
              </div>
              <div className="text-charcoal-600 mt-2">
                Average uptime across all deployed systems
              </div>
            </div>
            <div>
              <div className="text-navy-900 text-4xl font-bold lg:text-5xl">
                NGN 2.4B
              </div>
              <div className="text-charcoal-600 mt-2">
                Annual cost savings for our clients
              </div>
            </div>
            <div>
              <div className="text-navy-900 text-4xl font-bold lg:text-5xl">
                80%
              </div>
              <div className="text-charcoal-600 mt-2">
                Reduction in citizen wait times
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="work" className="px-4 py-20 lg:py-24">
        <div className="container mx-auto">
          <div className="mb-16 max-w-xl">
            <h2 className="text-navy-900 text-3xl font-bold lg:text-4xl">
              What we do
            </h2>
            <p className="text-charcoal-600 mt-4">
              We focus on four areas where we have deep expertise and a track
              record of delivery.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-charcoal-200 group border-b pb-8"
              >
                <div className="mb-4 flex items-start justify-between">
                  <h3 className="text-navy-900 text-xl font-semibold">
                    {service.title}
                  </h3>
                  <service.icon className="text-charcoal-400 h-5 w-5" />
                </div>
                <p className="text-charcoal-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case study highlight */}
      <section className="bg-navy-900 px-4 py-20 lg:py-24">
        <div className="container mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-accent-teal mb-4 text-sm font-medium">
                Case Study
              </p>
              <h2 className="text-3xl font-bold text-white lg:text-4xl">
                Lagos State Digital Services Platform
              </h2>
              <p className="text-charcoal-300 mt-6 leading-relaxed">
                We rebuilt the state's citizen services infrastructure from the
                ground up. The new platform handles permit applications, tax
                payments, and document requests—processing over 50,000
                transactions daily.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-8">
                <div>
                  <div className="text-accent-orange text-2xl font-bold">
                    4x
                  </div>
                  <div className="text-charcoal-400 mt-1 text-sm">
                    Faster processing
                  </div>
                </div>
                <div>
                  <div className="text-accent-orange text-2xl font-bold">
                    340%
                  </div>
                  <div className="text-charcoal-400 mt-1 text-sm">
                    Increase in collections
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <blockquote className="border-charcoal-700 border-l-2 pl-6">
                <p className="text-lg leading-relaxed text-white">
                  "They didn't just build what we asked for. They pushed back
                  where we were wrong, and the result is a system that actually
                  works for citizens."
                </p>
                <footer className="mt-4">
                  <div className="font-medium text-white">
                    Dr. Adebayo Ogunlesi
                  </div>
                  <div className="text-charcoal-400 text-sm">
                    Director of Digital Services, Lagos State
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="px-4 py-20 lg:py-24">
        <div className="container mx-auto">
          <div className="max-w-2xl">
            <h2 className="text-navy-900 text-3xl font-bold lg:text-4xl">
              Let's talk about your project
            </h2>
            <p className="text-charcoal-600 mt-4">
              We're selective about the projects we take on. If you're serious
              about building government infrastructure that works, we should
              talk.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="mailto:projects@qdasglobal.com"
                className="bg-navy-900 hover:bg-navy-800 inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium text-white transition-colors"
              >
                projects@qdasglobal.com
              </a>
              <span className="text-charcoal-500 text-sm">
                or call{" "}
                <a
                  href="tel:+2349000000000"
                  className="text-navy-900 hover:underline"
                >
                  +234 900 000 0000
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
