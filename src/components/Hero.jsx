import { motion } from "framer-motion";

export default function Hero({ onCtaClick }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.25),transparent_60%)]" />

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-white"
            >
              Servicii de dezvoltare web care convertesc și livrează rapid
            </motion.h1>
            <p className="mt-6 text-blue-200/90 text-lg">
              Construiesc site‑uri și aplicații moderne cu React, FastAPI și MongoDB. Focus pe viteză, SEO și rezultate.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={onCtaClick} className="px-5 py-3 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-semibold shadow-lg shadow-blue-500/30 transition">
                Cere ofertă
              </button>
              <a href="#servicii" className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold transition">
                Vezi pachetele
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-6 text-center text-blue-200/80">
              <div>
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-sm">proiecte livrate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">2x</div>
                <div className="text-sm">îmbunătățire viteză</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-sm">satisfacție clienți</div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative bg-slate-800/40 border border-blue-500/20 rounded-2xl p-6 backdrop-blur-sm"
          >
            <div className="aspect-video rounded-lg bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-blue-200">
              <div className="text-center px-6">
                <div className="text-sm uppercase tracking-widest text-blue-300/60">Stack</div>
                <div className="mt-2 text-xl font-semibold">React • FastAPI • MongoDB • Tailwind</div>
                <div className="mt-3 text-sm text-blue-300/70">Design curat. Performanță. Scalabilitate.</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
