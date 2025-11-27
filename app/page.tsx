"use client";

import { motion } from "motion/react";
import {
  HiArrowRight,
  HiOutlineServer,
  HiOutlineShieldCheck,
  HiOutlineGlobe,
  HiOutlineDocumentText,
  HiCheckCircle,
} from "react-icons/hi";
import { SectionBadge } from "@/components/section-badge";

const services = [
  {
    icon: HiOutlineServer,
    title: "Infrastructure",
    scope: "Data centers, cloud, hybrid systems",
    result:
      "FIRS now processes 2M+ daily transactions without breaking a sweat",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Security",
    scope: "SOC, threat monitoring, compliance",
    result: "12 federal ministries sleep better knowing we're watching",
  },
  {
    icon: HiOutlineGlobe,
    title: "Digital Services",
    scope: "Portals, APIs, modernization",
    result: "Lagos permit applications went from days to hours",
  },
  {
    icon: HiOutlineDocumentText,
    title: "E-Government",
    scope: "Tax systems, records, service delivery",
    result: "Kano State's tax collection jumped 340% in year one",
  },
];

const capabilities = [
  "24/7 monitoring across 47 government systems",
  "99.97% uptime on mission-critical infrastructure",
  "NGN 2.4B saved annually through optimization",
  "12M+ citizens served through our platforms",
];

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-32 lg:py-40">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/hero-background.png')",
          }}
        />

        {/* Linear Gradient Overlay */}
        <div className="to-primary-light/80 absolute inset-0 bg-linear-to-br from-blue-50/90 via-blue-100/80" />

        <div className="relative container mx-auto">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-block"
            >
              <SectionBadge>Nigeria's Government Tech Partner</SectionBadge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display mb-8 text-5xl leading-[1.08] font-bold tracking-tight text-blue-900 md:text-6xl lg:text-7xl"
            >
              We build systems
              <br />
              that run government.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-10 max-w-2xl text-xl leading-relaxed text-blue-700"
            >
              47 agencies trust us with their infrastructure. 12 million
              citizens use systems we built. From FIRS to Lagos State, we
              deliver tech that actually works.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="#contact"
                className="group bg-accent-500 hover:bg-accent-600 hover:shadow-accent-500/30 inline-flex items-center justify-center gap-2 rounded-lg px-7 py-3.5 font-semibold text-white transition-all hover:shadow-lg"
              >
                Talk to us about your project
                <HiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#work"
                className="hover:text-primary inline-flex items-center gap-2 px-4 py-3.5 font-medium text-blue-700 transition-colors"
              >
                See what we've built →
              </a>
            </motion.div>
          </div>
        </div>

        {/* Floating stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="border-primary/20 absolute right-8 bottom-8 hidden rounded-2xl border bg-white/80 p-6 shadow-lg backdrop-blur-xl lg:block"
        >
          <div className="mb-2 text-sm font-medium text-blue-700">
            Live Systems
          </div>
          <div className="text-primary font-display mb-1 text-3xl font-bold">
            47
          </div>
          <div className="text-primary flex items-center gap-2 text-xs">
            <span className="bg-primary inline-block h-2 w-2 animate-pulse rounded-full" />
            All operational
          </div>
        </motion.div>
      </section>

      {/* Trust bar */}
      <section className="border-b border-blue-200 bg-blue-50 px-4 py-6">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase">
              Trusted by
            </span>
            {["FIRS", "Lagos State", "CBN", "NITDA", "Min. of Finance"].map(
              (client, index) => (
                <motion.span
                  key={client}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="text-sm font-medium text-blue-700"
                >
                  {client}
                </motion.span>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section id="work" className="px-4 py-24 lg:py-32">
        <div className="container mx-auto">
          <div className="mb-20 grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-display mb-4 text-4xl leading-tight font-bold text-white lg:text-5xl">
                  Four areas.
                  <br />
                  Deep expertise.
                </h2>
                <p className="text-lg leading-relaxed text-white">
                  We don't do everything. We do these four things better than
                  anyone else in the Nigerian government space.
                </p>
              </motion.div>
            </div>

            <div className="space-y-12 lg:col-span-3">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group hover:border-primary-500 relative border-l-2 border-white/20 pl-8 transition-all"
                >
                  <div className="group-hover:ring-primary-500 absolute top-0 -left-3 rounded-full bg-white p-1.5 ring-2 ring-white/20 transition-all">
                    <service.icon className="group-hover:text-primary-600 h-4 w-4 text-blue-600 transition-colors" />
                  </div>

                  <h3 className="font-display mb-2 text-2xl font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="mb-3 text-sm text-blue-600">{service.scope}</p>
                  <p className="leading-relaxed text-white">{service.result}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-blue-900 px-4 py-24 lg:py-32">
        <div className="container mx-auto">
          <div className="grid gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-accent-400 mb-4 inline-block text-sm font-semibold tracking-wider uppercase">
                By the numbers
              </span>
              <h2 className="font-display mb-6 text-4xl leading-tight font-bold text-white lg:text-5xl">
                Scale that matters
              </h2>
              <p className="text-lg leading-relaxed text-blue-200">
                We're not here to inflate metrics. These numbers represent real
                government operations and real citizens served.
              </p>
            </motion.div>

            <div className="space-y-6">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={capability}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1 shrink-0">
                    <HiCheckCircle className="text-accent-500 h-6 w-6" />
                  </div>
                  <p className="text-lg leading-relaxed text-blue-100">
                    {capability}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case study */}
      <section className="px-4 py-24 lg:py-32">
        <div className="container mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:py-12"
            >
              <span className="bg-primary-50 text-primary-700 mb-4 inline-block rounded-full px-4 py-1.5 text-sm font-semibold">
                Case Study
              </span>
              <h2 className="font-display mb-6 text-4xl leading-tight font-bold text-blue-900 lg:text-5xl">
                Lagos State Digital Services Platform
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-blue-700">
                The state needed to handle permits, tax payments, and document
                requests at scale. We rebuilt everything from scratch. Now they
                process 50,000+ daily transactions without breaking a sweat.
              </p>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="font-display text-primary-600 mb-2 text-4xl font-bold">
                    4×
                  </div>
                  <p className="text-sm text-blue-700">
                    Faster application processing
                  </p>
                </div>
                <div>
                  <div className="font-display text-primary-600 mb-2 text-4xl font-bold">
                    340%
                  </div>
                  <p className="text-sm text-blue-700">
                    Revenue collection increase
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center"
            >
              <div className="from-primary-50 to-accent-50 rounded-2xl bg-linear-to-br p-8 lg:p-12">
                <div className="text-primary-600 mb-8 text-6xl">"</div>
                <blockquote className="mb-8 text-xl leading-relaxed text-blue-800">
                  They pushed back when we were wrong. Challenged our
                  assumptions. The result? A system that actually works for the
                  people using it every day.
                </blockquote>
                <footer>
                  <div className="font-semibold text-blue-900">
                    Dr. Adebayo Ogunlesi
                  </div>
                  <div className="text-sm text-blue-700">
                    Director of Digital Services, Lagos State Government
                  </div>
                </footer>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="border-t border-blue-200 bg-blue-50 px-4 py-24 lg:py-32"
      >
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display mb-6 text-4xl leading-tight font-bold text-blue-900 lg:text-5xl">
                Ready to talk about
                <br />
                your infrastructure?
              </h2>
              <p className="mb-10 text-lg leading-relaxed text-blue-700">
                We're selective. We only work with agencies serious about
                building systems that serve citizens better. If that's you,
                let's talk.
              </p>

              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <a
                  href="mailto:projects@qdasglobal.com"
                  className="group inline-flex items-center justify-center gap-2 rounded-lg bg-blue-900 px-8 py-4 font-semibold text-white transition-all hover:bg-blue-800 hover:shadow-xl"
                >
                  projects@qdasglobal.com
                  <HiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="tel:+2349000000000"
                  className="text-blue-700 hover:text-blue-900"
                >
                  or call +234 900 000 0000
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
