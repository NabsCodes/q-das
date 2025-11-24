"use client";

import { useState } from "react";
import {
  HiCode,
  HiServer,
  HiCube,
  HiLightBulb,
  HiAcademicCap,
  HiSupport,
  HiShieldCheck,
  HiTrendingUp,
  HiUsers,
  HiStar,
  HiChevronDown,
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiCheck,
} from "react-icons/hi";

const services = [
  {
    icon: HiCode,
    title: "Software & Application Development",
    description:
      "Custom software solutions tailored to your business needs. From web applications to mobile apps, we build scalable and robust solutions.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: HiServer,
    title: "Managed IT Services",
    description:
      "Comprehensive IT management and support services. We handle your infrastructure so you can focus on your core business.",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: HiCube,
    title: "Infrastructure Solutions",
    description:
      "Design, deployment, and management of IT infrastructure. From data centers to cloud solutions, we build reliable foundations.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: HiLightBulb,
    title: "IT Consulting",
    description:
      "Strategic IT consulting to align technology with your business goals. Expert guidance for digital transformation initiatives.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: HiAcademicCap,
    title: "Training & Capacity Building",
    description:
      "Empower your team with cutting-edge technology skills. Customized training programs for lasting impact.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: HiSupport,
    title: "Technical Support & 24/7 Maintenance",
    description:
      "Round-the-clock technical support and system maintenance. We ensure your systems are always running smoothly.",
    gradient: "from-indigo-500 to-blue-500",
  },
];

const benefits = [
  {
    icon: HiShieldCheck,
    title: "Enterprise-Ready",
    description:
      "Built to scale with your business. Our solutions are designed for reliability, security, and performance.",
  },
  {
    icon: HiTrendingUp,
    title: "Client-Centric",
    description:
      "Your success is our priority. We work closely with you to understand your needs and deliver results.",
  },
  {
    icon: HiUsers,
    title: "Scalable Solutions",
    description:
      "Grow without limits. Our infrastructure and applications scale seamlessly as your business expands.",
  },
  {
    icon: HiStar,
    title: "Innovation & Reliability",
    description:
      "Cutting-edge technology meets proven reliability. We combine innovation with stability.",
  },
];

const testimonials = [
  {
    name: "Obilade Kevin",
    role: "CEO, Tech Innovators",
    content:
      "Working with Q-DAS Global has been transformative. Their team delivered a solution that exceeded our expectations. The level of professionalism and technical expertise is outstanding.",
    rating: 5,
  },
  {
    name: "Amina Mohammed",
    role: "CTO, Digital Solutions",
    content:
      "Q-DAS Global doesn't just deliver projects - they deliver value. Their strategic approach and attention to detail made all the difference in our digital transformation journey.",
    rating: 5,
  },
  {
    name: "Chukwudi Okafor",
    role: "IT Director, Enterprise Corp",
    content:
      "The team at Q-DAS Global brought our vision to life with exceptional skill and dedication. Their ongoing support has been invaluable to our operations.",
    rating: 5,
  },
];

const faqs = [
  {
    question: "What is Q-DAS?",
    answer:
      "Q-DAS Global is a leading IT solutions provider specializing in custom software development, infrastructure solutions, and IT consulting services. We partner with businesses to deliver innovative technology solutions that drive growth and efficiency.",
  },
  {
    question: "What services does Q-DAS offer?",
    answer:
      "We offer a comprehensive range of IT services including Software & Application Development, Managed IT Services, Infrastructure Solutions, IT Consulting, Training & Capacity Building, and 24/7 Technical Support & Maintenance.",
  },
  {
    question: "How can Q-DAS help my business?",
    answer:
      "Q-DAS helps businesses leverage technology to achieve their goals. Whether you need custom software, IT infrastructure, or strategic consulting, we provide tailored solutions that align with your business objectives and drive measurable results.",
  },
  {
    question: "What industries does Q-DAS serve?",
    answer:
      "We serve a diverse range of industries including finance, healthcare, government, education, retail, and manufacturing. Our team has deep expertise across multiple sectors and can adapt our solutions to any industry.",
  },
  {
    question: "How do I get started with Q-DAS?",
    answer:
      "Getting started is easy! Simply fill out our contact form or reach out to us directly via email or phone. We'll schedule an initial consultation to understand your needs and propose a tailored solution.",
  },
  {
    question: "What makes Q-DAS different from other IT companies?",
    answer:
      "Our combination of technical expertise, client-centric approach, and proven track record sets us apart. We focus on delivering real business value, not just technology. Our team works as your partner, ensuring success at every stage.",
  },
];

