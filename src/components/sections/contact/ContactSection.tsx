import Reveal from "@/components/ui/reveal/Reveal";

import ContactLinks from "./ContactLinks";
import ContactForm from "./ContactForm";
import Section from "@/components/layout/Section";

export default function ContactSection() {
  return (
    <Section id="contact" className="relative overflow-hidden">
      {/* SECTION LABEL */}
      <p className="mb-10 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
        05 / Contact
        <span className="h-px w-12 bg-primary" />
      </p>

      <div className="grid gap-20 xl:grid-cols-2 xl:gap-28">
        {/* LEFT */}
        <div>
          <Reveal>
            <h2 className="mb-10 font-display text-[clamp(4rem,9vw,7rem)] leading-[0.88] tracking-tight">
              LET&apos;S
              <br />
              WORK
              <br />
              <span className="text-primary">TOGETHER</span>
            </h2>
          </Reveal>

          <ContactLinks />
        </div>

        {/* RIGHT */}
        <Reveal delay={0.2}>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}
