/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  ShieldCheck,
  TrendingUp,
  PieChart,
  Wallet,
  Phone,
  Star,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function App() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      <Navbar />
      <Hero />
      <TrustStrip />
      <Services />
      <HowItWorks />
      <Testimonials />
      <LeadForm />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

const Navbar = () => (
  <div className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      {/* BRAND */}
      <div className="flex flex-col leading-tight">
        <span className="font-semibold text-lg text-gray-900">
          Sucheta Bhatt
        </span>
        <span className="text-xs text-gray-500">Financial Advisor</span>
      </div>

      {/* NAV LINKS */}
      <div className="hidden md:flex gap-8 text-sm text-gray-600">
        <a href="#services" className="hover:text-blue-900 transition">
          Services
        </a>
        <a href="#process" className="hover:text-blue-900 transition">
          Process
        </a>
        <a href="#testimonials" className="hover:text-blue-900 transition">
          Testimonials
        </a>
      </div>

      {/* CTA */}
      <button
        onClick={() => {
          const el = document.getElementById("lead-form");
          if (el) {
            const yOffset = -80;
            const y =
              el.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({ top: y, behavior: "smooth" });
          }
        }}
        className="bg-blue-900 text-white px-5 py-2 rounded-xl shadow-sm hover:shadow-md hover:scale-105 transition"
      >
        Book Free Consultation
      </button>
    </div>
  </div>
);

