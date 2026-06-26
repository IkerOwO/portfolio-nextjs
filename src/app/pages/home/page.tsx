import Footer from "../../components/footer/footer";
import TopBar from "../../components/topBar/topBar";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <TopBar />

      <main className="relative flex flex-col items-center justify-center flex-1 px-4 py-10 sm:px-6 lg:px-8 my-10">
        <div className="hero-glow" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <section className="surface-panel relative z-10 w-full max-w-5xl overflow-hidden rounded-[36px] p-8 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <span className="badge">Hola, soy Iker</span>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Desarrollador de Apps y Backend
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Soy estudiante de informática que acaba de cursar el Grado Medio
                de Sistemas Microinformáticos y Redes. Me encanta diseñar y
                crear programas y aplicaciones de gran utilidad.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                Aprendí por mi cuenta y disfruto más programando que montando
                hardware.
              </p>
            </div>

            <div className="glass-card rounded-[32px] p-6 sm:p-8">
              <div className="space-y-6">
                <div className="glass-card rounded-3xl p-5">
                  <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
                    Habilidades destacadas
                  </p>
                  <ul className="mt-4 space-y-3 text-slate-200">
                    <li className="rounded-2xl bg-slate-900/80 px-4 py-3">
                      Java, C#, Python, JavaScript
                    </li>
                    <li className="rounded-2xl bg-slate-900/80 px-4 py-3">
                      Spring Boot, .NET, Flutter
                    </li>
                    <li className="rounded-2xl bg-slate-900/80 px-4 py-3">
                      Aplicaciones móviles y Backend
                    </li>
                  </ul>
                </div>

                <div className="glass-card rounded-3xl p-5">
                  <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
                    Mi enfoque
                  </p>
                  <p className="mt-4 text-slate-300 leading-7">
                    Me gusta aprender nuevas tecnologías y aplicarlas en
                    proyectos reales.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-1 text-center">
                  <div className="glass-card group rounded-3xl bg-cyan-500/10 p-4 text-slate-100 ring-1 ring-cyan-500/20">
                    <p className="text-sm text-cyan-200">Formación</p>
                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl bg-slate-900/70 px-4 py-3">
                        <p className="text-sm uppercase tracking-[0.18em] text-slate-300">
                          Grado Medio
                        </p>
                        <p className="mt-2 text-sm font-semibold text-emerald-300 opacity-0 transition duration-300 group-hover:opacity-100">
                          Completado
                        </p>
                      </div>
                      <div className="rounded-2xl bg-slate-900/70 px-4 py-3">
                        <p className="text-sm uppercase tracking-[0.18em] text-slate-300">
                          Grado Superior
                        </p>
                        <p className="mt-2 text-sm font-semibold text-amber-300 opacity-0 transition duration-300 group-hover:opacity-100">
                          En progreso
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
