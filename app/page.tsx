import Image from "next/image";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Mark from "@/components/Mark";
import ContactForm from "@/components/ContactForm";

const becomingMoments = [
  "First big decision made alone",
  "Leaving something behind",
  "Stepping into leadership",
  "Returning to oneself",
  "Choosing depth over speed"
];

export default function Page() {
  return (
    <main>
      {/* Top bar */}
      <header className="sticky top-0 z-20 border-b border-gilded/20 bg-velvet/60 backdrop-blur">
        <Container className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <Mark className="h-7 w-7 text-gilded" />
            <span className="font-serif tracking-[0.18em] uppercase text-sm">
              House of Become
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-blush/80">
            <a href="#story" className="hover:text-blush">Story</a>
            <a href="#mission" className="hover:text-blush">Mission</a>
            <a href="#threshold" className="hover:text-blush">The Threshold</a>
            <a href="#contact" className="hover:text-blush">Contact</a>
          </nav>
        </Container>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.18]">
          <Image
            src="/packaging.jpg"
            alt="House of Become packaging"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-velvet/80 via-velvet/90 to-velvet" />

        <Container className="relative py-24 md:py-32">
          <div className="max-w-3xl">
            <Reveal>
              <p className="text-gilded/90 uppercase tracking-[0.28em] text-xs md:text-sm">
                This marks a crossing
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.02]">
                Fine jewelry for women in transition — moments of becoming, not arrival.
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-8 text-lg md:text-xl text-becoming leading-relaxed">
                This is woman as curator of her own life, not a muse. Jewelry pieces represent
                the moments we quietly choose ourselves.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="#threshold"
                  className="inline-flex items-center justify-center rounded-full border border-gilded/60 px-6 py-3 text-sm tracking-wide hover:bg-gilded/10 ring-focus"
                >
                  Discover the Threshold Pendant
                </a>
                <a
                  href="#story"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm tracking-wide text-blush/80 hover:text-blush"
                >
                  Read the story
                </a>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* BECOMING MOMENTS */}
      <section className="border-t border-gilded/20 bg-velvet">
        <Container className="py-16 md:py-20">
          <Reveal>
            <h2 className="font-serif text-2xl md:text-3xl">Becoming moments</h2>
            <p className="mt-4 text-becoming max-w-2xl leading-relaxed">
              Your jewelry is not for beginnings or endings. It’s for crossings — the internal
              shifts that change everything, even if no one else notices.
            </p>
          </Reveal>

          <div className="mt-10 grid md:grid-cols-2 gap-4">
            {becomingMoments.map((m, i) => (
              <Reveal key={m} delay={0.04 * i}>
                <div className="rounded-2xl border border-gilded/20 bg-velvet/50 px-6 py-5">
                  <div className="flex items-start gap-4">
                    <span className="mt-1 h-2 w-2 rounded-full bg-gilded/80" />
                    <p className="text-blush/90 leading-relaxed">{m}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* STORY */}
      <section id="story" className="bg-blush text-ink">
        <Container className="py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-7">
              <Reveal>
                <h2 className="font-serif text-3xl md:text-4xl">Our story</h2>
                <p className="mt-8 text-lg leading-relaxed">
                  House of Become was created for the woman who chooses herself — quietly,
                  intentionally, without audience. This is jewelry not as ornament, but as witness.
                </p>
                <p className="mt-6 text-lg leading-relaxed">
                  We do not mark beginnings or endings. We mark crossings — the moments that reshape
                  us from the inside.
                </p>
              </Reveal>
            </div>
            <div className="md:col-span-5">
              <Reveal delay={0.1}>
                <div className="rounded-3xl border border-ink/10 bg-white/60 p-4 shadow-sm">
                  <Image
                    src="/logo.jpg"
                    alt="House of Become mark"
                    width={900}
                    height={900}
                    className="rounded-2xl"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* MISSION */}
      <section id="mission" className="bg-becoming text-ink">
        <Container className="py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <Reveal>
                <h2 className="font-serif text-3xl md:text-4xl">Mission</h2>
                <p className="mt-6 text-lg leading-relaxed">
                  We position fine jewelry as a marker of internal change — not external status.
                </p>
              </Reveal>
            </div>
            <div className="md:col-span-7">
              <Reveal delay={0.1}>
                <div className="rounded-3xl border border-ink/10 bg-blush/70 p-8">
                  <p className="text-lg leading-relaxed">
                    Jewelry as presence. As permanence. As choice. Each piece is designed to
                    accompany the wearer through transition, not performance.
                  </p>
                  <p className="mt-6 text-lg leading-relaxed">
                    This jewelry marks the moment you chose yourself — even if no one else knows.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* THRESHOLD PENDANT */}
      <section id="threshold" className="bg-velvet border-t border-gilded/20">
        <Container className="py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-6">
              <Reveal>
                <p className="text-gilded/90 uppercase tracking-[0.28em] text-xs md:text-sm">
                  The first chapter
                </p>
                <h2 className="mt-6 font-serif text-4xl md:text-5xl">The Threshold Pendant</h2>
                <p className="mt-8 text-becoming leading-relaxed">
                  There are moments that do not announce themselves. They are quiet. Internal.
                  Decisive. The Threshold Pendant was created to mark those moments.
                </p>
                <p className="mt-6 text-becoming leading-relaxed">
                  Its form is drawn from an arch — a passage — the space between what has been and
                  what comes next. At its center sits a single emerald-cut diamond, contained rather
                  than displayed. Held, not performed.
                </p>
                <p className="mt-6 text-becoming leading-relaxed">
                  This is not a symbol of arrival. It is a marker of crossing.
                </p>
              </Reveal>
            </div>

            <div className="md:col-span-6">
              <Reveal delay={0.1}>
                <div className="rounded-3xl border border-gilded/30 bg-velvet/50 p-4">
                  <Image
                    src="/pendant.jpg"
                    alt="Threshold Pendant"
                    width={1400}
                    height={1000}
                    className="rounded-2xl object-cover"
                  />
                  <div className="mt-4 px-2 pb-2">
                    <p className="text-sm text-blush/70">
                      Emerald-cut diamond. Designed to be worn daily — close to the body.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="mt-14">
            <Reveal>
              <div className="rounded-3xl border border-gilded/20 bg-velvet/40 p-8 md:p-10">
                <p className="text-becoming leading-relaxed">
                  Designed to become part of the wearer’s rhythm — present through change, steady
                  through motion. The diamond does not seek attention; it grounds the piece,
                  anchoring meaning in permanence.
                </p>
                <p className="mt-6 text-becoming leading-relaxed">
                  Chosen intentionally. Worn without occasion. A reminder that becoming is not a
                  destination, but a passage we move through again and again.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-ink text-blush">
        <Container className="py-16 md:py-20">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl">Stay close to the passage</h3>
                <p className="mt-3 text-blush/70 max-w-xl">
                  For early releases, private notes, and new chapters.
                </p>
              </div>
              <ContactForm />
            </div>
          </Reveal>

          <div className="mt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-blush/60">
            <p>© {new Date().getFullYear()} House of Become</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-blush">Instagram</a>
              <a href="#" className="hover:text-blush">Press</a>
              <a href="#" className="hover:text-blush">Contact</a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}