const Hero = () => (
  <div className="pt-32 pb-24 bg-gradient-to-b from-blue-50 via-white to-white relative overflow-hidden">
    {" "}
    <motion.div
      initial="hidden"
      animate="show"
      variants={stagger}
      className="max-w-7xl mx-auto px-6 text-center"
    >
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-200/30 blur-3xl rounded-full pointer-events-none"></div>{" "}
      <motion.h1
        variants={fadeUp}
        className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
      >
        Grow Your Wealth. Secure Your Future.
      </motion.h1>
      {/* TRUST LINE (cleaner, less repetitive) */}
      <motion.p variants={fadeUp} className="mt-4 text-sm text-gray-500">
        Trusted by 500+ clients • 10+ years experience
      </motion.p>
      <motion.p
        variants={fadeUp}
        className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto"
      >
        Get personalized guidance on SIPs, Mutual Funds, Insurance & Retirement
        planning — designed to help you build wealth without confusion.
      </motion.p>
      <motion.div
        variants={fadeUp}
        className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
      >
        <button
          onClick={() => {
            const el = document.getElementById("lead-form");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="bg-blue-900 text-white px-6 py-3 rounded-xl shadow-md hover:scale-105 transition"
        >
          Get Free Financial Plan
        </button>

        <button
          onClick={() => {
            window.location.href =
              "https://wa.me/917703809497?text=Hi%20Sucheta,%20I%20want%20to%20discuss%20my%20financial%20plan";
          }}
          className="border border-gray-300 px-6 py-3 rounded-xl hover:bg-gray-100 transition"
        >
          Talk to Sucheta →
        </button>
      </motion.div>
      <motion.p variants={fadeUp} className="mt-4 text-sm text-gray-500">
        No spam. No pressure. Takes less than 60 seconds.
      </motion.p>
    </motion.div>
  </div>
);

const TrustStrip = () => (
  <div className="py-12 border-y border-gray-200 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
      <div>
        <p className="text-2xl font-bold text-blue-900">10+ Years</p>
        <p className="text-sm text-gray-500 mt-1">Experience</p>
      </div>
      <div>
        <p className="text-2xl font-bold text-blue-900">500+</p>
        <p className="text-sm text-gray-500 mt-1">Clients Served</p>
      </div>
      <div>
        <p className="text-2xl font-bold text-blue-900">₹50k+</p>
        <p className="text-sm text-gray-500 mt-1">Assets Managed</p>
      </div>
      <div>
        <p className="text-2xl font-bold text-blue-900">4.9★</p>
        <p className="text-sm text-gray-500 mt-1">Client Satisfaction</p>
      </div>
    </div>
  </div>
);

const services = [
  {
    icon: <TrendingUp />,
    title: "Mutual Funds & SIP",
    desc: "Start small and grow your wealth consistently over time",
  },
  {
    icon: <Wallet />,
    title: "SWP (Passive Income)",
    desc: "Turn your investments into a reliable monthly income",
  },
  {
    icon: <ShieldCheck />,
    title: "Life & Term Insurance",
    desc: "Ensure your family stays financially secure, no matter what",
  },
  {
    icon: <PieChart />,
    title: "ULIP Plans",
    desc: "Combine insurance and investment in one disciplined plan",
  },
  {
    icon: <ShieldCheck />,
    title: "Health Insurance",
    desc: "Avoid financial stress during unexpected medical expenses",
  },
  {
    icon: <PieChart />,
    title: "Retirement Planning",
    desc: "Build a retirement corpus so you never depend on anyone",
  },
];

const steps = [
  {
    title: "Understand Your Goals",
    desc: "We start by understanding your income, expenses, and financial goals",
  },
  {
    title: "Create a Plan",
    desc: "Get a personalized strategy tailored to your needs and risk profile",
  },
  {
    title: "Start Investing",
    desc: "Invest in the right mix of SIPs, funds, and insurance products",
  },
  {
    title: "Track & Optimize",
    desc: "Regular reviews to keep your plan aligned with your goals",
  },
];

const HowItWorks = () => (
  <div id="process" className="py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold">How It Works</h2>
      <p className="text-gray-500 mt-3">
        A simple, guided process to help you take control of your finances
      </p>

      <div className="grid md:grid-cols-4 gap-8 mt-12">
        {steps.map((step, i) => (
          <div
            key={i}
            className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100"
          >
            <div className="text-blue-900 font-bold text-xl">Step {i + 1}</div>
            <h3 className="mt-3 font-semibold">{step.title}</h3>
            <p className="text-sm text-gray-500 mt-2">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);
const testimonials = [
  {
    name: "Rahul Mehta",
    role: "Software Engineer, Delhi",
    text: "I always delayed investing because it felt confusing. Sucheta made everything simple and helped me start SIPs with confidence. Now I finally feel in control of my finances.",
  },
  {
    name: "Priya Sharma",
    role: "Doctor, Gurgaon",
    text: "I wanted a clear plan for my future but didn’t know where to begin. The guidance I received was honest, practical, and easy to follow. Highly recommended.",
  },
  {
    name: "Amit Verma",
    role: "Business Owner, Noida",
    text: "Very professional and trustworthy. From insurance to investments, everything was explained clearly without any pressure. I now have a proper financial plan in place.",
  },
];

const Testimonials = () => (
  <div id="testimonials" className="py-24">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold">What Clients Say</h2>
      <p className="text-gray-500 mt-3">
        Real experiences from people who took control of their finances
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="p-6 border border-gray-100 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div className="flex gap-1 text-yellow-500 mb-3 justify-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">“{t.text}”</p>

            <div className="mt-5 font-semibold">{t.name}</div>
            <div className="text-xs text-gray-500">{t.role}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const LeadForm = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const { name, phone, email, service } = form;

    if (!name || !phone) {
      alert("Please fill Name and Phone");
      return;
    }

    const message = `Hi Sucheta, I want a financial plan.

Name: ${name}
Phone: ${phone}
Email: ${email}
Service: ${service}

Sent from Website`;

    const whatsappUrl = `https://wa.me/917703809497?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank");
    alert("Redirecting you to WhatsApp...");

    setForm({
      name: "",
      phone: "",
      email: "",
      service: "",
    });
  };

  return (
    <div id="lead-form" className="py-24 bg-gray-50">
      <div className="max-w-xl mx-auto px-6">
        <div className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
          <h2 className="text-2xl font-bold text-center">
            Get Your Free Financial Plan
          </h2>

          <p className="text-center text-gray-500 text-sm mt-2">
            Takes less than 60 seconds. No spam. No pressure.
          </p>

          <div className="mt-6 flex flex-col gap-4">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="input"
            />

            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="input"
            />

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="input"
            />

            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="input"
            >
              <option value="">Select what you need help with</option>
              <option>Mutual Funds & SIP</option>
              <option>SWP (Passive Income)</option>
              <option>Life / Term Insurance</option>
              <option>Health Insurance</option>
              <option>Retirement Planning</option>
            </select>

            <button
              onClick={handleSubmit}
              className="bg-blue-900 text-white py-3 rounded-xl hover:scale-105 transition font-medium"
            >
              Get My Free Plan
            </button>

            <p className="text-xs text-gray-500 text-center">
              Limited free consultations available this week
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
const WhatsAppButton = () => (
  <a
    href="https://wa.me/917703809497?text=Hi%20Sucheta,%20I%20want%20a%20financial%20plan"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-xl hover:scale-110 transition-all duration-300"
  >
    <Phone />
  </a>
);

const Footer = () => (
  <div className="py-10 border-t border-gray-100 text-center text-sm text-gray-500">
    <p>© 2026 Sucheta Bhatt. All rights reserved.</p>
    <p className="mt-2">
      Financial Advisor | Mutual Funds | Insurance | SIP Planning
    </p>
  </div>
);

const Services = () => (
  <div id="services" className="py-24">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold">
        Financial Solutions Tailored for You
      </h2>

      <p className="text-gray-500 mt-3">
        Simple, transparent strategies to grow and protect your wealth
      </p>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
      >
        {services.map((s, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className="p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition"
          >
            <div className="mb-4 w-10 h-10 flex items-center justify-center rounded-lg bg-blue-50 text-blue-900">
              {s.icon}
            </div>{" "}
            <h3 className="font-semibold">{s.title}</h3>
            <p className="text-sm text-gray-500 mt-2">{s.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </div>
);