const partners = [
  "Microsoft",
  "AWS",
  "Google Cloud",
  "Huawei",
  "Oracle",
  "IBM",
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-float rounded-full bg-primary-400 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 h-96 w-96 animate-float rounded-full bg-accent-400 blur-3xl stagger-3"></div>
          <div className="absolute right-1/3 top-1/2 h-64 w-64 animate-float rounded-full bg-primary-500 blur-2xl stagger-2"></div>
        </div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        <div className="container relative z-10 mx-auto px-4 pb-20 pt-32 md:pt-40">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mb-6 inline-block animate-fade-in-up rounded-full bg-white/10 px-6 py-2 backdrop-blur-sm">
              <span className="text-sm font-medium tracking-wider text-primary-100">
                INNOVATIVE TECHNOLOGY SOLUTIONS
              </span>
            </div>

            <h1 className="mb-8 animate-fade-in-up text-5xl font-extrabold leading-tight text-white stagger-1 md:text-6xl lg:text-7xl">
              Custom IT Solutions for
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">Teams with Big Goals</span>
                <span className="absolute -bottom-2 left-0 right-0 h-4 bg-gradient-to-r from-accent-400 to-accent-500 blur-sm"></span>
              </span>
            </h1>

            <p className="mx-auto mb-12 max-w-2xl animate-fade-in-up text-lg leading-relaxed text-primary-100 stagger-2 md:text-xl">
              Empowering businesses with innovative technology solutions. From
              software development to infrastructure management, we deliver
              excellence at every step.
            </p>

            <div className="flex animate-fade-in-up flex-col items-center justify-center gap-4 stagger-3 sm:flex-row">
              <a
                href="#contact"
                className="group relative overflow-hidden rounded-xl bg-white px-8 py-4 font-semibold text-primary-900 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 -z-0 bg-gradient-to-r from-accent-400 to-accent-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </a>
              <a
                href="#services"
                className="rounded-xl border-2 border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:bg-white/20"
              >
                Explore Services
              </a>
            </div>

            {/* Stats */}
            <div className="mt-20 grid animate-fade-in-up gap-8 stagger-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="mb-2 text-4xl font-bold text-white">500+</div>
                <div className="text-primary-200">Projects Delivered</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="mb-2 text-4xl font-bold text-white">98%</div>
                <div className="text-primary-200">Client Satisfaction</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="mb-2 text-4xl font-bold text-white">24/7</div>
                <div className="text-primary-200">Technical Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Partners Section */}
      <section className="border-b border-dark-200 bg-white py-12">
        <div className="container mx-auto px-4">
          <p className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-dark-500">
            Powering Innovation Through Partnerships
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0">
            {partners.map((partner) => (
              <div
                key={partner}
                className="text-xl font-bold text-dark-700 transition-colors hover:text-primary-600"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-dark-50 py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-primary-700">
              Our Services
            </span>
            <h2 className="mb-4 text-4xl font-bold text-dark-900 md:text-5xl">
              Custom IT Solutions That
              <br />
              <span className="gradient-text">Drive Growth</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-dark-600">
              We offer comprehensive IT services designed to meet your unique
              business challenges and accelerate your digital transformation.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group animate-fade-in-up overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`flex h-48 items-center justify-center bg-gradient-to-br ${service.gradient} p-8`}
                >
                  <service.icon className="h-24 w-24 text-white opacity-90" />
                </div>
                <div className="p-6">
                  <h3 className="mb-3 text-xl font-bold text-dark-900">
                    {service.title}
                  </h3>
                  <p className="mb-4 leading-relaxed text-dark-600">
                    {service.description}
                  </p>
                  <button className="font-semibold text-primary-600 transition-colors hover:text-primary-700">
                    Learn more →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-primary-700">
              Why Choose Us
            </span>
            <h2 className="mb-4 text-4xl font-bold text-dark-900 md:text-5xl">
              Why Choose Q-DAS Global
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-dark-600">
              We combine technical expertise with a client-first approach to
              deliver solutions that make a real difference.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="animate-fade-in-up group rounded-2xl border-2 border-dark-200 bg-dark-50 p-8 transition-all duration-300 hover:border-primary-500 hover:bg-primary-50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary-100 text-primary-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white">
                  <benefit.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-dark-900">
                  {benefit.title}
                </h3>
                <p className="leading-relaxed text-dark-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-br from-dark-50 to-primary-50 py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-primary-700">
              Testimonials
            </span>
            <h2 className="mb-4 text-4xl font-bold text-dark-900 md:text-5xl">
              What Our Clients Say
              <br />
              <span className="gradient-text">About Q-DAS</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-dark-600">
              Don't just take our word for it. Here's what our clients have to
              say about working with us.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="animate-fade-in-up rounded-2xl border border-dark-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <HiStar key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="mb-6 italic leading-relaxed text-dark-700">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-primary-700 text-lg font-bold text-white">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-dark-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-dark-600">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-primary-700">
              FAQ
            </span>
            <h2 className="mb-4 text-4xl font-bold text-dark-900 md:text-5xl">
              Answers To Questions
              <br />
              <span className="gradient-text">You Might Have</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="animate-fade-in-up overflow-hidden rounded-xl border-2 border-dark-200 bg-white transition-all duration-300 hover:border-primary-500"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-dark-50"
                >
                  <span className="pr-8 font-bold text-dark-900">
                    {faq.question}
                  </span>
                  <HiChevronDown
                    className={`h-6 w-6 flex-shrink-0 text-primary-600 transition-transform duration-300 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="border-t-2 border-dark-100 bg-dark-50 px-6 py-5">
                    <p className="leading-relaxed text-dark-700">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-dark-50 py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="animate-fade-in-up">
              <span className="mb-4 inline-block rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-primary-700">
                Get in Touch
              </span>
              <h2 className="mb-6 text-4xl font-bold text-dark-900 md:text-5xl">
                Let's Build Something
                <br />
                <span className="gradient-text">Amazing Together</span>
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-dark-600">
                Ready to take your business to the next level? Contact us today
                to discuss how we can help you achieve your goals.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                    <HiMail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-bold text-dark-900">Email</h3>
                    <a
                      href="mailto:info@qdasglobal.com"
                      className="text-dark-600 transition-colors hover:text-primary-600"
                    >
                      info@qdasglobal.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                    <HiPhone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-bold text-dark-900">Phone</h3>
                    <a
                      href="tel:+2348000000000"
                      className="text-dark-600 transition-colors hover:text-primary-600"
                    >
                      +234 800 000 0000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                    <HiLocationMarker className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-bold text-dark-900">Location</h3>
                    <p className="text-dark-600">Lagos, Nigeria</p>
                  </div>
                </div>

                <div className="mt-8 rounded-2xl border-2 border-primary-200 bg-primary-50 p-6">
                  <h3 className="mb-3 font-bold text-dark-900">
                    Business Hours
                  </h3>
                  <div className="space-y-2 text-dark-700">
                    <p className="flex items-center gap-2">
                      <HiCheck className="text-primary-600" />
                      Monday - Friday: 8:00am - 6:00pm
                    </p>
                    <p className="flex items-center gap-2">
                      <HiCheck className="text-primary-600" />
                      Saturday: 9:00am - 2:00pm
                    </p>
                    <p className="flex items-center gap-2 opacity-60">
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in-up stagger-2">
              <div className="rounded-2xl border-2 border-dark-200 bg-white p-8 shadow-xl">
                <h3 className="mb-6 text-2xl font-bold text-dark-900">
                  Start The Conversation
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block font-semibold text-dark-800"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full rounded-xl border-2 border-dark-200 bg-dark-50 px-4 py-3 font-medium text-dark-900 transition-all focus:border-primary-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary-100"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block font-semibold text-dark-800"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full rounded-xl border-2 border-dark-200 bg-dark-50 px-4 py-3 font-medium text-dark-900 transition-all focus:border-primary-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary-100"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block font-semibold text-dark-800"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full rounded-xl border-2 border-dark-200 bg-dark-50 px-4 py-3 font-medium text-dark-900 transition-all focus:border-primary-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary-100"
                      placeholder="+234 800 000 0000"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block font-semibold text-dark-800"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={5}
                      className="w-full rounded-xl border-2 border-dark-200 bg-dark-50 px-4 py-3 font-medium text-dark-900 transition-all focus:border-primary-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary-100"
                      placeholder="Tell us about your project..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 px-8 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    <span className="relative z-10">Send Message</span>
                    <div className="absolute inset-0 -z-0 bg-gradient-to-r from-primary-700 to-primary-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
