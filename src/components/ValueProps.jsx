import { Cpu, Users, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ValueProps() {
  const items = [
    {
      icon: Cpu,
      title: 'Technologie propriétaire',
      desc: 'Un outil tout-en-un pour digitaliser le métier et accélérer chaque étape de la transaction.',
    },
    {
      icon: Users,
      title: 'Communauté de consultants',
      desc: 'Un réseau collaboratif sur tout le territoire pour partager, s’entraider et conclure davantage.',
    },
    {
      icon: GraduationCap,
      title: 'Formation continue',
      desc: 'Des experts pour accompagner chaque consultant vers la performance et la maîtrise opérationnelle.',
    },
  ];

  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">Pourquoi PAYP</h2>
          <p className="mt-3 text-white/70 max-w-3xl">Nous combinons data, IA et un réseau d’experts pour créer le meilleur environnement de réussite en immobilier d’entreprise.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((it, idx) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#e6543f]/10 blur-2xl transition-opacity group-hover:opacity-100 opacity-60" />
              <div className="relative flex items-start gap-4">
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <it.icon className="h-6 w-6 text-[#e6543f]" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">{it.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{it.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <TechCard />
          <IAHighlight />
        </div>
      </div>
    </section>
  );
}

function TechCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0f2238] p-6"
    >
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_100%_0%,rgba(230,84,63,0.15),transparent)]" />
      <div className="relative">
        <h3 className="text-xl font-semibold">La technologie PAYP</h3>
        <p className="mt-2 text-white/70">CRM, carte, IA Alfred, matching leads — tout est pensé pour fluidifier la prospection et la transaction.</p>
        <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="relative h-56 w-full overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,#19324f_0%,#122740_100%)]" />
            <motion.div
              className="absolute inset-0"
              initial={false}
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.01)' }}
            >
              <motion.div
                className="absolute left-6 top-6 h-10 w-10 rounded-full bg-[#e6543f]/40"
                animate={{ x: [0, 120, 40, 160], y: [0, 20, -10, 30] }}
                transition={{ duration: 10, repeat: Infinity }}
              />
              <motion.div
                className="absolute right-10 bottom-8 h-6 w-24 rounded bg-white/10"
                animate={{ width: ['30%', '60%', '40%', '70%'] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              <div className="absolute inset-0 grid grid-cols-12 opacity-40">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="border-l border-white/10" />
                ))}
              </div>
            </motion.div>
          </div>
          <p className="mt-3 text-sm text-white/70">Survoler pour révéler la data et le réseau neuronal.</p>
        </div>
      </div>
    </motion.div>
  );
}

function IAHighlight() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6"
    >
      <div className="relative">
        <h3 className="text-xl font-semibold">L’IA au service de la performance</h3>
        <p className="mt-2 text-white/70">Priorisation intelligente, recommandations de matching, suivi en temps réel. Vous gardez le contrôle, l’IA accélère le reste.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {['Prospecter', 'Qualifier', 'Négocier', 'Closer'].map((tag) => (
            <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80">{tag}</span>
          ))}
        </div>
      </div>
      <motion.div
        className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-[#e6543f]/20 blur-3xl"
        animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
    </motion.div>
  );
}
