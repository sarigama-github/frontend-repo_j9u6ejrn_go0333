import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", budget: "", timeline: "", message: "" });
  const [status, setStatus] = useState({ type: "idle", msg: "" });

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", msg: "Trimit..." });
    try {
      const base = import.meta.env.VITE_BACKEND_URL || "";
      const res = await fetch(`${base}/api/inquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Eroare la trimitere. Încearcă din nou.");
      setStatus({ type: "success", msg: "Mulțumesc! Revin cu un răspuns în scurt timp." });
      setForm({ name: "", email: "", company: "", budget: "", timeline: "", message: "" });
    } catch (err) {
      setStatus({ type: "error", msg: err.message });
    }
  };

  return (
    <section id="contact" className="py-16">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Hai să discutăm proiectul</h2>
        <form onSubmit={handleSubmit} className="bg-slate-800/50 border border-blue-500/20 rounded-2xl p-6 text-blue-100 space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-blue-300/70">Nume</label>
              <input name="name" value={form.name} onChange={handleChange} required className="mt-1 w-full rounded-lg bg-slate-900/60 border border-slate-700 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="text-sm text-blue-300/70">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required className="mt-1 w-full rounded-lg bg-slate-900/60 border border-slate-700 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-blue-300/70">Companie / Proiect</label>
              <input name="company" value={form.company} onChange={handleChange} className="mt-1 w-full rounded-lg bg-slate-900/60 border border-slate-700 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="text-sm text-blue-300/70">Buget estimativ</label>
              <input name="budget" value={form.budget} onChange={handleChange} className="mt-1 w-full rounded-lg bg-slate-900/60 border border-slate-700 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>
          <div>
            <label className="text-sm text-blue-300/70">Timeline</label>
            <input name="timeline" value={form.timeline} onChange={handleChange} className="mt-1 w-full rounded-lg bg-slate-900/60 border border-slate-700 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="text-sm text-blue-300/70">Mesaj</label>
            <textarea name="message" value={form.message} onChange={handleChange} required rows={5} className="mt-1 w-full rounded-lg bg-slate-900/60 border border-slate-700 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div className="flex items-center gap-4">
            <button type="submit" className="px-5 py-3 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-semibold shadow-lg shadow-blue-500/30 transition">
              Trimite cererea
            </button>
            {status.type === "loading" && <span className="text-blue-300">{status.msg}</span>}
            {status.type === "success" && <span className="text-green-400">{status.msg}</span>}
            {status.type === "error" && <span className="text-red-400">{status.msg}</span>}
          </div>
        </form>
      </div>
    </section>
  );
}
