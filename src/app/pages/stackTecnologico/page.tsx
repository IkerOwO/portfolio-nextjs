import Footer from "../../components/footer/footer";
import TopBar from "../../components/topBar/topBar";

const languages = [
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"},
  { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"},
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"},
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"},
  { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"},
];

const frameworks = [
  { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg"},
  { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg"},
  { name: ".NET", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg"},
];

const databases = [
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"},
  { name: "Postgres", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"},
];

const tools = [
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"},
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"},
  { name: "Github", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"}
]

export default function StackPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <TopBar />

      <main className="relative flex flex-col items-center justify-center flex-1 px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <div className="hero-glow" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <section className="relative z-10 w-full max-w-6xl space-y-10">
          <div className="surface-panel rounded-[36px] p-8 sm:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <span className="badge">
                  Stack Tecnológico
                </span>
                <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  Lenguajes que utilizo
                </h1>
              </div>
            </div>
          </div>

          <div className="grid gap-5 xl:grid-cols-2">
            <section className="glass-card rounded-[32px] p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Lenguajes</p>
                </div>
                <span className="badge">
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
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="glass-card rounded-[32px] p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Frameworks</p>
                </div>
                <span className="badge">
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
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="glass-card rounded-[32px] p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Bases de datos</p>
                </div>
                <span className="badge">
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
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="glass-card rounded-[32px] p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Herramientas</p>
                </div>
                <span className="badge">
                  3 elementos
                </span>
              </div>
              <div className="mt-8 grid gap-4">
                {tools.map((item) => (
                  <div key={item.name} className="flex items-center gap-4 rounded-3xl border border-slate-800/90 bg-slate-950/90 p-4 transition hover:border-fuchsia-500/30 hover:bg-slate-900/95">
                    <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-800/90 ring-1 ring-white/5">
                      <img src={item.icon} alt={`${item.name} logo`} className="h-10 w-10 object-contain" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{item.name}</p>
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
