

import Footer from "../../components/footer/footer";
import TopBar from "../../components/topBar/topBar";

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <TopBar />

      <main className="flex flex-col min-h-screen relative items-center justify-center flex-1 px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <div className="hero-glow" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <section className="surface-panel relative z-10 w-full max-w-4xl rounded-[36px] p-8 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <span className="badge">
                Contacto
              </span>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Conecta conmigo
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Puedes contactar conmigo desde los siguientes enlaces:
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <a
              href="https://www.linkedin.com/in/iker-erdociain-vela-147935360/"
              target="_blank"
              rel="noreferrer"
              className="contact-card glass-card group flex h-full flex-col justify-between rounded-[28px] p-6"
            >
              <div>
                <div className="icon-mask flex h-14 w-14 items-center justify-center rounded-3xl ring-1 ring-cyan-500/20">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" alt="LinkedIn logo" className="h-8 w-8" />
                </div>
                <div className="mt-5">
                  <p className="text-sm uppercase tracking-[0.22em] text-slate-400">LinkedIn</p>
                  <h3 className="mt-3 text-xl font-semibold text-white">Conecta conmigo</h3>
                </div>
              </div>
              <span className="cta-pill">
                Visitar LinkedIn
              </span>
            </a>

            <a
              href="https://github.com/ikerOwO"
              target="_blank"
              rel="noreferrer"
              className="contact-card glass-card group flex h-full flex-col justify-between rounded-[28px] p-6"
            >
              <div>
                <div className="icon-mask flex h-14 w-14 items-center justify-center rounded-3xl ring-1 ring-fuchsia-500/20">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub logo" className="h-8 w-8" />
                </div>
                <div className="mt-5">
                  <p className="text-sm uppercase tracking-[0.22em] text-slate-400">GitHub</p>
                  <h3 className="mt-3 text-xl font-semibold text-white">Mira mis repos</h3>
                </div>
              </div>
              <span className="cta-pill">
                Ir a GitHub
              </span>
            </a>

            <a
              href="mailto:erdociainiker@gmail.com"
              className="contact-card glass-card group flex h-full flex-col justify-between rounded-[28px] p-6"
            >
              <div>
                <div className="icon-mask flex h-14 w-14 items-center justify-center rounded-3xl ring-1 ring-emerald-500/20">
                  <span className="text-xl font-semibold">@</span>
                </div>
                <div className="mt-5">
                  <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Correo</p>
                  <h3 className="mt-3 text-xl font-semibold text-white my-3">Escríbeme</h3>
                </div>
              </div>
              <span className="cta-pill">
                Enviar correo
              </span>
            </a>
          </div>
        </section>
      </main>
      <div className="fixed bottom-0 left-0 w-full">
        <Footer />
      </div>
    </div>
  );
}
