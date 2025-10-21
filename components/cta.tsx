import Link from "next/link";
import { AnimatedTrybIcon } from "./animated-icon";

export default function CTA() {
  return (
    <section className="section-padding bg-linear-to-r from-teal to-teal-light dark:from-teal-light dark:to-orange relative overflow-hidden">
      <div className="absolute top-10 right-10 opacity-20">
        <AnimatedTrybIcon className="w-24 h-24" />
      </div>

      <div className="container-max text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white dark:text-navy mb-6">
          Let's Create Something Beautiful Together
        </h2>
        <p className="text-lg text-white/90 dark:text-navy/90 max-w-2xl mx-auto mb-8">
          Got a project in mind? Let's make it happen. I'm just a message away.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="btn-secondary">
            Start Your Project
          </Link>
          <a
            href="https://wa.me/+2349032264624"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border-2 border-white dark:border-navy text-white dark:text-navy font-semibold rounded-lg hover:bg-white hover:text-teal dark:hover:bg-navy dark:hover:text-teal-light transition-colors duration-300"
          >
            Message on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
