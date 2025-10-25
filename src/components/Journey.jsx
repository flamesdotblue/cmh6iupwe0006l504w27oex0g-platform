import { ArrowRight, Map, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Journey() {
  const steps = [
    { id: 1, title: 'Rejoins la communauté', desc: 'Intègre un réseau d’experts partout en France.' },
    { id: 2, title: 'Suis notre formation', desc: 'Méthodologie, outils et coaching pour performer.' },
    { id: 3, title: 'Active ton territoire', desc: 'Prospection intelligente, data locale, opportunités ciblées.' },
    { id: 4, title: 'Développe ton business', desc: 'Plus de mandats, plus de deals, plus vite.' },
  ];

  return (
    <section id="join" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 md:mb-14 md:flex-row md:items-end">
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">Devenir consultant</h2>
            <p className="mt-3 max-w-2xl text-white/70">Des étapes simples, un accompagnement continu, une technologie qui vous propulse.</p>
          </div>
          <a
            href="#apply"
            className="inline-flex items-center gap-2 rounded-full bg-[#e6543f] px-5 py-3 text-sm font-medium text-white shadow-[0_10px_30px_-10px_rgba(230,84,63,0.8)] transition-transform hover:scale-[1.02] active:scale-[0.99]"
          >
            Je deviens consultant PAYP
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, idx) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-[#e6543f] text-sm">Étape {s.id}</div>
                  <h3 className="mt-1 text-lg font-medium">{s.title}</h3>
                </div>
                <div className="h-8 w-8 rounded-lg border border-white/10 bg-white/5 text-white/70 flex items-center justify-center">{s.id}</div>
              </div>
              <p className="mt-3 text-sm text-white/70">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <div id="apply" className="mt-14 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#1a3150] to-[#101f35] p-6">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 mb-3">
                <Rocket className="h-4 w-4 text-[#e6543f]" />
                Boost de carrière
              </div>
              <h3 className="text-xl font-semibold">Passez à la vitesse supérieure</h3>
              <p className="mt-2 text-white/70">Remplissez un court formulaire, un membre de l’équipe vous recontacte pour présenter le réseau et évaluer les opportunités sur votre territoire.</p>
            </div>
            <a
              href="mailto:contact@payp.io?subject=Je%20veux%20devenir%20consultant%20PAYP"
              className="inline-flex items-center gap-2 rounded-full border border-[#e6543f] bg-[#e6543f] px-5 py-3 text-sm font-medium text-white shadow-[0_10px_30px_-10px_rgba(230,84,63,0.8)] transition-transform hover:scale-[1.02] active:scale-[0.99]"
            >
              Candidater maintenant
              <Map className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
