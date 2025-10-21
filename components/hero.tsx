import Link from "next/link";
import Image from "next/image";
import { AnimatedTrybIcon, AnimatedGradientBg } from "./animated-icon";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-color relative overflow-hidden">
      <AnimatedGradientBg />

      <div className="container-max px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-teal dark:text-teal-light leading-tight">
                Designs that Speak Louder than Words
              </h1>
              <p className="text-lg md:text-xl text-color leading-relaxed">
                I'm Samuel Oyetunde, a passionate Graphic Designer who helps
                brands and individuals stand out through purposeful, visually
                engaging designs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/portfolio" className="btn-primary text-center">
                See My Works
              </Link>
              <Link href="/contact" className="btn-outline text-center">
                Book a Design
              </Link>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-6 pt-8 border-t border-gray-200 dark:border-gray-800">
              <div>
                <p className="text-3xl font-heading font-bold text-orange">
                  300+
                </p>
                <p className="text-sm text-color">Projects Completed</p>
              </div>
              <div>
                <p className="text-3xl font-heading font-bold text-teal dark:text-teal-light">
                  200+
                </p>
                <p className="text-sm text-color">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl font-heading font-bold text-navy dark:text-orange">
                  4+
                </p>
                <p className="text-sm text-color">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-96 md:h-full min-h-96">
            <div className="absolute inset-0 bg-linear-to-br from-teal to-teal-light dark:from-teal-light dark:to-orange rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute top-4 right-4 z-20">
                <AnimatedTrybIcon className="w-12 h-12" />
              </div>
              <Image
                src="images/black-girl.webp"
                alt="Samuel Oyetunde - Creative Designer"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange rounded-full opacity-20 dark:opacity-30 blur-3xl transition-opacity duration-300"></div>
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-teal dark:bg-teal-light rounded-full opacity-10 dark:opacity-20 blur-3xl transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
