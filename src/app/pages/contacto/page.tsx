

import Footer from "../../components/footer/footer";
import TopBar from "../../components/topBar/topBar";

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <TopBar />

      <main className="relative flex flex-col items-center justify-center flex-1 px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-cyan-500/20 via-transparent to-transparent blur-3xl" />
        <section className="relative z-10 w-full max-w-4xl rounded-[36px] border border-white/10 bg-slate-900/85 p-8 shadow-[0_30px_90px_-40px_rgba(14,165,233,0.8)] backdrop-blur-xl sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <span className="inline-flex rounded-full bg-cyan-500/20 px-3 py-1 text-sm font-medium uppercase tracking-[0.24em] text-cyan-300">
                Contacto
              </span>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Conecta conmigo
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Si quieres ver más de mis proyectos o hablar sobre colaboraciones, puedes contactarme usando los siguientes enlaces. Estoy abierto a nuevas oportunidades y colaboraciones.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <a
              href="https://www.linkedin.com/in/iker-erdociain-vela-147935360/"
              target="_blank"
              rel="noreferrer"
              className="group flex h-full flex-col justify-between rounded-[28px] border border-white/10 bg-slate-950/90 p-6 transition hover:-translate-y-1 hover:border-cyan-500/30 hover:bg-slate-900/95"
            >
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-cyan-500/10 ring-1 ring-cyan-500/20">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" alt="LinkedIn logo" className="h-8 w-8" />
                </div>
                <div className="mt-5">
                  <p className="text-sm uppercase tracking-[0.22em] text-slate-400">LinkedIn</p>
                  <h3 className="mt-3 text-xl font-semibold text-white">Conecta conmigo</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    Mira mi perfil profesional y sígueme.
                  </p>
                </div>
              </div>
              <span className="mt-6 inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-200 transition group-hover:bg-cyan-500/15">
                Visitar LinkedIn
              </span>
            </a>

            <a
              href="https://github.com/ikerOwO"
              target="_blank"
              rel="noreferrer"
              className="group flex h-full flex-col justify-between rounded-[28px] border border-white/10 bg-slate-950/90 p-6 transition hover:-translate-y-1 hover:border-fuchsia-500/30 hover:bg-slate-900/95"
            >
              <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gray-50 ring-1 ring-fuchsia-500/20">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub logo" className="h-8 w-8" />
                </div>
                <div className="mt-5">
                  <p className="text-sm uppercase tracking-[0.22em] text-slate-400">GitHub</p>
                  <h3 className="mt-3 text-xl font-semibold text-white">Mira mis repos</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    Explora los proyectos que he construido con código abierto.
                  </p>
                </div>
              </div>
              <span className="mt-6 inline-flex items-center rounded-full border border-fuchsia-500/20 bg-fuchsia-500/10 px-4 py-2 text-sm font-medium text-fuchsia-200 transition group-hover:bg-fuchsia-500/15">
                Ir a GitHub
              </span>
            </a>

            <a
              href="mailto:erdociainiker@gmail.com"
              className="group flex h-full flex-col justify-between rounded-[28px] border border-white/10 bg-slate-950/90 p-6 transition hover:-translate-y-1 hover:border-emerald-500/30 hover:bg-slate-900/95"
            >
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-emerald-500/10 text-emerald-200 ring-1 ring-emerald-500/20">
                  <span className="text-xl font-semibold">@</span>
                </div>
                <div className="mt-5">
                  <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Correo</p>
                  <h3 className="mt-3 text-xl font-semibold text-white">Escríbeme</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    Estoy disponible para consultas, colaboraciones o dudas sobre mis proyectos.
                  </p>
                </div>
              </div>
              <span className="mt-6 inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-200 transition group-hover:bg-emerald-500/15">
                Enviar correo
              </span>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
