import { motion } from 'framer-motion';
import { Linkedin, Instagram } from 'lucide-react';

export default function CommunityAndFooter() {
  const testimonials = [
    {
      name: 'Alexandre, Consultant Retail',
      quote:
        'Grâce à PAYP, j’ai multiplié mes mandats et trouvé des deals en un temps record.',
    },
    {
      name: 'Sophie, Bureau Île-de-France',
      quote:
        'L’IA Alfred et la communauté m’ont permis d’ouvrir des opportunités que je n’aurais jamais vues seule.',
    },
    {
      name: 'Mehdi, Activité Lyon',
      quote:
        'La plateforme est simple, puissante et orientée business. J’ai gagné en efficacité immédiatement.',
    },
  ];

  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">Témoignages & communauté</h2>
        <p className="mt-3 text-white/70 max-w-3xl">Des consultants ambitieux, partout en France, réunis autour d’une vision commune: innovation, performance et collaboration.</p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#e6543f]/10 blur-2xl group-hover:opacity-100 opacity-60" />
              <div className="relative">
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-[#e6543f] to-[#ff8a7b] opacity-90" />
                  <div>
                    <div className="text-sm font-medium">{t.name}</div>
                    <div className="text-xs text-white/60">Consultant PAYP</div>
                  </div>
                </div>
                <p className="text-white/80">“{t.quote}”</p>
              </div>
            </motion.div>
          ))}
        </div>

        <Vision />
      </div>
      <Footer />
    </section>
  );
}

function Vision() {
  return (
    <div className="relative mt-20 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-10">
      <AnimatedDots />
      <div className="relative">
        <p className="text-center text-xl md:text-2xl font-medium text-white/90 max-w-4xl mx-auto">
          « Nous repensons la transaction en immobilier d’entreprise grâce à la data, la technologie et l’humain. »
        </p>
      </div>
    </div>
  );
}

function AnimatedDots() {
  return (
    <div className="pointer-events-none absolute inset-0 opacity-60">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(230,84,63,0.15),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(230,84,63,0.12),transparent_45%)]" />
      <motion.div
        className="absolute inset-0"
        animate={{ backgroundPosition: ['0px 0px', '40px 20px', '0px 0px'] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '20px 20px' }}
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div className="text-lg font-semibold">PAYP</div>
            <p className="mt-1 text-sm text-white/60">© PAYP 2025 — Tous droits réservés</p>
          </div>
          <nav className="flex flex-wrap items-center gap-6 text-sm text-white/80">
            <a href="#" className="hover:text-white">À propos</a>
            <a href="#join" className="hover:text-white">Rejoindre PAYP</a>
            <a href="#" className="hover:text-white">Mentions légales</a>
            <a href="mailto:contact@payp.io" className="hover:text-white">Contact</a>
            <span className="mx-2 hidden h-4 w-px bg-white/10 md:inline-block" />
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white">
              <Instagram className="h-4 w-4" /> Instagram
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
