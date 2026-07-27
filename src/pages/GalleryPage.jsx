import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiX, FiChevronLeft, FiChevronRight, FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";
import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";
import { GALLERY_PAGE } from "../data/subPageContent";

export default function GalleryPage() {
  const { title, heroImage, images, socialLinks } = GALLERY_PAGE;
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex((i) => (i > 0 ? i - 1 : images.length - 1));
  const nextImage = () => setLightboxIndex((i) => (i < images.length - 1 ? i + 1 : 0));

  return (
    <div className="relative overflow-hidden w-full max-w-[100vw]">
      <Navbar />

      {/* ─── Hero Banner ─── */}
      <section className="relative h-[340px] lg:h-[420px] overflow-hidden">
        <img
          src={heroImage}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/40 to-navy/20" />
        <div className="container-vid relative z-10 h-full flex flex-col justify-end pb-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium mb-4 transition-colors w-fit"
          >
            <FiArrowLeft size={16} />
            Back to Home
          </Link>
          <h1 className="text-4xl lg:text-5xl font-bold text-white uppercase tracking-wide font-display">
            {title}
          </h1>
        </div>
      </section>

      {/* ─── Social Links Bar ─── */}
      <div className="bg-bgLight border-b border-gray-200">
        <div className="container-vid flex items-center gap-6 py-4">
          <span className="text-sm font-bold text-gray-600">Follow us:</span>
          {socialLinks.map((link) => {
            const Icon = link.label === "Facebook" ? FiFacebook : link.label === "Instagram" ? FiInstagram : FiYoutube;
            return (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors text-sm font-medium"
              >
                <Icon size={18} />
                {link.label}
              </a>
            );
          })}
        </div>
      </div>

      {/* ─── Image Grid ─── */}
      <main className="bg-white min-h-[60vh]">
        <div className="container-vid py-12 lg:py-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy font-display mb-2">
            School Gallery
          </h2>
          <div className="w-16 h-1 bg-primary mt-2 mb-10 rounded-full" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/30 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* ─── Lightbox ─── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2 z-10"
            >
              <FiX size={28} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 lg:left-10 text-white/70 hover:text-white p-3 bg-white/10 rounded-full backdrop-blur-sm z-10"
            >
              <FiChevronLeft size={28} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 lg:right-10 text-white/70 hover:text-white p-3 bg-white/10 rounded-full backdrop-blur-sm z-10"
            >
              <FiChevronRight size={28} />
            </button>

            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            <div className="absolute bottom-6 text-white/50 text-sm font-medium">
              {lightboxIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
