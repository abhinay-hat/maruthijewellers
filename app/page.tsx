"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import {
  TrendingUp,
  TrendingDown,
  ArrowUp,
  ArrowDown,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Award,
  Gem,
  HeartHandshake,
  Calendar,
  MapPin,
  Phone,
  Timer,
  MessageCircle,
  Instagram,
  IndianRupee,
  RefreshCw,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import { useGoldPrice, formatIndianPrice, formatPercentChange } from "@/hooks/useGoldPrice";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const fadeInDown = {
  hidden: { opacity: 0, y: -60 },
  visible: { opacity: 1, y: 0 },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="flex flex-col w-full bg-[var(--dark-800)] overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gold-gradient z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Header */}
      <Header isScrolled={isScrolled} />

      {/* Live Gold Rate Bar */}
      <LiveGoldRate />

      {/* Hero Section */}
      <HeroSection />

      {/* Collections Section */}
      <CollectionsSection />

      {/* Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* About Section */}
      <AboutSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </main>
  );
}

function Header({ isScrolled }: { isScrolled: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-40 flex items-center justify-between w-full h-[90px] px-6 md:px-[100px] border-b transition-all duration-300 ${
        isScrolled
          ? "bg-[#0D0D0D]/95 backdrop-blur-lg border-[var(--dark-500)]"
          : "bg-transparent border-transparent"
      }`}
    >
      {/* Logo Section */}
      <motion.div
        className="flex items-center gap-3 cursor-pointer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.div
          className="flex items-center justify-center w-12 h-12 rounded-3xl bg-gold-gradient"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="font-cormorant text-lg font-bold text-[var(--dark-800)]">
            MJ
          </span>
        </motion.div>
        <div className="flex flex-col">
          <span className="font-cormorant text-lg md:text-[22px] font-semibold text-[var(--gold-light)] tracking-[4px] md:tracking-[6px]">
            MARUTHI
          </span>
          <span className="font-inter text-[9px] md:text-[11px] font-medium text-[var(--text-accent)] tracking-[3px] md:tracking-[4px]">
            JEWELLERS
          </span>
        </div>
      </motion.div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-10">
        {["Home", "Collections", "About", "Contact"].map((item, index) => (
          <motion.a
            key={item}
            href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
            className={`font-inter text-[13px] tracking-[1px] relative group ${
              index === 0
                ? "font-semibold text-[var(--gold-light)]"
                : "font-normal text-[var(--text-light)]"
            }`}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            {item}
            <motion.span
              className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-gradient group-hover:w-full transition-all duration-300"
            />
          </motion.a>
        ))}
      </nav>

      {/* Gold Rate Button */}
      <motion.button
        className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-3xl border border-[var(--gold-primary)] hover-glow"
        style={{
          background: "linear-gradient(135deg, #D4AF3720 0%, #B8860B20 100%)",
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <IndianRupee className="w-4 h-4 text-[var(--gold-light)]" />
        <span className="font-inter text-[13px] font-medium text-[var(--gold-light)]">
          Today&apos;s Gold Rate
        </span>
      </motion.button>

      {/* Mobile Menu Toggle */}
      <motion.button
        className="md:hidden p-2"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        whileTap={{ scale: 0.9 }}
      >
        {mobileMenuOpen ? (
          <X className="w-6 h-6 text-[var(--gold-light)]" />
        ) : (
          <Menu className="w-6 h-6 text-[var(--gold-light)]" />
        )}
      </motion.button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[var(--dark-800)]/95 backdrop-blur-lg border-b border-[var(--dark-500)] md:hidden"
          >
            <nav className="flex flex-col p-6 gap-4">
              {["Home", "Collections", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
                  className="font-inter text-base text-[var(--text-light)] py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function LiveGoldRate() {
  const { data, isLoading, getTimeSinceUpdate, refetch } = useGoldPrice({
    refreshInterval: 5000, // Update every 5 seconds
  });
  const [priceFlash, setPriceFlash] = useState(false);
  const prevPrice = useRef(data?.price24k);

  useEffect(() => {
    if (data?.price24k && prevPrice.current !== data.price24k) {
      setPriceFlash(true);
      setTimeout(() => setPriceFlash(false), 500);
      prevPrice.current = data.price24k;
    }
  }, [data?.price24k]);

  const isPositive = (data?.changePercent ?? 0) >= 0;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="flex items-center justify-center gap-4 md:gap-6 w-full py-4 md:py-5 px-4 md:px-[100px] mt-[90px] overflow-hidden"
      style={{
        background: "linear-gradient(90deg, #D4AF3715 0%, #D4AF3708 50%, #D4AF3715 100%)",
      }}
    >
      {/* Live Indicator */}
      <div className="flex items-center gap-2">
        <motion.div
          className="w-2 h-2 rounded-full bg-[var(--green-whatsapp)]"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <span className="font-inter text-xs text-[var(--green-whatsapp)] font-medium hidden sm:inline">
          LIVE
        </span>
      </div>

      {isPositive ? (
        <TrendingUp className="w-5 h-5 text-[var(--gold-primary)]" />
      ) : (
        <TrendingDown className="w-5 h-5 text-[var(--red-negative)]" />
      )}

      <span className="font-inter text-xs md:text-sm font-semibold text-[var(--gold-primary)] tracking-[1px]">
        Gold (24K):
      </span>

      {/* Price Display */}
      {isLoading ? (
        <div className="w-32 h-6 skeleton rounded" />
      ) : (
        <motion.span
          className={`font-cormorant text-xl md:text-2xl font-medium transition-colors duration-300 ${
            priceFlash ? "text-[var(--gold-primary)]" : "text-white"
          }`}
          animate={priceFlash ? { scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 0.3 }}
        >
          ₹{data?.price24k?.toLocaleString("en-IN")}/g
        </motion.span>
      )}

      {/* Change Badge */}
      {data && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-2xl border ${
            isPositive
              ? "border-[var(--green-whatsapp)] bg-[#25D36620]"
              : "border-[var(--red-negative)] bg-[#EF444420]"
          }`}
        >
          {isPositive ? (
            <ArrowUp className="w-3 h-3 text-[var(--green-whatsapp)]" />
          ) : (
            <ArrowDown className="w-3 h-3 text-[var(--red-negative)]" />
          )}
          <span
            className={`font-inter text-xs font-semibold ${
              isPositive ? "text-[var(--green-whatsapp)]" : "text-[var(--red-negative)]"
            }`}
          >
            {formatPercentChange(data.changePercent)}
          </span>
        </motion.div>
      )}

      {/* Last Updated */}
      <div className="hidden md:flex items-center gap-2">
        <span className="font-inter text-[11px] font-normal text-[var(--text-subtle)]">
          {getTimeSinceUpdate()}
        </span>
        <motion.button
          onClick={refetch}
          whileHover={{ rotate: 180 }}
          transition={{ duration: 0.3 }}
          className="p-1 hover:bg-white/10 rounded-full"
        >
          <RefreshCw className="w-3 h-3 text-[var(--text-subtle)]" />
        </motion.button>
      </div>

      {/* Additional Prices - Scrolling on mobile */}
      <div className="hidden lg:flex items-center gap-6 ml-4 pl-4 border-l border-[var(--dark-500)]">
        <div className="flex items-center gap-2">
          <span className="font-inter text-xs text-[var(--text-muted)]">22K:</span>
          <span className="font-inter text-sm text-white">
            ₹{data?.price22k?.toLocaleString("en-IN")}/g
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-inter text-xs text-[var(--text-muted)]">Silver:</span>
          <span className="font-inter text-sm text-white">
            ₹{data?.silverPrice}/g
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex items-center justify-between w-full min-h-[750px] px-6 md:px-[100px] py-[60px] overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 150% 150% at 80% 50%, #1A1410 0%, #0D0D0D 70%, #080808 100%)",
      }}
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[var(--gold-primary)] rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <motion.div
        className="flex flex-col gap-7 w-full md:w-[580px] z-10"
        style={{ y, opacity }}
      >
        {/* Badge */}
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-2.5 px-5 py-2.5 rounded-3xl border border-[#D4AF3740] w-fit animate-border-glow"
          style={{ background: "#D4AF3710" }}
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-4 h-4 text-[var(--gold-primary)]" />
          </motion.div>
          <span className="font-inter text-[12px] md:text-[13px] font-semibold text-[var(--gold-primary)] tracking-[2px]">
            The Art of Fine Jewellery
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-cormorant text-4xl md:text-[58px] font-normal text-white leading-[1.15]"
        >
          Discover Refined{" "}
          <span className="text-gradient-gold">Gold & Silver</span> Jewellery
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-inter text-base md:text-[17px] font-normal text-[var(--text-secondary)] leading-[1.7] max-w-[500px]"
        >
          Crafted with precision, elegance, and timeless design. Experience
          purity and craftsmanship that has served generations with honesty and
          excellence.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap items-center gap-4 md:gap-5"
        >
          <Link href="#collections">
            <motion.div
              className="flex items-center gap-2.5 px-6 md:px-9 py-4 rounded-[30px] bg-gold-gradient group"
              style={{ boxShadow: "0 4px 12px #D4AF3740" }}
              whileHover={{ scale: 1.05, boxShadow: "0 8px 24px #D4AF3760" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="font-inter text-sm font-semibold text-[var(--dark-800)] tracking-[1px]">
                Explore Collections
              </span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-4 h-4 text-[var(--dark-800)]" />
              </motion.div>
            </motion.div>
          </Link>

          <motion.a
            href="https://maps.google.com/?q=Maruthi+Jewellers+Warangal"
            target="_blank"
            className="flex items-center gap-2 px-6 md:px-9 py-4 rounded-[30px] border border-[#D4AF3760]"
            style={{ background: "#D4AF3708" }}
            whileHover={{ scale: 1.05, borderColor: "#D4AF37" }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="font-inter text-sm font-medium text-[var(--gold-primary)] tracking-[1px]">
              Visit Store
            </span>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 100 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="hidden lg:block relative w-[520px] h-[620px] rounded-3xl border-2 border-[#D4AF3730] overflow-hidden image-zoom hover-glow"
      >
        <motion.div
          className="w-full h-full"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1080&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #D4AF3710 0%, transparent 50%, #D4AF3710 100%)",
          }}
        />

        {/* Floating Sparkles */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[var(--gold-primary)] text-2xl"
            style={{
              left: `${20 + i * 20}%`,
              top: `${20 + i * 15}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            ✦
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function CollectionsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const collections = [
    {
      title: "Silver Jewellery",
      image:
        "https://images.unsplash.com/photo-1726825990567-73f6d3597cdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      href: "/collections/silver",
    },
    {
      title: "Gold Jewellery",
      image:
        "https://images.unsplash.com/photo-1644341129908-6477e0157037?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      featured: true,
      href: "/collections/gold",
    },
    {
      title: "Diamond Jewellery",
      image:
        "https://images.unsplash.com/photo-1668619322652-ccea8fa84b8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      href: "/collections/diamond",
    },
  ];

  return (
    <section
      ref={ref}
      id="collections"
      className="flex flex-col items-center gap-[60px] w-full px-6 md:px-[100px] py-[80px] md:py-[100px]"
      style={{
        background:
          "linear-gradient(180deg, #0A0A0A 0%, #0D0D0D 50%, #0A0A0A 100%)",
      }}
    >
      {/* Header */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex flex-col items-center gap-4"
      >
        <motion.span
          variants={fadeInDown}
          className="font-inter text-[13px] font-medium text-[var(--gold-primary)] tracking-[4px]"
        >
          OUR COLLECTIONS
        </motion.span>
        <motion.h2
          variants={fadeInUp}
          className="font-cormorant text-3xl md:text-[52px] font-normal text-white text-center"
        >
          Maruthi Jewellers Collection
        </motion.h2>
        {/* Ornament */}
        <motion.div variants={scaleIn} className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--gold-primary)]" />
          <motion.div
            className="w-10 h-px bg-[var(--gold-primary)]"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--gold-primary)]" />
        </motion.div>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 w-full max-w-[1240px]"
      >
        {collections.map((collection, index) => (
          <motion.div key={index} variants={fadeInUp}>
            <CollectionCard {...collection} index={index} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function CollectionCard({
  title,
  image,
  featured = false,
  index,
  href,
}: {
  title: string;
  image: string;
  featured?: boolean;
  index: number;
  href: string;
}) {
  return (
    <Link href={href}>
      <motion.div
        className={`relative flex flex-col rounded-[20px] overflow-hidden cursor-pointer hover-lift ${
          featured ? "lg:scale-105" : ""
        }`}
        style={{
          background: featured
            ? "linear-gradient(135deg, #151515 0%, #1A1510 100%)"
            : "#121212",
          boxShadow: featured
            ? "0 8px 24px #D4AF3720, 0 4px 16px #00000040"
            : "0 4px 16px #00000030",
        }}
        whileHover={{ y: -10 }}
      >
        {/* Image */}
        <div className="relative w-full h-[280px] overflow-hidden">
          <motion.div
            className="w-full h-full"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
          {featured && (
            <div
              className="absolute inset-0 animate-shimmer"
              style={{
                background:
                  "linear-gradient(135deg, #D4AF3710 0%, #D4AF3730 50%, #D4AF3710 100%)",
              }}
            />
          )}
          {/* Overlay on hover */}
          <motion.div
            className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0"
            whileHover={{ opacity: 1 }}
          >
            <span className="font-inter text-sm font-semibold text-white tracking-[2px]">
              VIEW COLLECTION
            </span>
          </motion.div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-3 p-7 w-full">
          <h3 className="font-cormorant text-[26px] font-medium text-white">
            {title}
          </h3>
          <motion.div
            className="flex items-center gap-2.5 group"
            whileHover={{ x: 5 }}
          >
            <span className="font-inter text-[13px] font-semibold text-[var(--gold-primary)] tracking-[1px]">
              Explore Collection
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-[var(--gold-primary)] transition-transform group-hover:translate-x-1" />
          </motion.div>
        </div>

        {/* Featured badge */}
        {featured && (
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gold-gradient">
            <span className="font-inter text-[10px] font-bold text-[var(--dark-800)] tracking-[1px]">
              POPULAR
            </span>
          </div>
        )}
      </motion.div>
    </Link>
  );
}

function WhyChooseUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const features = [
    {
      icon: ShieldCheck,
      title: "Purity Guaranteed",
      description:
        "100% hallmarked gold and certified silver jewellery with BIS certification.",
    },
    {
      icon: Award,
      title: "Certified Jewellery",
      description:
        "Authentic diamonds and quality-checked ornaments with proper certification.",
    },
    {
      icon: Gem,
      title: "Expert Craftsmanship",
      description:
        "Designed by skilled artisans with fine detailing and traditional techniques.",
    },
    {
      icon: HeartHandshake,
      title: "Trusted Legacy",
      description:
        "Serving generations with honesty, excellence, and customer satisfaction.",
    },
  ];

  return (
    <section
      ref={ref}
      className="flex flex-col items-center gap-[60px] w-full px-6 md:px-[100px] py-[80px] md:py-[100px] bg-[var(--dark-750)]"
    >
      {/* Header */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex flex-col items-center gap-4 text-center"
      >
        <motion.span
          variants={fadeInDown}
          className="font-inter text-[13px] font-medium text-[var(--gold-primary)] tracking-[4px]"
        >
          WHY CHOOSE US
        </motion.span>
        <motion.h2
          variants={fadeInUp}
          className="font-cormorant text-3xl md:text-[48px] font-normal text-white"
        >
          Why Choose Maruthi Jewellers
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="font-inter text-base md:text-[17px] font-normal text-[#8A8A8A]"
        >
          A legacy of trust, purity, and timeless craftsmanship
        </motion.p>
        <motion.div variants={scaleIn} className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--gold-primary)]" />
          <div className="w-10 h-px bg-[var(--gold-primary)]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--gold-primary)]" />
        </motion.div>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[1240px]"
      >
        {features.map((feature, index) => (
          <motion.div key={index} variants={fadeInUp}>
            <FeatureCard {...feature} index={index} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  index: number;
}) {
  return (
    <motion.div
      className="flex flex-col items-center gap-6 px-6 py-9 rounded-[20px] border border-[var(--dark-400)] hover-lift hover-glow cursor-pointer"
      style={{
        background: "#151515",
      }}
      whileHover={{ borderColor: "#D4AF3760" }}
    >
      {/* Icon */}
      <motion.div
        className="flex items-center justify-center w-14 h-14 rounded-[28px] border border-[#D4AF3730]"
        style={{
          background: "linear-gradient(135deg, #D4AF3720 0%, #B8860B10 100%)",
        }}
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        <Icon className="w-6 h-6 text-[var(--gold-primary)]" />
      </motion.div>

      {/* Title */}
      <h3 className="font-cormorant text-[22px] font-medium text-white text-center">
        {title}
      </h3>

      {/* Description */}
      <p className="font-inter text-sm font-normal text-[var(--text-muted)] leading-[1.6] text-center">
        {description}
      </p>
    </motion.div>
  );
}

function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      id="about"
      className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-[100px] w-full px-6 md:px-[100px] py-[80px] md:py-[100px]"
      style={{
        background:
          "radial-gradient(ellipse 120% 120% at 20% 50%, #141210 0%, #0A0A0A 60%, #080808 100%)",
      }}
    >
      {/* Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex flex-col gap-7 w-full lg:w-[520px]"
      >
        <motion.span
          variants={fadeInLeft}
          className="font-inter text-[13px] font-medium text-[var(--gold-primary)] tracking-[4px]"
        >
          ABOUT MARUTHI JEWELLERS
        </motion.span>

        <motion.h2
          variants={fadeInLeft}
          className="font-cormorant text-3xl md:text-[44px] font-normal text-white leading-[1.2]"
        >
          A Legacy of Trust, Purity & Fine Craftsmanship
        </motion.h2>

        <motion.p
          variants={fadeInLeft}
          className="font-inter text-base font-normal text-[#8A8A8A] leading-[1.8]"
        >
          Maruthi Jewellers has been a trusted name in jewellery for over
          decades, offering exquisitely crafted gold, silver, and diamond
          ornaments that celebrate tradition and elegance.
        </motion.p>

        <motion.p
          variants={fadeInLeft}
          className="font-inter text-base font-normal text-[#8A8A8A] leading-[1.8]"
        >
          Every piece reflects our commitment to purity, transparency, and
          timeless design. From everyday wear to bridal collections, we take
          pride in creating jewellery that becomes part of your most cherished
          moments.
        </motion.p>

        {/* Stats */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap gap-6 md:gap-10 pt-8 border-t border-[#D4AF3760]"
        >
          {[
            { value: "100%", label: "Hallmarked Gold" },
            { value: "BIS", label: "Certified" },
            { value: "1000+", label: "Happy Customers" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="flex flex-col gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <span className="font-cormorant text-3xl md:text-[40px] font-normal text-[var(--gold-primary)]">
                {stat.value}
              </span>
              <span className="font-inter text-[12px] md:text-[13px] font-normal text-[var(--text-muted)] tracking-[1px]">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Established Badge */}
        <motion.div
          variants={fadeInUp}
          className="flex items-center gap-3 px-5 py-4 rounded-xl border border-[#D4AF3720] w-fit"
          style={{ background: "#D4AF3708" }}
        >
          <Calendar className="w-[18px] h-[18px] text-[var(--gold-primary)]" />
          <span className="font-inter text-[12px] md:text-[13px] font-medium text-[var(--gold-primary)] tracking-[0.5px]">
            Established 1995 • 30+ Years of Excellence
          </span>
        </motion.div>

        {/* Certification Badges */}
        <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
          {[
            { icon: ShieldCheck, text: "BIS Hallmark" },
            { icon: Award, text: "916 Gold" },
          ].map((badge, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#D4AF3730] hover-gold-border"
              style={{ background: "#151515" }}
              whileHover={{ scale: 1.05 }}
            >
              <badge.icon className="w-4 h-4 text-[var(--gold-primary)]" />
              <span className="font-inter text-xs font-medium text-[#F5F5F0]">
                {badge.text}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-[500px] h-[400px] lg:h-[520px] rounded-[20px] border-2 border-[#D4AF3720] overflow-hidden image-zoom hover-glow"
      >
        <motion.div
          className="w-full h-full"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=1080&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </motion.div>
    </section>
  );
}

function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const contactCards = [
    {
      icon: MapPin,
      title: "Store Address",
      content:
        "H.no 8-2-1 133 134 & 135\nLaxmi Narayana Jakota Complex\nOld Beet Bazar Warangal Chowrastha\nWarangal, Telangana",
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      content: "+91 9849497131\n+91 9640482131",
    },
    {
      icon: Timer,
      title: "Store Timings",
      content: "10:00 AM – 10:00 PM\nOpen all days",
    },
  ];

  return (
    <section
      ref={ref}
      id="contact"
      className="flex flex-col items-center gap-[60px] w-full px-6 md:px-[100px] py-[80px] md:py-[100px] bg-[var(--dark-750)]"
    >
      {/* Header */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex flex-col items-center gap-4 text-center"
      >
        <motion.span
          variants={fadeInDown}
          className="font-inter text-[13px] font-medium text-[var(--gold-primary)] tracking-[4px]"
        >
          CONTACT US
        </motion.span>
        <motion.h2
          variants={fadeInUp}
          className="font-cormorant text-3xl md:text-[48px] font-normal text-white"
        >
          Contact Maruthi Jewellers
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="font-inter text-base md:text-[17px] font-normal text-[#8A8A8A]"
        >
          Visit us or get in touch for trusted jewellery and timeless designs
        </motion.p>
        <motion.div variants={scaleIn} className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--gold-primary)]" />
          <div className="w-10 h-px bg-[var(--gold-primary)]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--gold-primary)]" />
        </motion.div>
      </motion.div>

      {/* Contact Cards */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1140px]"
      >
        {contactCards.map((card, index) => (
          <motion.div key={index} variants={fadeInUp}>
            <ContactCard {...card} />
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.6 }}
        className="flex flex-wrap justify-center items-center gap-5"
      >
        <motion.a
          href="https://wa.me/919640482131"
          target="_blank"
          className="flex items-center gap-3 px-8 py-3.5 rounded-[30px] bg-[var(--green-whatsapp)]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <MessageCircle className="w-5 h-5 text-white" />
          <span className="font-inter text-sm font-semibold text-white tracking-[1px]">
            Contact on WhatsApp
          </span>
        </motion.a>
        <motion.a
          href="https://instagram.com/mj_gold12"
          target="_blank"
          className="flex items-center gap-3 px-8 py-3.5 rounded-[30px] border border-[#D4AF3760]"
          style={{ background: "#D4AF3708" }}
          whileHover={{ scale: 1.05, borderColor: "#D4AF37" }}
          whileTap={{ scale: 0.95 }}
        >
          <Instagram className="w-5 h-5 text-[var(--gold-primary)]" />
          <span className="font-inter text-sm font-medium text-[var(--gold-primary)] tracking-[1px]">
            Follow on Instagram
          </span>
        </motion.a>
      </motion.div>
    </section>
  );
}

function ContactCard({
  icon: Icon,
  title,
  content,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  content: string;
}) {
  return (
    <motion.div
      className="flex flex-col gap-5 px-7 py-8 rounded-[20px] border border-[var(--dark-400)] hover-lift hover-glow"
      style={{ background: "#151515" }}
      whileHover={{ borderColor: "#D4AF3760" }}
    >
      {/* Icon */}
      <motion.div
        className="flex items-center justify-center w-[52px] h-[52px] rounded-[26px] border border-[#D4AF3730]"
        style={{
          background: "linear-gradient(135deg, #D4AF3720 0%, #B8860B10 100%)",
        }}
        whileHover={{ scale: 1.1 }}
      >
        <Icon className="w-[22px] h-[22px] text-[var(--gold-primary)]" />
      </motion.div>

      {/* Title */}
      <h3 className="font-cormorant text-xl font-medium text-white">{title}</h3>

      {/* Content */}
      <p className="font-inter text-sm font-normal text-[#8A8A8A] leading-[1.7] whitespace-pre-line">
        {content}
      </p>
    </motion.div>
  );
}

function Footer() {
  return (
    <footer
      className="flex flex-col gap-12 w-full px-6 md:px-[100px] pt-20 pb-10"
      style={{ background: "#080808" }}
    >
      {/* Main Footer */}
      <div className="flex flex-col lg:flex-row items-start justify-between gap-12 w-full">
        {/* Brand Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6 w-full lg:w-[320px]"
        >
          {/* Logo */}
          <div className="flex items-center gap-3.5">
            <div
              className="flex items-center justify-center w-11 h-11 rounded-[22px] bg-gold-gradient"
            >
              <span className="font-cormorant text-base font-bold text-[var(--dark-800)]">
                MJ
              </span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="font-cormorant text-xl font-semibold text-[var(--gold-primary)] tracking-[4px]">
                MARUTHI
              </span>
              <span className="font-inter text-[10px] font-medium text-[#8A8A8A] tracking-[3px]">
                JEWELLERS
              </span>
            </div>
          </div>

          {/* Tagline */}
          <p className="font-inter text-sm font-normal text-[var(--text-subtle)] leading-[1.7]">
            A trusted destination for gold, silver, and diamond jewellery,
            crafted with purity and timeless elegance.
          </p>
        </motion.div>

        {/* Links Columns */}
        <div className="flex flex-wrap gap-12 lg:gap-[60px]">
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            <h4 className="font-cormorant text-base font-semibold text-white tracking-[1px]">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-4">
              {[
                { label: "Gold Jewellery", href: "/collections/gold" },
                { label: "Silver Jewellery", href: "/collections/silver" },
                { label: "Diamond Jewellery", href: "/collections/diamond" },
                { label: "About Us", href: "#about" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <motion.div key={link.label} whileHover={{ x: 5 }}>
                  <Link
                    href={link.href}
                    className="font-inter text-sm font-normal text-[var(--text-subtle)] hover:text-[var(--gold-light)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <h4 className="font-cormorant text-base font-semibold text-white tracking-[1px]">
              Contact
            </h4>
            <p className="font-inter text-sm font-normal text-[var(--text-subtle)] leading-[1.6]">
              H.no 8-2-1 133 134 & 135
              <br />
              Laxmi Narayana Jakota Complex
              <br />
              Warangal, Telangana
            </p>
            <p className="font-inter text-sm font-normal text-[var(--text-subtle)]">
              +91 9849497131
            </p>
            <p className="font-inter text-sm font-normal text-[var(--text-subtle)]">
              +91 9640482131
            </p>
          </motion.div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-[var(--dark-500)]" />

      {/* Bottom Footer */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
        <p className="font-inter text-[13px] font-normal text-[#4A4A4A]">
          © 2026 Maruthi Jewellers. All Rights Reserved.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          {[
            { icon: MessageCircle, href: "https://wa.me/919640482131" },
            { icon: Instagram, href: "https://instagram.com/mj_gold12" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              className="flex items-center justify-center w-11 h-11 rounded-[22px] border border-[var(--dark-300)]"
              style={{ background: "#121212" }}
              whileHover={{
                scale: 1.1,
                borderColor: "#D4AF37",
                background: "#D4AF3720",
              }}
            >
              <social.icon className="w-5 h-5 text-[var(--text-subtle)]" />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/919640482131"
      target="_blank"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[var(--green-whatsapp)] shadow-lg"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <MessageCircle className="w-7 h-7 text-white" />
      <motion.div
        className="absolute inset-0 rounded-full bg-[var(--green-whatsapp)]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.a>
  );
}
