/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import poster from "./assets/poster.jpg";
import advisorVideo from "./assets/advisor-video.mp4";
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
      <WhyInvestEarly />
      <ChildEducationPlanning />
      <RetirementSection />
      <AdvisorVideo />
      <HowItWorks />
      <Testimonials />
      <LeadForm />
      <Footer />
      <FloatingSocials />
    </div>
  );
}

const Navbar = () => (
  <div className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
      {/* BRAND */}
      <div className="flex items-center gap-3">
        <img
          src="/logo.png"
          alt="Pahadi Finance Funda Logo"
          className="w-20 h-20 object-contain"
        />

        <div className="flex flex-col leading-tight">
          <span className="font-semibold text-lg text-gray-900">
            Sucheta Bhatt
          </span>

          <span className="text-xs text-gray-500">Financial Advisor</span>
        </div>
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
    <motion.div
      initial="hidden"
      animate="show"
      variants={stagger}
      className="max-w-7xl mx-auto px-6 text-center"
    >
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-200/30 blur-3xl rounded-full pointer-events-none"></div>

      <motion.h1
        variants={fadeUp}
        className="text-4xl md:text-5xl font-bold leading-tight text-gray-900"
      >
        Grow Your Wealth. <br />
        Secure Your Family’s Future.
      </motion.h1>
      <motion.div variants={fadeUp} className="mt-8 flex justify-center">
        <img
          src={poster}
          alt="Pahadi Finance Funda"
          className="rounded-3xl shadow-2xl border border-gray-200 max-w-4xl w-full object-cover"
        />
      </motion.div>

      <motion.p variants={fadeUp} className="mt-4 text-sm text-gray-500">
        Trusted by 50+ families • 5+ years experience • Personalized financial
        guidance
      </motion.p>

      <motion.p
        variants={fadeUp}
        className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
      >
        Secure your family’s future with smart investments, life insurance,
        retirement planning, and wealth-building strategies designed around your
        goals—not confusion.
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
            if (window.gtag) {
              window.gtag("event", "whatsapp_click", {
                event_category: "Lead",
                event_label: "Hero WhatsApp Button",
                value: 1,
              });
            }

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
const WhyInvestEarly = () => (
  <div className="py-24 bg-white">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold">Why People Should Invest Early</h2>

      <p className="text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed">
        The younger and healthier we are, the more affordable investments
        become. Starting early gives your money more time to grow through
        compounding, helping you build wealth faster while reducing financial
        stress later in life.
      </p>
    </div>
  </div>
);

const ChildEducationPlanning = () => (
  <div className="py-24 bg-gray-50">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold">Child Education Planning</h2>

      <p className="text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed">
        Investing early for your child’s education helps beat rising education
        inflation and avoids future financial burden. Small monthly investments
        today can create a strong education fund tomorrow—ensuring your child’s
        dreams are never limited by money.
      </p>
    </div>
  </div>
);

const RetirementSection = () => (
  <div className="py-24 bg-white">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold">Retirement & Financial Freedom</h2>

      <p className="text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed">
        There’s no greater peace than knowing your financial future does not
        depend on your job, your boss, or the economy. Retirement planning helps
        you achieve true financial independence and gives you the freedom to
        live life on your own terms.
      </p>
    </div>
  </div>
);
const AdvisorVideo = () => (
  <div className="py-24 bg-gray-50">
    <div className="max-w-5xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold">Meet Your Financial Advisor</h2>

      <p className="text-gray-500 mt-3 mb-10">
        Personalized guidance to help secure your future.
      </p>

      <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
        <video
          src={advisorVideo}
          autoPlay
          muted
          loop
          playsInline
          controls
          className="w-full"
        />
      </div>
    </div>
  </div>
);

const TrustStrip = () => (
  <div className="py-12 border-y border-gray-200 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
      <div>
        <p className="text-2xl font-bold text-blue-900">5+ Years</p>
        <p className="text-sm text-gray-500 mt-1">Experience</p>
      </div>
      <div>
        <p className="text-2xl font-bold text-blue-900">50+</p>
        <p className="text-sm text-gray-500 mt-1">Clients Served</p>
      </div>
      <div>
        <p className="text-2xl font-bold text-blue-900">₹20L+</p>
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
    short: "Start small and grow your wealth consistently.",
    long: "Mutual Funds and SIPs help you invest regularly with discipline, allowing your money to grow through compounding and long-term wealth creation.",
  },
  {
    icon: <Wallet />,
    title: "SWP (Passive Income)",
    short: "Create regular monthly income from investments.",
    long: "A Systematic Withdrawal Plan allows you to withdraw fixed income monthly while keeping your remaining capital invested and growing.",
  },
  {
    icon: <ShieldCheck />,
    title: "Life & Term Insurance",
    short: "Protect your family’s future financially.",
    long: "Term insurance ensures your loved ones stay financially secure with high life coverage at affordable premiums and valuable tax benefits.",
  },
  {
    icon: <PieChart />,
    title: "ULIP Plans",
    short: "Insurance + Investment in one smart plan.",
    long: "ULIPs combine life cover and investment flexibility, allowing fund switching between equity, debt, and balanced funds while building tax-efficient wealth.",
  },
  {
    icon: <ShieldCheck />,
    title: "Health Insurance",
    short: "Protect savings from medical emergencies.",
    long: "Health insurance ensures quality treatment without financial stress by covering hospitalization, treatments, and rising healthcare costs.",
  },
  {
    icon: <PieChart />,
    title: "Retirement Planning",
    short: "Build financial freedom for your future.",
    long: "Retirement planning helps create a strong corpus so your future depends on your wealth—not your job, boss, or the economy.",
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
    name: "Rachita Sharma",
    role: "Government Employee",
    text: "I always delayed investing because it felt confusing. Sucheta made everything simple and helped me start SIPs with confidence. Now I finally feel in control of my finances.",
  },
  {
    name: "Mahesh Naithani",
    role: "Government Employee",
    text: "I wanted a clear plan for my future but didn’t know where to begin. The guidance I received was honest, practical, and easy to follow. Highly recommended.",
  },
  {
    name: "Rahul Bhatt",
    role: "Technical Engineer",
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

  const handleSubmit = (e) => {
    e.preventDefault(); // 🔥 important

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

    const whatsappUrl = `https://wa.me/917703809497?text=${encodeURIComponent(message)}`;
    if (window.gtag) {
      window.gtag("event", "generate_lead", {
        event_category: "Lead",
        event_label: "Lead Form Submission",
        value: 1,
      });
    }

    window.open(whatsappUrl, "_blank");

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
        <form
          onSubmit={handleSubmit} // ✅ use form submit
          className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100"
        >
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
              type="submit" // ✅ important
              className="bg-blue-900 text-white py-3 rounded-xl hover:scale-105 transition font-medium"
            >
              Get My Free Plan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
const FloatingSocials = () => (
  <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
    {/* WhatsApp */}
    <a
      href="https://wa.me/917703809497?text=Hi%20Sucheta,%20I%20want%20a%20financial%20plan"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        if (window.gtag) {
          window.gtag("event", "whatsapp_click", {
            event_category: "Lead",
            event_label: "Floating WhatsApp Button",
            value: 1,
          });
        }
      }}
      className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition"
    >
      <Phone size={20} />
    </a>

    {/* Instagram */}
    <a
      href="https://www.instagram.com/suchijoshi86/"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gradient-to-br from-pink-500 to-yellow-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition"
    >
      <FaInstagram size={20} />
    </a>

    {/* Facebook */}
    <a
      href="https://www.facebook.com/sucheta.joshi.14"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition"
    >
      <FaFacebookF size={20} />
    </a>
  </div>
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
  <div id="services" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold">
        Financial Solutions Tailored for You
      </h2>

      <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
        Hover on each card to explore how each financial solution helps secure
        your future and grow your wealth.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
        {services.map((service, i) => (
          <div key={i} className="group [perspective:1000px] h-[320px]">
            <div className="relative h-full w-full rounded-2xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              {/* FRONT SIDE */}
              <div className="absolute inset-0 bg-white border border-gray-200 rounded-2xl shadow-md p-8 [backface-visibility:hidden] flex flex-col justify-center items-center text-center">
                <div className="mb-5 w-14 h-14 flex items-center justify-center rounded-xl bg-blue-50 text-blue-900">
                  {service.icon}
                </div>

                <h3 className="text-xl font-semibold">{service.title}</h3>

                <p className="text-sm text-gray-500 mt-3">{service.short}</p>
              </div>

              {/* BACK SIDE */}
              <div className="absolute inset-0 bg-blue-900 text-white rounded-2xl shadow-xl p-8 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center text-center">
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>

                <p className="text-sm leading-relaxed text-blue-50">
                  {service.long}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
