import {
  ArrowUpRight,
  BriefcaseBusiness,
  Download,
  GraduationCap,
  Mail,
  MapPin,
  MessageCircle,
  Sparkles
} from "lucide-react";

const skills = [
  "Administrasi",
  "Microsoft Office",
  "Data Entry",
  "Customer Service",
  "Komunikasi",
  "Manajemen Dokumen",
  "Canva",
  "Problem Solving"
];

const highlights = [
  {
    title: "Profil Profesional",
    description:
      "Terbiasa bekerja rapi, teliti, dan komunikatif untuk mendukung kebutuhan administrasi dan operasional."
  },
  {
    title: "Siap Berkembang",
    description:
      "Menyukai proses belajar, adaptif dengan tools digital, dan terbuka untuk tantangan baru."
  },
  {
    title: "Fokus Layanan",
    description:
      "Mengutamakan respons yang jelas, sopan, dan cepat dalam berkomunikasi dengan tim maupun pengguna."
  }
];

const experiences = [
  "Mengelola dokumen, data, dan kebutuhan administrasi secara terstruktur.",
  "Membantu komunikasi operasional agar proses kerja berjalan lancar.",
  "Menyusun materi sederhana, laporan, dan rekap data untuk kebutuhan tim."
];

export default function Home() {
  return (
    <main className="min-h-screen bg-mist text-ink">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <a className="text-sm font-bold uppercase tracking-[0.18em]" href="#">
          Erika Yuliana
        </a>
        <div className="hidden items-center gap-6 text-sm font-medium text-ink/70 sm:flex">
          <a className="hover:text-ink" href="#about">
            Tentang
          </a>
          <a className="hover:text-ink" href="#skills">
            Skill
          </a>
          <a className="hover:text-ink" href="#contact">
            Kontak
          </a>
        </div>
      </nav>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-8 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pb-24 lg:pt-16">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium shadow-sm">
            <Sparkles className="h-4 w-4 text-coral" aria-hidden="true" />
            Portfolio Personal
          </div>
          <h1 className="max-w-3xl text-4xl font-black leading-tight sm:text-6xl">
            Erika Yuliana
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/72">
            Profesional muda yang teliti, komunikatif, dan siap mendukung
            kebutuhan administrasi, operasional, dan layanan dengan kerja yang
            rapi serta bertanggung jawab.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex items-center justify-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-black"
              href="mailto:hello@erikayul.my.id"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Hubungi Saya
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-md border border-ink/15 bg-white px-5 py-3 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:border-ink/35"
              href="/cv-erika-yuliana.pdf"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Unduh CV
            </a>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg bg-ink p-7 text-white shadow-soft">
          <div className="absolute right-0 top-0 h-32 w-32 bg-coral/30 blur-2xl" />
          <div className="absolute bottom-0 left-0 h-32 w-32 bg-leaf/30 blur-2xl" />
          <div className="relative">
            <div className="mb-10 flex items-center justify-between">
              <div>
                <p className="text-sm text-white/55">Base</p>
                <p className="font-semibold">Indonesia</p>
              </div>
              <MapPin className="h-8 w-8 text-coral" aria-hidden="true" />
            </div>
            <p className="text-2xl font-bold leading-snug">
              Siap membantu pekerjaan administrasi, komunikasi, dan koordinasi
              dengan pendekatan yang tenang dan terorganisir.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="rounded-md bg-white/10 p-4">
                <p className="text-3xl font-black">8+</p>
                <p className="mt-1 text-sm text-white/65">Skill utama</p>
              </div>
              <div className="rounded-md bg-white/10 p-4">
                <p className="text-3xl font-black">100%</p>
                <p className="mt-1 text-sm text-white/65">Siap belajar</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-coral">
              Tentang
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Bekerja rapi, jelas, dan mudah diajak kolaborasi.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {highlights.map((item) => (
              <article
                className="rounded-lg border border-ink/10 bg-mist p-6"
                key={item.title}
              >
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="mt-3 leading-7 text-ink/70">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-leaf">
              Skill
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Kemampuan yang siap dipakai.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                className="rounded-md border border-ink/10 bg-white px-4 py-3 text-sm font-semibold shadow-sm"
                key={skill}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-coral text-white">
              <BriefcaseBusiness className="h-6 w-6" aria-hidden="true" />
            </div>
            <h2 className="text-3xl font-black">Experience</h2>
            <ul className="mt-6 space-y-4">
              {experiences.map((item) => (
                <li className="rounded-lg border border-ink/10 p-5" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-leaf text-white">
              <GraduationCap className="h-6 w-6" aria-hidden="true" />
            </div>
            <h2 className="text-3xl font-black">Project & Sertifikat</h2>
            <p className="mt-6 leading-8 text-ink/70">
              Area ini disiapkan untuk menampilkan project, sertifikat, atau
              pengalaman terbaru. Konten bisa ditambahkan setelah website
              online tanpa mengubah struktur utama.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="rounded-lg bg-ink p-8 text-white sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-coral">
            Kontak
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-black sm:text-4xl">
            Terbuka untuk peluang kerja, kolaborasi, dan percakapan profesional.
          </h2>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-bold text-ink"
              href="mailto:hello@erikayul.my.id"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Email
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-5 py-3 text-sm font-bold"
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-5 py-3 text-sm font-bold"
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
