import Footer from "../../components/footer/footer";
import TopBar from "../../components/topBar/topBar";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100">
            <TopBar />

            <main className="relative flex flex-col items-center justify-center flex-1 px-4 py-10 sm:px-6 lg:px-8 my-10">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-cyan-500/20 to-transparent blur-3xl" />
                <div className="pointer-events-none absolute right-0 top-32 h-48 w-48 rounded-full bg-fuchsia-500/20 blur-3xl" />
                <div className="pointer-events-none absolute left-0 bottom-20 h-48 w-48 rounded-full bg-emerald-400/20 blur-3xl" />

                <section className="relative z-10 w-full max-w-5xl overflow-hidden rounded-[36px] border border-white/10 bg-slate-900/85 p-8 shadow-[0_30px_90px_-40px_rgba(14,165,233,0.8)] backdrop-blur-xl sm:p-12">
                    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                        <div>
                            <span className="inline-flex rounded-full bg-cyan-500/20 px-3 py-1 text-sm font-medium uppercase tracking-[0.24em] text-cyan-300">
                                Hola, soy Iker
                            </span>
                            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                                Desarrollador de Apps y Backend
                            </h1>
                            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                                Soy estudiante de informática que acaba de cursar el Grado Medio de Sistemas Microinformáticos y Redes.
                                Me encanta diseñar y crear programas y aplicaciones de gran utilidad.
                            </p>
                            <p className="mt-4 text-lg leading-8 text-slate-300">
                                Aprendí por mi cuenta y disfruto más programando que montando hardware.
                            </p>

                            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                                <span className="inline-flex items-center justify-center rounded-full bg-slate-800 px-4 py-2 text-sm font-medium text-slate-200 ring-1 ring-slate-700/80">
                                    Exploración rápida del portafolio
                                </span>
                                <span className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400">
                                    Disponible para nuevos retos
                                </span>
                            </div>
                        </div>

                        <div className="rounded-[32px] bg-slate-950/95 p-6 ring-1 ring-white/10 sm:p-8">
                            <div className="space-y-6">
                                <div className="rounded-3xl border border-slate-800/90 bg-slate-900/80 p-5">
                                    <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Habilidades destacadas</p>
                                    <ul className="mt-4 space-y-3 text-slate-200">
                                        <li className="rounded-2xl bg-slate-800/80 px-4 py-3">Java, C#, Python, JavaScript</li>
                                        <li className="rounded-2xl bg-slate-800/80 px-4 py-3">Spring Boot, WPF, Next.js, Flutter</li>
                                        <li className="rounded-2xl bg-slate-800/80 px-4 py-3">Aplicaciones móviles y Backend</li>
                                    </ul>
                                </div>

                                <div className="rounded-3xl border border-slate-800/90 bg-slate-900/80 p-5">
                                    <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Mi enfoque</p>
                                    <p className="mt-4 text-slate-300 leading-7">
                                        Me gusta aprender nuevas tecnologías y aplicarlas en proyectos reales.
                                    </p>
                                </div>

                                <div className="grid gap-3 sm:grid-cols-2">
                                    <div className="rounded-3xl bg-cyan-500/10 p-4 text-slate-100 ring-1 ring-cyan-500/20">
                                        <p className="text-sm text-cyan-200">Formación</p>
                                        <p className="mt-2 text-2xl font-semibold">Grado Medio</p>
                                    </div>
                                    <div className="rounded-3xl bg-fuchsia-500/10 p-4 text-slate-100 ring-1 ring-fuchsia-500/20">
                                        <p className="text-sm text-fuchsia-200">Actitud</p>
                                        <p className="mt-2 text-2xl font-semibold">Creativo</p>
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
