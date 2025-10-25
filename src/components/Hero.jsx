import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <BackgroundGrid />
      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-24 md:pt-36 md:pb-32">
        <div className="flex flex-col items-center text-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm"
          >
            <Sparkles className="h-4 w-4 text-[#e6543f]" />
            <span className="text-sm/none text-white/80">Data, IA et réseau — nouvelle ère du brokerage</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="font-semibold tracking-tight text-4xl md:text-6xl lg:text-7xl"
            style={{ fontFamily: 'Inter, Poppins, ui-sans-serif, system-ui' }}
          >
            Le futur du brokerage en immobilier d’entreprise.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-3xl text-balance text-white/80 text-lg md:text-xl"
          >
            PAYP est le premier réseau de consultants indépendants augmenté par la data et la tech. Une plateforme tout-en-un pour performer, collaborer et conclure plus vite.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex items-center gap-4"
          >
            <a
              href="#join"
              className="inline-flex items-center gap-2 rounded-full bg-[#e6543f] px-6 py-3 text-base font-medium text-white shadow-[0_10px_30px_-10px_rgba(230,84,63,0.8)] transition-transform hover:scale-[1.02] active:scale-[0.99]"
            >
              Rejoindre le réseau
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mt-12 w-full max-w-5xl"
          >
            <TechShowcase />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function BackgroundGrid() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.06),_transparent_60%)]" />
      <div className="absolute inset-0 opacity-40" aria-hidden>
        <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8, y: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#e6543f]/20 blur-3xl"
      />
    </div>
  );
}

function TechShowcase() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-1 backdrop-blur-md">
      <div className="relative rounded-xl bg-[#0f2238] p-6">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute right-6 top-6 h-24 w-24 rounded-full bg-[#e6543f]/20 blur-2xl"
            animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Panel title="Carte data & territoires">
            <div className="relative h-44 w-full overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,#19324f_0%,#122740_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(230,84,63,0.25),transparent_45%)]" />
              <motion.div
                className="absolute left-8 top-10 h-28 w-28 rounded-full border border-[#e6543f]/40"
                animate={{ x: [0, 10, -6, 0], y: [0, -6, 8, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              <div className="absolute inset-0 grid grid-cols-6 grid-rows-4">
                {Array.from({ length: 24 }).map((_, i) => (
                  <motion.span
                    key={i}
                    className="m-[2px] rounded-[2px] bg-white/10"
                    whileHover={{ backgroundColor: 'rgba(230,84,63,0.6)' }}
                  />
                ))}
              </div>
            </div>
          </Panel>
          <Panel title="Matching intelligent">
            <div className="relative h-44 w-full overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,#19324f_0%,#122740_100%)]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="h-28 w-28 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"
                  animate={{ rotate: [0, 3, -3, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                />
              </div>
              <div className="absolute inset-x-6 bottom-6 flex items-center justify-between text-xs text-white/70">
                <span>Offres</span>
                <div className="h-1 w-40 rounded bg-white/10">
                  <motion.div className="h-1 rounded bg-[#e6543f]" animate={{ width: ['20%', '75%', '40%', '60%'] }} transition={{ duration: 4, repeat: Infinity }} />
                </div>
                <span>Demandes</span>
              </div>
            </div>
          </Panel>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <p className="text-white/80">L’IA au service de la performance.</p>
          <span className="text-white/50 text-sm">CRM • IA Alfred • Leads • Carte</span>
        </div>
      </div>
    </div>
  );
}

function Panel({ title, children }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-white/80">{title}</h3>
        <div className="h-2 w-2 rounded-full bg-[#e6543f] shadow-[0_0_20px_rgba(230,84,63,0.8)]" />
      </div>
      {children}
    </div>
  );
}
