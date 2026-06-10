import Footer from "../../components/footer/footer";
import TopBar from "../../components/topBar/topBar";

const languages = [
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", description: "Lenguaje principal para backend y servicios empresariales." },
  { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg", description: "Experiencia en desarrollo de aplicaciones de escritorio y lógica de negocio." },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", description: "Uso para automatización, scripts y prototipos rápidos." },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", description: "Lenguaje base de las aplicaciones web modernas y front-end interactivo." },
  { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg", description: "Conocimiento de desarrollo web clásico y APIs sencillas." },
];

const frameworks = [
  { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg", description: "Construcción de APIs REST y aplicaciones Java robustas." },
  { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg", description: "Interfaces móviles y aplicaciones multiplataforma con buena experiencia de usuario." },
  { name: "WPF", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg", description: "Desarrollo de interfaces de escritorio sobre .NET con diseño claro." },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", description: "Framework React para páginas rápidas, SEO y experiencia moderna." },
];

const databases = [
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg", description: "Experiencia en bases de datos relacionales y consultas optimizadas." },
  { name: "Postgres", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", description: "Uso de PostgreSQL para datos estructurados y proyectos escalables." },
];

export default function StackPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <TopBar />

      <main className="relative flex flex-col items-center justify-center flex-1 px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-cyan-500/20 via-transparent to-transparent blur-3xl" />
        <section className="relative z-10 w-full max-w-6xl space-y-10">
          <div className="rounded-[36px] border border-white/10 bg-slate-900/85 p-8 shadow-[0_30px_90px_-40px_rgba(14,165,233,0.8)] backdrop-blur-xl sm:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <span className="inline-flex rounded-full bg-cyan-500/20 px-3 py-1 text-sm font-medium uppercase tracking-[0.24em] text-cyan-300">
                  Stack Tecnológico
                </span>
                <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  Tecnologías que domino hoy
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                  Estas son las herramientas que uso para crear aplicaciones completas. Cada sección agrupa mis conocimientos en lenguajes, frameworks y bases de datos.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 xl:grid-cols-3">
            <section className="rounded-[32px] border border-white/10 bg-slate-900/80 p-8 shadow-lg shadow-cyan-500/5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Lenguajes</p>
                </div>
                <span className="inline-flex items-center rounded-full bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-200 ring-1 ring-cyan-500/20">
                  5 elementos
                </span>
              </div>
              <div className="mt-8 grid gap-4">
                {languages.map((item) => (
                  <div key={item.name} className="flex items-center gap-4 rounded-3xl border border-slate-800/90 bg-slate-950/90 p-4 transition hover:border-cyan-500/30 hover:bg-slate-900/95">
                    <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-800/90 ring-1 ring-white/5">
                      <img src={item.icon} alt={`${item.name} logo`} className="h-10 w-10 object-contain" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{item.name}</p>
                      <p className="text-sm text-slate-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[32px] border border-white/10 bg-slate-900/80 p-8 shadow-lg shadow-fuchsia-500/5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Frameworks</p>
                </div>
                <span className="inline-flex items-center rounded-full bg-fuchsia-500/10 px-3 py-1 text-sm font-medium text-fuchsia-200 ring-1 ring-fuchsia-500/20">
                  4 elementos
                </span>
              </div>
              <div className="mt-8 grid gap-4">
                {frameworks.map((item) => (
                  <div key={item.name} className="flex items-center gap-4 rounded-3xl border border-slate-800/90 bg-slate-950/90 p-4 transition hover:border-fuchsia-500/30 hover:bg-slate-900/95">
                    <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-800/90 ring-1 ring-white/5">
                      <img src={item.icon} alt={`${item.name} logo`} className="h-10 w-10 object-contain" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{item.name}</p>
                      <p className="text-sm text-slate-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[32px] border border-white/10 bg-slate-900/80 p-8 shadow-lg shadow-emerald-500/5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Bases de datos</p>
                </div>
                <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-200 ring-1 ring-emerald-500/20">
                  2 elementos
                </span>
              </div>
              <div className="mt-8 grid gap-4">
                {databases.map((item) => (
                  <div key={item.name} className="flex items-center gap-4 rounded-3xl border border-slate-800/90 bg-slate-950/90 p-4 transition hover:border-emerald-500/30 hover:bg-slate-900/95">
                    <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-800/90 ring-1 ring-white/5">
                      <img src={item.icon} alt={`${item.name} logo`} className="h-10 w-10 object-contain" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{item.name}</p>
                      <p className="text-sm text-slate-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
