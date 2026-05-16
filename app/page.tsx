import Image from "next/image";
import {
  ArrowUpRight,
  Award,
  Building2,
  CheckCircle2,
  Download,
  FileSpreadsheet,
  GraduationCap,
  Linkedin,
  Mail,
  MessageCircle,
  ShieldCheck
} from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import {
  certifications,
  experiences,
  expertiseGroups
} from "./portfolio-data";

const contactLinks = {
  email: "mailto:hello@erikayul.my.id",
  whatsapp: "https://wa.me/6285784481922",
  linkedin: "https://www.linkedin.com/in/erika-yuliani-lukmawati-4a1714188",
  cv: "/cv-erika-yuliana.pdf"
};

export default function Home() {
  return (
    <main className="min-h-screen bg-mist text-navy">
      <nav className="sticky top-0 z-50 border-b border-line/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <a className="text-sm font-bold tracking-[0.18em]" href="#">
            ERIKA YULIANI
          </a>
          <div className="hidden items-center gap-6 text-sm font-semibold text-slate md:flex">
            <a className="transition hover:text-blue" href="#about">
              About
            </a>
            <a className="transition hover:text-blue" href="#expertise">
              Expertise
            </a>
            <a className="transition hover:text-blue" href="#experience">
              Experience
            </a>
            <a className="transition hover:text-blue" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <section className="overflow-hidden bg-gradient-to-b from-white via-white to-mist">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 md:py-16 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:py-24">
          <div className="order-2 animate-fade-up lg:order-1">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-slate">
              Erika Yuliani Lukmawati
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-blue/15 bg-sky px-4 py-2 text-sm font-semibold text-blue">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              Tax Compliance • Financial Reporting • Bank Reconciliation
            </div>
            <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight tracking-tight text-navy sm:text-6xl">
              Tax & Accounting Professional
            </h1>
            <p className="mt-5 max-w-2xl text-xl font-semibold leading-8 text-blue">
              5+ Years Experience in Tax Compliance, Financial Reporting, and
              Bank Reconciliation.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate sm:text-lg">
              Profesional Akuntansi dan Perpajakan dengan pengalaman lebih dari
              5 tahun dalam tax compliance, pelaporan keuangan, rekonsiliasi
              bank, dan administrasi perpajakan perusahaan.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex items-center justify-center gap-2 rounded-md bg-navy px-5 py-3 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-blue"
                href={contactLinks.cv}
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download CV
              </a>
              <a
                className="inline-flex items-center justify-center gap-2 rounded-md border border-line bg-white px-5 py-3 text-sm font-bold text-navy transition hover:-translate-y-0.5 hover:border-blue hover:text-blue"
                href="#contact"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Contact Me
              </a>
            </div>
            <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
              {["Tax Staff", "Accounting Staff", "Finance Administration"].map(
                (role) => (
                  <div
                    className="rounded-md border border-line bg-white/80 px-4 py-3 text-sm font-bold text-slate shadow-sm"
                    key={role}
                  >
                    {role}
                  </div>
                )
              )}
            </div>
          </div>

          <aside className="order-1 animate-fade-up lg:order-2">
            <div className="relative mx-auto max-w-[430px] rounded-[1.65rem] border border-line bg-white p-3 shadow-soft">
              <div className="absolute -left-8 top-12 hidden h-28 w-28 rounded-full bg-sky blur-2xl lg:block" />
              <div className="absolute -right-8 bottom-10 hidden h-32 w-32 rounded-full bg-blue/10 blur-2xl lg:block" />
              <div className="relative overflow-hidden rounded-[1.25rem] bg-[#d9dde2]">
                <Image
                  src="/erika-yuliani-lukmawati-profile.png"
                  alt="Professional headshot of Erika Yuliani Lukmawati, Tax and Accounting Professional"
                  width={960}
                  height={1200}
                  priority
                  sizes="(max-width: 768px) 92vw, 430px"
                  className="aspect-[4/5] h-auto w-full object-cover object-center"
                />
              </div>
              <div className="absolute bottom-7 left-7 right-7 rounded-lg border border-white/70 bg-white/90 p-4 shadow-soft backdrop-blur">
                <p className="text-sm font-bold text-navy">
                  Tax & Accounting Professional
                </p>
                <p className="mt-1 text-xs font-semibold text-slate">
                  Compliance • Reporting • Reconciliation
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="about" className="section-offset bg-mist py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="About Me"
            title="Profesional akuntansi dan perpajakan yang teliti, analitis, dan siap mendukung kebutuhan corporate finance."
            description="Profesional Akuntansi dan Perpajakan dengan pengalaman lebih dari 5 tahun dalam tax compliance, pelaporan keuangan, rekonsiliasi bank, dan administrasi perpajakan perusahaan. Berpengalaman menangani PPN, PPh 21, PPh 23, PPh 4 Ayat (2), SPT Masa dan Tahunan, serta menggunakan Accurate, Harmoni, Coretax, dan Microsoft Excel."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {[
              "Detail-oriented",
              "Strong analytical skill",
              "Administrative coordination",
              "External coordination with consultants and government institutions"
            ].map((item) => (
              <div
                className="rounded-lg border border-line bg-white p-5 text-sm font-semibold leading-6 text-navy shadow-sm"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="expertise" className="section-offset bg-white py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Core Expertise"
            title="Tax, accounting, software, and administration capability for corporate operations."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {expertiseGroups.map((group) => (
              <article
                className="rounded-lg border border-line bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
                key={group.title}
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-sky text-blue">
                    <FileSpreadsheet className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-navy">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      className="rounded-md border border-line bg-mist px-3 py-2 text-sm font-semibold text-slate"
                      key={item}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="section-offset bg-mist py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Professional Experience"
            title="Corporate tax and accounting experience across compliance, reporting, reconciliation, and coordination."
          />
          <div className="mt-10 space-y-5">
            {experiences.map((experience) => (
              <article
                className="rounded-lg border border-line bg-white p-6 shadow-sm"
                key={`${experience.company}-${experience.period}`}
              >
                <div className="grid gap-4 md:grid-cols-[0.8fr_1.2fr]">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue">
                      {experience.period}
                    </p>
                    <h3 className="mt-3 text-2xl font-bold text-navy">
                      {experience.company}
                    </h3>
                    <p className="mt-2 font-semibold text-slate">
                      {experience.role}
                    </p>
                  </div>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {experience.highlights.map((highlight) => (
                      <li
                        className="flex gap-3 text-sm font-medium leading-6 text-slate"
                        key={highlight}
                      >
                        <CheckCircle2
                          className="mt-1 h-4 w-4 shrink-0 text-blue"
                          aria-hidden="true"
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Certifications"
              title="Professional tax and accounting certifications."
            />
            <div className="mt-8 grid gap-4">
              {certifications.map((certification) => (
                <div
                  className="flex items-center gap-4 rounded-lg border border-line bg-mist p-5"
                  key={certification}
                >
                  <Award className="h-6 w-6 text-blue" aria-hidden="true" />
                  <p className="font-bold text-navy">{certification}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Education"
              title="Academic foundation in accounting."
            />
            <div className="mt-8 rounded-lg border border-line bg-mist p-6">
              <div className="flex items-start gap-4">
                <GraduationCap className="h-7 w-7 text-blue" aria-hidden="true" />
                <div>
                  <h3 className="text-xl font-bold text-navy">
                    Universitas Wijaya Kusuma Surabaya
                  </h3>
                  <p className="mt-2 font-semibold text-slate">
                    S1 Akuntansi | IPK 3,61 | Cumlaude
                  </p>
                  <ul className="mt-5 space-y-3 text-sm font-medium leading-6 text-slate">
                    <li>Finalis National Capital Market Championship 2019</li>
                    <li>Relawan Pajak / Pojok Pajak</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-mist py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="rounded-lg border border-line bg-white p-6">
            <div className="flex items-start gap-4">
              <Building2 className="h-6 w-6 text-blue" aria-hidden="true" />
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue">
                  Additional Experience
                </p>
                <h2 className="mt-2 text-2xl font-bold text-navy">
                  Digital Finance & Web3 Exposure
                </h2>
                <p className="mt-3 max-w-3xl leading-8 text-slate">
                  Memiliki exposure tambahan dalam digital finance dan Web3
                  ecosystem melalui pengalaman business development dan market
                  reporting pada industri blockchain.
                </p>
                <div className="mt-5 rounded-md border border-line bg-mist p-4">
                  <p className="text-sm font-bold text-navy">Bitget Wallet</p>
                  <p className="mt-1 text-sm font-semibold text-slate">
                    Business Development
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-offset bg-navy py-16 text-white">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue">
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Available for Tax, Accounting, and Finance Administration roles.
              </h2>
              <p className="mt-4 leading-8 text-white/70">
                Terbuka untuk peluang Tax Staff, Tax Administration, Tax &
                Accounting Staff, Finance Administration, dan Accounting Staff.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <a
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-bold text-navy transition hover:-translate-y-0.5"
                href={contactLinks.email}
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Email
              </a>
              <a
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-5 py-3 text-sm font-bold transition hover:-translate-y-0.5 hover:bg-white/10"
                href={contactLinks.whatsapp}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp
              </a>
              <a
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-5 py-3 text-sm font-bold transition hover:-translate-y-0.5 hover:bg-white/10"
                href={contactLinks.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
                LinkedIn
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                className="inline-flex items-center justify-center gap-2 rounded-md bg-blue px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-blue/90"
                href={contactLinks.cv}
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-line bg-white px-5 py-6 text-center text-sm font-medium text-slate">
        <p>
          Erika Yuliani Lukmawati - Tax & Accounting Professional - Tax
          Compliance, Financial Reporting, Bank Reconciliation
        </p>
      </footer>
    </main>
  );
}
