export default function Process() {
  const steps = [
    { n: 1, t: "Consultanță", d: "Discutăm obiectivele, publicul țintă și conținutul." },
    { n: 2, t: "Propunere", d: "Primesti ofertă clară, plan și timeline." },
    { n: 3, t: "Design & Dev", d: "Iterăm rapid pe design și implementare." },
    { n: 4, t: "Lansare", d: "Optimizare SEO, tracking, securitate și go-live." },
  ]
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Proces</h2>
        <div className="grid md:grid-cols-4 gap-6 mt-10">
          {steps.map(s => (
            <div key={s.n} className="rounded-2xl border border-white/10 bg-slate-800/50 p-6 text-center">
              <div className="w-10 h-10 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">{s.n}</div>
              <h3 className="text-white font-semibold mt-3">{s.t}</h3>
              <p className="text-blue-200/80 text-sm mt-2">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
