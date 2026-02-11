"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  ArrowLeft,
  X,
  MessageCircle,
  Instagram,
  Menu,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { CollectionData } from "@/lib/collections-data";
import { useRef } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export default function CollectionPage({ data }: { data: CollectionData }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [modalText, setModalText] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  const openModal = (image: string, description: string) => {
    setModalImage(image);
    setModalText(description);
    setModalOpen(true);
  };

  return (
    <main className="flex flex-col w-full bg-[var(--dark-800)] min-h-screen overflow-x-hidden">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-40 flex items-center justify-between w-full h-[90px] px-6 md:px-[100px] border-b transition-all duration-300 ${
          isScrolled
            ? "bg-[#0D0D0D]/95 backdrop-blur-lg border-[var(--dark-500)]"
            : "bg-[#0D0D0D]/80 backdrop-blur-md border-[var(--dark-500)]"
        }`}
      >
        {/* Back + Logo */}
        <div className="flex items-center gap-4">
          <Link href="/#collections">
            <motion.div
              className="flex items-center justify-center w-10 h-10 rounded-full border border-[var(--dark-400)] hover:border-[var(--gold-primary)] transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowLeft className="w-5 h-5 text-[var(--gold-light)]" />
            </motion.div>
          </Link>
          <Link href="/" className="flex items-center gap-3">
            <motion.div
              className="flex items-center justify-center w-10 h-10 rounded-3xl bg-gold-gradient"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="font-cormorant text-base font-bold text-[var(--dark-800)]">
                MJ
              </span>
            </motion.div>
            <div className="flex flex-col">
              <span className="font-cormorant text-lg font-semibold text-[var(--gold-light)] tracking-[4px]">
                MARUTHI
              </span>
              <span className="font-inter text-[9px] font-medium text-[var(--text-accent)] tracking-[3px]">
                JEWELLERS
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "Gold", href: "/collections/gold" },
            { label: "Silver", href: "/collections/silver" },
            { label: "Diamond", href: "/collections/diamond" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-inter text-[13px] tracking-[1px] text-[var(--text-light)] hover:text-[var(--gold-light)] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* WhatsApp CTA */}
        <motion.a
          href="https://wa.me/919640482131"
          target="_blank"
          className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-3xl bg-[var(--green-whatsapp)]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <MessageCircle className="w-4 h-4 text-white" />
          <span className="font-inter text-[13px] font-medium text-white">
            Enquire Now
          </span>
        </motion.a>

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
                <Link
                  href="/"
                  className="font-inter text-base text-[var(--text-light)] py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                {[
                  { label: "Gold Collection", href: "/collections/gold" },
                  { label: "Silver Collection", href: "/collections/silver" },
                  { label: "Diamond Collection", href: "/collections/diamond" },
                ].map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="font-inter text-base text-[var(--text-light)] py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Page Title Hero */}
      <section
        className="relative flex flex-col items-center justify-center w-full pt-[140px] pb-[60px] px-6 md:px-[100px]"
        style={{
          background:
            "radial-gradient(ellipse 120% 100% at 50% 0%, #1A1410 0%, #0D0D0D 60%, #0A0A0A 100%)",
        }}
      >
        {/* Decorative particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[var(--gold-primary)] rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -60, 0],
                opacity: [0.1, 0.4, 0.1],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-inter text-[13px] font-medium text-[var(--gold-primary)] tracking-[4px] mb-4"
        >
          OUR COLLECTIONS
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="font-cormorant text-3xl md:text-[52px] font-normal text-white text-center leading-[1.2]"
        >
          {data.title}
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex items-center gap-3 mt-5"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--gold-primary)]" />
          <div className="w-16 h-px bg-[var(--gold-primary)]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--gold-primary)]" />
        </motion.div>
      </section>

      {/* Categories */}
      {data.categories.map((category, catIndex) => (
        <CategorySection
          key={catIndex}
          category={category}
          catIndex={catIndex}
          onOpenModal={openModal}
        />
      ))}

      {/* Bottom CTA */}
      <section className="flex flex-col items-center gap-6 w-full px-6 md:px-[100px] py-[60px] md:py-[80px] bg-[var(--dark-750)]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-cormorant text-2xl md:text-[36px] font-normal text-white text-center"
        >
          Interested in our collection?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-inter text-base text-[var(--text-muted)] text-center max-w-[500px]"
        >
          Contact us on WhatsApp or visit our store for the best prices and personal assistance.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-4"
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
              Enquire on WhatsApp
            </span>
          </motion.a>
          <Link href="/#contact">
            <motion.div
              className="flex items-center gap-2 px-8 py-3.5 rounded-[30px] border border-[#D4AF3760]"
              style={{ background: "#D4AF3708" }}
              whileHover={{ scale: 1.05, borderColor: "#D4AF37" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="font-inter text-sm font-medium text-[var(--gold-primary)] tracking-[1px]">
                Visit Our Store
              </span>
            </motion.div>
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer
        className="flex flex-col gap-10 w-full px-6 md:px-[100px] pt-16 pb-8"
        style={{ background: "#080808" }}
      >
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 w-full">
          <div className="flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-[20px] bg-gold-gradient">
                <span className="font-cormorant text-sm font-bold text-[var(--dark-800)]">
                  MJ
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-cormorant text-lg font-semibold text-[var(--gold-primary)] tracking-[4px]">
                  MARUTHI
                </span>
                <span className="font-inter text-[9px] font-medium text-[#8A8A8A] tracking-[3px]">
                  JEWELLERS
                </span>
              </div>
            </Link>
            <p className="font-inter text-sm text-[var(--text-subtle)] leading-[1.7] max-w-[300px]">
              A trusted destination for gold, silver, and diamond jewellery,
              crafted with purity and timeless elegance.
            </p>
          </div>

          <div className="flex flex-wrap gap-10">
            <div className="flex flex-col gap-4">
              <h4 className="font-cormorant text-base font-semibold text-white tracking-[1px]">
                Collections
              </h4>
              <nav className="flex flex-col gap-3">
                {[
                  { label: "Gold Jewellery", href: "/collections/gold" },
                  { label: "Silver Jewellery", href: "/collections/silver" },
                  { label: "Diamond Jewellery", href: "/collections/diamond" },
                ].map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="font-inter text-sm text-[var(--text-subtle)] hover:text-[var(--gold-light)] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-cormorant text-base font-semibold text-white tracking-[1px]">
                Contact
              </h4>
              <p className="font-inter text-sm text-[var(--text-subtle)] leading-[1.6]">
                H.no 8-2-1 133 134 & 135
                <br />
                Laxmi Narayana Jakota Complex
                <br />
                Warangal, Telangana
              </p>
              <p className="font-inter text-sm text-[var(--text-subtle)]">
                +91 9849497131
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-[var(--dark-500)]" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
          <p className="font-inter text-[13px] text-[#4A4A4A]">
            &copy; 2026 Maruthi Jewellers. All Rights Reserved.
          </p>
          <div className="flex items-center gap-3">
            {[
              { icon: MessageCircle, href: "https://wa.me/919640482131" },
              { icon: Instagram, href: "https://instagram.com/mj_gold12" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                className="flex items-center justify-center w-10 h-10 rounded-[20px] border border-[var(--dark-300)] hover:border-[var(--gold-primary)] transition-colors"
                style={{ background: "#121212" }}
              >
                <social.icon className="w-4 h-4 text-[var(--text-subtle)]" />
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
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

      {/* Product Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8"
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative flex flex-col items-center gap-5 max-w-[600px] w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                className="absolute -top-2 -right-2 md:top-0 md:right-0 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 border border-white/20"
                onClick={() => setModalOpen(false)}
                whileHover={{ scale: 1.1, background: "rgba(255,255,255,0.2)" }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5 text-white" />
              </motion.button>

              {/* Image */}
              <div className="relative w-full aspect-square max-h-[60vh] rounded-2xl overflow-hidden border border-[var(--dark-400)]">
                <Image
                  src={modalImage}
                  alt={modalText}
                  fill
                  className="object-cover"
                  sizes="(max-width: 600px) 100vw, 600px"
                  unoptimized
                />
              </div>

              {/* Text */}
              <p className="font-inter text-base text-white/90 text-center leading-[1.7] px-4">
                {modalText}
              </p>

              {/* WhatsApp CTA */}
              <motion.a
                href="https://wa.me/919640482131"
                target="_blank"
                className="flex items-center gap-3 px-8 py-3.5 rounded-[30px] bg-[var(--green-whatsapp)]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-5 h-5 text-white" />
                <span className="font-inter text-sm font-semibold text-white tracking-[0.5px]">
                  Enquire on WhatsApp
                </span>
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

function CategorySection({
  category,
  catIndex,
  onOpenModal,
}: {
  category: { title: string; products: { image: string; description: string }[] };
  catIndex: number;
  onOpenModal: (image: string, description: string) => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      ref={ref}
      className="flex flex-col gap-8 w-full px-6 md:px-[100px] py-[40px] md:py-[50px]"
      style={{
        background:
          catIndex % 2 === 0
            ? "linear-gradient(180deg, #0A0A0A 0%, #0D0D0D 100%)"
            : "#0D0D0D",
      }}
    >
      {/* Category Title */}
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="font-cormorant text-2xl md:text-[32px] font-medium text-white"
      >
        {category.title}
      </motion.h2>

      {/* Product Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 w-full"
      >
        {category.products.map((product, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
          >
            <ProductCard
              product={product}
              onClick={() => onOpenModal(product.image, product.description)}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function ProductCard({
  product,
  onClick,
}: {
  product: { image: string; description: string };
  onClick: () => void;
}) {
  return (
    <motion.div
      className="flex flex-col rounded-2xl overflow-hidden cursor-pointer border border-[var(--dark-400)] hover:border-[#D4AF3740] transition-colors"
      style={{ background: "#131313" }}
      onClick={onClick}
      whileHover={{ y: -6, boxShadow: "0 12px 30px rgba(0,0,0,0.3)" }}
      transition={{ duration: 0.3 }}
    >
      {/* Image */}
      <div className="relative w-full h-[260px] md:h-[280px] overflow-hidden">
        <Image
          src={product.image}
          alt={product.description}
          fill
          className="object-cover transition-transform duration-500 hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          unoptimized
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition-colors duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
          <span className="font-inter text-xs font-semibold text-white tracking-[2px] px-4 py-2 rounded-full border border-white/40 backdrop-blur-sm">
            VIEW DETAILS
          </span>
        </div>
      </div>

      {/* Description */}
      <div className="flex flex-col gap-3 p-5">
        <p className="font-inter text-sm text-[var(--text-muted)] leading-[1.6] line-clamp-3">
          {product.description}
        </p>
        <div className="flex items-center gap-2">
          <MessageCircle className="w-3.5 h-3.5 text-[var(--green-whatsapp)]" />
          <span className="font-inter text-xs font-medium text-[var(--green-whatsapp)]">
            Enquire Now
          </span>
        </div>
      </div>
    </motion.div>
  );
}
