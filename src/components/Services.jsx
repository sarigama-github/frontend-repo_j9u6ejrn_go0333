import { useEffect, useState } from "react";

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || "";
        const res = await fetch(`${base}/api/services`);
        if (!res.ok) throw new Error("Eroare la încărcarea serviciilor");
        const data = await res.json();
        setServices(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  if (loading) return <div className="text-blue-200">Se încarcă pachetele...</div>;
  if (error) return <div className="text-red-300">{error}</div>;

  return (
    <section id="servicii" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Pachete de servicii</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.id} className="bg-slate-800/50 border border-blue-500/20 rounded-2xl p-6 text-blue-100">
              <div className="text-xl font-semibold text-white">{s.title}</div>
              <p className="mt-2 text-blue-200/90">{s.description}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {s.features?.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              {s.price_from != null && (
                <div className="mt-5 text-white font-bold">De la {s.price_from}€</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
