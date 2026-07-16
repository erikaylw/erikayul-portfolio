import Image from "next/image";
import { ArrowUpRight, Download, Linkedin, Mail, MessageCircle } from "lucide-react";
import { certifications, experiences, expertiseGroups } from "./portfolio-data";

const contactLinks = {
  email: "mailto:hello@erikayul.my.id",
  whatsapp: "https://wa.me/6285784481922",
  linkedin: "https://www.linkedin.com/in/erika-yuliani-lukmawati-4a1714188",
  cv: "/cv-erika-yuliani.pdf"
};

const targetRoles = [
  "Tax Staff",
  "Tax Administration",
  "Tax & Accounting Staff",
  "Finance Administration",
  "Accounting Staff"
];

export default function Home() {
  return (
    <>
      {/* Nav — N5 Floating Pill */}
      <nav className="fixed left-1/2 top-4 z-50 -translate-x-1/2 rounded-full border border-line/40 bg-white/90 px-5 py-2 text-sm font-semibold shadow-sm backdrop-blur">
        <div className="flex items-center gap-6">
          <a href="#" className="tracking-[0.12em] text-navy">
            ERIKA YULIANI
          </a>
          <div className="hidden items-center gap-5 text-slate sm:flex">
            <a href="#about" className="transition-colors hover:text-accent">About</a>
            <a href="#expertise" className="transition-colors hover:text-accent">Expertise</a>
            <a href="#experience" className="transition-colors hover:text-accent">Experience</a>
            <a href="#contact" className="rounded-full bg-navy px-4 py-1.5 text-white transition-colors hover:bg-accent">Contact</a>
          </div>
        </div>
      </nav>

      <main className="min-h-screen bg-mist text-navy">
        {/* ═══ HERO ═══ */}
        <section className="overflow-hidden pt-24 sm:pt-28">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 sm:px-8 md:pb-24 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="pt-4 sm:pt-8">
              <div className="font-display text-6xl font-bold leading-none tracking-tight text-accent sm:text-7xl lg:text-8xl">
                5+
              </div>
              <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-light px-4 py-1.5 text-sm font-semibold text-accent">
                Staff Tax and Accounting
              </p>
              <h1 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-navy sm:text-5xl">
                Years Experience.
                <br />
                <span className="text-ink-2">Tax & Accounting Professional.</span>
              </h1>
              <p className="mt-4 max-w-xl text-base leading-7 text-slate sm:text-lg">
                Profesional Akuntansi dan Perpajakan — specialis dalam tax compliance, pelaporan keuangan,
                rekonsiliasi bank, dan administrasi perpajakan perusahaan.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={contactLinks.cv}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-accent">
                  <Download className="h-4 w-4" />
                  Download CV
                </a>
                <a href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-white px-6 py-3 text-sm font-bold text-navy transition-colors hover:border-accent hover:text-accent">
                  <Mail className="h-4 w-4" />
                  Contact Me
                </a>
              </div>
            </div>
            <aside className="relative">
              <div className="absolute -right-4 top-8 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />
              <div className="relative overflow-hidden rounded-2xl border border-line bg-white">
                <Image
                  src="/erika-yuliani-lukmawati-profile.png"
                  alt="Erika Yuliani Lukmawati — Tax and Accounting Professional"
                  width={960}
                  height={1200}
                  priority
                  sizes="(max-width: 768px) 92vw, 430px"
                  className="aspect-[4/5] h-auto w-full object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-3 -left-3 rounded-xl border border-line bg-white/95 px-5 py-3 shadow-soft backdrop-blur">
                <p className="text-sm font-bold text-navy">5+ Years Experience</p>
                <p className="text-xs font-semibold text-slate">Tax Compliance · Reporting · Reconciliation</p>
              </div>
            </aside>
          </div>
        </section>

        {/* ═══ STATS ═══ */}
        <section className="border-y border-line bg-white">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 py-10 sm:px-8 md:grid-cols-4">
            <div>
              <div className="font-display text-5xl font-bold tracking-tight text-accent sm:text-6xl">5+</div>
              <p className="mt-1 text-sm font-semibold text-slate">Years Experience</p>
            </div>
            <div>
              <div className="font-display text-5xl font-bold tracking-tight text-accent sm:text-6xl">4</div>
              <p className="mt-1 text-sm font-semibold text-slate">Companies Served</p>
            </div>
            <div>
              <div className="font-display text-5xl font-bold tracking-tight text-accent sm:text-6xl">3</div>
              <p className="mt-1 text-sm font-semibold text-slate">Professional Certifications</p>
            </div>
            <div>
              <div className="font-display text-5xl font-bold tracking-tight text-accent sm:text-6xl">1</div>
              <p className="mt-1 text-sm font-semibold text-slate">Focus: Tax & Accounting</p>
            </div>
          </div>
        </section>

        {/* ═══ ABOUT ═══ */}
        <section id="about" className="section-anchor">
          <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-28">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent/70">Tentang Saya</p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-navy sm:text-4xl">
              Teliti, analitis, dan siap mendukung kebutuhan corporate finance.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-7 text-slate sm:text-lg sm:leading-8">
              <p>Profesional Akuntansi dan Perpajakan dengan pengalaman lebih dari 5 tahun dalam tax compliance, pelaporan keuangan, rekonsiliasi bank, dan administrasi perpajakan perusahaan. Berpengalaman menangani PPN, PPh 21, PPh 23, PPh 4 Ayat (2), SPT Masa dan Tahunan, serta menggunakan Accurate, Harmoni, Coretax, dan Microsoft Excel.</p>
              <p>Berbasis di Surabaya, Indonesia. Terbuka untuk peluang Tax Staff, Tax & Accounting Staff, Finance Administration, dan Accounting Staff di lingkungan corporate yang profesional.</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {targetRoles.map((role) => (
                <span key={role} className="rounded-full border border-line bg-white px-4 py-1.5 text-sm font-semibold text-slate">
                  {role}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ EXPERTISE ═══ */}
        <section id="expertise" className="section-anchor border-t border-line bg-white">
          <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent/70">Kompetensi</p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-navy sm:text-4xl">
              Tax, accounting, software, dan administrasi untuk corporate operations.
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {expertiseGroups.map((group) => (
                <div key={group.title} className="border-t border-line pt-5">
                  <h3 className="font-display text-xl font-bold text-navy">{group.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-full border border-line bg-mist px-3.5 py-1.5 text-sm font-medium text-slate">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ EXPERIENCE ═══ */}
        <section id="experience" className="section-anchor">
          <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent/70">Pengalaman</p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-navy sm:text-4xl">
              Corporate tax and accounting experience.
            </h2>
            <div className="mt-12 space-y-10">
              {experiences.map((exp) => (
                <div key={`${exp.company}-${exp.period}`} className="grid gap-2 sm:grid-cols-[7rem_1fr] sm:gap-6">
                  <p className="pt-0.5 text-sm font-semibold uppercase tracking-[0.12em] text-accent">{exp.period}</p>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-navy">{exp.company}</h3>
                    <p className="mt-1 text-sm font-semibold text-slate">{exp.role}</p>
                    <ul className="mt-4 space-y-2">
                      {exp.highlights.map((h) => (
                        <li key={h} className="relative pl-5 text-sm leading-6 text-slate before:absolute before:left-0 before:top-2.5 before:h-1 before:w-1 before:rounded-full before:bg-accent">
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ CERTS + EDU ═══ */}
        <section className="section-anchor border-t border-line bg-white">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
            <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent/70">Sertifikasi</p>
                <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-navy sm:text-4xl">Professional certifications.</h2>
                <div className="mt-10 grid grid-cols-2 gap-4">
                  {certifications.map((cert) => (
                    <div key={cert.title} className="overflow-hidden rounded-xl border border-line bg-mist">
                      <div className="relative aspect-[4/3] border-b border-line bg-white">
                        {cert.image ? (
                          <Image src={cert.image} alt={cert.alt} fill sizes="(max-width: 768px) 44vw, 200px" className="object-contain p-2" />
                        ) : (
                          <div className="flex h-full items-center justify-center px-4 text-center text-sm font-medium text-slate">Foto akan ditambahkan</div>
                        )}
                      </div>
                      <p className="px-4 py-3 text-sm font-bold text-navy">{cert.title}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-10">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent/70">Pendidikan</p>
                  <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-navy">Academic foundation.</h2>
                  <div className="mt-6 rounded-xl border border-line bg-mist p-6">
                    <h3 className="font-display text-xl font-bold text-navy">Universitas Wijaya Kusuma Surabaya</h3>
                    <p className="mt-2 font-semibold text-slate">S1 Akuntansi | IPK 3,61 | Cumlaude</p>
                    <ul className="mt-5 space-y-2">
                      <li className="relative pl-5 text-sm leading-6 text-slate before:absolute before:left-0 before:top-2.5 before:h-1 before:w-1 before:rounded-full before:bg-accent">Finalis National Capital Market Championship 2019</li>
                      <li className="relative pl-5 text-sm leading-6 text-slate before:absolute before:left-0 before:top-2.5 before:h-1 before:w-1 before:rounded-full before:bg-accent">Relawan Pajak / Pojok Pajak</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent/70">Ekosistem Digital</p>
                  <h2 className="mt-4 font-display text-2xl font-bold leading-tight tracking-tight text-navy">Digital Finance &amp; Web3</h2>
                  <p className="mt-3 text-base leading-7 text-slate">Memiliki exposure tambahan dalam digital finance dan Web3 ecosystem melalui pengalaman business development dan market reporting pada industri blockchain.</p>
                  <div className="mt-5 inline-block rounded-xl border border-line bg-mist px-5 py-3">
                    <p className="text-sm font-bold text-navy">Bitget Wallet</p>
                    <p className="text-sm font-medium text-slate">Business Development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ CONTACT ═══ */}
        <section id="contact" className="section-anchor bg-navy py-20 text-white sm:py-28">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Kontak</p>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">Available for Tax, Accounting, and Finance Administration roles.</h2>
              <p className="mt-4 text-base leading-7 text-white/60">Terbuka untuk peluang Tax Staff, Tax Administration, Tax &amp; Accounting Staff, Finance Administration, dan Accounting Staff.</p>
            </div>
            <div className="mx-auto mt-10 grid max-w-lg gap-3 sm:grid-cols-2">
              <a href={contactLinks.email} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-navy transition-colors hover:bg-accent hover:text-white">
                <Mail className="h-4 w-4" /> Email
              </a>
              <a href={contactLinks.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-bold transition-colors hover:border-accent hover:text-accent">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a href={contactLinks.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-bold transition-colors hover:border-accent hover:text-accent">
                <Linkedin className="h-4 w-4" /> LinkedIn <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <a href={contactLinks.cv} className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-accent/80">
                <Download className="h-4 w-4" /> Download CV
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-line bg-white px-5 py-6 text-center">
        <p className="text-sm font-medium text-slate">Erika Yuliani Lukmawati — Tax &amp; Accounting Professional</p>
      </footer>
    </>
  );
}
